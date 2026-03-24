import api from './baseApi';

interface ITranscriptionApiResponse {
  success: boolean;
  data?: {
    text?: string;
  };
  message?: string;
}

const TranscriptionApi = {
  basePath: 'transcriptions',

  getUrl(path = ''): string {
    return path ? `${this.basePath}/${path}` : this.basePath;
  },

  async transcribeAudio(formData: FormData): Promise<string> {
    const response: ITranscriptionApiResponse = await api
      .post(this.getUrl(), {
        body: formData,
        timeout: 60000,
      })
      .json();

    if (!response.success || !response.data?.text)
      throw new Error(response.message || 'Не удалось расшифровать аудио');

    return response.data.text;
  },
};

export default TranscriptionApi;
