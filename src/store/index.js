import Vue from "vue";
import Vuex from "vuex";
import WordService from "@/services/GamesService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    games: [],
    loadingGames: false,
    errorRequestGmaes: "",
    tab: "new_and_trending",
  },
  getters: {
    games: (state) => state.games,
    loadingGames: (state) => state.loadingGames,
    errorRequestGmaes: (state) => state.errorRequestGmaes,
    tab: (state) => state.tab,
  },
  mutations: {
    setTab(state, tab) {
      state.tab = tab;
    },
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
    async getGames({ commit }, tab) {
      try {
        commit("setLoadingGames", true);
        const { data } = await WordService.getGames(tab);
        commit("setGames", data.slice(0, 10));
      } catch (error) {
        commit("setErrorRequestGmaes", error.message);
        commit("setLoadingGames", false);
        throw error;
      } finally {
        commit("setLoadingGames", false);
      }
    },

    handleChangeTab({ commit }, tab) {
      commit("setTab", tab);
    },

    searchText({ commit, dispatch }, searchParam) {
      const filteredArray = this.state.games.filter((item) => {
        return item.name.toLowerCase().startsWith(searchParam.toLowerCase());
      });
      if (searchParam.length === 0) {
        dispatch("getGames", this.state.tab);
      }
      commit("setGames", filteredArray);
    },
  },
  modules: {},
});
