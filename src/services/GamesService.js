import Api from "@/services/Api";

export default {
  getGamesByTab(tab) {
    return Api().get(`/apps?tab=${tab}`);
  },
  getGame() {
    return Api().get(`/apps`);
  },
};
