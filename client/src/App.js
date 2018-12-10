import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import { Layout } from 'antd';

import MyHeader from  "./containers/layout/MyHeader";
import MyContent from "./containers/layout/MyContent";

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <Layout>
          
          <MyHeader />
          <MyContent />
      
        </Layout>
      </Provider>
    );

  }
}

export default App;
