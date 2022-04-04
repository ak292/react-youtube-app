import axios from "axios";

const KEY = "AIzaSyCyn5qZ0PilWUsTf9d-pAd86HaF-LbGmUQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
