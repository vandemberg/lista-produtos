import React, {Component} from "react";

import ContentTitulo from "../../components/shared/layout/content/ContentTitulo";
import ContentMain from "../../components/shared/layout/content/ContentMain";
import { Layout } from "antd";

const { Content } = Layout;

export default class MyContent extends Component {

    render() {
        return (
            <Layout>
                <Content>
                    <ContentTitulo />
                    <ContentMain />
                </Content>
            </Layout>
        );
    }

}