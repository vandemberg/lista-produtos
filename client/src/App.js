import React, { Component } from 'react';
import { Layout } from 'antd';
import MyHeader from  "./containers/layout/MyHeader";
import MyContent from "./containers/layout/MyContent";

class App extends Component {

  render() {

    return (
      <Layout>
        
        <MyHeader />
        <MyContent />
     
      </Layout>
    );

  }
}

export default App;
