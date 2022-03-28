import React from 'react';
import { Button, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { Pages } from '../constants/pages';
import { appStyles } from '../constants/styles';
import { HttpHandler } from '../services/httpHandler';

export class EmailVerificationComponent extends React.Component
{
    state = {
        code: ''
   }

   handleCodeEntry = (text) => {
      this.setState({ code: text});
   }

    submitCode = async (code) => {
      let result = await new HttpHandler().GetSurveyQuestions(code);

      this.props.navigation.navigate(Pages.SurveyQuestion, { questions: result });
    }

    render(){
    return (
       <View>
         <View style={appStyles.container}>
         <Text>Enter the verification code below:</Text>
         
         <TextInput style = {appStyles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Verification Code"
                  autoCapitalize = "none"
                  value={this.state.code}
                  onChangeText = {this.handleCodeEntry}/>

         <View style={localStyles.buttonContainer} >
            <TouchableOpacity
                  style = {appStyles.buttonPrimary}
                  onPress = {
                     () => this.props.navigation.navigate(Pages.EmailEntry)
                  }>
                  <Text style = {localStyles.submitButtonText}>Back</Text>
               </TouchableOpacity>

            <TouchableOpacity
                  style = {appStyles.buttonPrimary}
                  onPress = {
                     () => this.submitCode(this.state.code)
                  }>
                  <Text style = {localStyles.submitButtonText}>Submit Code</Text>
               </TouchableOpacity>
            </View>
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
      color: 'white'
   },
});