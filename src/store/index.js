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
    game: {},
    searchResult: [],
  },
  getters: {
    games: (state) => state.games,
    loadingGames: (state) => state.loadingGames,
    errorRequestGmaes: (state) => state.errorRequestGmaes,
    tab: (state) => state.tab,
    game: (state) => state.game,
    searchResult: (state) => state.searchResult,

  },
  mutations: {
    setTab(state, tab) {
      state.tab = tab;
    },
    setGames(state, games) {
      state.games = games;
    },
    setSearchResult(state, value) {
      state.searchResult = value;
    },
    setGame(state, game) {
      state.game = game;
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
        const { data } = await WordService.getGamesByTab(tab);
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
      commit("setSearchResult", []);
      commit("setTab", tab);
    },

    async getGame({ commit }, id) {
      try {
        commit("setLoadingGames", true);
        const { data } = await WordService.getGame(id);
        commit("setGame", data[0]);
        commit("setSearchResult", []);
      } catch (error) {
        commit("setErrorRequestGmaes", error.message);
        commit("setLoadingGames", false);
        throw error;
      } finally {
        commit("setLoadingGames", false);
      }
    },

    searchText({ commit }, searchParam) {
      const filteredArray = this.state.games.filter((item) => {
        return item.name.toLowerCase().startsWith(searchParam.toLowerCase());
      });
      if (filteredArray.length > 0) {
        commit("setSearchResult", filteredArray);
      }
    },
  },
  modules: {},
});
