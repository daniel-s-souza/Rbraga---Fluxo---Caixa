import {Fragment} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home';
import Signin from '../pages/signin';
import Signup from '../pages/Signup';
import useAuth from "../hooks/useOut"
import ChangePassword from '../pages/changePassword';
import Profile from '../pages/profile';
import EditProfile from '../pages/editProfile';

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path='/home' element={<Private Item={Home} />} />
          <Route exact path='/' element={<Signin />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/changePassword' element={<ChangePassword />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/editProfile' element={<EditProfile />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp