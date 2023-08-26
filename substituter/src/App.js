import logo from './logo.svg';
import './App.css';
import './utils/save.js'

import Recipe from './components/Recipe'

import React from 'react'

export default function App() {
  return (
    <div>
      <Recipe recipeName={"pumpkinPie"}/>
    </div>
  )
}


