const initialState = {
  mixes: [],
  currentMix: "groovy",
  widgetReady: false,
  playing: false,
  fromMixcloud: false,
};

function mixesApp(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "PLAY_MIX":
      const { currentMix, playing } = payload;
      return {
        ...state,
        ...payload,
        playing: currentMix === state.currentMix ? !playing : playing,
      };
    case "ADD_MIX":
      return {
        ...state,
        mixes: [...state.mixes, { ...payload, id: payload.key }],
      };
    case "SET_WIDGET_READY":
      return {
        ...state,
        widgetReady: true,
      };
    default:
      return state;
  }
}

export default mixesApp;
