import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import About from './components/About';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Calder from './components/Calder';
import FloorView from './components/FloorView';
import PerFloor from './components/PerFloor';
import Table from './components/Table';
import Base from './components/Base';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path='/detail' element={<Detail/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/calder' element={<Calder/>} />
        <Route path='/floorview' element={<FloorView/>}/>
        <Route path='/perfloor' element={<PerFloor/>}/>
        <Route path='/table' element={<Table/>}/>
      </Routes>
      {/* <Base/> */}
      </Router>
    </div>
  );
}

export default App;
