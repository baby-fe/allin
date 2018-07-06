import React,{Component} from 'react'
import style from './input.less'

class InputButton extends Component{

	constructor(props){
		super(props)
		let def = {
			btnNeed:false,
			btnText:'',
			btnCallback:undefined
		}
		this.state = Object.assign({}, def, this.props.opts)
	}
	componentWillMount(){
        
    }

	render(){
		if(this.state.btnNeed){
			return(
				<a className={style.inputButton} onClick={this.state.btnCallback}>{this.state.btnText}</a>
			)
		}else{
			return null;
		}
	}
}

export default InputButton;