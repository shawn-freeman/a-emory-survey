import React from 'react';
import { Dimensions, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Pages } from '../constants/pages';
import { appStyles } from '../constants/styles';

export class EndOfSurveyComponent extends React.Component
{

   async exitSurvey(){
      this.props.navigation.navigate(Pages.EmailEntry);
   }

    render(){
    return (
        <View style={appStyles.container}>
        <View style={localStyles.textContainer}  >
           <Text style={appStyles.generalText} >Coming Soon!</Text>

           <Text style={appStyles.emphasisText} >Freedom Tier Subscriptions</Text>
        </View>

       <View style={localStyles.buttonContainer} >
          <TouchableOpacity
                style = {appStyles.buttonPrimary}
                onPress = {
                   () => { 
                      this.props.navigation.navigate(Pages.EmailEntry);
                   }
                }>
                <Text style = {localStyles.submitButtonText}>Exit</Text>
             </TouchableOpacity>
          </View>
       </View>
   );
  }
}

const localStyles = StyleSheet.create({
    textContainer: {
        flex:3, 
        justifyContent: 'center', //Centered horizontally
         alignItems: 'center', //Centered vertically
         maxWidth: Dimensions.get('window').width / 2,
     },
   buttonContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
   submitButtonText:{
      color: 'white'
   },
});