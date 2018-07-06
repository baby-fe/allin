import React, {Component} from 'react'
import {Layout, Menu, Dropdown} from 'antd';
import style from './root.css'

const {Header, Content} = Layout;
class Root extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
    this.handleMenuSelected = this.handleMenuSelected.bind(this)
    console.log(this.props.children);
  }
  componentWillMount() {}

  handleMenuSelected({item, key, selectedKeys}) {
    console.log(key)
  }
  render() {
    const dropMenu = (<Menu>
      <Menu.Item>
        名字
      </Menu.Item>
      <Menu.Item>
        退出
      </Menu.Item>
    </Menu>)

    return (<Layout style={{
        minHeight: '100%'
      }}>
      <Header style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          height: '52px',
          lineHeight: '52px'
        }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{
            display:'inline-block',
            width: '570px',
            lineHeight: '52px'
          }} onSelect={this.handleMenuSelected}>
          <Menu.Item key="1">首页</Menu.Item>
          <Menu.Item key="2">捕手快报</Menu.Item>
          <Menu.Item key="3">捕手俱乐部</Menu.Item>
          <Menu.Item key="4">捕手论坛</Menu.Item>
          <Menu.Item key="5">HR小贴士</Menu.Item>
          <Menu.Item key="6">个人中心</Menu.Item>
        </Menu>
        <div className={`${style.rootHeaderMsg} fr`}>
          <span>您好，欢迎登录环球捕手内网系统</span>
          <Dropdown overlay={dropMenu}>
            <img className={style.rootAvatarImg} src={'http://www.gravatar.com/avatar/1fb1e7c066f4539455ac4d344441c626?s=120&d=identicon'}/>
          </Dropdown>
        </div>
      </Header>
      <Content style={{
          padding: '0',
          marginTop: 52
        }}>
        {this.props.children}
      </Content>
    </Layout>)
  }
}

export default Root;
