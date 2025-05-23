import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectionState {
  brand: string | null;
  model: string | null;
  variant: string | null;
}

const initialState: SelectionState = {
  brand: null,
  model: null,
  variant: null,
};

const carSelectionSlice = createSlice({
  name: 'carSelection',
  initialState,
  reducers: {
    setBrand: (state, action: PayloadAction<string>) => {
      state.brand = action.payload;
      state.model = null;
      state.variant = null;
    },
    setModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload;
      state.variant = null;
    },
    setVariant: (state, action: PayloadAction<string>) => {
      state.variant = action.payload;
    },
  },
});

export const { setBrand, setModel, setVariant } = carSelectionSlice.actions;
export default carSelectionSlice.reducer;