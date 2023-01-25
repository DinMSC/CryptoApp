import { Linking } from 'react-native';
import { Button } from 'react-native-paper';
import style from '../Components/Styles/index';

function KriptomatButton() {
    return (
        <Button
            onPress={() => Linking.openURL('https://app.kriptomat.io/login')}
            mode='contained'
            style={style.kriptoButton}
            contentStyle={{ height: 60 }}
            labelStyle={{ color: 'white', fontSize: 18 }}
        >
            Kriptomat Account
        </Button>
    );
}

export default KriptomatButton;
