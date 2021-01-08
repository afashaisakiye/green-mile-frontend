export function addPackage() {
    return {
      type: 'ADD_TODO',
      payload:{title, content}
    }
  }

export function deletePackage(id) {
    return {
      type: 'REMOVE_TODO',
      payload:id
    }
  }


  export function transferPackage(id, status) {
    return {
      type: 'CHANGE_STATUS',
      payload:id
    }
  }