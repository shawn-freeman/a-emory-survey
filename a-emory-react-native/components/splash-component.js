import React from 'react';
import {Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { PubSubEvents } from '../constants/pubsub-events';
import { appStyles } from '../constants/styles';
import logo from '../img/amory_A.png'

export class Splash extends React.Component
{
  constructor(){
    super();
  }

  HideSplashScreen  = () => {
    PubSub.publish(PubSubEvents.OnSplashScreenTimeout, { })
  }

  componentDidMount() {
    var that = this;
    setTimeout(function () { that.HideSplashScreen(); }, 3000);
  }

  render(){
    return (
      <View style={appStyles.container}>
        <Image source={logo}
            style={localStyles.logoContainer} />
      </View>
    );
  }
}

const localStyles = StyleSheet.create(
  {
    logoContainer: {
      height: Dimensions.get('window').height / 2,
      width: Dimensions.get('window').width / 2,
      resizeMode: 'contain',
    },
  }
);