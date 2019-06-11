import React from 'react'
import { Form } from 'semantic-ui-react'
const url = "http://localhost:3000/pokemon"

const initialFormState = {
  name: '',
  hp: '',
  frontUrl: '',
  backUrl: ''
}

class PokemonForm extends React.Component {
  
    state = initialFormState

    // updateState = (e) => {
    //   const { target } = e
    //   this.setState({
    //     name: target.name.value,
    //     hp: target.hp.value,
    //     frontUrl: target.frontUrl.value,
    //     backUrl: target.backUrl.value,
    //   })
    // }

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }
  
    handleSubmit = () => {

      const config = {
        method: "POST", 
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: this.state.name,
          stats: [
            {
              name: 'hp',
              value: +this.state.hp
            }
          ],
          sprites: {
            front: this.state.frontUrl,
            back: this.state.backUrl
          }
        })
      }

      fetch(url, config)
       .then(resp => resp.json())
       .then(pokemon => this.props.addPokemon(pokemon))

      this.setState({...initialFormState})


    }

  render() {
    const { handleChange } = this
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit} >
          <Form.Group widths="equal">
            <Form.Input onChange={handleChange} fluid label="Name" placeholder="Name" name="name" value={this.state.name}/>
            <Form.Input onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input onChange={handleChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl}/>
            <Form.Input onChange={handleChange} fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
