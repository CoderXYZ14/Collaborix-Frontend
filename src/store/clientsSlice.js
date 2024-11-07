// src/store/clientsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clients: [],
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    setClients: (state, action) => {
      state.clients = action.payload;
    },
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

export const { setClients, addClient, removeClient } = clientsSlice.actions;

export default clientsSlice.reducer;
