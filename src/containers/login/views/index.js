import React, { Component } from 'react'
import Input from '@/components/input'
import { connect } from 'react-redux'
import {userLogin} from '../actions/action-login'
import { expansion, compose } from '@/utils/hoc'
import { Button } from 'antd'
import style from './login.less'

class Login extends Component {

	constructor(props){
		super(props)
		this.state = {...props}
        this.login = this.login.bind(this)
        this.nameHandle = this.nameHandle.bind(this)
        this.pswHandle = this.pswHandle.bind(this)
	}

	componentDidMount() {
	}
    login(){
        console.log(this._name + this._psw)
        if(/\W+/.test(this._name)){
            alert('用户名不合法')
            return
        }
        this.props.userLogin(this._name, this._psw)
        console.log('history:',this.props.history)
        this.props.history.goBack();
    }
    nameHandle(value){
        this._name = value
    }
    pswHandle(value){
        this._psw = value
    }
    render() {
        let _input = {
            wrapperStyle:style.loginInputWrapper,
            inputStyle:style.loginInput,
            placeholder:'用户名'
        }
        return <div className={style.login}>
					<Button></Button>
                    <h1 className={style.title}>登录test</h1>
                    <Input opts={{..._input,placeholder:'用户名'}} callback={this.nameHandle}></Input>
        			<Input opts={{..._input,placeholder:'密码',type:'password'}} callback={this.pswHandle}></Input>
                    <button className={style.loginSubmit} onClick={this.login}>登录</button>
        		</div>

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userLogin:(name, psw) => {
            dispatch(userLogin(name, psw))
        }
    }
}

export default compose([expansion(),connect(null, mapDispatchToProps)],Login);
