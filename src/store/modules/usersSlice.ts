import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export interface User {
   email: string;
   password:string
}

export interface UsersRedux {
   users: User[],
   userLogged: undefined | User
}



const initialState: UsersRedux = {
  users: [],
  userLogged: undefined
}




export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers:{
   addUser: (state, action: PayloadAction<User> )=>{
     state.users.push(action.payload)

     
   },
   login: (state, action: PayloadAction<User> )=>{
    state.userLogged = action.payload
   
    
  },
  }
})




export const {addUser, login} = usersSlice.actions;
export  default usersSlice.reducer;
