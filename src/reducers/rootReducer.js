import {combineReducers} from "redux";
import packagesReducer from './packagesReducer'
import auth from './authenticationReducer'
const rootReducer = combineReducers({
    shipment:packagesReducer,
    authentication:auth,
});


export default rootReducer;