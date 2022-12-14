export function userBlueprint(id) {
  return {
    id: id,
    editions: 0,
    updated_at: Date.now(),
    fields: {
      name: {
        label: 'Name',
        value: 'NEW USER'
      },
      position: {
        label: 'Position',
        value: ''
      },
      age: {
        label: 'Age',
        value: ''
      },
      address: {
        label: 'Address',
        value: ''
      },
      martial: {
        label: 'Marital status',
        value: ''
      }
    },
    pictures: {
      0: {
        label: 'Main picture',
        value: null
      },
      1: {
        label: 'Second picture',
        value: null
      },
      2: {
        label: 'Third picture',
        value: null
      }
    }
  }
}