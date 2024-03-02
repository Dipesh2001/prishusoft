import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice";
import orgReducer from "../features/orgSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    org: orgReducer,
  },
  //   middleware: getDefaultMiddleware(),
});
