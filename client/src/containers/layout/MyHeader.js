import React, {Component} from "react";
import { Layout } from "antd";

import HeaderBusca from "./../../components/shared/layout/header/HeaderBusca";
import HeaderTitulo from "./../../components/shared/layout/header/HeaderTitulo";

// SubComponenets
const { Header } = Layout;

export default class MyHeader extends Component {

    render() {
        return (
            <Header className="header">
                
                <nav className="header-nav">
                    <HeaderTitulo />

                    <div className="header-nav-busca">
                        <HeaderBusca />
                    </div>
                </nav>

            </Header>
        );
    }

}