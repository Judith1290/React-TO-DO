import { Routes, Route } from 'react-router-dom';
import Regis from '../Components/pages/registro';
import Login from '../Components/pages/login';
import TareasComponent from '../Components/pages/to-do';
import React from 'react';

function Rutas() {
    return(
        <Routes>
            <Route path='/' element={<Regis />} />
            <Route path='/login' element={<Login />} />
            <Route path='/tareas' element={<TareasComponent />} />
        </Routes>
    )
}
export default Rutas
