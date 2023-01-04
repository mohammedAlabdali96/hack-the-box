import Api from "@/services/Api";

export default {
  getGamesByTab(tab) {
    return Api().get(`/apps?tab=${tab}`);
  },
  getGame(id) {
    return Api().get(`https://htb-steam-api.vercel.app/api/apps?appid=${id}`);
  },
};
