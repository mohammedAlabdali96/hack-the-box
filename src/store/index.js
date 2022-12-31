import Vue from "vue";
import Vuex from "vuex";
import WordService from "@/services/GamesService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    games: [],
    loadingGames: false,
    errorRequestGmaes: false,
  },
  getters: {
    games: (state) => state.games,
    loadingGames: (state) => state.loadingGames,
    errorRequestGmaes: (state) => state.errorRequestGmaes,
  },
  mutations: {
    setGames(state, games) {
      state.games = games;
    },
    setLoadingGames(state, payload) {
      state.loadingGames = payload;
    },
    setErrorRequestGmaes(state, payload) {
      state.errorRequestGmaes = payload;
    },
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
  modules: {},
});
