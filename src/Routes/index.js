import {Fragment} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home';
import Signin from '../pages/signin';
import Signup from '../pages/Signup';


const Private = ({ Item }) => {
  const signed = false;

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
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp