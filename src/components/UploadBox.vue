<script  setup>
import { computed, reactive } from 'vue'
const props = defineProps(['picture'])
const emit = defineEmits(['uploaded'])

const state = reactive({
  url: null
})

function handleFile(file) {
  state.url = URL.createObjectURL(file)
  emit('uploaded', file)
}
const placeholderImage = computed(() => {
  return require('@/assets/icons/upload_file.svg')
})
</script>

<template>
  <label class="cursor-pointer">
    <input
      class="w-0 opacity-0"
      type="file"
      @change="handleFile($event.target.files[0])"
    >
    <div
      :class="`h-268px border-2px border-dashed border-hex-C4C4C4 hover:border-hex-0A588B bg-no-repeat bg-center
      ${props.picture ? 'transparent' : 'bg-white'}
      `"
      :style="{
        'background-image': `url(${state.url || props.picture || placeholderImage})`,
        'background-size': props.picture ? 'contain' : '50px'
      }"
      @drop.prevent="handleFile($event.dataTransfer.items[0].getAsFile())"
      @dragenter.prevent
      @dragover.prevent
    >
    </div>
  </label>
</template>
