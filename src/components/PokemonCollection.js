import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    // can also add the below to make use of this.props not necessary on line 12 
    // const { pokemons } = this.props 
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id}/>)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
