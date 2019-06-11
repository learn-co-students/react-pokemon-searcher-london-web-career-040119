import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    faceUp: true,
  }

  toggleFaceUp = () => {
    this.setState({
      faceUp: !this.state.faceUp,
    })
  }

  render() {
    const { name, stats, sprites } = this.props
    const hp = stats.find(stat => stat.name === 'hp').value
    const {faceUp} = this.state
    return (
      <Card onClick={this.toggleFaceUp}>
        <div>
          <div className="image">
            <img src={faceUp ? sprites.front : sprites.back} alt={name} />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
