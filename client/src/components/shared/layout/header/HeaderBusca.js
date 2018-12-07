import React, { Component } from "react";
import {
    Form, Icon, Input,
  } from 'antd';
  
const FormItem = Form.Item;

  
export default class HeaderBusca extends Component {

    render() {
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem>
                    <div className="certain-category-search-wrapper" style={{ width: 250 }}>
                        <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                    </div>
                </FormItem>
            </Form>
        )
    }

    handleSubmit() {
        console.log("testando");
    }

}