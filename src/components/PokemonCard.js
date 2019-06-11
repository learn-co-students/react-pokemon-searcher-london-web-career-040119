import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState( {clicked: !this.state.clicked} )
  }

  render() {
    const hp = this.props.pokemon.stats.find(stat => Object.values(stat).includes('hp'))
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={
              this.state.clicked 
              ? this.props.pokemon.sprites.back
              : this.props.pokemon.sprites.front
            } alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{(this.props.pokemon.name).charAt(0).toUpperCase() + (this.props.pokemon.name).slice(1)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />{hp.value}hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
