import React, { Component } from "react";
import { List } from "antd";
import ProdutoLinha from "./../../produtos/ProdutoLinha";
import { connect } from "react-redux";

class ContentMail extends Component {

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
                  dataSource={this.props.produtos}
                  pagination={{
                    onChange: (page) => {
                      console.log(page);
                    },
                    pageSize: 10,
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

export default connect(mapStateToProps)(ContentMail);