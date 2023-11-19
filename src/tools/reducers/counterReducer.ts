import { DECREMENT, INCREMENT } from "../constants";

interface counter {
  count: number;
}

let initialstate: counter = {
  count: 0,
};

const counterReducer = (state = initialstate, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count === 0 ? 0 : state.count - 1 };

    default:
      return state;
  }
};

export default counterReducer;
