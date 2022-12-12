<script  setup>
import { computed } from 'vue'
const props = defineProps(['progress'])
const color = computed(() => {
    if(props.progress >= 100) return '#0A588B' // blue
    if(props.progress >= 75) return '#06D6A0' // green
    if(props.progress >= 50) return '#FFD166' // orange
    if(props.progress >= 0) return '#FFD166' // red
    return '#FFD166'
})
</script>

<template>
  <div class="progress-circle relative">
    <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-24px">{{ progress }}</p>
    <svg width="85" height="85" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="54" fill="none" stroke="#EEEEEE" stroke-width="12" />
      <circle class="percent" :style="{ '--val': progress }" cx="60" cy="60" r="54" fill="none" :stroke="color" stroke-width="12" pathLength="100" />
    </svg>
  </div>
</template>

<style>
.progress-circle svg {
  transform: rotate(-90deg);
}

.percent {
  stroke-dasharray: 100;
  stroke-dashoffset: calc(100 - var(--val));
  transition: .5s;
}
</style>