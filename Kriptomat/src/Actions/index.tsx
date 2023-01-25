import * as api from '../api';
import actionTypes from '../Constants/actions';
import { Dispatch } from 'redux';

export const getCoins: any = (order: boolean) => async (dispatch: Dispatch) => {
    try {
        const data = await api.fetchProducts(order);

        dispatch({ type: actionTypes.GET_ALL_COINS, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const viewCoin: any = (coin: string) => (dispatch: Dispatch) => {
    dispatch({
        type: actionTypes.LOAD_CURRENT_COIN,
        payload: coin,
    });
};

export const sortCoinsByName: any =
    (coins: any) => async (dispatch: Dispatch) => {
        const data = await coins.sort((a: any, b: any) =>
            a.name.localeCompare(b.name)
        );

        dispatch({
            type: actionTypes.GET_ALL_COINS,
            payload: data,
        });
    };

export const sortByPriceChange: any =
    (coins: any) => async (dispatch: Dispatch) => {
        console.log('djwjwdjdadwadwj');

        const data = await coins.sort(
            (a: any, b: any) =>
                parseFloat(a.price_change_percentage_24h) -
                parseFloat(b.price_change_percentage_24h)
        );

        dispatch({
            type: actionTypes.GET_ALL_COINS,
            payload: data,
        });
    };
