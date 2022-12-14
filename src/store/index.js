import { createStore } from 'vuex'
import { userBlueprint } from "@/composables/blueprints"
import { initializeApp } from "firebase/app";
import { getDatabase, ref as dbRef, onValue, set, remove } from "firebase/database"
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"
import { firebaseConfig } from '@/composables/config'

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const store = createStore({
  state: {
    users: []
  },
  getters: {
  },
  mutations: {
    UPDATE_USERS_LIST(state, newList) {
      state.users = newList
    },
  },
  actions: {
    createUser({ state }) {
      const newId = state.users.length > 0 ? state.users[state.users.length - 1].id + 1 : 0
      set(dbRef(database, 'users/' + newId), userBlueprint(newId))
    },
    async editUser(context, user) {
      const uploads = user.pictures.map(async (pic, index) => {
        if(pic.value instanceof File) {
          const storage = getStorage(app)
          const stRef = storageRef(storage, `user-${user.id}-${index}.png`)
          console.log('start upload' + index);
          await uploadBytes(stRef, pic.value)
          return getDownloadURL(stRef)
        }
      })
      const uploaded = await Promise.all(uploads)

      const updatedPictures = user.pictures.map((pic, index) => { return {...pic, value: uploaded[index] || pic.value || null }})
      
      const editedUser = {
        ...user,
        pictures: updatedPictures,
        editions: user.editions + 1,
        updated_at: Date.now()
      }

      set(dbRef(database, 'users/' + user.id), editedUser)
    },
    removeUser({ commit }, id) {
      remove(dbRef(database, 'users/' + id))
    }
  },
})

const usersRef = dbRef(database, 'users')
onValue(usersRef, (snapshot) => {
  const data = snapshot.val()
  store.commit('UPDATE_USERS_LIST', [...Object.values(data || {})])
})



export default store