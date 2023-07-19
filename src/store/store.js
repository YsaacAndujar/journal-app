import { authReducer } from "reducers/authReducer";
import { configureStore  } from "@reduxjs/toolkit";
import { uiReducer } from "reducers/uiReducer";

export const store = configureStore({
    reducer: {
      auth: authReducer,
      ui: uiReducer,
    }
  })