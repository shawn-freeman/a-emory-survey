import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Splash } from './components/splash-component.js';
import PubSub from 'pubsub-js';
import { Pages } from './constants/pages.js';
import { PubSubEvents } from './constants/pubsub-events.js';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EmailEntryComponent } from './components/email-entry-component.js';
import { EmailVerificationComponent } from './components/email-verification-component.js';

const Stack = createNativeStackNavigator();
Stack.Navigator.defaultProps = {
  headerMode: 'none',
};

export default class App extends React.Component{
  state = {
    isSplashScreenVisible: true
  }
  
  //callback event handler
  handleIsSplashVisible = (isSplashScreenVisible, {}) => {
    this.setState({ isSplashScreenVisible: false });
  };
  //subscribe to the event from splash screen
  mySub = PubSub.subscribe(PubSubEvents.OnSplashScreenTimeout, this.handleIsSplashVisible);
  
  render(){
    let splashScreen = (<Splash />)
    
    let mainTemplate = (<NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Pages.EmailEntry} component={EmailEntryComponent} />
        <Stack.Screen name={Pages.EmailVerification} component={EmailVerificationComponent} />
      </Stack.Navigator>
    </NavigationContainer>)
    
    return (this.state.isSplashScreenVisible) ? splashScreen : mainTemplate;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
