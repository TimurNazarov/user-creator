<script  setup>
  defineProps(['list'])
</script>

<template>
  <div class="max-h-full flex flex-col">
    <!-- controls -->
    <div class="flex justify-between items-center">
      <img
        class="cursor-pointer"
        src="@/assets/icons/sort.svg"
        alt="Sort"
        title="Sort by user name"
        @click="$emit('sortUsers')"
      >
      <img
        class="cursor-pointer"
        src="@/assets/icons/add_user.svg"
        alt="Add user"
        @click="$emit('addUser')"
      >
    </div>
    <!-- divider -->
    <div class="h-4px bg-hex-0A588B w-full mb-24px"></div> 
    <!-- list -->
    <div class="user-list-layout max-h-full overflow-y-auto">
      <TransitionGroup name="list">
        <div
          class="mb-26px cursor-pointer"
          v-for="user in list"
          :key="user.id"
          @click="$emit('selectUser', user.id)"
        >
          <slot
            :user="user"
          />
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
/* cant do it with tailwind */
.user-list-layout::-webkit-scrollbar {
    display: none;
}

/* transition group styles */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
