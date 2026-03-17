import { configureStore } from "@reduxjs/toolkit";
import monaramaRegister from "./features/monaramaRegister";
const store = configureStore({
 reducer:{
    monaramaRegister: monaramaRegister
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;