<script setup>
import { FwbButton } from 'flowbite-vue'
import { reactive } from "vue"
import { statusList } from "../services/constants.js"
import { useMainStore } from "../store"

const store = useMainStore()
const { fetchList } = store
const filters = reactive({
  name: "",
  status: "alive"
})

const updateSearchFilter = async () => {
  store.name = filters.name
  store.status = filters.status

  await fetchList()
}
</script>

<template>
  <div class="flex items-center md:justify-around justify-between mt-10 px-20 flex-wrap gap-5">
    <div class="flex items-center w-full sm:w-auto">
      <label for="name" class="text-white dark:text-white whitespace-nowrap mr-2">Name</label>
      <input type="text" id="name" v-model="filters.name"
        class="md:max-w-sm min-w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Rick K" />
    </div>

    <div class="flex items-center w-full sm:w-auto">
      <label for="status" class="block text-white dark:text-white whitespace-nowrap mr-2">Status</label>
      <select id="status" v-model="filters.status"
        class="md:max-w-sm min-w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option v-for="({ title, value }) in statusList" :key="value" :value="value">{{ title }}</option>
      </select>
    </div>

    <fwb-button color="default" @click="updateSearchFilter">Apply</fwb-button>
  </div>
</template>
