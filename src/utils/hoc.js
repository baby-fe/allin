import React, { Component } from 'react'
import { hashHistory,browserHistory } from 'react-router'

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
/**
 * compose functions from left
 * @param  {Array}
 * @param  {Component}
 * @return {Component}
 */
export const compose = (fns, component) => {
  return fns.reduce((item, fn) => {return fn(item)}, component);
}

/**
 * 反向继承，渲染劫持
 * @param  {Component}
 * @return {Component}
 */
export const auth = (WrappedComp) => {
  return class Auth extends WrappedComp {
    render(){
      console.log('auth:',this.props)
      if(!this.props.__state_login) {
        // history.push(`/login`)
        // return null
        return super.render();
      } else {
        return super.render();
      }
    }
  }
}

/**
 * 属性代理，扩充属性
 * @param  {Object}
 * @return {Function}
 */
export const expansion = (extraProps = {}) => {
  return (WrappedComp) => {
    return class Expansion extends Component {
      render(){
        let props = Object.assign({},this.props,{...extraProps, history:history})
        return <WrappedComp {...props}/>
      }
    }
  }
}
