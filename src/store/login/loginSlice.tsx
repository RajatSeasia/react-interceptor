import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import loginService from "./loginService"

interface UsersState{
  isLoginError:any,
  isLoginLoading:any,
  isLoginSuccess:any,
  loginData:any
  registerData:any
  allUser:any
  isUserLoading:any
  isUserError:any
  isUserSuccess:any
}

const initialState = {
  isLoginError:false,
  isLoginLoading:"idle",
  isLoginSuccess:false,
  loginData:null,
  allUser:null,
  isUserLoading:"idle",
  isUserError:false,
  isUserSuccess:false
} as UsersState

export const loginAsync:any = createAsyncThunk(
  "post/login",
  async(data:any)=>{
    try{
      const response = await loginService.login(data)
      return response;
    }catch(err){
      return err
    }
  }
)

export const registerAsync:any = createAsyncThunk(
  "post/register",
  async(data:any)=>{
    try{
      const response  = await loginService.register(data)
      return response
    }catch(err){
      return err
    }
  }
)

export const allUserAsync:any = createAsyncThunk(
  "get/user",
  async()=>{
    try{
      const response  = await loginService.allUser()
      return response
    }catch(err){
      return err
    }
  }
)

export const loginDataReducer = createSlice({
  name:"name",
  initialState,
  reducers:{
    reset:()=>initialState
  },
  extraReducers:(builder)=>{
    builder
    .addCase(loginAsync.pending,(state)=>{
      state.isLoginLoading = "pending";
      state.isLoginSuccess=false
    })
    .addCase(loginAsync.fulfilled,(state,action)=>{
      state.isLoginLoading= "succeeded";
      state.isLoginSuccess = true;
      state.loginData = action.payload;
    })
    .addCase(loginAsync.rejected,(state)=>{
      state.isLoginLoading="failed";
      state.isLoginSuccess=false
    })
    .addCase(registerAsync.pending,(state)=>{
      state.isLoginLoading = "pending";
      state.isLoginSuccess=false
    })
    .addCase(registerAsync.fulfilled,(state,action)=>{
      state.isLoginLoading="succeeded";
      state.isLoginSuccess = true;
      state.registerData = action.payload
    })
    .addCase(registerAsync.rejected,(state)=>{
      state.isLoginLoading = "failed";
      state.isLoginSuccess= false
    })
    .addCase(allUserAsync.pending,(state)=>{
      state.isUserLoading = "pending";
      state.isLoginSuccess=false
    })
    .addCase(allUserAsync.fulfilled,(state,action)=>{
      state.isUserLoading="succeeded";
      state.isLoginSuccess = true;
      state.allUser = action.payload
    })
    .addCase(allUserAsync.rejected,(state)=>{
      state.isUserLoading = "failed";
      state.isLoginSuccess= false
    })
  }
})

export const {reset} = loginDataReducer.actions
export default loginDataReducer.reducer