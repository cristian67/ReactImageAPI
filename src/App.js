import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {

  state = {
    termino: '',
    imagenes: []
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarAPI();
    })    
  }

  consultarAPI = () => {
    const key = '';
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}`
    
    
    fetch(url)
            .then(res => res.json())
            .then(res => {
              this.setState({
                imagenes: res.hits
              })
            })

  }

  render() {
    return (
      <div className="app container">
          <div className="jumbotron">
              <p className="lead text-center">Buscador de imagenes</p>
              <Buscador 
                    datosBusqueda = {this.datosBusqueda}
              />
          </div>
          <div className="row" >
              <Resultado
                    imagenes = {this.state.imagenes}
              />
          </div>  
      </div>
    );
  }
}

export default App;
