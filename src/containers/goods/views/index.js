import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swiper from '@/components/swiper'
import {getProDetailAction} from '../actions/action-goods'
import selectorGoods from '../selectors/selector-goods'
import { expansion, auth, compose } from '@/utils/hoc'
import style from './goods_detail.less'

export class Goods extends Component {

	constructor(props){
		super(props)
		this.state = {...props}
        this.handleSwiperClick = this.handleSwiperClick.bind(this)
	}

	componentDidMount() {
	}

    componentWillMount(){
        this.state.getProductDetail(this.props.params.id)
    }
    handleSwiperClick(){
    }

    render() {
        if(!this.props.banners) return null
        return <div className={style.home}>
                    <Swiper opts={{continuous: false,pagination:true,sum:this.props.banners.size}}>
                        {
                            this.props.banners.map((item,index) => {
                                return <div key={item.get('content')}><img alt="" className={style.bannerImg} src={item.get('content')}></img></div>
                            })
                        }
                    </Swiper>
        		</div>
        		
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getProductDetail:(id) => {
            dispatch(getProDetailAction(id))
        }
    }
}

export default compose([auth, expansion(),connect(selectorGoods, mapDispatchToProps)],Goods);

