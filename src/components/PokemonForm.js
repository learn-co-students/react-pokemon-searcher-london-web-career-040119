import React from "react";
import { Form } from "semantic-ui-react";

const initialState = {
  name: "",
  hp: "",
  frontUrl: "",
  backUrl: ""
};

class PokemonForm extends React.Component {
  state = initialState;

  handleSubmit = e => {
    e.preventDefault();
    const { name, hp, backUrl, frontUrl } = this.state;
    const pokemon = {
      name: name,
      stats: [{ name: "hp", value: hp }],
      sprites: {
        back: backUrl,
        front: frontUrl
      }
    };

    const baseUrl = "http://localhost:3000";
    const pokemonsUrl = baseUrl + "/pokemon";

    const post = (url, data) =>
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).then(resp => resp.json())

    post(pokemonsUrl, pokemon);
    this.setState(initialState)  
    this.props.renderNewPokemon(pokemon)

  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              onChange={handleChange}
              fluid
              label="Name"
              placeholder="Name"
              name="name"
              value={this.state.name}
            />
            <Form.Input
              onChange={handleChange}
              fluid
              label="hp"
              placeholder="hp"
              name="hp"
              value={this.state.hp}
            />
            <Form.Input
              onChange={handleChange}
              fluid
              label="Front Image URL"
              placeholder="url"
              name="frontUrl"
              value={this.state.frontUrl}
            />
            <Form.Input
              onChange={handleChange}
              fluid
              label="Back Image URL"
              placeholder="url"
              name="backUrl"
              value={this.state.backUrl}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default PokemonForm;
