import axios from "axios";
import { LOGIN_REQUEST, SIGNUP_REQUEST } from "../actionTypes";

const baseURL = "https://management-project-iq4n.onrender.com";

//Login
// export const login = (user)=> async (dispatch) => {
//   try {
//     dispatch({type:Login_Request})
//     try {
//       const res = await axios.post(`${baseURL}/users/login`,user);
      
//       dispatch({type:Login_Success, payload:res?.data})

//       return res?.data;
//     } catch (error) {
//       dispatch({type:Login_Failure})
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

export const Signup = (user) => (dispatch) =>{
  dispatch({type:SIGNUP_REQUEST});
  return axios.post(`${baseURL}/users/signup`, user)

}
export const Signin = (user) => (dispatch) =>{
  dispatch({type:LOGIN_REQUEST});
  return axios.post(`${baseURL}/users/login`, user)

}

export const logout = (token)=> async(dispatch)=>{
  try{
     const res = await axios.get(`${baseURL}/users/logout`,{
      headers: {
        Authorization: token,
        }
     })
     console.log(res.data)
     dispatch({type:Logout_Success})
     return res.data

  }
  catch (error) {
    console.log(error)
  }
}

// export const editUser = (user,token,id)=> async(dispatch)=>{
//   console.log(user,"user")
//   try{
//     const res = await axios.patch(`${baseURL}/users/update/${id}`,user,{
//       headers: {
//         Authorization: token,
//         }
//      })
//      dispatch({type:Edit_Profile,payload:res.data.user})
//      return res.data
//   }
//   catch (error) {
//     console.log(error)
//   }
// }