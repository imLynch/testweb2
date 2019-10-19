import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from './components/Profile/Profile.jsx';
import Officialweb from './components/Officialweb/Officialweb.jsx';
import Messages from './components/Messages/Messages'
import Footer from './components/Footer/Footer'


import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (

        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>

                <div>
                    <Route path="/Profile" component={Profile}/>
                    <Route path="/Officialweb" component={Officialweb}/>
                    <Route path="/Messages" component={Messages}/>

                </div>

                <Footer/>

            </div>

        </BrowserRouter>
    )
}

export default App;
