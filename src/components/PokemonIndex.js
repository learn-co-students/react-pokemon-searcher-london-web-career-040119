import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: '',
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemons => this.setState({pokemons}))
  }

  handleSeachChange = (e, { value }) => {
    this.setState({
      searchTerm: value.toLowerCase(),
    })
  }

  addPokemon = (pokemon) => {
    console.log('pokemon', pokemon)
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    })
  }

  getFilterPokemons = () => {
    return this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <PokemonForm 
          addPokemon={this.addPokemon}
        />
        <br />
        <Search 
          onSearchChange={_.debounce(this.handleSeachChange, 500)} 
          showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.getFilterPokemons()} />
        <br />
      </div>
    )
  }
}

export default PokemonPage
