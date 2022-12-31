import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://htb-steam-api.vercel.app/api",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
