import React, { Component } from "react";
import { List } from "antd";
import ProdutoLinha from "./../../produtos/ProdutoLinha";
import * as produtosActions from "./../../../../actions/produtos";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ContentMail extends Component {

    constructor(props) {
      super(props);
      this.props.loadProdutos();
    }

    state = {
      pageSize : 10
    };

    totalProdutos() {
      
      let total = this.props.produtos.length;
      return `${total} PRODUTOS ENCONTRADOS`;
    
    }

    render() {
        return (
            <div className="content-main">
              
              <List
                  header={ this.totalProdutos() }
                  itemLayout="horizontal"
                  dataSource={ this.props.produtos }
                  pagination={{
                    onShowSizeChange: (current, size) => {this.setState({pageSize: size})},
                    pageSize: this.state.pageSize,
                    showSizeChanger: true
                  }}

                  renderItem={item => (
                    <ProdutoLinha item={item} />
                  )}

              />

            </div>
        );
    }
}

const mapStateToProps = state => {
  return { produtos : state.produtos };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(produtosActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentMail);