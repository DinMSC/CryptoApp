import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Navigator from './src/Navigations/index';
import React from 'react';
import { Provider } from 'react-redux';
import reducers from './src/Reducers/';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export default function App() {
    const store = createStore(
        reducers,

        compose(applyMiddleware(thunk))
    );

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
        </Provider>
    );
}
