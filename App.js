import React, {Component} from 'react';
import {Platform, StatusBar, I18nManager, NetInfo, BackHandler, Alert} from 'react-native';
import Route from './src/Route';
import {MenuProvider} from 'react-native-popup-menu';
import store from './src/Stores/orderStore';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black',
            loading: false
        };
        I18nManager.forceRTL(false);
    }

    fucn() {
        var timerId = setInterval(() => {
            if (store.statusbar_color !== null) {
                // this.setState({ loading: false })
                clearInterval(timerId);
            } else {
                console.warn('app.js')
            }
        }, 5000);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({color: store.statusbar_color})
        }, 9000)
    }

    render() {
        return (
            <MenuProvider>
                <StatusBar
                    hidden={false}
                    animated={true}
                    backgroundColor={this.state.color}
                    barStyle="light-content"
                    networkActivityIndicatorVisible={Platform.OS === 'ios' ? false : false}
                    showHideTransition={Platform.OS === 'ios' ? 'slide' : null}
                />
                <Route/>
            </MenuProvider>
        );
    }
}
