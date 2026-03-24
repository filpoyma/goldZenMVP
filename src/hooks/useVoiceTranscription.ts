import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent } from 'react';
import TranscriptionApi from '../api/transcription.api';

const AUDIO_FILE_NAME = 'voice-input.webm';

interface IUseVoiceTranscription {
  promptValue: string;
  setPromptValue: (value: string) => void;
  isRecording: boolean;
  isTranscribing: boolean;
  errorMessage: string | null;
  handlePointerDown: (event: PointerEvent<HTMLButtonElement>) => Promise<void>;
  handlePointerEnd: (event: PointerEvent<HTMLButtonElement>) => void;
}

const useVoiceTranscription = (): IUseVoiceTranscription => {
  const [promptValue, setPromptValueState] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const audioChunksRef = useRef<BlobPart[]>([]);
  const pointerIdRef = useRef<number | null>(null);
  const isPressingRef = useRef(false);
  const isTranscribingRef = useRef(false);
  const lastTranscriptionRef = useRef('');

  useEffect(() => {
    isTranscribingRef.current = isTranscribing;
  }, [isTranscribing]);

  const setPromptValue = useCallback((value: string) => {
    setPromptValueState(value);
  }, []);

  const releaseStream = useCallback(() => {
    streamRef.current?.getTracks().forEach(track => track.stop());
    streamRef.current = null;
  }, []);

  useEffect(() => {
    return () => {
      releaseStream();
      if (mediaRecorderRef.current?.state !== 'inactive') {
        mediaRecorderRef.current?.stop();
      }
    };
  }, [releaseStream]);

  const supportedMimeType = useMemo(() => {
    if (typeof MediaRecorder === 'undefined') {
      return '';
    }
    const mimeCandidates = ['audio/webm;codecs=opus', 'audio/webm'];
    return mimeCandidates.find(type => MediaRecorder.isTypeSupported(type)) || '';
  }, []);

  const transcribeBlob = useCallback(async (audioBlob: Blob) => {
    if (audioBlob.size === 0) {
      setErrorMessage('Запись слишком короткая. Попробуйте еще раз.');
      return;
    }

    const formData = new FormData();
    formData.append('audio', audioBlob, AUDIO_FILE_NAME);

    setIsTranscribing(true);
    setErrorMessage(null);

    try {
      const text = await TranscriptionApi.transcribeAudio(formData);
      const normalizedText = text.trim();
      if (!normalizedText || normalizedText === lastTranscriptionRef.current) {
        return;
      }
      lastTranscriptionRef.current = normalizedText;
      setPromptValueState(prev => (prev ? `${prev} ${normalizedText}` : normalizedText));
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Не удалось расшифровать голос');
    } finally {
      setIsTranscribing(false);
    }
  }, []);

  const stopRecording = useCallback(() => {
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state !== 'inactive') {
      recorder.stop();
      mediaRecorderRef.current = null;
    } else {
      releaseStream();
    }
    setIsRecording(false);
  }, [releaseStream]);

  const startRecording = useCallback(async () => {
    if (isTranscribingRef.current || isRecording) {
      return;
    }

    if (typeof window === 'undefined' || !navigator.mediaDevices?.getUserMedia) {
      setErrorMessage('Ваш браузер не поддерживает запись аудио');
      return;
    }

    if (typeof MediaRecorder === 'undefined') {
      setErrorMessage('Ваш браузер не поддерживает MediaRecorder');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      if (!isPressingRef.current) {
        stream.getTracks().forEach(track => track.stop());
        return;
      }

      streamRef.current = stream;
      audioChunksRef.current = [];

      const recorder = supportedMimeType
        ? new MediaRecorder(stream, { mimeType: supportedMimeType })
        : new MediaRecorder(stream);

      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = event => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onerror = () => {
        setIsRecording(false);
        setErrorMessage('Ошибка записи аудио. Попробуйте еще раз.');
        releaseStream();
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: recorder.mimeType || 'audio/webm',
        });
        audioChunksRef.current = [];
        releaseStream();
        void transcribeBlob(audioBlob);
      };

      recorder.start();
      setErrorMessage(null);
      setIsRecording(true);
    } catch {
      setErrorMessage('Нет доступа к микрофону');
      setIsRecording(false);
      releaseStream();
    }
  }, [isRecording, releaseStream, supportedMimeType, transcribeBlob]);

  const handlePointerDown = useCallback(
    async (event: PointerEvent<HTMLButtonElement>) => {
      event.preventDefault();

      if (isTranscribing || isRecording) {
        return;
      }

      isPressingRef.current = true;
      pointerIdRef.current = event.pointerId;
      event.currentTarget.setPointerCapture(event.pointerId);
      await startRecording();
    },
    [isRecording, isTranscribing, startRecording]
  );

  const handlePointerEnd = useCallback(
    (event: PointerEvent<HTMLButtonElement>) => {
      event.preventDefault();

      if (pointerIdRef.current !== event.pointerId) {
        return;
      }

      isPressingRef.current = false;
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      pointerIdRef.current = null;
      stopRecording();
    },
    [stopRecording]
  );

  return {
    promptValue,
    setPromptValue,
    isRecording,
    isTranscribing,
    errorMessage,
    handlePointerDown,
    handlePointerEnd,
  };
};

export default useVoiceTranscription;

