const initialState = {
    columns: [
      {
        id: 1,
        title: 'WITH SUPLIER',
        cards: [
          {
            id: 1,
            title: 'AT GREEN MILE HUB',
            description: 'Add capability to add a card in a column'
          },
        ]
      },
      {
        id: 2,
        title: 'AT GREEN MILE HUB',
        cards: [
          {
            id: 2,
            title: 'Drag-n-drop support',
            description: 'Move a card between the columns'
          },
        ]
      },
      {
        id: 3,
        title: 'REBUNDLING',
        cards: [
          {
            id: 3,
            title: 'Drag-n-drop support',
            description: 'Move a card between the columns'
          },
        ]
      },
      {
        id: 4,
        title: 'ON FLEET',
        cards: [
          {
            id: 4,
            title: 'Drag-n-drop support',
            description: 'Move a card between the columns'
          },
        ]
      },
      {
        id: 5,
        title: 'DELIVERED',
        cards: [
          
        ]
      }
    ]
  }

export default function noteReducer(state = initialState, action) {
    switch (action.type) {

        case action.ADD_TODO: {
            const newnote= action.payload
            return Object.assign({}, state, {
                todos: state.notes_list.concat(newnote)
            })
            }

        case action.REMOVE_TODO:
            const notes = state.notes_list.filter(note => note.id != action.payload.id)
            return Object.assign({}, state , {
                notes
            })
        default:
            return state
    }
}