import React, {Component} from 'react';

import {View, StyleSheet} from 'react-native';

import { Router, Stack, Scene } from 'react-native-router-flux';

import Home from './pages/Home';
import Transfer from './pages/Transfer';
import Formtrans from './pages/Formtrans';


export default class App extends Component {

    render() {
        return(
        
            <Router>
              <Stack key="root" hideNavBar={true}>
                <Scene key="home" component={Home} initial={true} />
                <Scene key="transfer" component={Transfer} />
                <Scene key="form" component={Formtrans} />
              </Stack>
            </Router>
        )
    }
}
