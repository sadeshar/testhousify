// src/App.js

import React from 'react';
import SignIn from './Pages/SignIn';
import Cards from './Components/Cards'
import data from './Components/data'
import TentantDashboard from './Pages/TenantDashboard';
import MyGroups from './Pages/MyGroups';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <TentantDashboard/>
      <MyGroups/>
      {/* <Cards/> */}
      {/* <SignIn/> */}
    </div>
  );
}

export default App;
