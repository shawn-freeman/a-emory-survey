import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { PubSubEvents } from '../constants/pubsub-events';
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
    setTimeout(function () { that.HideSplashScreen(); }, 1000);
  }

  render(){
    return (
      <View style = { styles.MainContainer }>
        <View style={styles.SplashScreen_RootView}>
          <View style={styles.SplashScreen_ChildView}>
          <Image source={logo}
            style={{width:'100%', height: '100%', resizeMode: 'contain'}} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10%',
      height: '100%',
      width: '100%'
    },
    SplashScreen_RootView:
    {
      justifyContent: 'center',
      flex:1,
      margin: 10,
      position: 'absolute', width: '100%',
      height: '100%',
    },
    SplashScreen_ChildView:
    {
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'white', 
      flex:1,
    },
  }
);