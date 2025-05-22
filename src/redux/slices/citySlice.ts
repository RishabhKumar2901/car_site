import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City } from '../../static/HomeData/cityData';

interface CityState {
  selectedCity: string;
}

const initialState: CityState = {
  selectedCity: "Gurgaon",
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<City>) {
      state.selectedCity = action?.payload?.name;
    },
    clearCity(state) {
      state.selectedCity = "";
    },
  },
});

export const { setCity, clearCity } = citySlice.actions;
export default citySlice.reducer;