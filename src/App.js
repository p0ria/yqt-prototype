import React, {useContext, useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import LoginPage from "./pages/login/LoginPage";
import {AppContext} from "./contexts/AppContext";
import HomePage from "./pages/home/HomePage";


function App() {
    const [appState, setAppState] = useContext(AppContext);
    return (
        <div className="App">
            <div className={`page page-login ${appState.activePage === 'login' ? "active" : ""}`}>
                <LoginPage />
            </div>
            <div className={`page page-home ${appState.activePage === 'home' ? "active" : ""}`}>
                <HomePage />
            </div>
        </div>
    )
}

export default App;
