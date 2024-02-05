import { createStore ,combineReducers,applyMiddleware} from 'redux'
import productReducer from './productReducer'
import cakeReducer from './cakeReducer'
import logger from 'redux-logger'
import  {thunk} from 'redux-thunk'

const reducer=combineReducers({
    products:productReducer,
    cake:cakeReducer
})
const store = createStore(reducer,applyMiddleware(logger,thunk))
export default store