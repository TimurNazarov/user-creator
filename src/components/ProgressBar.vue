<script  setup>
  defineProps(['progress'])
</script>

<template>
  <div class="progress-bar bg-hex-E4F1FA rounded-3xl w-full h-30px">
    <div class="progress-indicator bg-hex-0A588B rounded-3xl h-full relative" :style="{ width: `${progress}%`}">
      <!-- <div class="progress-hint absolute right-0 -top-[100%] p-6px mb-24px border-2px border-hex-0A588B">
        {{ `${progress}%` }}
        img
      </div> -->
      <div class="progress-tooltip absolute -right-27px bottom-[calc(100%+12px)] z-2 bg-white">
        <img src="@/assets/img/progress-tooltip.svg" alt="">
        <p class="absolute left-1/2 transform -translate-x-1/2 top-8px font-bold text-20px">{{ `${progress}%` }}</p>
      </div>
    </div>
  </div>
</template>