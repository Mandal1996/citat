import React, { Component } from 'react';
import Citat from './Citat';
import AddCitat from './AddCitat';
import './App.scss';

class App extends Component {
  state = {
    citater : [
      { overskrift: 'Citat 1', citat: 'Det er tungt, forbandet tungt, at dø mens hjertet stadig er ungt.', kunstner: '- H C Andersen', id: 1 },
      { overskrift: 'Citat 2', citat: 'Jeg drikker ikke vand. Fisk knalder i det.', kunstner: '– W.C. Fields', id: 2 },
      { overskrift: 'Citat 3', citat: 'Terningerne er kastet.', kunstner: '– Julius cæsar', id: 3 },
      { overskrift: 'Citat 4', citat: 'Stilhed er nogle gange det bedste svar.', kunstner: '– Dalai Lama', id: 4 },
      { overskrift: 'Citat 5', citat: 'Vær dig selv; alle andre er allerede taget.', kunstner: '– Oscar Wilde', id: 5 }
    ]
  }
  addCitat = (citat) => {
    citat.id = Math.random();
    let citater = [...this.state.citater, citat];
    this.setState({
      citater: citater
    });
  }
  deleteCitat = (id) => {
    let citater = this.state.citater.filter(citat => {
      return citat.id !== id
    });
    this.setState({
      citater: citater
    })
  }
  componentDidMount() {
    console.log('component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <Citat deleteCitat={this.deleteCitat} citater={this.state.citater} />
        <AddCitat addCitat={this.addCitat} />
      </div>
    );
  }
}

export default App