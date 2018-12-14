import React, { Component } from 'react';

class Buscador extends Component{

    palabraRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();

        this.props.datosBusqueda(this.palabraRef.current.value);
    } 

    

    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8" >
                          <input ref= {this.palabraRef}
                                 type="text" 
                                 className="form-control form-control-lg" 
                                 placeholder="buscar imagen"/>
                    </div>
                    <div className="form-group col-md-4" >
                          <input type="submit" 
                                 className="btn btn-lg btn-danger btn-block" 
                                 value="Buscar" />
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;