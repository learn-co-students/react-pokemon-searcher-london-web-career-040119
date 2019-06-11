import React from 'react'
import { Form } from 'semantic-ui-react'

const initialState = {
  name: '',
  hp: '',
  frontUrl: '',
  backUrl: ''
}

class PokemonForm extends React.Component {
  state = initialState

  handleSubmit = e => {
    e.preventDefault()
    const newPokemon = {
      name: this.state.name,
      stats: [
        {
          name: 'hp',
          value: this.state.hp
        }
      ],
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }
    this.props.addPokemon(newPokemon);
    this.setState(initialState)
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { handleChange, handleSubmit } = this
    const { name, hp, frontUrl, backUrl } = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={handleChange} fluid label="Name" placeholder="Name" name="name" value={name}/>
            <Form.Input onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" value={hp}/>
            <Form.Input onChange={handleChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" value={frontUrl}/>
            <Form.Input onChange={handleChange} fluid label="Back Image URL" placeholder="url" name="backUrl" value={backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
