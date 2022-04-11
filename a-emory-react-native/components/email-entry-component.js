import React from 'react';
import { Button, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { HttpHandler } from '../services/httpHandler';
import { Pages } from '../constants/pages';
import { appStyles } from '../constants/styles';

export class EmailEntryComponent extends React.Component
{
    state = {
        email: ''
   }

   handleEmail = (text) => {
      this.setState({ email: text});
   }

    submitEmail = async (email) => {
      let result = await new HttpHandler().GetIsEmailValid(email);
      console.log("GetIsEmailValidResult: " + result);
      if(result){
         this.props.navigation.navigate(Pages.EmailVerification, { email: email});
      }else{
         alert('Enter a valid email address.');
      }
    }

    render(){
      return (
         <View style={appStyles.container}>
            <View style={localStyles.headerContainer} >
               <Text>Welcome to </Text>
               <Text style={appStyles.emphasisText}>A Emory Survey</Text>
            </View>

            <View style={localStyles.submitEmailContainer} >
               <Text style={appStyles.generalText}>To begin, enter a valid email address</Text>

               <TextInput style = {appStyles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Email"
                        autoCapitalize = "none"
                        value={this.state.email}
                        onChangeText = {this.handleEmail}/>

               <View style={localStyles.buttonContainer} >
                  <TouchableOpacity
                        style = {appStyles.buttonPrimary}
                        onPress = {
                           () => this.submitEmail(this.state.email)
                        }>
                        <Text style = {localStyles.submitButtonText}> Submit </Text>
                     </TouchableOpacity>
               </View>   
            </View>
            

            <View style={localStyles.buttonContainerVertical} >
               <Text style={appStyles.generalText} >Already have a code?</Text>

               <TouchableOpacity
                     style = {appStyles.buttonPrimary}
                     onPress = {
                        () => this.props.navigation.navigate(Pages.EmailVerification)
                     }>
                     <Text style = {localStyles.submitButtonText}>Enter Code</Text>
                  </TouchableOpacity>
            </View>

            <View style={localStyles.buttonContainerVertical} >
               <TouchableOpacity
                     style = {appStyles.buttonCircle}
                     onPress = {
                        () => this.props.navigation.navigate(Pages.AboutSurvey)
                     }>
                     <Text style = {localStyles.questionMarkButtonText}>?</Text>
                  </TouchableOpacity>
            </View>
         </View>
      );
  }
}

const localStyles = StyleSheet.create({
   headerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   submitEmailContainer: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
   },
   buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   buttonContainerVertical: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 20,
   },
   submitButtonText:{
      color: 'white'
   },
   questionMarkButtonText:{
      color: 'white',
      fontSize: 36,
   },
});