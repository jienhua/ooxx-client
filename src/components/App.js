import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'


import Board from './board/board'
import MessageBoard from './MessageBoard/messageBoard'
import ControlPanel from './ControlPanel/controlPanel'
import './app.css'

export default React.createClass({
  render() {
    return (
    	<div>
    		<Grid>
    			<Row>
    				<Col xs={6}>
    					Board
    				</Col>
    				<Col xs={6}>
    					<MessageBoard winner="Bob" />
    					<ControlPanel/>
    				</Col>
    			</Row>
    		</Grid>    		
    	</div>
    )
  }
})
