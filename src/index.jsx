import React from 'react'
import { render } from 'react-dom'
import {fromJS} from 'immutable'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import io from 'socket.io-client'
import reducer from './reducer'
import {setState} from './action_creators'
import remoteActionMiddleware from './remote_action_middleware'

import {AppContainer} from './components/App'

const socket = io(`${location.protocol}//${location.hostname}:8090`)
socket.on('state', state => {
	console.log(state)
	// console.log(store)
	store.dispatch(setState(state))
})

const createStoreWithMiddleware = applyMiddleware(
	remoteActionMiddleware(socket)
)(createStore)
const store = createStoreWithMiddleware(reducer)

render(
	<Provider store={store}>
		<AppContainer /> 
	</Provider>,
	document.getElementById('app')
)
