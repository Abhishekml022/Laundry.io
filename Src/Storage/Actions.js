import { LOGIN, SIGNOUT, VERIFICATION } from "./Constants";

export const login=data=>({
    type:LOGIN,
    payload:{
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        mobilenumber:data.mobilenumber,
        userid:data.userid,
        profileImage:data.profileImage
    }
})

export const signout =data=>({
    type:SIGNOUT, 
    payload: {
       
    }
    
})  

export const verification =data=>({
    type:VERIFICATION, 
    payload: {
       
    }
})  
