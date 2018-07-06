import React,{Component} from 'react'
import ReactSwipe from 'react-swipe'
import style from './swiper.less'

class Swiper extends Component{

	constructor(props){
		super(props)
		this.state={
			sum:0,
			currentPage:0
		}
		this.resetPage = this.resetPage.bind(this)
	}
	componentWillMount(){
        this.options = {...this.props.opts}
		if(this.props.opts.pagination && this.props.opts.sum>0){
			this.setState({
				sum:this.props.opts.sum||0,
				currentPage:0
			})
			this.options.callback = this.resetPage
        }
    }
    resetPage(index, elem){
    	this.setState({
			currentPage:index
		})
    }

	render(){
		let _paginations = []
		for (var i = 0; i < this.state.sum; i++) {
			_paginations.push(<li key={i} className={`${style.swiperPagination} ${this.state.currentPage===i?style.swiperPaginationActive:'' }`}><i></i></li>)
		}
		return(
			<div className={`position_relative`}>
				<ReactSwipe className={`${style.swiper} carousel`} swipeOptions={this.options} ref={(reactSwipe) => {this.reactSwipe=reactSwipe}}>
                    {
                        this.props.children
                    }
                </ReactSwipe>
                <ul className={style.swiperUl}>
	                {
	                	_paginations
	                }
                </ul>
            </div>
		)
	}
}

export default Swiper;