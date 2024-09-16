<script setup>
defineProps({
  value: Number,
  singularLabel: String,
  pluralLabel: String,
})
</script>

<template>
  <div class="flex flex-col gap-5 relative">
    <div
      class="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-pink-300 rounded-lg"
    >
      <div
        class="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-pink-200"
      ></div>
      <span
        class="lg:text-7xl sm:text-6xl text-3xl font-semibold text-pink-800"
        >{{ value }}</span
      >
      <div
        class="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-pink-200"
      ></div>
    </div>
    <span class="text-pink-900 text-xs sm:text-2xl text-center capitalize">
      {{ value == 1 ? singularLabel : pluralLabel }}
    </span>
  </div>
</template>
