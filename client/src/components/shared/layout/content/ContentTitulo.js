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
        
        if(this.props.title) {
            return this.props.title;
        }

        return "Todos os Produtos";
    }

}

const mapStateToProps = state => {
    return { title : state.title };
}

export default connect(mapStateToProps)(ContentTitulo);