export function setState(state){
	return {
		type: 'SET_STATE',
		state
	}
}

export function place(move){

	return {
		meta: {remote: true},
		type: 'PLACE',
		move
	}
}

export function reset(){
	return {
		meta: {remote: true},
		type: 'RESET'
	}
}