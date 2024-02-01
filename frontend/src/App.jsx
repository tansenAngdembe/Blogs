import React from 'react'
import './App.css'
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom"

import { Home } from './pages/Home'
import { Dashboard } from './components/admin/Admin_dashboard'
// import { App_context } from './context/Appprovider'
import { Context_provider } from './context/Appprovider'
import { Login } from './components/user/Login'

function App() {
  const {myValue} = Context_provider()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home props={myValue}/>}/>
        <Route path='/dashboard' exact element={<Dashboard/>} />
        <Route path='/login' exact element={<Login/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
