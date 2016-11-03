import React from 'react'
import { render } from 'react-dom'
import App from './components/App'


const store = {
	board: [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]],
	turns: 0
}

render(
	<App store={store}/>, 
	document.getElementById('app')
)
