import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  homogeneous: boolean;
  text: string;
}

const initialState: State = {
  homogeneous: true,
  text: '',
};

const autoConvertSlice = createSlice({
  name: 'autoConvert',
  initialState,
  reducers: {
    clear(state) {
      state.text = '';
    },
    setHomogeneous(state, action: PayloadAction<boolean>) {
      state.homogeneous = action.payload;
    },
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  }
});

export const {
  clear,
  setHomogeneous,
  setText,
} = autoConvertSlice.actions;

export default autoConvertSlice.reducer;
