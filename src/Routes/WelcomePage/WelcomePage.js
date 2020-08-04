import React from 'react';
import { Layout, Menu } from 'antd';
import {
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';
import { CreateFormTemplates , ViewRecords} from '../Containers/';

const { Header, Footer, Content } = Layout;

class WelcomePage extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/create-form-templates"> Create/Edit Form Templates</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/view-records">View Record</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <div className="site-layout-content">
                        <Switch>
                            <Route path='/create-form-templates' component={CreateFormTemplates} />
                            <Route path='/view-records' component={ViewRecords} />
                            <Redirect from='/' to='/create-form-templates' />
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>React Test for Turing Test</Footer>
            </Layout>
        );
    }
}
export default WelcomePage;
