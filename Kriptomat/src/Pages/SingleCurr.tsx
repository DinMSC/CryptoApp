import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Search from '../Components/Search';

import style from '../Components/Styles/index';

import SearchbarIcon from '../Components/Styles/SearchIcon';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Table from '../Components/Table';
import Chart from '../Components/Chart';
import BuySellbutton from '../Components/BuySellbutton';
import KriptomatButton from '../Components/KriptomatButton';

const SingleCurr = () => {
    const [searchOpen, setSearchOpen] = useState(false);

    const coin = useSelector((store: any) => store.coins.currentItem);

    function searchOpenHandler() {
        setSearchOpen(true);
    }
    function searchCloseHandler() {
        setSearchOpen(false);
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white',
            }}
        >
            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        marginBottom: 150,
                    }}
                >
                    {searchOpen === false ? (
                        <View>
                            <TouchableOpacity onPress={searchOpenHandler}>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row-reverse',
                                    }}
                                >
                                    <SearchbarIcon />
                                </View>
                            </TouchableOpacity>
                            <View>
                                <View style={style.smallHeaderView}>
                                    <Text style={style.priceText}>
                                        €{coin.current_price}
                                    </Text>
                                    <View
                                        style={[
                                            coin.price_change_percentage_24h >=
                                            0
                                                ? style.positiveChange
                                                : style.negativeChange,
                                        ]}
                                    >
                                        {coin.price_change_percentage_24h >=
                                        0 ? (
                                            <Text style={style.priceChange11}>
                                                ▲
                                                {Math.round(
                                                    coin.price_change_percentage_24h *
                                                        10
                                                ) / 10}
                                                %
                                            </Text>
                                        ) : (
                                            <Text style={style.priceChange22}>
                                                ▼{' '}
                                                {Math.round(
                                                    coin.price_change_percentage_24h *
                                                        10
                                                ) / 10}{' '}
                                                %
                                            </Text>
                                        )}
                                    </View>
                                </View>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <Text style={style.lowText}>
                                            24h low
                                        </Text>
                                        <Text style={style.highText}>
                                            €{coin.low_24h}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <Text style={style.lowText}>
                                            24h high
                                        </Text>
                                        <Text style={style.highText}>
                                            €{coin.high_24h}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ marginLeft: '6%' }}>
                                    <Chart />
                                </View>
                            </View>
                        </View>
                    ) : (
                        <View>
                            <Search searchCloseHandler={searchCloseHandler} />
                        </View>
                    )}

                    <View style={style.buyButtonView}>
                        <BuySellbutton />
                    </View>
                    <View style={style.overviewView}>
                        <Text style={style.overviewText}>Overview</Text>
                    </View>
                    <View>
                        <Table />
                    </View>
                </View>
            </ScrollView>
            <View style={style.footer}>
                <KriptomatButton />
            </View>
        </View>
    );
};

export default SingleCurr;
