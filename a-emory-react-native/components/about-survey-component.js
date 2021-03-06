import React from 'react';
import { Dimensions, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { Pages } from '../constants/pages';
import { appStyles } from '../constants/styles';

export class AboutSurveyComponent extends React.Component
{
    render(){
    return (
        <View style={appStyles.container}>
         <View style={localStyles.aboutTextcontainer}  >
            <Text style={appStyles.generalText} >Emory is a variant of the English name Emery. The origin of this name is Germanic, from the Germanic personal name 'Amalric'. The name 'Amalric' is made of two parts, 'amal' meaning 'courageous' and 'ric' meaning 'powerful. Emory means 'a powerfully courageous person'.</Text>

            <Text style={[appStyles.generalText, appStyles.emphasisText]} >So what is A Emory Survey?</Text>

            <Text style={appStyles.generalText} >Part of being a 'courageous person' or 'powerful leader' is the ability 
               to ask and answer the most difficult questions our society faces. 
               A Emory Survey provides an anonymous method to answering 
               such questions free of judgement. Participation in the survey is completely 
               confidential, voluntarily and is not shared with any third-party.</Text>
         </View>

        

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
   aboutTextcontainer: {
      flex:3, 
      justifyContent: 'center', //Centered horizontally
       alignItems: 'center', //Centered vertically
       maxWidth: Dimensions.get('window').width / 2,
   },
   buttonContainer: {
      flex: 1,
      flexDirection: 'row',
   },
   submitButtonText:{
      color: 'white'
   },
});