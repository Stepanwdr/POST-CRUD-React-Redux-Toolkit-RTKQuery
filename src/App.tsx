import {FC, useEffect} from 'react';
import './App.css';
import { useAppSelector } from './hooks/useAppSelector';
import { userSlice } from './store/reducers/UserSlice';
import { useAppDispatch } from './hooks/useAppDispatch';
import { fetchUsers } from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';
const App:FC=()=>{

  const {count,users,error,isLoading}=useAppSelector(state=>state.userReducer)
   const {Increment}=userSlice.actions
   const dispatch=useAppDispatch() 

useEffect(()=>{
dispatch(fetchUsers())
},[])
return <>
    <div>
   <PostContainer/>
    </div>
</>
}

export default App;
