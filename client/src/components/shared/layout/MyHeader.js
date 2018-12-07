import React, {Component} from "react";
import { Layout } from "antd";

import BarraBuscaProdutos from "./../produtos/BarraBuscaProdutos";

// SubComponenets
const { Header } = Layout;

export default class MyHeader extends Component {

    render() {
        return (
            <Header className="header">
                <nav className="header-nav">
                    <div className="header-title">
                    <strong><h1 className="header-title-text">Marttan </h1></strong>
                    </div>

                    <div className="header-nav-busca">
                        <BarraBuscaProdutos />
                    </div>
                </nav>
            </Header>
        );
    }

}