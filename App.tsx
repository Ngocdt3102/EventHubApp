import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';
import MainNavigator from './src/navigators/MainNavigator';
import { SplashScreen } from './src/screens';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Thêm đoạn code này để fix lỗi crash của react-native-swiper
if (typeof (globalThis as any).setImmediate === 'undefined') {
  (globalThis as any).setImmediate = setTimeout;
}

const App = () => {
    const [isShowSplash, setIsShowSplash] = useState(true);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() => {
        const getAccessToken = async () => {
            try {
                const value = await AsyncStorage.getItem('accessToken');
                setAccessToken(value);
            } catch (error) {
                console.log('Lỗi khi lấy accessToken:', error);
                setAccessToken(null);
            }
        };
        getAccessToken();
        const timer = setTimeout(() => {
            setIsShowSplash(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <StatusBar
                style="dark"
                backgroundColor="transparent"
                translucent
            />
            {isShowSplash ? (
                <SplashScreen />
            ) : (
                <NavigationContainer>
                    {accessToken ? (
                        <MainNavigator />
                    ) : (
                        <AuthNavigator />
                    )}
                </NavigationContainer>
            )}
        </>
    );
};

export default App;