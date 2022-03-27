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
      }
    }

    render(){
      return (
         <View style={appStyles.container}>
            <Text>Welcome to A Emory Survey!</Text>

            <Text>To begin, please enter a valid email address</Text>

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

            <View style={localStyles.buttonContainerVertical} >
               <Text>Already have a code?</Text>

               <TouchableOpacity
                     style = {appStyles.buttonPrimary}
                     onPress = {
                        () => this.props.navigation.navigate(Pages.EmailVerification)
                     }>
                     <Text style = {localStyles.submitButtonText}>Enter Code</Text>
                  </TouchableOpacity>
            </View>
         </View>
      );
  }
}

const localStyles = StyleSheet.create({
   buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   buttonContainerVertical: {
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '20px'
   },
   submitButtonText:{
      color: 'white'
   },
});