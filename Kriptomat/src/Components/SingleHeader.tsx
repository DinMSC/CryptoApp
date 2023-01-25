import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import style from './Styles';

function SingleHeader() {
    const coin = useSelector((store: any) => store.coins.currentItem);
    return (
        <View style={style.headerViewContainer}>
            <View style={style.headerView}>
                <Image source={{ uri: coin.image }} style={style.headerIcon} />
            </View>
            <View style={style.innerTextHeader}>
                <Text style={style.headerText}>{coin.name}</Text>
            </View>
        </View>
    );
}

export default SingleHeader;
