export function addPackage(payload, column,position) {
    return {
      type: 'ADD',
      payload:payload,
      column,
      position
    }
  }

  export function updatePackage(payload) {
    return {
      type: 'UPDATE',
      payload
    }
  }

  export function removePackage(id) {
    return {
      type: 'DELETE',
      payload:id
    }
  }
