import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Login from './Login';
import AccidentesList from './movies/AccidentesList';
import ShowMovie from './movies/ShowMovie';
import MyMovieList from './movies/MyMovieList';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/home" element={<MyMovieList/>} />
          <Route path="/home/accidentes" element={<AccidentesList/>} />
          <Route path="/home/accidentes/:id" element={<ShowMovie/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
