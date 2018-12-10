import React, { Component } from "react";
import { Form, Icon, Input } from 'antd';
import * as titleActions from './../../../../actions/title';
import { connect }from "react-redux";
import { bindActionCreators } from 'redux';
  
const FormItem = Form.Item;
  
class HeaderBusca extends Component {

    state = {
        search : ""
    };

    render() {
        return (
            <Form layout="inline">
                <FormItem>
                    <div className="certain-category-search-wrapper" style={{ width: 250 }}>
                        <Input value={this.state.search} onChange={(e) => this.setState({search: e.target.value})}
                            suffix={
                                <Icon type="search" className="certain-category-icon" onClick={this.research}/>
                            } 
                        />
                    </div>
                </FormItem>
            </Form>
        )
    }

    research = () => {
        this.props.changeTitle(this.state.search);
        this.props.refreshProdutos(this.state.search);
        this.setState({search: ''});
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(titleActions, dispatch);
}

export default connect(null, mapDispatchToProps)(HeaderBusca);