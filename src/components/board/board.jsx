import React, {Component} from 'react'

import styles from './board.css'

class Board extends Component{

	constructor(){
		super()
		this.put = this.put.bind(this)
		this.showAbleToMove = this.showAbleToMove.bind(this)
		this.hideAbleToMove = this.hideAbleToMove.bind(this)
	}

	put(e){

		if(e.target.id === 'parent'){
			e.target.children[0].className = styles.circle
		}else{
			e.target.className = styles.circle

		}

	}

	showAbleToMove(e){
		
		if(e.target.children[0].className === ''){
		   e.target.children[0].className = [styles.circle, styles.hover].join(' ')
		}
	}

	hideAbleToMove(e){

		if(e.target.children[0].classList.contains(styles.hover)){
			e.target.children[0].classList.remove(styles.circle, styles.hover)
		}
	}

	render() {
		return (
			<div className='container'>
				<table className={styles.board}>
					<tbody>
					{
						this.props.board.map((r, index)=>{
							const row = r.map((c, index) =>{
								return (
									<td key={index}>
										<div id='parent' 
											 className={styles.square} 
											 onClick={this.put} 
											 onMouseEnter={this.showAbleToMove}
											 onMouseLeave={this.hideAbleToMove}>
											<div id='child' className=''></div>
										</div>
									</td>
								)
							})
							
							return(
								<tr key={index}>
									{row}
								</tr>
							)
						})
					}
					</tbody>
				</table>

				<div className={styles.x}><i className=''></i></div>
				<div className={styles}></div>
			</div>
		)
	}
}

export default Board