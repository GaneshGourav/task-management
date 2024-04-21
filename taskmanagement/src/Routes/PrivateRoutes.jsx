import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, json } from 'react-router-dom'
import LoginPage from '../Components/LoginPage'


const PrivateRoutes = ({children}) => {
 const data = localStorage.getItem("isLoggedIn");
// const userAuthentication = json.parse(data)
  // const isAuth = useSelector((store)=>store.authReducer.isAuth)

  if(!data){
    return <LoginPage />
  }
  return (
    children
  )
}

export default PrivateRoutes