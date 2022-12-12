<script  setup>
import { reactive, ref } from 'vue'
const props = defineProps(['modelValue', 'label'])
const state = reactive({
  isFocused: false
})
const input = ref(null)

</script>

<template>
  <div class="relative">
    <p 
      :class="`absolute transition-all p-7px bg-hex-EEEEEE
      ${state.isFocused || props.modelValue ? 'text-14px -top-14px left-16px' : 'text-18px top-1/2 transform -translate-y-1/2 left-20px'}
      `"
    >
      {{ props.label }}
    </p>
    <div
      :class="`h-74px flex items-center justify-start rounded-md
      ${state.isFocused ? 'border-2px border-hex-0A588B p-25px' : 'border-1px border-hex-575757 p-26px'}
      `"
    >
      <input
        class="bg-transparent outline-none text-18px z-2 w-full"
        type="text"
        ref="input"
        :value="props.modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="state.isFocused = true"
        @blur="state.isFocused = false"
      >
    </div>
  </div>
</template>
