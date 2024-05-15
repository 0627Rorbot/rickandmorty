<script setup>
import { computed } from "vue"
const props = defineProps({
  item: {
    type: Object,
    default: () => ({
      name: "Rick K - 22",
      status: "",
      location: {},
      origin: {},
      image: "https://rickandmortyapi.com/api/character/avatar/292.jpeg"
    })
  }
})

const statusColor = computed(() => {
  if (props.item.status === 'Alive') {
    return "bg-emerald-600"
  } else if (props.item.status === 'Dead') {
    return "bg-red-700"
  } else if (props.item.status === 'unknown') {
    return "bg-gray-600"
  }
})
</script>

<template>
  <div class="max-w-sm w-full sm:max-w-xl sm:flex shadow-lg text-white">
    <div
      class="h-72 sm:h-auto sm:w-60 flex-none bg-cover rounded-t-xl sm:rounded-t-none sm:rounded-tl-xl sm:rounded-l-xl text-center overflow-hidden"
      :style="`background-image: url('${item.image}')`" title="Banner image">
    </div>
    <div
      class="bg-zinc-100 rounded-b-xl sm:rounded-b-none sm:rounded-r-xl p-4 flex flex-col justify-between leading-normal w-full">
      <div class="text-left">
        <p class="text-gray-white font-extrabold text-3xl text-left">{{ item.name }}</p>
        <div class="flex items-center justify-start mb-4">
          <div class="rounded-full h-2 w-2 mr-1" :class="statusColor"></div>
          <p class="font-medium">{{ item.status }} - {{ item.species }}</p>
        </div>
        <div class="mb-4">
          <p class="text-gray-400 font-medium">Last known location: </p>
          <p class="text-lg">{{ item.location.name }}</p>
        </div>
        <div>
          <p class="text-gray-400 font-medium">First seen in: </p>
          <p class="text-lg">{{ item.origin.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
