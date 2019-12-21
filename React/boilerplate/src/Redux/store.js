import {createStore} from 'redux'
import cakeReducer from './cake/cakeReducer'

const store = createStore(cakeReducer)


// import rootreducer
//const store = createStore(rootReducer)

export default store