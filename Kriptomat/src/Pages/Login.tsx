import { useFormik } from 'formik';
import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import BuySellbutton from '../Components/BuySellbutton';
import GoogleButton from '../Components/GoogleButton';
import style from '../Components/Styles/index';

const Login: any = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
            }}
        >
            <View>
                <View style={{ marginTop: 55 }}>
                    <TextInput
                        label='Email'
                        value={formik.values.email}
                        onChangeText={formik.handleChange('email')}
                        underlineColor='#1e88e5'
                        activeUnderlineColor='#1e88e5'
                        selectionColor='#1e88e5'
                        style={{ backgroundColor: 'white' }}
                    />
                </View>
                <View style={{ marginTop: 30 }}>
                    <TextInput
                        label='Password'
                        value={formik.values.password}
                        onChangeText={formik.handleChange('password')}
                        secureTextEntry={true}
                        underlineColor='#1e88e5'
                        activeUnderlineColor='#1e88e5'
                        selectionColor='#1e88e5'
                        style={{ backgroundColor: 'white' }}
                    />
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Text
                            style={{
                                paddingTop: 10,
                                paddingRight: 15,
                                fontSize: 14,
                                color: '#1e88e5',
                            }}
                        >
                            Forgot Password ?
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        marginTop: 30,
                        flex: 0,
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}
                >
                    <Button
                        onPress={() => console.log('navigate')}
                        mode='contained'
                        style={style.kriptoButton}
                        contentStyle={{ height: 60 }}
                        labelStyle={{ color: 'white', fontSize: 18 }}
                    >
                        Login
                    </Button>
                </View>
                <GoogleButton />
            </View>

            <View style={style.footer}>
                <Text>Do not have account? </Text>
                <Text style={{ color: '#1e88e5' }}>Register Here!</Text>
            </View>
        </View>
    );
};

export default Login;
