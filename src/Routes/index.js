import {Fragment} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home';
import Signin from '../pages/signin';
import Signup from '../pages/Signup';

import ChangePassword from '../pages/changePassword';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/' element={<Signin />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/changePassword' element={<ChangePassword />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp