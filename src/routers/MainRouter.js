import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Index } from "../components/Index";
import { Articles } from "../components/Articles";
import { Contact } from "../components/Contact";
import { Error } from "../components/Error";

export const MainRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='/index' element={<Index/>} />
            <Route path='/articles' element={<Articles/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<Error />}/>
        </Routes>
    </BrowserRouter>
  )
}
