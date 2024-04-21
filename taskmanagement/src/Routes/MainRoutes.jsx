import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Components/HomePage'
import LoginPage from '../Components/LoginPage'
import RegisterPage from '../Components/RegisterPage'
import DisplayTasksPage from '../Components/DisplayTasksPage'
import Profile from '../Components/Profile'
import PrivateRoutes from './PrivateRoutes'

const MainRoutes = () => {
  return (
    <Routes >
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/tasks' element={
          <PrivateRoutes>
        <DisplayTasksPage />
        </PrivateRoutes>}></Route>
        <Route path='/profile' element={
          <PrivateRoutes>
        <Profile />
        </PrivateRoutes>
        }></Route>
    </Routes>
  )
}

export default MainRoutes