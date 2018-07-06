import React,{Component} from 'react'
import style from './lazyImg.less'

class LazyImg extends Component{

	constructor(props){
		super(props)
		this.state = {}
		let ops = {
			showDefault:false,
			imgSrc:'',
			url:'',
			alt:'',
			className:''
		}
		this.state.options = Object.assign({},ops,this.props.ops)
	}
	componentWillMount(){
        
    }

	render(){
		const opts = this.state.options
		return(
			<img alt={opts.alt} className={opts.className} src={opts.imgSrc}/>
		)
	}
}

export default LazyImg;