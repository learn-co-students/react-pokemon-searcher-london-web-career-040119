import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemons: [],
      filteredPokemons: []
    }
  }

  componentDidMount = () => {
    return fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemons => {
        this.setState({pokemons: pokemons })
        this.setState({filteredPokemons: pokemons})})
  }

  addPokemon = (pokemon) => {
    this.setState({pokemons: [...this.state.pokemons, pokemon ]})
    this.setState({filteredPokemons: this.state.pokemons})
  }
 
  filterPokemons = (searchTerm) => {
    this.setState({filteredPokemons: this.state.pokemons.filter(
      pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )})
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={(e, data) => this.filterPokemons(data.value)} showNoResults={false} />
        <br />
        <PokemonCollection pokemons={this.state.filteredPokemons} />
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
