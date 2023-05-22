import { uarApi } from "../data/apis";
import { catchAsync } from "./utils";

export const signIn = catchAsync(async (email, password) => {
  const res = await uarApi
    .post("/users/login", { email, password })
    .then((res) => res.data)
    .catch((err) => {
      return err?.response?.data;
    });
  // console.log("res :>> ", res);
  return res;
}, "signIn");

export const signUp = catchAsync(async (data) => {
  const res = await uarApi
    .post("/users/signup", data)
    .then((res) => res.data)
    .catch((err) => {
      return err?.response?.data;
    });
  // console.log("res :>> ", res);
  return res;
});

export const getMe = catchAsync(async (token) => {
  if (!token) return null;
  const res = await uarApi
    .get("/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data)
    .catch((err) => {
      return err?.response?.data;
    });
  // console.log("res :>> ", res);
  return res;
}, "getMe");
