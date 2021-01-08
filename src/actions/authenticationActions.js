export const login =(auth) => {
    return {
        type: 'ADD',
        payload:auth
    }
}

export const logout = () => {
    return {
        type: 'REMOVE'
    }
}