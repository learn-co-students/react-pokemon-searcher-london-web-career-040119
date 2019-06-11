import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    switchPic: false
  }

  switchPicture=()=>{
    this.setState({
      switchPic: !this.state.switchPic
    })
  }

  render() {
    const hp = this.props.pokey.stats.find(stat=>Object.values(stat).includes('hp'))
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={this.switchPicture} src={this.state.switchPic ? this.props.pokey.sprites.back : this.props.pokey.sprites.front} alt="A pokemon" />
          </div>
          <div className="content">
            <div className="header"> {(this.props.pokey.name).charAt(0).toUpperCase() + (this.props.pokey.name).slice(1)} </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heart red" />

              {hp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
