import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name : "user",
    initialState : null,
    reducers : {
        userInfo : (state , action)=>{
            return action.payload;
        },
        removeUserInfo : ()=>{
            return null;
        }
    }
})

export const {userInfo , removeUserInfo} = user.actions;
export default user.reducer;