import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { DefaultPricingStrategy, DiscountPricingStrategy } from "../../utilities/PricingStrategy";
import authServices from "./authServices";

const initialState = {
    user: JSON.parse(window.localStorage.getItem("auth"))?.user ?? {},
    isIdel: true,
    isLoading: false,
    isSuccess: false,
    isError: false,
    isAuth: !!JSON.parse(window.localStorage.getItem("auth"))?.isAuth,
    message: "",
    action: ""
}

export const signup= createAsyncThunk("auth/signup", async(user, thunkAPI)=>{
    try{
        const response = await authServices.signup(user)

        console.log("response in signup", response)

        window.localStorage.setItem("user", JSON.stringify(response))
        return response;
    }
    catch(err){
        let message = "";
        if(!err?.response){
            message = "No server response"
        }
        else if(err?.response?.status === 400){
            message = "There is some user information missing"
        }
        else if(err?.response?.status === 401){
            message = "Uncorrect email or password"
        }
        else{
            message = "Login faild"
        }
        return thunkAPI.rejectWithValue(message)
    }
})

export const signin= createAsyncThunk("auth/signin", async(user, thunkAPI)=>{
    try{
        const response = await authServices.signin(user)

        console.log("response in signin", response)
        response.isAuth= true;
        window.localStorage.setItem("user", JSON.stringify(response))
        return response;
    }
    catch(err){
        let message = "";
        if(!err?.response){
            message = "No server response"
        }
        else if(err?.response?.status === 400){
            message = "There is some user information missing"
        }
        else if(err?.response?.status === 401){
            message = "Uncorrect email or password"
        }
        else{
            message = "Login faild"
        }
        return thunkAPI.rejectWithValue(message)
    }
})

const authSlice= createSlice({
    name: "auth",
    initialState,
    reducers: {
        logOut: ({state})=>{
            window.localStorage.removeItem("user");
            console.log("loging out******");
            state= {
                user: {},
                isIdel: true,
                isLoading: false,
                isSuccess: false,
                isError: false,
                isAuth: false,
                message: "",
                action: ""
            }
            window.open("/sign-in");
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(signup.pending, (state)=>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.message= ""
        })
        .addCase(signup.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.message= ""
            state.meta= {...action.meta, action: "signup"}
        })
        .addCase(signup.rejected, (state, action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message= action.payload
        })
        .addCase(signin.pending, (state)=>{
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
            state.isAuth= false;
            state.message= ""
        })
        .addCase(signin.fulfilled, (state, action)=>{
            state.user = action.payload
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.isAuth= true;
            state.message= ""
            state.meta= {...action.meta, action: "signin"}
        })
        .addCase(signin.rejected, (state, action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.isAuth= false;
            state.message= action.payload
        })
    }
});

export const selectAuth = (state)=> state.auth;
export const {logOut}= authSlice.actions;
export default authSlice.reducer;