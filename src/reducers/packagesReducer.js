
const initialState = {
  columns: [
    {
      id: 1,
      title: 'WITH SUPLIER',
      cards: []
    },
    {
      id: 2,
      title: 'AT GREEN MILE HUB',
      cards: []
    },
    {
      id: 3,
      title: 'REBUNDLING',
      cards: []
    },
    {
      id: 4,
      title: 'ON FLEET',
      cards: []
    },
    {
      id: 5,
      title: 'DELIVERED',
      cards: []
    }
  ]
}

export default function packageReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
          return state
        case 'UPDATE':
          return {...action.payload}
        case 'DELETE':
          return state;
        default:
            return state
    }
}