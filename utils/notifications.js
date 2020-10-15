import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

export const sendNotification = async (token, title, description, data) => {
    const message = {
        to: token,
        sound: 'default',
        title,
        body: description,
        data,
    };

    try {
        await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
        return true;
    } catch (e) {
        return Promise.reject('unable to send notification');
    }
};

export const getToken = async () => {
    let token;
    if (Constants.isDevice) {
        const {status: existingStatus} = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
        );
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const {status} = await Permissions.askAsync(
                Permissions.NOTIFICATIONS
            );
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
};