const axios = require("axios");

export const QUEUEING_SYSTEM_API = axios.create({
  baseURL: "https://localhost:3001",
});

export const forismaticApi = axios.create({
  baseURL: "http://api.forismatic.com/api/",
});
