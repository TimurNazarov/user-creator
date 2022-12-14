<script setup>
  import { reactive, computed } from 'vue'
  import { useStore } from 'vuex'
  import UserList from '@/components/UserList'
  import UserCard from '@/components/UserCard'
  import ViewUser from '@/components/ViewUser'
  import EditUser from '@/components/EditUser'
  const store = useStore()
  const state = reactive({
    order: null,
    activeUserId: null,
    mode: 'view'
  })
  const sortedList = computed(() =>  state.order ? store.state.users.sort((a, b) => {
    return state.order === 'asc' ? a.fields.name.value.localeCompare(b.fields.name.value) : b.fields.name.value.localeCompare(a.fields.name.value)
  }) : store.state.users)

  const activeUser = computed(() => store.state.users?.find(user => user.id === state.activeUserId) || store.state.users[0])
  function sortUsers() {
    state.order = state.order === 'asc' ? 'desc' : 'asc'
  }

  function createUser() {
    store.dispatch('createUser')
    state.activeUserId = store.state.users[store.state.users.length - 1].id
  }
  async function editUser(user) {
    await store.dispatch('editUser', user)
    state.mode = 'view'
  }
  function removeUser(id) {
    if(confirm('Do you want to remove this user?')) {
      store.dispatch('removeUser', id)
      state.activeUserId = store.state.users[0]?.id
    }
  }
</script>

<template>
  <main class="flex h-full">
    <aside class="w-600px max-h-full bg-hex-E5E5E5">
      <UserList
        class="flex-1 py-50px px-40px"
        :list="sortedList" 
        v-slot="{ user }"
        @selectUser="state.activeUserId = $event"
        @addUser="createUser"
        @sortUsers="sortUsers"
      >
        <UserCard :user="user" :active="activeUser.id === user.id"/>
      </UserList>
    </aside>
    <section class="flex-1">
      <ViewUser
        v-if="state.mode === 'view'"
        class="bg-white h-full pt-120px"
        :user="activeUser"
        @edit="state.mode = 'edit'"
        @remove="removeUser"
      />
      <EditUser
        v-else-if="state.mode === 'edit'"
        class="bg-hex-EEEEEE h-full pt-70px px-80px"
        :style="{
          'box-shadow': '0px 0px 40px 10px rgba(0, 0, 0, 0.1)' // figma
        }"
        :user="activeUser"
        @cancel="state.mode = 'view'"
        @submit="editUser"
      />
    </section>
  </main>
</template>
