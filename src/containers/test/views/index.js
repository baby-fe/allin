import React, { Component } from 'react'
import { Link } from 'react-router'
import './test.less'

class Test extends Component {

	constructor(props){
		super(props)
		this.state = {...props}
	}

	componentDidMount() {
	}
    render() {
        return <div>
        			<span>sdfsdf</span>
        			<Link to="/test/inner/lius"><h2>to-test/inner</h2></Link>
        		</div>
        		
    }
}

export default Test;