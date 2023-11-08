import { Image, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import style from './Styles';

const GoogleButton = () => {
    return (
        <>
            <View
                style={{
                    marginTop: 30,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <Button
                    onPress={() => console.log('navigate')}
                    mode='contained'
                    style={{ ...style.kriptoButton, backgroundColor: 'white' }}
                    contentStyle={{ height: 60 }}
                    labelStyle={{ color: '#1e88e5', fontSize: 18 }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: 5,
                        }}
                    >
                        <Image
                            source={require('../../assets/google.png')}
                            style={{ width: 40, height: 40, marginRight: 20 }}
                        />

                        <Text style={{ fontSize: 18 }}>Login with Google!</Text>
                    </View>
                </Button>
            </View>
        </>
    );
};

export default GoogleButton;
