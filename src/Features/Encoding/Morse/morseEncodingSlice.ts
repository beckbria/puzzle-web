import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
  selectedTab?: string;
  stream: string;
}

const initialState: State = {
  stream: '',
};

const morseEncodingSlice = createSlice({
  name: 'morseEncoding',
  initialState,
  reducers: {
    append(state, action: PayloadAction<string>) {
      state.stream += action.payload;
    },
    backspace(state) {
      state.stream = state.stream.slice(0, -1);
    },
    clear(state) {
      state.stream = '';
    },
    selectTab(state, action: PayloadAction<string>) {
      state.selectedTab = action.payload;
    },
  }
});

export const {
  append,
  backspace,
  clear,
  selectTab,
} = morseEncodingSlice.actions;

export default morseEncodingSlice.reducer;
