import { combineReducers } from 'redux';
import { employeeReducer } from './employeeReducer';
const reducer = combineReducers({
    employeeState: employeeReducer
})

export default reducer;