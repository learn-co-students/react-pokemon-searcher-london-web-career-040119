import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search, Grid } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    abilities: [],
    searchTerm: '',
    abititiesSearchTerm: '',
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemons => { 
        this.setState({
          pokemons,
          abilities: _.uniq(_.flatten(pokemons.map(pokemon => pokemon.abilities)))
        })
      }) 
  }

  handleNameSearchChange = (e, { value }) => {
    this.setState({
      searchTerm: value.toLowerCase(),
    })
  }

  handleAbilitySearchChange = (e, { value }) => {
    this.setState({
      abititiesSearchTerm: value.toLowerCase(),
    })
  }

  addPokemon = (pokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    })
  }

  hasAbility = (pokemon, searchedAbility) => {
    return pokemon.abilities.find(ability => ability.includes(searchedAbility))
  }

  getFilterPokemons = () => {
    return this.state.pokemons
      .filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm))
      .filter(pokemon => this.hasAbility(pokemon,this.state.abititiesSearchTerm))
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <PokemonForm 
          addPokemon={this.addPokemon}
        />
        <br />
        <Grid centered columns={2}>
          <Search 
            onSearchChange={_.debounce(this.handleNameSearchChange, 500)} 
            placeholder="Name..."
            showNoResults={false} />
          <Search 
            onSearchChange={_.debounce(this.handleAbilitySearchChange, 500)} 
            placeholder="Ability..."
            showNoResults={false} />
        </Grid>
        
        <br />
        <PokemonCollection pokemons={this.getFilterPokemons()} />
        <br />
      </div>
    )
  }
}

export default PokemonPage
