import axios from "axios"
import { IUser } from "../../models/IUser"
import { createAsyncThunk } from "@reduxjs/toolkit"

/*export const fetchUsers=()=>{
    return async(dispatch:AppDispatch)=>{
    try{
        dispatch(userSlice.actions.usersFetching())
        const res=await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        dispatch(userSlice.actions.usersFetchingSuccess(res.data))
    }catch(e:any){
        dispatch(userSlice.actions.usersFetchingError(e.message))
    }
    }
}*/
export const fetchUsers=createAsyncThunk(
    'user/fetchAll',
    async(_,thunkAPI)=>{
        try{
            const res=await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return res.data
        }catch(e){
        return thunkAPI.rejectWithValue('Cant download users')
        }
     
    }
)

