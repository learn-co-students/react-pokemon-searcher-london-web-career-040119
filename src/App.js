import React from 'react'
import PokemonIndex from './components/PokemonIndex'
import './App.css'


class App extends React.Component {


  render() {
    console.log("Hi")
    return (
  <div className="App">
    <PokemonIndex />
  </div>

    )
  }

}


export default App
