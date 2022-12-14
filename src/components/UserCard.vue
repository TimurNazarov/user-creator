<script  setup>
import ProgressCircle from '@/components/ProgressCircle'
import { measureProgress } from '@/composables/useUtils'
import { computed } from 'vue'
const props = defineProps(['user', 'active'])
const progress = computed(() => measureProgress({...props.user.fields, ...props.user.pictures}))

const placeholderImage = computed(() => {
  return require('@/assets/img/placeholder_picture.png')
})
</script>

<template>
  <div class="bg-hex-0A588B rounded-2xl relative">
      <img
        class="absolute top-1/2 transform -translate-y-1/2 right-30px"
        src="@/assets/icons/check.svg"
        alt="check"
      >
    <div :class="`flex items-center justify-between bg-white rounded-2xl py-30px px-40px transition-all
      ${active ? 'w-[80%]' : 'w-full'}
    `">
      <div
        :class="`bg-hex-C4C4C4 rounded-full overflow-hidden w-85px h-85px cursor-pointer mr-24px
        ${user.pictures[0].value ? '' : 'p-25px'}
        `"
      >
        <img
          :src="user.pictures[0].value || placeholderImage"
        >
      </div>
      <div class="flex-1">
        <h2 class="font-bold text-22px">{{ user.fields.name.value }}</h2>
        <p class="text-18px">{{ user.fields.position.value }}</p>
      </div>
      <div :class="`transition
        ${active ? 'opacity-0' : 'opacity-100'}
      `">
        <ProgressCircle :progress="progress" />
      </div>
    </div>
  </div>
</template>
