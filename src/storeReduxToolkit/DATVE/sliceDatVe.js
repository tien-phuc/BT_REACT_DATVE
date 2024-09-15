import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedSeats: [], 
};

export const { reducer: btDatVeReducer, actions: btDatVeActions } = createSlice(
  {
    name: "datve",
    initialState,
    reducers: {
      addSeat(state, action) {
        state.selectedSeats.push(action.payload);
      },
      removeSeat(state, action) {
        state.selectedSeats = state.selectedSeats.filter(
          (seat) => seat.soGhe !== action.payload
        );
      },
    },
  }
);
