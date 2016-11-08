import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import styles from './controlPanel.css'


class controlPanel extends Component {

	constructor(){
		super()
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
		this.isDisabled = this.isDisabled.bind(this)
	}

	isDisabled(){

		if(this.props.startPlayer === undefined ){
			return false
		}else{
			return true
		}
	}

	render() {
		return (
			<div className={styles.controlPanel}>			
				<div>
					<Button id='circle' 
							className={styles.button} 
							bsStyle="primary"
							onClick={() => this.props.setPiece(0)}>
						<i className='fa fa-circle-o fa-3x' ></i>
					</Button> 
					<Button id='black' 
							className={styles.button} 
							bsStyle="primary"
							onClick={() => this.props.setPiece(1)}>
						<i className='fa fa-times fa-3x'></i>
					</Button> 
				</div>
				<div>
					<Button id='start' 
							className={styles.button} 
							bsStyle="primary"
							disabled={this.isDisabled()}
							onClick={() => this.props.start()}>
						<strong>Start</strong>
					</Button> 
					<Button id='reset' 
							className={styles.button} 
							bsStyle="primary"
							onClick={() => this.props.reset()}>
						<strong>Reset</strong>
					</Button> 
				</div>
			</div>
		)
	}
}

export default controlPanel