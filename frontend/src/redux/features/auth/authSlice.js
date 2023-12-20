import {createSlice} from '@reduxjs/toolkit'

// const name = JSON.parse(localStorage.getItem("name"));

var name="";
if(localStorage.getItem("name")===undefined)
{
    name = JSON.parse(localStorage.getItem("name"));
}
// const name = "ram"
const initialState = {
    isLoggedIn:false,
    name:name ? name : "",
    user: {
        // name:"",
        email:""
    },
    
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        SET_LOGIN_USER(state,action){
            state.isLoggedIn = action.payload
            // console.log(state.isLoggedIn)
        },
        SET_NAME(state,action){
            localStorage.setItem("name",JSON.stringify(action.payload))
            state.name = action.payload
        //    console.log(action.payload)
        //    console.log(state.name)
        },
        SAVE_USER(state,action)
        {
            const profile = action.payload;
            // state.user.name = profile.name;
            state.user.email = profile.email;
        },
    },   
})

export const{SET_LOGIN_USER,SET_NAME,SAVE_USER} = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const user =  (state) => state.auth.user;

export default authSlice.reducer;