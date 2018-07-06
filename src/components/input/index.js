import React,{Component} from 'react'
import InputButton from './inputButton'
import style from './input.less'

class Input extends Component{

	constructor(props){
		super(props)
		let def = {
			placeholder:'',
			wrapperStyle:'',
			inputStyle:'',
			type:'text',
			value:'',
			btnNeed:false,
			btnText:'',
			btnCallback:undefined
		}
		this.state = Object.assign({}, def, this.props.opts)
		this.state.callback = this.props.callback
		this.state.inputWrapperStyle = style.inputWrapper + ' ' + this.state.wrapperStyle
		this.state.inputStyle = style.input + ' ' + this.state.inputStyle
		this.inputHandle = this.inputHandle.bind(this)
	}
	componentWillMount(){
        
    }
    inputHandle(e){
    	this.state.callback && this.state.callback(e.target.value)
    }
	render(){
		return(
			<div className={this.state.inputWrapperStyle}>
				<input placeholder={this.state.placeholder} type={this.state.type} value={this.props.value} onInput={this.inputHandle} className={this.state.inputStyle}/>
				<InputButton opts={this.state.btnNeed,this.state.btnText,this.state.btnCallback}></InputButton>
			</div>
		)
	}
}

export default Input;