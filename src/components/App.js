import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from './Login';
import AccidentesList from './accidentes/AccidentesList';
import ShowMovie from './accidentes/ShowMovie';
import DashboardMes from './accidentes/DashboardMes';
import DashboardDistrito from './accidentes/DashboardDistrito';
import Dashboard from './accidentes/Dashboard';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/home" element={<Dashboard/>} />
          <Route path="/home/meses" element={<DashboardMes/>} />
          <Route path="/home/distritos" element={<DashboardDistrito/>} />
          <Route path="/home/accidentes" element={<AccidentesList/>} />
          <Route path="/home/accidentes/:id" element={<ShowMovie/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
