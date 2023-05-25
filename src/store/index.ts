import { combineReducers,configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import { postApi } from "../services/PostServices";
import { userApi } from "../services/UserServices";


const rootReducer=combineReducers({
    userReducer,
    [postApi.reducerPath]:postApi.reducer,
    [userApi.reducerPath]:userApi.reducer
})

export const setupStore=()=>{
    return configureStore({
     reducer:rootReducer,
     middleware:(getDefaultMiddleware)=>
     getDefaultMiddleware()
     .concat(postApi.middleware)
     .concat(userApi.middleware)
    })
}

export type RootState=ReturnType<typeof rootReducer>

export type AppStore=ReturnType<typeof setupStore>

export type AppDispatch =AppStore['dispatch']