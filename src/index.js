import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Lion from './Lion';
import Zebra from './Zebra';
import Giraffe from './Giraffe';
import Hippo from './Hippo';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route
            index
            element={<h1>Welcome To The Zoo</h1>}
          />
          <Route path='lion' element={<Lion />}>
            <Route path='img' element=
              {
                <h1>Image</h1>
                // <img src='images\lion.jpg' alt='Lion' />
              }>
            </Route>
          </Route>
          <Route path='zebra' element={<Zebra />}/>
          <Route path='giraffe' element={<Giraffe />}/>
          <Route path='hippo' element={<Hippo />}/>
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
