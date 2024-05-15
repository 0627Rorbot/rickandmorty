import { defineStore } from "pinia";
import API from "../services";

export const useMainStore = defineStore("store", {
  state: () => ({
    characters: [],
    name: "",
    status: "alive",
    pages: 1,
    count: 10,
    loading: false,
  }),
  namespaced: true,
  actions: {
    async fetchList() {
      this.loading = true;
      try {
        const response = await API.get("character", {
          params: {
            name: this.name,
            status: this.status,
            page: this.page,
          },
        });

        this.characters = response.data.results;
        this.count = response.data.info.count;
        this.pages = response.data.info.pages;
      } catch (error) {
        // if (error.response.status == 404) {
        //   this.characters = [];
        //   this.count = response.data.info.count;
        //   this.pages = response.data.info.pages;
        // }
        this.characters = [];
        this.count = 0;
        this.pages = 0;
      }
      this.loading = false;
    },
  },
});
