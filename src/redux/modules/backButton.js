const TOGGLE_BACK_BUTTON = 'back_button/TOGGLE_BACK_BUTTON';

const initialState = {
  isVisible: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_BACK_BUTTON:
      return { ...state, isVisible: action.isVisible };
    default:
      return state;
  }
}

/**
 * @param {Boolean} isVisible
 * @return {Boolean}
 */
export const showBackButton = isVisible => ({
  type: TOGGLE_BACK_BUTTON,
  isVisible,
});

