import React, {Component} from 'react'
import {connect} from 'react-redux'
import { products, homeInfo } from '../actions/homeAction'
import homeSelector from '../selectors/homeSelector'
import { expansion, auth, compose } from '@/utils/hoc'
import { Button } from 'antd'
import style from './home.css'

export class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
    this.handleSwiperClick = this.handleSwiperClick.bind(this)
  }

  componentDidMount() {}

  componentWillMount() {
    // this.state.getHomeInfo()
  }
  handleSwiperClick() {
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getHomeInfo: () => {
      dispatch(homeInfo())
    },
  }
}

export default compose([
  auth,
  expansion(),
  connect(homeSelector, mapDispatchToProps)
], Home);
