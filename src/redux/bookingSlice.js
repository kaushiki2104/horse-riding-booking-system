import { createSlice } from '@reduxjs/toolkit';

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    page: 'landing',
    bookingDetails: {}
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
    }
  }
});

export const { setPage, setBookingDetails } = bookingSlice.actions;
export default bookingSlice.reducer;
