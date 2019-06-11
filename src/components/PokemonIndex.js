import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'


class PokemonPage extends React.Component {
  
  state = {
    pokemon: [], 
    value: ""
  }

  renderNewPokemon = pokemon => {
    this.setState({ pokemon:  [...this.state.pokemon, pokemon] })
  }

  componentDidMount () {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => this.setState({
      pokemon: data
    }))
  }

  updateSearchTerm=(e, { value })=>{
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <PokemonForm renderNewPokemon={this.renderNewPokemon} />
        <br />
        <Search onSearchChange={_.debounce(this.updateSearchTerm, 500)} showNoResults={false}/>
        <br />
        <PokemonCollection filterValue={this.state.value} pokemon={this.state.pokemon}/>
        <br />
      </div>
    )
  }
}

export default PokemonPage
