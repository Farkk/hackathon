import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './pages/Home.jsx';
import Catalog from './pages/Catalog';
import Home from "./pages/Home.jsx";
// import Trends from './components/pages/Trends';
// import NewArrivals from './components/pages/NewArrivals';
// import UsefulInfo from './components/pages/UsefulInfo';
// import AnalogSelection from './components/pages/AnalogSelection';

function App() {
    return (
        <div>
            <Home/>
        </div>
    );
}

export default App;
