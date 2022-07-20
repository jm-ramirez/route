import React from 'react';
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Index } from "../components/Index";
import { Articles } from "../components/Articles";
import { Contact } from "../components/Contact";
import { Error } from "../components/Error";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr/>
      <nav>
        <ul>
          <li>
            <NavLink to='/index'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/articles'>Articulos</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contacto</NavLink>
          </li>
        </ul>
      </nav>
      <h2>Menú</h2>
      <hr/>
      <section className='main-section'>
        <Routes>
          <Route path='/' element={<Index/>} />
          <Route path='/index' element={<Index/>} />
          <Route path='/articles' element={<Articles/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Error />}/>
        </Routes>
      </section>
      <hr/>
      <footer>
        Éste es el pie de página.
      </footer>        
    </BrowserRouter>
  )
}
