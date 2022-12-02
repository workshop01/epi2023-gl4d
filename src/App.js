import React from 'react'
import { BrowserRouter as Router, Link, NavLink, Route, Routes } from 'react-router-dom';
import { Basic } from './Basic';
import { Navbar } from './components/Navbar';
import { Cv } from './cv/Cv';
import { Evenements } from './Evenements';
import { Feedback } from './feedbackApp/Feedback';
import { Login } from './Login';
export const App = () => {
  return (
    <div>

        <Router>

            <Navbar/>
            <Routes>{/* <Switch> */}
                {/* element ( comoponent v5) */}
                <Route  path='/' exact element={<Feedback/>}></Route>
                <Route  path='/feedback' exact element={<Feedback/>}></Route>
                <Route  path='/evenement' exact element={<Evenements/>}></Route>
                <Route  path='/basics' exact element={<Basic/>}></Route>
                <Route  path='/login' exact element={<Login/>}></Route>
                <Route  path='/cv/:name' exact element={<Cv/>}></Route>

            </Routes>
        </Router>
        {/* Alt + shift + A  ou Ctrl + : */}
  {/* Alt + shift+ F : Formatage code */}
    {/* <Basic/> */}
    
    {/*  /> */}
    {/* <Login/> */}
   {/*  <Cv/> */}

    </div>
  )
}
