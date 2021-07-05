import {combineReducers} from 'redux'
import riskReducerMale from './riskReducerMale'
import riskReducerFemale from './riskReducerFemale'

const rootReducer = combineReducers({
    riskReducerMale,
    riskReducerFemale
})

export default rootReducer