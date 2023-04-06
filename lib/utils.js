
export const isBrowser = () => typeof window !== "undefined";

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
    switch (error.type) {
      case "valueAsNumber":
        return `${name} is not a valid number`;
      case "required":
        return error?.message ? error.message : "This is a required field";
      case "min":
        return `Min ${rules?.min}`;
      case "max":
        return `Max ${rules?.max}`;
      case "maxLength":
        return `Text too long. Max ${rules?.maxLength}`;
      case "minLength":
        return `Text too short. Min ${rules?.minLength}`;
      case "pattern":
        return `${name} is not valid`;
      case "validate":
        //console.log(errors)
        return error.message;
      default:
        return "";
    }
  }
};

export const emailRegexExpression =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
