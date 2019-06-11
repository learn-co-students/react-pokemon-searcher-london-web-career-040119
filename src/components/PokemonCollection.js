import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon
          .filter(pokey => pokey.name.includes(this.props.filterValue))
          
          .map(pokey => <PokemonCard key={pokey.id} pokey={pokey} />)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
