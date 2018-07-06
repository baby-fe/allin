import React, {
    Component
} from 'react'
import style from './home.less'
export class PlaceHolderImg extends Component {
    constructor(props) {
        super(props)
        this.state = { ...props
        }
    }
    componentDidMount() {}
    componentWillMount() {}
    render() {
        // const placeholderImg = require(`@/images/loading.png`)
        return <img src = {
            require(`@/images/default.png`)
        }
        alt = {
            `placeholder`
        }
        className = {
            style.productItemImg
        }
        />
    }
}
export default PlaceHolderImg;