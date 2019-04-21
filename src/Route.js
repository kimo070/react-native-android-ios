import React, { Component } from 'react';
import { Platform, StatusBar, Text, View, TouchableOpacity, Image } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
import { createStackNavigator } from 'react-navigation';

//Authentication
import Splash from './screens/SplashScreen/Splash';
import SignUp from './screens/SignUp/SignUp';
import SignIn from './screens/SignIn/SignIn';

import Drawer from './screens/Drawer/Drawer';
import SideMenu from './screens/Drawer/SideMenu';

import store from './Stores/orderStore';
import styles from './styles/DrawerHeaderStyleSheet';

const RootStack = createStackNavigator(
    {
        Splash: Splash,
        SignUp: SignUp,
        SignIn: SignIn,
        Drawer: {
            screen: Drawer,
            navigationOptions: ({ navigation }) => ({
                title: navigation.getParam('otherParam', store.settings.data.menu.home),
                header: (
                    <View style={[styles.overlyHeader,{ backgroundColor: store.settings.data.navbar_clr }]}>
                        <TouchableOpacity style={styles.drawerBtnCon} onPress={() => {
                            // Alert.alert(navigation+'')
                            navigation.toggleDrawer()
                            // navigation.openDrawer()
                        }}>
                            <Image source={require('../images/drawer.png')} style={styles.drawerBtn} />
                        </TouchableOpacity>
                        <View style={styles.headerTxtCon}>
                            <Text style={styles.headerTxt}>{navigation.getParam('otherParam', store.settings.data.menu.home)}</Text>
                        </View>
                        <View style={{flex:1}}></View>
                        {/* <Image source={require('../images/search_white.png')} style={styles.headerSearch} />
            <Image source={require('../images/cart.png')} style={styles.cart} /> */}
                    </View>
                )
            }),
        },
        SideMenu: SideMenu
    },
    {
        initialRouteName: 'Splash',
        mode: Platform.OS === 'ios' ? 'pattern' : 'card',
        headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
        headerTransitionPreset: Platform.OS === 'ios' ? 'uikit' : null,
        headerLayoutPreset: Platform.OS === 'ios' ? 'center' : 'left',
        headerBackTitleVisible: Platform.OS === 'ios' ? true : false,
        navigationOptions: {
            headerTitleStyle: { fontSize: totalSize(2), fontWeight: 'normal' },
            gesturesEnabled: true,
        }
    }
);
export default RootStack;