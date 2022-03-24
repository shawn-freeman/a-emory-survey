import React from 'react';
import { Button, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
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
      alert("Email entered: " + email);
    }

    render(){
    return (
       <View>
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