const initialState =  {
    authenticated: true,
    username: 'hubmanager',
    id: 3,
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Imh1Ym1hbmFnZXIifQ.tODfJNVVWx20qpaVsY-fhKxplmI8B8ivuFHUyt9Yx1I'
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