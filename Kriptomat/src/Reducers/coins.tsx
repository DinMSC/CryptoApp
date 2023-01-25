import actionTypes from '../Constants/actions';

const INITIAL_STATE = {
    coins: [],
    currentItem: null,
};

const coinsReducer = (
    state = INITIAL_STATE,
    action: { type: any; payload: any }
) => {
    switch (action.type) {
        case actionTypes.GET_ALL_COINS:
            return { ...state, coins: action.payload };
        case actionTypes.LOAD_CURRENT_COIN:
            return {
                ...state,
                currentItem: action.payload,
            };

        default:
            return state;
    }
};

export default coinsReducer;
