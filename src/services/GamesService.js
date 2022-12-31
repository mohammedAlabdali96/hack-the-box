import Api from "@/services/Api";

export default {
  getGames(tab) {
    return Api().get(`/apps?tab=${tab}`);
  },
};
