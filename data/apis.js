const axios = require("axios");

export const uarApi = axios.create({
  baseURL: "http://localhost:3001/api/v1",
});

export const forismaticApi = axios.create({
  baseURL: "http://api.forismatic.com/api/",
});
