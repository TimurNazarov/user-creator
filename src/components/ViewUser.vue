<script  setup>
import { reactive, computed } from 'vue'
import ProgressBar from '@/components/ProgressBar'
import { measureProgress, formatDate } from '@/composables/useUtils'
const props = defineProps(['user'])

const state = reactive({
  activePicture: 1
})

const progress = computed(() => measureProgress({...props.user.fields, ...props.user.pictures}))

const placeholderImage = computed(() => {
  return require('@/assets/img/placeholder_picture.png')
})

</script>

<template>
  <div class="flex justify-center items-start">
    <div class="flex flex-col items-end w-980px">
      <div class="w-full max-w-625px">
        <p class="mb-30px">profile completed on</p>
        <ProgressBar class="mb-55px" :progress="progress" />
      </div>
      <div class="flex bg-hex-EEEEEE rounded-2xl w-full py-40px px-35px">
        <div class="mr-34px">
          <div class="flex items-end h-400px w-full max-w-300px mb-24px rounded-xl bg-hex-C4C4C4 transform origin-bottom-right scale-150">
            <div
              class="w-full h-full rounded-xl bg-cover bg-no-repeat bg-center"
              :style="{
                'background-image': `url(${user.pictures[state.activePicture].value || placeholderImage})`,
                'background-size': `${user.pictures[state.activePicture].value ? 'cover' : '60px'}`
              }"
            />
          </div>
          <div class="grid grid-cols-3 gap-x-22px">
            <div
              :class="`bg-hex-C4C4C4 rounded-full overflow-hidden w-85px h-85px cursor-pointer
              ${user.pictures[index].value ? '' : 'p-25px'}
              ${index === state.activePicture ? 'border-2px border-hex-06D6A0' : ''}
              `"
              v-for="index in 3"
              @click="state.activePicture = index"
            >
              <img
                :src="user.pictures[index].value || placeholderImage"
              >
            </div>
          </div>
        </div>
        <div class="flex flex-col items-start flex-1">
          <div class="flex justify-between w-full">
            <div>
              <h1 class="font-bold text-32px mb-4px">Personal data</h1>
              <p class="text-14px mb-68px">
                <span class="mr-45px">updated at: {{ formatDate(user.updated_at) }}</span>
                <span>number of editions: {{ user.editions }}</span>
              </p>
            </div>
            <div class="flex items-start">
              <img
                class="w-70px cursor-pointer"
                src="@/assets/icons/edit.svg"
                alt="edit"
                @click="$emit('edit', user.id)"
              >
              <img
                class="w-70px cursor-pointer"
                src="@/assets/icons/remove.svg"
                alt="remove"
                @click="$emit('remove', user.id)"
              >
            </div>
          </div>
          <div class="text-20px text-center grid grid-cols-2 gap-y-32px gap-x-16px">
              <template v-for="field in user.fields">
                <span class="font-bold text-right">{{ field.label }}:</span>
                <span class="text-left">{{ field.value || '-' }}</span>
              </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
