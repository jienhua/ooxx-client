import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin';

import styles from './board.css'

class Board extends Component{

	constructor(props){
		super(props)
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.put = this.put.bind(this)
		this.showAbleToMove = this.showAbleToMove.bind(this)
		this.hideAbleToMove = this.hideAbleToMove.bind(this)
		this.getBoard = this.getBoard.bind(this)
		this.isYourTurn = this.isYourTurn.bind(this)
	}

	getBoard(){
		return this.props.board || [];
	}

	put(e){
		
		const number = e.target.id.split('-')[1]
		const table = this.getBoard().toJS()

		if(this.isYourTurn() && table[parseInt(number/3)][parseInt(number%3)]===-1){
			this.props.place(number)
		}
	}

	showAbleToMove(e){
		
		if(e.target.children[0].className === '' && this.isYourTurn()){
			if(this.props.piece === 0){
		   		e.target.children[0].className = [styles.circle, styles.hover].join(' ')
			}else{
				e.target.children[0].className = [styles.x, styles.hover].join(' ')
			}
		}
	}

	hideAbleToMove(e){

		if(e.target.children[0].classList.contains(styles.hover)){
			e.target.children[0].classList.remove(styles.circle, styles.x, styles.hover)
		}
	}

	isYourTurn(){

		if(this.props.winner){
			return false
		}
		let turn = this.props.turns%2 
		if(this.props.startPlayer ===1){
			if(turn !== this.props.piece ){
				return true
			}
		}else if(this.props.startPlayer ===0){
			if(turn === this.props.piece)
				return true
		}

		return false
	}

	render() {
		return (
			<div className='container'>
				<table className={styles.board}>
					<tbody>
					{
						this.getBoard().map((r, ri)=>{
							const row = r.map((c, ci) =>{
								return (
									<td key={ci}>
										<div id={'parent-'+(ri*3+ci).toString()} 
											 className={styles.square} 
											 onClick={this.put} 
											 onMouseEnter={this.showAbleToMove}
											 onMouseLeave={this.hideAbleToMove}
											 >
											
											{c === 0? 
												<div id={'child-'+(ri*3+ci).toString()} className={styles.circle}></div> :
												c===1?
												<div id={'child-'+(ri*3+ci).toString()} className={styles.x}></div>:
												<div id={'child-'+(ri*3+ci).toString()}></div>}
										</div>
									</td>
								)
							})
							
							return(
								<tr key={ri}>
									{row}
								</tr>
							)
						})
					}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Board

