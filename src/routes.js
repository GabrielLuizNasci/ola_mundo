import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Inicio from './pages/Inicio';
import Menu from './components/Menu';
import Rodape from 'components/Rodape';
import PaginaPadrao from 'components/PaginaPadrao';
import Post from 'pages/Post';
import NotFound from 'pages/NotFound';
import ScrollTop from 'components/SubirAoTopo';

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollTop />
      <Menu />
      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route index element={<Inicio />} />
          <Route path='about' element={<About />} />
          
        </Route>
        
        <Route path='posts/:id/*' element={<Post />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
