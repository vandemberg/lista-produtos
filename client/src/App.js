import React, { Component } from 'react';
import { Layout } from 'antd';
import MyHeader from './components/shared/layout/header/MyHeader';
import ContentTitulo from "./components/shared/layout/content/ContentTitulo";
import ContentMain from "./components/shared/layout/content/ContentMain";

const { Content } = Layout;

class App extends Component {

  render() {

    return (
      <Layout>
        
        <MyHeader />

        <Layout>
          
          <Content>

            <ContentTitulo />

            <ContentMain />

          </Content>
        
        </Layout>
     
      </Layout>
    );

  }
}

export default App;
