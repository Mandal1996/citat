import React, { Component } from 'react'

class AddCitat extends Component {
  state = {
    overskrift: null,
    citat: null,
    kunstner: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCitat(this.state);
  }
  render() {
    return (
      <div className="formContainer">
        <form onSubmit={this.handleSubmit}>
          <h3>Tilføj et Citat</h3>
          <label htmlFor="overskrift">Overskrift: </label>
          <input type="text" id="overskrift" onChange={this.handleChange} />
          <label htmlFor="citat">Citat: </label>
          <input type="text" id="citat" onChange={this.handleChange} />
          <label htmlFor="kunstner">Kunstner: </label>
          <input type="text" id="kunstner" onChange={this.handleChange} />
          <button>Tilføj Citat</button>
        </form>
      </div>
    )
  }
}

export default AddCitat