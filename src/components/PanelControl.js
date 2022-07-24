import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>Panel de Control</h1>
        <p>Elige una de estas opciones</p>
        <nav>
            <ul>
                <li>
                    <NavLink to='/panel/index'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/create-articles'>rear artículos</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/manage-users'>Gestión usuarios</NavLink>
                </li>
                <li>
                    <NavLink to='/panel/about'>Acerca de</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            {/*Quiero cargar aqui los componentes de las subrutas, por eso utilizo Outlet */}
            <Outlet/>
        </div>
    </div>
  )
}
