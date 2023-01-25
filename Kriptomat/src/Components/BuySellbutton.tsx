import { Linking } from 'react-native';
import { Button } from 'react-native-paper';
import style from '../Components/Styles/index';
import { useSelector } from 'react-redux';

function BuySellbutton() {
    const coin = useSelector((store: any) => store.coins.currentItem);
    return (
        <Button
            onPress={() => Linking.openURL('https://app.kriptomat.io/login')}
            mode='contained'
            style={style.kriptoButton}
            contentStyle={{ height: 60 }}
            labelStyle={{ color: 'white', fontSize: 18 }}
        >
            Buy, Sell or Exchange {coin.name}
        </Button>
    );
}

export default BuySellbutton;
