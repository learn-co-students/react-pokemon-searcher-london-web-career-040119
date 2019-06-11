import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  initialState = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  constructor() {
    super()
    this.state = this.initialState;
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        stats: [
          { name: 'hp', value: +this.state.hp }
        ],
        sprites: {
          front: this.state.frontUrl,
          back: this.state.backUrl,
        }
      })
    }

    fetch('http://localhost:3000/pokemon', options)
      .then(resp => resp.json())
      .then(pokemon => this.props.addPokemon(pokemon))
      .then(() => this.setState(this.initialState)) 
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const {name, hp, frontUrl, backUrl} =this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid value={name} label="Name" placeholder="Name" name="name" onChange={this.handleChange} />
            <Form.Input fluid value={hp} label="hp" placeholder="hp" name="hp" onChange={this.handleChange} />
            <Form.Input fluid value={frontUrl} label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} />
            <Form.Input fluid value={backUrl} label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
