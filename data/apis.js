const axios = require("axios");

export const uarApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_LOCAL_API}/api/v1`,
});

export const forismaticApi = axios.create({
  baseURL: "http://api.forismatic.com/api/",
});
