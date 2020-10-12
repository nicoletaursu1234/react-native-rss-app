import React, {useEffect} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {createStore, combineReducers} from 'redux';
import MainNavigatorContainer from './navigation/MainNavigator';
import eventsReducer from './store/reducers/events';
import {Provider} from 'react-redux';
import * as Notifications from 'expo-notifications';

const rootReducer = combineReducers({
    events: eventsReducer,
});
const store = createStore(rootReducer);

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

export default function App() {
    return (
        <Provider store={store}>
            <MainNavigatorContainer>
                <StatusBar style="light" />
            </MainNavigatorContainer>
        </Provider>
    );
}
