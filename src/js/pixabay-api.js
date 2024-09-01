import axios from "axios";

const URL_PIXABAY = "https://pixabay.com/api/";
const API_KEY = "45654098-015d10b92a1455385bf1e768f";

export const photoRequest = (param, page) => {
  const params = {
    params: {
      q: param,
      orientation: "horizontal",
      image_type: "photo",
      safesearch: "true",
      per_page: 15,
      page: page,
    }
  };

  return axios.get(`${URL_PIXABAY}?key=${API_KEY}`, params);
}
