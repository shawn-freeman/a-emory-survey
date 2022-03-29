import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { Pages } from '../constants/pages';
import { appStyles } from '../constants/styles';

export class AboutSurveyComponent extends React.Component
{
    render(){
    return (
        <View style={appStyles.container}>
        <Text>About A Emory Survey</Text>

        <View style={localStyles.buttonContainer} >

           <TouchableOpacity
                 style = {appStyles.buttonPrimary}
                 onPress = {
                    () => { 
                       this.props.navigation.navigate(Pages.EmailEntry);
                    }
                 }>
                 <Text style = {localStyles.submitButtonText}>Back</Text>
              </TouchableOpacity>
           </View>
        </View>
   );
  }
}

const localStyles = StyleSheet.create({
   buttonContainer: {
      flexDirection: 'row',
   },
   submitButtonText:{
      color: 'white',
   },
});