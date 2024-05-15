<script setup>
import { onMounted } from 'vue'
import { useMainStore } from './store'

import Card from './components/Card.vue'
import Toolbar from './components/Toolbar.vue'
import Pagination from './components/Pagination.vue'

const store = useMainStore()
const { fetchList } = store

onMounted(async () => {
  await fetchList()
})
</script>

<template>
  <div class="text-center text-7xl font-extrabold text-zinc-300 bg-white py-16">
    The Rick and Morty API
  </div>

  <Toolbar />

  <div class="text-center">
    <div v-if="store.loading" class="my-20">Loading...</div>
    <div v-else>
      <div v-if="!store.characters.length" class="my-20">There is nothing here</div>
      <div v-else class="flex gap-6 flex-wrap items-center justify-center py-10">
        <Card v-for="character in store.characters" :key="character.id" :item="character" />
      </div>
    </div>
  </div>

  <div>
    <Pagination />
  </div>
</template>
