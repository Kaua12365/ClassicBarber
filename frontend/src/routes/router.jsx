import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';
import LandingPage from '../pages/landingPage';
import Rodape from '../components/rodape';
import NaoEncontrado from '../pages/naoEncontrado';
import MenuLateral from "../components/menuLateral"
import Servicos from '../pages/servicos';
import Agendamento from '../pages/agendamento';
import Perfil from "../pages/perfil"
import Home from "../pages/home"
import PrivateRoute from './PrivateRoute';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
            /* sem login */
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} /> 
                <Route path='*' element={<NaoEncontrado />} />

            /* componentes */    
                <Route path='/rodape' element={<Rodape />} />  
                <Route path='/menuLateral' element={<MenuLateral />} />

            /* logado */
                <Route element={<PrivateRoute />}> <Route path="/servicos" element={<Servicos />} /> </Route> /*rota privada */
                <Route element={<PrivateRoute />}> <Route path="/agendamento" element={<Agendamento />} /> </Route> /*rota privada */
                <Route element={<PrivateRoute />}> <Route path="/home" element={<Home />} /> </Route> /*rota privada */
                <Route element={<PrivateRoute />}> <Route path="/perfil" element={<Perfil />} /> </Route> /*rota privada */
                
            </Routes>
        </BrowserRouter>
    )
}