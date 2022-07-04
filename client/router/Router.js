import React from 'react';
import {Routes, Route, Link} from 'react-router-dom'
import Home from '../../components/Home';
import Login from '../../components/Login'

export default function Rout(props){
  return (
      <div>
          <div>
              <Link to="/">home</Link>
          </div>
          <div>
              <Link to="/login">login</Link>
          </div>
          <Routes>
              <Route path='/' exact element={< Home/>}/>
              <Route path='/login' exact element={<Login />}/>
          </Routes>
      </div>
  )
}