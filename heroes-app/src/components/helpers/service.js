import axios from "axios";

const heroesApi = axios.create({
  baseURL: "http://localhost:8080/api/10216399145131007",
});

// heroesApi.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default heroesApi;
