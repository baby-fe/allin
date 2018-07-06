import React,{Component} from 'react'
import style from './footer.less'

class Footer extends Component{

	constructor(props){
		super(props)
		this.state = {}
		this.state.list = [{
			image:require(`@/images/bar_tb1_gray.png`),
			activedImage:require(`@/images/bar_tb1.png`),
			active:true,
			text:`首页`,
			url:``
		},{
			image:require(`@/images/bar_tb2_gray.png`),
			activedImage:require(`@/images/bar_tb2.png`),
			active:false,
			text:`购物车`,
			url:``
		},{
			image:require(`@/images/bar_tb3_gray.png`),
			activedImage:require(`@/images/bar_tb3.png`),
			active:false,
			text:`精选`,
			url:``
		},{
			image:require(`@/images/bar_tb4_gray.png`),
			activedImage:require(`@/images/bar_tb4.png`),
			active:false,
			text:`我的`,
			url:``
		}]

		this.state.list.map((item, i) => {
			item.active = false
			if(i===this.props.page-1){
				item.active = true
			}
			return item
		})
	}
	componentWillMount(){
        
    }

	render(){
		
		return(
			<div className={style.footer}>
			{
				this.state.list.map((item, index) => {
					return <div className={style.footerContainer} key={item.image}>
								<img alt="" src={item.active?item.activedImage:item.image} className={style.footerContainerImg}/><br/>
								<span className={item.active?`${style.footerContainerSpan} fontColor_black`:style.footerContainerSpan }>{item.text}</span>
							</div>
				})
			}
			</div>
		)
	}
}

export default Footer;