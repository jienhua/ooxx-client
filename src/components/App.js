import React, {Component}from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux'

import Board from './board/board'
import MessageBoard from './MessageBoard/messageBoard'
import ControlPanel from './ControlPanel/controlPanel'
import * as actionCreators from '../action_creators'

import './app.css'

class App extends Component {
	constructor(){
		super()
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}

  	render() {
	    return (
	    	<div className='container'>
	    		<Row>
	    			<Col sm={6}>
	    				{<Board 
	    					board={this.props.board} 
	    					place={this.props.place}
	    					turns={this.props.turns}
	    					startPlayer={this.props.startPlayer}
	    					piece={this.props.piece}
	    					winner={this.props.winner}
	    				/>}
	    				{/*console.log(this.props.board)*/}
	    			</Col>
	    			<Col sm={6}>
	    				<MessageBoard 
	    					winner={this.props.winner} 
	    					turns={this.props.turns} 
	    					piece={this.props.piece}
	    					startPlayer={this.props.startPlayer}
	    				/>
	    				<ControlPanel 
	    					reset={this.props.reset} 
	    					setPiece={this.props.setPiece}
	    					start={this.props.start}
	    					startPlayer={this.props.startPlayer}
	    				/>
	    			</Col>
	    		</Row>		
	    	</div>
	    )
  	}
}

function mapStateToProps(state) {
	// console.log(state.toJS())
	return {
		board: state.get('board'),
		turns: state.get('turns'),
		winner: state.get('winner'),
		startPlayer: state.get('startPlayer'),
		piece: state.get('choosePiece')
	}
}

export const AppContainer = connect(
	mapStateToProps,
	actionCreators
)(App)