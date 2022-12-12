<script  setup>
import ProgressCircle from '@/components/ProgressCircle'
import { measureProgress } from '@/composables/useUtils'
import { computed } from 'vue'
const props = defineProps(['user', 'active'])
</script>

<template>
  <div class="flex items-center justify-center text-22px font-bold h-64px w-full bg-hex-0A588B rounded-md text-white cursor-pointer">
    <slot />
  </div>
</template>
