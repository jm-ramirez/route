import React from 'react';
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom';
import { Index } from "../components/Index";
import { Articles } from "../components/Articles";
import { Contact } from "../components/Contact";
import { Error } from "../components/Error";
import { Person } from "../components/Person";
import { PanelControl } from '../components/PanelControl';
import { IndexPanel } from "../components/panel/Index";
import { CreateArticles } from '../components/panel/CreateArticles';
import { ManageUsers } from '../components/panel/ManageUsers';
import { About } from '../components/panel/About';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr/>
      <nav>
        <ul>
          <li>
            <NavLink 
              to='/index' 
              className={({isActive}) => isActive ? 'active' : ''}>Inicio</NavLink>
          </li>
          <li>
            <NavLink
              to='/articles'
              className={({isActive}) => isActive ? 'active' : ''}>Articulos</NavLink>
          </li>
          <li>
            <NavLink 
              to='/contact'
              className={({isActive}) => isActive ? 'active' : ''}>Contacto</NavLink>
          </li>
          <li>
            <NavLink 
              to='/person'
              className={({isActive}) => isActive ? 'active' : ''}>Persona</NavLink>
          </li>
          <li>
            <NavLink 
              to='/panel'
              className={({isActive}) => isActive ? 'active' : ''}>Panel de control</NavLink>
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
          <Route path='/person/:name/:lastName' element={<Person/>} />
          <Route path='/person/:name/' element={<Person/>} />
          <Route path='/person' element={<Person/>} />
          <Route path='/redirect' element={<Navigate to='/persona/juanchi/ramirez'/>}></Route>
          <Route path='/panel/*' element={<PanelControl/>}>
            <Route path='index' element={<IndexPanel/>}/>
            <Route path='create-articles' element={<CreateArticles/>}/>
            <Route path='manage-users' element={<ManageUsers/>}/>
            <Route path='about' element={<About/>}/>
          </Route>
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
