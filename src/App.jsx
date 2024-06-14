import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { routes } from './Components/utils/routes';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={routes.inicio} element={<Home />} />
        <Route path={routes.contacto} element={<Contact />} />
        <Route path={routes.dentista} element={<Detail />} />
        <Route path={routes.destacados} element={<Favs />} />
        <Route path='*' element={<h1>Error 404 - Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
