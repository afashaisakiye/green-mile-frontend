const initialState = false

export default function authenticationReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD': 
            return action.payload
        case 'REMOVE':
            return false
        default:
            return state
    }
}