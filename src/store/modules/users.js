import { userBlueprint } from "@/composables/blueprints"
const users = {
  namespaced: true,
  state: {
    list: [
      {
        id: 1,
        editions: 0,
        updated_at: 1670780647000,
        fields: {
          name: {
            label: 'Name',
            value: 'aTimur'
          },
          position: {
            label: 'Position',
            value: 'Dev'
          },
          age: {
            label: 'Age',
            value: 25
          },
          address: {
            label: 'Address',
            value: 'top secret'
          },
          martial: {
            label: 'Marital status',
            value: 'sigma'
          }
        },
        pictures: {
          1: {
            label: 'Main picture',
            value: 'https://www.pngitem.com/pimgs/m/202-2028426_buff-doge-hd-png-download.png'
          },
          2: {
            label: 'Second picture',
            value: null
          },
          3: {
            label: 'Third picture',
            value: null
          }
        }
      },
      {
        id: 2,
        editions: 0,
        updated_at: 1670780647000,
        fields: {
          name: {
            label: 'Name',
            value: 'bTimur'
          },
          position: {
            label: 'Position',
            value: ''
          },
          age: {
            label: 'Age',
            value: 25
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
          1: {
            label: 'Main picture',
            value: ''
          },
          2: {
            label: 'Second picture',
            value: 'https://www.pngitem.com/pimgs/m/202-2028426_buff-doge-hd-png-download.png'
          },
          3: {
            label: 'Third picture',
            value: null
          }
        }
      },
      {
        id: 3,
        editions: 0,
        updated_at: 1670780647000,
        fields: {
          name: {
            label: 'Name',
            value: 'cTimur'
          },
          position: {
            label: 'Position',
            value: 'Dev'
          },
          age: {
            label: 'Age',
            value: 25
          },
          address: {
            label: 'Address',
            value: 'top secret'
          },
          martial: {
            label: 'Marital status',
            value: 'sigma'
          }
        },
        pictures: {
          1: {
            label: 'Main picture',
            value: 'https://www.pngitem.com/pimgs/m/202-2028426_buff-doge-hd-png-download.png'
          },
          2: {
            label: 'Second picture',
            value: null
          },
          3: {
            label: 'Third picture',
            value: null
          }
        }
      },
      {
        id: 4,
        editions: 0,
        updated_at: 1670780647000,
        fields: {
          name: {
            label: 'Name',
            value: 'dTimur'
          },
          position: {
            label: 'Position',
            value: 'Dev'
          },
          age: {
            label: 'Age',
            value: 25
          },
          address: {
            label: 'Address',
            value: 'top secret'
          },
          martial: {
            label: 'Marital status',
            value: 'sigma'
          }
        },
        pictures: {
          1: {
            label: 'Main picture',
            value: 'https://www.pngitem.com/pimgs/m/202-2028426_buff-doge-hd-png-download.png'
          },
          2: {
            label: 'Second picture',
            value: null
          },
          3: {
            label: 'Third picture',
            value: null
          }
        }
      },
    ]
  },
  getters: {
  },
  mutations: {
    CREATE_USER(state) {
      const newId = state.list.length > 0 ? state.list[state.list.length - 1].id + 1 : 1
      const newUser = userBlueprint(newId)
      state.list.push(newUser)
    },
    EDIT_USER(state, payload) {
      const index = state.list.findIndex(user => user.id === payload.id)
      state.list[index] = {
        ...payload,
        editions: payload.editions + 1,
        updated_at: Date.now()
      }
    },
    REMOVE_USER(state, id) {
      const index = state.list.findIndex(user => user.id === id)
      state.list.splice(index, 1)
    },
  },
  actions: {
    createUser({ commit }) {
      commit('CREATE_USER')
    },
    editUser({ commit }, user) {
      commit('EDIT_USER', user)
    },
    removeUser({ commit }, id) {
      commit('REMOVE_USER', id)
    }
  }
}

export default users