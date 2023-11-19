import { HIDE, UNHIDE } from "../constants";

const hide = () => {
  return {
    type: HIDE,
  };
};

const unhide = () => {
  return {
    type: UNHIDE,
  };
};

export { hide, unhide };
