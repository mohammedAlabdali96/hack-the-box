import Vue from "vue";
import Vuex from "vuex";
import WordService from "@/services/GamesService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    games: [],
  },
  getters: {
    games: (state) => state.games,
  },
  mutations: {
  },
  actions: {
    async getGames({ commit }, tabName) {
      try {
        commit("setLoadingGames", true);
        const { data } = await WordService.getGames(tabName);
        commit("setGames", data);
      } catch (error) {
        commit("setErrorRequestGmaes", error.message);
        commit("setLoadingGames", false);
        throw error;
      } finally {
        commit("setLoadingGames", false);
      }
    },
  },
  modules: {
  }
})
