import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { routes } from './Components/utils/routes';
import Contact from './Routes/Contact';
import Home from './Routes/Home';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Layout from './Layout/Layout';
import { ThemeProvider } from './Context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div id='root'>
        <Routes>
          <Route path={routes.inicio} element={<Layout />}>
            <Route path={routes.inicio} element={<Home />} />
            <Route path={routes.contacto} element={<Contact />} />
            <Route path={routes.dentista} element={<Detail />} />
            <Route path={routes.destacados} element={<Favs />} />
            <Route path='*' element={<h1>Error 404 - Page not found</h1>} />
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
