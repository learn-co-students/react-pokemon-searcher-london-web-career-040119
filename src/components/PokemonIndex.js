import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
const url = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchTerm: ""
  }

  fetchPokemons = () => {
    fetch(url)
      .then(resp => resp.json())
      .then(pokemons => this.setState({pokemons}))
  }
  
  componentDidMount() {
    this.fetchPokemons()
  }

  addPokemon = (pokemon) => {
    this.setState({pokemons: [pokemon, ...this.state.pokemons]})
  }

  changeSearch = (e, { value }) => {
    this.setState({searchTerm: value})
  }

  filterPokemon = () => {
    return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
  }

  render() {
    console.log("search", this.state.pokemons)
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.changeSearch, 500) } showNoResults={false} />
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <PokemonCollection pokemons={this.filterPokemon()}/>
      </div>
    )
  }
}

export default PokemonPage
