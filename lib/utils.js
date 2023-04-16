import { forismaticApi } from "../data/apis";

export const isBrowser = () => typeof window !== "undefined";

export const catchAsync = (fn) => {
  return async (...props) => {
    return await fn(...props).catch((err) => {
      console.log("err :>> ", err.message);
      return null;
    });
  };
};

export const getLocalStorageItem = (key) => {
  if (isBrowser()) {
    return window.localStorage.getItem(key);
  }
  return null;
};

export const setLocalStorageItem = (key, value) => {
  if (isBrowser()) {
    window.localStorage.setItem(key, value);
  }
};

export const textEllipsis = (
  str,
  maxLength,
  { side = "end", ellipsis = "..." } = {}
) => {
  if (str.length > maxLength) {
    switch (side) {
      case "start":
        return ellipsis + str.slice(-(maxLength - ellipsis.length));
      case "end":
      default:
        return str.slice(0, maxLength - ellipsis.length) + ellipsis;
    }
  }
  return str;
};

export const getRHFErrorMessage = (errors, name, rules) => {
  const splitName = `${name}`.split(".");
  const getError = () => {
    if (splitName.length === 2) {
      return errors[splitName[0]]?.[splitName[1]];
    }
    if (splitName.length === 3) {
      return errors[splitName[0]]?.[splitName[1]]?.[splitName[2]];
    }
    return errors[name];
  };
  const error = getError();

  if (error) {
    // console.log(name, error);
    if (error.message) return error.message;
    switch (error.type) {
      case "valueAsNumber":
        return `${name} no es un número válido`;
      case "required":
        return "Este campo es requerido";
      case "min":
        return `Mínimo ${rules?.min}`;
      case "max":
        return `Máximo ${rules?.max}`;
      case "maxLength":
        return `Texto muy largo. Máximo ${rules?.maxLength} caracteres`;
      case "minLength":
        return `Texto muy corto. Mínimo ${rules?.minLength} caracteres`;
      case "pattern":
        return `${name} no es válido`;
      case "validate":
        return `${name} no es válido`;
      default:
        return "";
    }
  }
};

export const emailRegexExpression =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const getPhraseOfTheDay = catchAsync(async () => {
  const res = await forismaticApi.get(
    `1.0/?method=getQuote&&format=jsonp&jsonp=?&lang=en`,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
  console.log("res :>> ", res);
  return res?.data;
});
