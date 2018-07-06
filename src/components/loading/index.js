import React,{Component} from 'react'
import style from './loading.less'

class Loading extends Component{

	constructor(props){
		super(props)
	}
	componentWillMount(){
        
    }
	render(){
		if(!this.props.show) return null
		return(
			<div className={`fix ${style.loadingWrapper}`}>
				<img src={require(`@/images/loading.png`)} className={style.loadingImg}/>
            </div>
		)
	}
}

export default Loading;
