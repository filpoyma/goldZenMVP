import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { logout } from '../../actions.ts';

interface IAppState {
  isLoading: boolean;
}

const initialState: IAppState = {
  isLoading: false,
};

const { reducer: appReducer, actions: appActions } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading(state: IAppState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, () => initialState);
  },
});

export { appReducer, appActions };
