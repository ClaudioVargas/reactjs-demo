import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "bootstrap/dist/css/bootstrap.min.css";
import Usuarios from './components/usuarios'

import { Routes, Route, BrowserRouter } from 'react-router-dom'

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const Button = ({text}) => {
//   return <button>{text}</button>
// }
root.render(  
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Usuarios></Usuarios>}> </Route>
      </Routes>
  </BrowserRouter>
  
  // <React.Fragment>
  //   <Button text="1" />
  //   <Button text="22" />
  //   <Button text="3" />
  // </React.Fragment>
  
  // <React.StrictMode>
    
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals 
// reportWebVitals();
