import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

class messageBoard extends Component {

	constructor(){
		super()
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.showWinner = this.showWinner.bind(this)
	}

	showWinner(){
		if(this.props.winner){
			return (<p>The winner is {this.props.winner}</p>)
		}else{
			return (<p>Turns</p>)
		}
	}

	render() {
		return (
			<div>
				{this.showWinner()}
			</div>
		)
	}
}

export default messageBoard