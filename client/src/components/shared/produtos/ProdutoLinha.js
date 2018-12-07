import React, { Component } from "react";
import { Row, Col, List } from "antd";

export default class ProdutoLinha extends Component {

    render() {
        return (
            <Row>

                <Col span={8} >
                    <img alt="toalha" className="produto-imagem" src="/toalhas.jpg" width="100px" height="100px"/>
                    <img alt="toalha" className="produto-imagem" src="/toalhas.jpg" width="100px" height="100px"/>
                    <img alt="toalha" className="produto-imagem" src="/toalhas.jpg" width="100px" height="100px"/>
                    <img alt="toalha" className="produto-imagem" src="/toalhas.jpg" width="100px" height="100px"/>
                </Col>
                    
                <Col span={10}>
                    <List.Item>
                        <List.Item.Meta title={this.props.item.nome} description={this.props.item.descricao}/>
                    </List.Item>
                </Col>

                <Col span={6}>
                    <strike> R$ 199.00 </strike> por <b> R$ 150.00</b>
                </Col>

            </Row>
        );
    }
}