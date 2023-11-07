import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login, SingleCurr } from '../Pages/index';
import ROUTES from '../Constants/routes';
import Logo from '../Components/Logo';

import SingleHeader from '../Components/SingleHeader';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
            <Stack.Screen
                name={ROUTES.LOGIN}
                component={Login}
                options={{ headerTitle: Logo, headerStyle: { height: 130 } }}
            />

            <Stack.Screen
                name={ROUTES.HOME}
                component={Home}
                options={{ headerTitle: Logo, headerStyle: { height: 130 } }}
            />

            <Stack.Screen
                options={{
                    headerTitle: SingleHeader,
                    headerStyle: { height: 110 },
                }}
                name={ROUTES.SINGLECURR}
                component={SingleCurr}
            />
        </Stack.Navigator>
    );
}

export default MyStack;
