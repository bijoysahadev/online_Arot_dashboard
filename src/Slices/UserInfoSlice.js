import { createSlice } from '@reduxjs/toolkit'
export const UserInfoSlice = createSlice({
  name: 'info',
  initialState : {
  value: localStorage.getItem("userinfo") ? JSON.parse(localStorage.getItem("userinfo")):null
}
,
 
  reducers: {
    activeUserInfo: (state,action) => {
        state.value=action.payload
    
//    console.log(state.value);
//    console.log(action.payload);
   
     
    },
    logout: (state,action) => {
   state.value=""
    localStorage.setItem("userinfo","")
//    console.log(state.value);
//    console.log(action.payload);
   
     console.log(state.value);
     
    },

  
  }
})


export const { activeUserInfo,logout} = UserInfoSlice.actions



export default UserInfoSlice.reducer