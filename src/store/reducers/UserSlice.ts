import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../models/IUser"
import { fetchUsers } from "./ActionCreators"

interface UserState {
    users: IUser[],
    isLoading: boolean,
    error: string,
    count: number
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    count: 0
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        Increment(state, action: PayloadAction<number>) {
            state.count += action.payload
        },
       /* usersFetching(state){
            state.isLoading=true
        },
        usersFetchingSuccess(state,action:PayloadAction<IUser[]>){
            state.isLoading=false
            state.error=''
            state.users=action.payload
        },
        usersFetchingError(state,action:PayloadAction<string>){
            state.error=action.payload
            state.isLoading=false
        }*/
    },
    extraReducers:{
        [fetchUsers.pending.type]:(state)=>{
            state.isLoading=true
        },
        [fetchUsers.fulfilled.type]:(state,action:PayloadAction<IUser[]>)=>{
            state.isLoading=false
            state.error=''
            state.users=action.payload
        },
        [fetchUsers.rejected.type]:(state,action:PayloadAction<string>)=>{
            state.error=action.payload
            state.isLoading=false
        }
    }
})

export default userSlice.reducer
