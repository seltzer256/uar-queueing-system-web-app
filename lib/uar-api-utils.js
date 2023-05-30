import { parseCookies } from "nookies";
import { uarApi } from "../data/apis";
import { catchAsync } from "./utils";

// const cookies = parseCookies();
// const token = cookies?.jwt;

export const getToken = () => {
  const cookies = parseCookies();
  const token = cookies?.jwt;
  return token;
};

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

export const getMe = catchAsync(async () => {
  const token = getToken();
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

export const updateMe = catchAsync(async (data) => {
  const token = getToken();
  const res = await uarApi
    .patch("/users/updateMe", data, {
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
});

export const getModules = catchAsync(async () => {
  // console.log("token :>> ", token);
  const token = getToken();
  const res = await uarApi
    .get("/modules", {
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
});

export const createModule = catchAsync(async (data) => {
  const token = getToken();
  const res = await uarApi
    .post("/modules", data, {
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
});

export const updateModule = catchAsync(async (data) => {
  const token = getToken();
  const res = await uarApi
    .patch(`/modules/${data._id}`, data, {
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
});

export const deleteModule = catchAsync(async (_id) => {
  const token = getToken();
  const res = await uarApi
    .delete(`/modules/${_id}`, {
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
});

export const getServices = catchAsync(async () => {
  const res = await uarApi
    .get("/services")
    .then((res) => res.data)
    .catch((err) => {
      return err?.response?.data;
    });
  // console.log("res :>> ", res);
  return res;
});

export const createService = catchAsync(async (data) => {
  const token = getToken();
  const res = await uarApi
    .post("/services", data, {
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
});

export const updateService = catchAsync(async (data) => {
  const token = getToken();
  const res = await uarApi
    .patch(`/services/${data._id}`, data, {
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
});

export const deleteService = catchAsync(async (_id) => {
  const token = getToken();
  const res = await uarApi
    .delete(`/services/${_id}`, {
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
});

export const getUsers = catchAsync(async () => {
  const token = getToken();
  const res = await uarApi
    .get("/users", {
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
});

export const getShiftsByUser = catchAsync(async () => {
  const token = getToken();
  const res = await uarApi
    .get("/shifts/by-user", {
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
});

export const changeShiftStatus = catchAsync(async (id, state) => {
  const token = getToken();
  const res = await uarApi
    .post(
      `/shifts/change-state`,
      {
        id,
        state,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => {
      return err?.response?.data;
    });
  // console.log("res :>> ", res);
  return res;
});
