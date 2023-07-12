import './App.css';
import Header from './components/navigation/Header'
import {  Route , Routes } from 'react-router-dom'
import Results from './components/Results';
import Error from './components/Pages/Error'
import React from 'react'

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Results />} />
        <Route path='/news' element={<Results />} />
        <Route path='/images' element={<Results />} />
        <Route path='/videos' element={<Results />} />
        <Route path='*' element={<Error />} />
    </Routes>
    </>
  );
}

export default App;
