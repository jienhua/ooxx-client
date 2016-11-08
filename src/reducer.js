import {Map} from 'immutable'

function setState(state, newState){
	// console.log(state)
	// console.log(state.merge(newState).toJS())
	return state.merge(newState)
}

function setPiece(state, piece){
	console.log(state.set('choosePiece', piece).toJS())
	return state.set('choosePiece', piece)
}

function reset(state){
	return state.remove('startPlayer')
				.remove('winner')
				.remove('choosePiece')
}

export default function(state = Map(), action){

	switch(action.type){
		case 'SET_STATE':
			return setState(state, action.state)
		case 'SET_PIECE':
			return setPiece(state, action.piece)
		case 'RESET':
			return reset(state)
	}
	return state
}

