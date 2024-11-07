import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import themeReducer from "./themeSlice";
import clientsReducer from "./clientsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    clients: clientsReducer,
  },
});

export default store;
