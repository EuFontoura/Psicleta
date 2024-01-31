import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar';
import TextContainer from './components/textContainer';
import ReasonsContainer from './components/reasonsContainer';

import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <TextContainer />
      <ReasonsContainer />
    </div>
  )
}

export default App