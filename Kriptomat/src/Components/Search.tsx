import { Searchbar } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ROUTES from '../Constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import {
    getCoins,
    sortByPriceChange,
    sortCoinsByName,
    viewCoin,
} from '../Actions/index';
import { useNavigation } from '@react-navigation/native';
import style from './Styles/index';

const Search = ({ searchCloseHandler }: any) => {
    const [searchQuery, setSearchQuery] = useState('');
    const coins = useSelector((store: any) => store.coins.coins);
    const navigation = useNavigation();
    const onChangeSearch = (query: string) => setSearchQuery(query);
    const [state, setState] = useState(false);
    const [helper, setHelper] = useState(false);
    const dispatch = useDispatch();
    const getData = () => {
        dispatch(getCoins(state));
    };
    useEffect(() => {
        if (!helper) getData();
    }, [dispatch, state, helper]);

    function closeHandler() {
        if (typeof searchCloseHandler === 'undefined') {
            return;
        } else {
            searchCloseHandler();
        }
    }

    return (
        <View style={style.container}>
            <Searchbar
                placeholder='Search'
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{ backgroundColor: 'white' }}
            />
            <View style={style.buttonsContainer}>
                <TouchableOpacity
                    onPress={() => {
                        setHelper(!helper);
                        dispatch(sortCoinsByName(coins));
                    }}
                >
                    <View style={style.buttonView1}>
                        <Text style={style.buttonText}>Coin</Text>
                        <Image
                            style={style.imageArrows}
                            source={require('../../assets/upDown.png')}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setState(!state)}>
                    <View style={style.buttonView1}>
                        <Text style={style.buttonText}>Change M. Cap</Text>
                        <Image
                            style={style.imageArrows}
                            source={require('../../assets/upDown.png')}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        setHelper(!helper);
                        dispatch(sortByPriceChange(coins));
                    }}
                >
                    <View style={style.buttonView1}>
                        <Text style={style.buttonText}>Price</Text>
                        <Image
                            style={style.imageArrows}
                            source={require('../../assets/upDown.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={coins}
                    renderItem={({ item }) => {
                        if (searchQuery === '') {
                            return (
                                item && (
                                    <TouchableOpacity
                                        onPress={() => {
                                            closeHandler();
                                            dispatch(viewCoin(item));

                                            navigation.navigate(
                                                //@ts-ignore
                                                ROUTES.SINGLECURR
                                            );
                                        }}
                                    >
                                        <View style={style.listView}>
                                            <View style={style.innerView}>
                                                <Image
                                                    source={{
                                                        uri: item.image,
                                                    }}
                                                    style={style.imageList}
                                                />
                                                <View>
                                                    <Text
                                                        style={style.coinName}
                                                    >
                                                        {item.name}
                                                    </Text>
                                                    <Text style={style.symbol}>
                                                        {item.symbol}
                                                    </Text>
                                                </View>
                                            </View>

                                            <View style={style.listView2}>
                                                <Text style={style.coinPrice}>
                                                    €
                                                    {Math.round(
                                                        item.current_price * 100
                                                    ) / 100}
                                                </Text>
                                                {item.price_change_percentage_24h >=
                                                0 ? (
                                                    <Text
                                                        style={
                                                            style.priceChange1
                                                        }
                                                    >
                                                        ▲
                                                        {Math.round(
                                                            item.price_change_percentage_24h *
                                                                10
                                                        ) / 10}
                                                        %
                                                    </Text>
                                                ) : (
                                                    <Text
                                                        style={
                                                            style.priceChange2
                                                        }
                                                    >
                                                        ▼
                                                        {Math.round(
                                                            item.price_change_percentage_24h *
                                                                10
                                                        ) / 10}
                                                        %
                                                    </Text>
                                                )}
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            );
                        }
                        if (
                            item.name
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase()) ||
                            item.symbol
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase())
                        ) {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        closeHandler();
                                        dispatch(viewCoin(item));
                                        //@ts-ignore
                                        navigation.navigate(ROUTES.SINGLECURR);
                                    }}
                                >
                                    <View style={style.listView}>
                                        <View style={style.innerView}>
                                            <Image
                                                source={{ uri: item.image }}
                                                style={style.imageList}
                                            />
                                            <View>
                                                <Text style={style.coinName}>
                                                    {item.name}
                                                </Text>
                                                <Text style={style.symbol}>
                                                    {item.symbol}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={style.listView2}>
                                            <Text style={style.coinPrice}>
                                                €{item.current_price}
                                            </Text>
                                            <View>
                                                {item.price_change_percentage_24h >=
                                                0 ? (
                                                    <Text
                                                        style={
                                                            style.priceChange1
                                                        }
                                                    >
                                                        ▲
                                                        {Math.round(
                                                            item.price_change_percentage_24h *
                                                                10
                                                        ) / 10}
                                                        %
                                                    </Text>
                                                ) : (
                                                    <Text
                                                        style={
                                                            style.priceChange2
                                                        }
                                                    >
                                                        ▼
                                                        {Math.round(
                                                            item.price_change_percentage_24h *
                                                                10
                                                        ) / 10}
                                                        %
                                                    </Text>
                                                )}
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }
                    }}
                ></FlatList>
            </View>
        </View>
    );
};

export default Search;
