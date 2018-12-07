import React, { Component } from 'react';
import { Layout, List, Row, Col } from 'antd';
import MyHeader from './components/shared/layout/MyHeader';

const { Content } = Layout;

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

class App extends Component {

  render() {

    return (
      <Layout>
        
        <MyHeader />

        <Layout>
          
          <Content>

            <div className="content-title">
              <h2 className="content-title-text">Todos os Produtos</h2>
            </div> 

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
                    <Row>
                       
                      <Col span={6} >
                        <img className="produto-imagem" src="/toalhas.jpg" width="100px" height="100px"/>
                        <img className="produto-imagem" src="/toalhas.jpg" width="100px" height="100px"/>
                        <img className="produto-imagem" src="/toalhas.jpg" width="100px" height="100px"/>
                        <img className="produto-imagem" src="/toalhas.jpg" width="100px" height="100px"/>
                      </Col>
                      
                      <Col span={12}>
                        <List.Item>
                          <List.Item.Meta title={item.nome} description={item.descricao}/>
                        </List.Item>
                      </Col>

                      <Col span={6}>
                        <strike> R$ 199.00 </strike> por <b> R$ 150.00</b>
                      </Col>

                    </Row>
                  )}
              />
            </div>
            <Row>

            </Row>
          </Content>
        
        </Layout>
     
      </Layout>
    );

  }
}

export default App;
