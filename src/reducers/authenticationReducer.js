const initialState =  {
    authenticated: true,
    username: 'supplier',
    id: 4,
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InN1cHBsaWVyIn0.0k0AnWaRPJJZywQ9pyj1N6n8EP6ldOWOQcP-f29YpO0'
  }

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