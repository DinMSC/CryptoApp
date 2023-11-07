import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import style from '../Components/Styles/index';
import { Linking } from 'react-native';

import Search from '../Components/Search';

const Register: any = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <ScrollView>
                <View>
                    <Search />
                </View>
            </ScrollView>
            <View style={style.footer}>
                <Button
                    onPress={() =>
                        Linking.openURL('https://app.kriptomat.io/login')
                    }
                    mode='contained'
                    style={style.kriptoButton}
                    contentStyle={{ height: 60 }}
                    labelStyle={{ color: 'white', fontSize: 18 }}
                >
                    Kriptomat Account
                </Button>
            </View>
        </View>
    );
};

export default Register;
