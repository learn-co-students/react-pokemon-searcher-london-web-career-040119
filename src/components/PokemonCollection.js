import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    // console.log("props", this.props)
    return (
      <div>

        <h1>Hello From Pokemon Collection</h1>
        <Card.Group itemsPerRow={6}>
        {this.props.pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.name}/>)}
        </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
