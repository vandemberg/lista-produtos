import React, { Component } from "react";

import { connect } from 'react-redux';

class ContentTitulo extends Component {

    render() {
        return (
            <div className="content-title">
              <h2 className="content-title-text">{this.titulo()}</h2>
            </div> 
        );
    }

    titulo() {
        return "Todos os Produtos";
    }

}

export default connect()(ContentTitulo);