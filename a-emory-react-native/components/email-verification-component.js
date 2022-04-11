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

      if(result.some(a => a)){
         this.props.navigation.navigate(Pages.SurveyQuestion, { questions: result });
      }else{
         this.props.navigation.navigate(Pages.EndOfSurvey);
      }
    }

    render(){
    return (
       <View style={appStyles.container}>
         <View style={localStyles.codeContainer} >
            <Text style={appStyles.generalText} >Enter the verification code that was sent to your email below:</Text>
            
            <TextInput style = {appStyles.input}
                     underlineColorAndroid = "transparent"
                     placeholder = "Verification Code"
                     autoCapitalize = "none"
                     value={this.state.code}
                     onChangeText = {this.handleCodeEntry}/>
         </View>

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
   );
  }
}

const localStyles = StyleSheet.create({
   codeContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   buttonContainer: {
      flex: 1,
      flexDirection: 'row',
   },
   submitButtonText:{
      color: 'white'
   },
});