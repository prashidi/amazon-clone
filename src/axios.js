import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-zaio--clone.cloudfunctions.net/api", //The API (Cloud function URL)
});

export default instance;
