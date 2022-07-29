import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Header from '../components/Header';
import Main from '../components/Main';

export default function App() {
  return (
    <div className='container'>
      <Header />
      <Main />
    </div>
  );
}
