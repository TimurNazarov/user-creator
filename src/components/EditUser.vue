<script  setup>
import { reactive, watch } from 'vue'
import Button from '@/components/Button'
import UploadBox from '@/components/UploadBox'
import InputField from '@/components/InputField'
const props = defineProps(['user'])

const state = reactive({
  editedUser: null
})
watch(
  () => props.user,
  (newUser) => {
    state.editedUser = JSON.parse(JSON.stringify(newUser)) // deep copy
  },
  { immediate: true }
)
function updatePicture(id, picture) {
  state.editedUser.pictures[id].value = picture
}
</script>

<template>
  <div>
    <section class="flex justify-between items-center mb-80px">
      <h1 class="font-bold text-32px">New User</h1>
      <Button class="max-w-220px ml-auto mr-52px" @click="$emit('submit', state.editedUser)">
        Save
      </Button>
      <img
        class="cursor-pointer"
        src="@/assets/icons/cancel.svg"
        alt="cancel"
        @click="$emit('cancel')"
      >
    </section>
    <section class="mb-75px">
      <h1 class="font-bold text-32px mb-32px">Upload photos</h1>
      <div class="grid grid-cols-3 gap-x-80px">
        <UploadBox
          v-for="(picture, id) in state.editedUser.pictures"
          class="h-300px"
          :picture="picture.value"
          @uploaded="updatePicture(id, $event)"
        />
      </div>
    </section>
    <section>
      <h1 class="font-bold text-32px mb-32px">Fill The Form</h1>
      <div class="grid grid-cols-3 gap-x-80px gap-y-50px">
        <InputField
          v-for="(field, slug) in state.editedUser.fields"
          :class="`${slug === 'address' ? 'col-span-2' : ''}`" 
          v-model="field.value"
          :label="field.label"
        />
      </div>
    </section>
  </div>
</template>
