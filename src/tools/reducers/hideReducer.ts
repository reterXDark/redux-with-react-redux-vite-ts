import { HIDE, UNHIDE } from "../constants";

interface hide {
  visibility: boolean;
}

let initialstate: hide = {
  visibility: false,
};

const hideReducer = (state = initialstate, action: any) => {
  switch (action.type) {
    case HIDE:
      return { ...state, visibility: !state.visibility };
    case UNHIDE:
      return { ...state, visibility: !state.visibility };

    default:
      return state;
  }
};

export default hideReducer;
