import { Routes, Route } from 'react-router-dom';
import Regis from '../Components/pages/registro';

function Rutas() {
    return(
        <Routes>
            <Route path='/' element={<Regis />} />
            {/*<Route path='/login' element={<Login />} />*/}
        </Routes>
    )
    
}

export default Rutas