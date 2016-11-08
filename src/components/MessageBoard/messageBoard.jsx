import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

class messageBoard extends Component {

	constructor(){
		super()
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.showMessage = this.showMessage.bind(this)
		this.getTurn = this.getTurn.bind(this)
		this.getPiece = this.getPiece.bind(this)
	}

	getTurn(){
		const turn = this.props.turns%2
		const temp = 'Turn for: '
		if(this.props.startPlayer === 0){
			if(turn===0){
				return temp+'O'
			}
			return temp+'X'
			
		}else if(this.props.startPlayer === 1){
			if(turn===0){
				return temp+'X'
			}
				return temp+'O'
		}
		return 'Waiting to start'
	}

	getPiece(){
		if(this.props.piece !== undefined){
			if(this.props.piece === 0){
				return 'O'
			}else{
				return 'X'
			}
		}
	}

	showMessage(){
		if(this.props.winner !== undefined){
			return (<h1>The winner is {this.props.winner === 0?
												'O':'X'}</h1>)
		}else{
			return (
				<div>
					<p>{this.getTurn()}
					</p>
					<br/>
					<h4>You are select: {this.getPiece()}</h4>
				</div>
			)
		}
	}

	render() {
		return (
			<div>
				{this.showMessage()}
			</div>
		)
	}
}

export default messageBoard