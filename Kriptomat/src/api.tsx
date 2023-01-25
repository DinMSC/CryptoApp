import axios from 'axios';
import { config } from './config';

export const fetchProducts = async (order: boolean) => {
    const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=${
            order ? 'market_cap_asc' : 'market_cap_desc'
        }&per_page=50&page=1&sparkline=false&price_change_percentage=24h`
    );

    return data;
};
