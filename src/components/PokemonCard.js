import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       side: true
    }
  }

  toggleState = () => {
    this.setState({side: !this.state.side})
  }
  

  render() {
    return (
      <Card>
        <div onClick={this.toggleState}>
          <div className="image">
          {this.state.side === true
            ? (<img src={this.props.pokemon["sprites"]["front"]} alt="front card" />)
            : (<img src={this.props.pokemon["sprites"]["back"]} alt="back card" />)
          }
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stats => stats.name === "hp" ).value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
