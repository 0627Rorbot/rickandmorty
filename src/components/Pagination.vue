<script setup>
import { ref, computed } from 'vue'
import { FwbPagination } from 'flowbite-vue'
import { useMainStore } from '../store'
const store = useMainStore()
const { fetchList } = store

const perPage = 20
const currentPage = ref(1)
const computedTotalPages = computed(() => {
  if (store.pages) return store.pages
  return Math.ceil(store.count / perPage)
})
const startItemsCount = computed(() => currentPage.value * perPage - perPage + 1)
const endItemsCount = computed(() => {
  const count = currentPage.value * perPage
  if (!store.count) return count
  if (count > store.count) return store.count
  return count
})
const computedTotalItems = computed(() => {
  if (store.count) return store.count
  return computedTotalPages.value * perPage
});

const onPageChanged = async () => {
  store.page = currentPage.value;
  await fetchList();
}
</script>

<template>
  <div class="flex items-center justify-center mb-10 flex-col gap-2">
    <p class="text-sm text-white">
      Showing
      <span class="font-semibold dark:text-white">{{ startItemsCount }}</span>
      to
      <span class="font-semibold dark:text-white">{{ endItemsCount }}</span>
      of
      <span class="font-semibold dark:text-white">{{ computedTotalItems }}</span>
    </p>
    <fwb-pagination v-model="currentPage" :total-pages="computedTotalPages" large @page-changed="onPageChanged" />
  </div>
</template>