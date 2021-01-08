import { createStore } from 'redux'
import allreducer from './reducers/rootReducer'


export default createStore(allreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())