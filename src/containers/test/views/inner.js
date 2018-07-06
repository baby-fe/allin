import React, { Component } from 'react'

class Inner extends Component {

	constructor(props){
		super(props)
		this.state = {...props}
	}

	componentDidMount() {
	}
    render() {
        console.log('innerProp:',this.props)
        return <div>
        			<span>inner-{this.props.params.name}</span>
        		</div>
        		
    }
}

export default Inner;