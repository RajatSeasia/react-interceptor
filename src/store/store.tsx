import { configureStore } from "@reduxjs/toolkit";
import loginDataReducer from "./login/loginSlice";

const store = configureStore({
  reducer:{
    login:loginDataReducer
  },
})

export default store; 