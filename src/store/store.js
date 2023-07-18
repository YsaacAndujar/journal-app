import { authReducer } from "reducers/authReducer";
import { configureStore  } from "@reduxjs/toolkit";

export const store = configureStore({
    // Automatically calls `combineReducers`
    reducer: {
      auth: authReducer
    }
  })