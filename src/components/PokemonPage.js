import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
// import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    filteredPokemons: [],
  }

  addPokemon = pokemon => {
    debugger
    this.setState({ pokemons: [pokemon, ...this.state.pokemons] })
    this.setState({filteredPokemons: [pokemon, ...this.state.pokemons]})
  }

  filterPokemons = (event) => {
    this.setState({ filteredPokemons: [...this.state.pokemons].filter(pokemon => pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())) })
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemons => this.setState({ pokemons, filteredPokemons: pokemons }))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={e => this.filterPokemons(e)} showNoResults={false} />
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <PokemonCollection pokemons={this.state.filteredPokemons}/>
      </div>
    )
  }
}

export default PokemonPage