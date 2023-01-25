import { View, Text } from 'react-native';
import style from './Styles';
import { useSelector } from 'react-redux';

function Table() {
    const coin = useSelector((store: any) => store.coins.currentItem);
    return (
        <View>
            <View style={style.tableContainer}>
                <View style={style.tableRow}>
                    <Text style={style.tableCell1}>Total Voulme</Text>
                    <Text style={style.tableCell}>€{coin.total_volume}</Text>
                </View>
                <View style={style.tableRow}>
                    <Text style={style.tableCell1}>Market Cap:</Text>
                    <Text style={style.tableCell}>€{coin.market_cap}</Text>
                </View>
            </View>
            <View>
                <View style={style.tableContainer1}>
                    <View style={style.tableRow}>
                        <Text style={style.tableCell1}>
                            Circulating supply:
                        </Text>
                        <Text style={style.tableCell}>
                            {coin.circulating_supply} BTC
                        </Text>
                    </View>
                    <View style={style.tableRow}></View>
                </View>
            </View>
        </View>
    );
}

export default Table;
