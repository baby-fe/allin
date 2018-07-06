import React from 'react'
import ReactDOM from 'react-dom'
import Loading from './index'

let StaticLoading = {
	default:() => {
		let _div = document.createElement('div')
    	document.body.appendChild(_div)
    	_div.className = 'loadingComp'
    	_div.style.width = '100%'
    	_div.style.height = '100%'
    	ReactDOM.render((
    		<Loading show={true}></Loading>
    		),_div)
    	StaticLoading.instance = _div
	},
	show:() => {
		StaticLoading.default()
	},
	remove:() => {
		// const nodes = document.querySelectorAll('.loadingComp')
		// nodes.forEach(node => {
		// 	StaticLoading.instance && document.body.removeChild(node)
		// })
		StaticLoading.instance && document.body.removeChild(StaticLoading.instance)
	},
	instance:undefined
}

export default StaticLoading;