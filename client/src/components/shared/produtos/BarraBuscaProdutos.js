import React, { Component } from "react";
import {
    Form, Icon, Input, Button,
  } from 'antd';
  
const FormItem = Form.Item;

  
export default class BarraBuscaProdutos extends Component {

    render() {
        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                
                <FormItem>
                    <Input prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nome do Produto" />
                </FormItem>
                
                <FormItem>

                    <Button type="primary" htmlType="submit">
                        Pesquisar
                    </Button>

                </FormItem>
            
            </Form>
        )
    }

    handleSubmit() {
        console.log("testando");
    }

}