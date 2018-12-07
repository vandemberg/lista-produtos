import React, { Component } from "react";

export default class ContentTitulo extends Component {

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