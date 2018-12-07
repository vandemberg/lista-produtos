import React, { Component } from "react";
import { List } from "antd";
import ProdutoLinha from "./../../produtos/ProdutoLinha";
const data = [
    {
      nome: 'Produto A',
      descricao: 'Descricao do produto A'
    },
    {
      nome: 'Produto B',
      descricao : 'Descricao do produto B'
    },
    {
      nome: 'Produto C',
      descricao : 'Descricao do produto C'
    },
    {
      nome: 'Produto D',
      descricao : 'Descricao do produto D'
    },
];

export default class ContentMail extends Component {

    render() {
        return (
            <div className="content-main">
              
              <List
                  header="200 PRODUTOS ENCONTRADOS"
                  itemLayout="horizontal"
                  dataSource={data}
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