import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import styles from './controlPanel.css'


class controlPanel extends Component {

	constructor(){
		super()
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.selectCircle = this.selectCircle.bind(this)
		this.selectX = this.selectX.bind(this)
		this.start = this.start.bind(this)
		this.reset = this.reset.bind(this)
	}

	selectCircle(){
		console.log('circle')
	}

	selectX(){
		console.log('x')
	}

	start(){
		console.log('start')
	}

	reset(){
		this.props.reset();
	}

	render() {
		return (
			<div className={styles.controlPanel}>			
				<div>
					<Button id='white' 
							className={styles.button} 
							bsStyle="primary"
							onClick={this.selectCircle}>
						<i className='fa fa-circle-o fa-3x' ></i>
					</Button> 
					<Button id='black' 
							className={styles.button} 
							bsStyle="primary"
							onClick={this.selectX}>
						<i className='fa fa-times fa-3x'></i>
					</Button> 
				</div>
				<div>
					<Button id='start' 
							className={styles.button} 
							bsStyle="primary"
							onClick={this.start}>
						<strong>Start</strong>
					</Button> 
					<Button id='reset' 
							className={styles.button} 
							bsStyle="primary"
							onClick={this.reset}>
						<strong>Reset</strong>
					</Button> 
				</div>
			</div>
		)
	}
}

export default controlPanel