import { createSlice } from "@reduxjs/toolkit";

const clientsSlice = createSlice({
  name: "clients",
  initialState: {
    clients: [],
  },
  reducers: {
    addClient: (state, action) => {
      state.clients.push(action.payload);
    },
    removeClient: (state, action) => {
      state.clients = state.clients.filter(
        (client) => client.socketId !== action.payload.socketId
      );
    },
  },
});

export const { addClient, removeClient } = clientsSlice.actions;
export default clientsSlice.reducer;
