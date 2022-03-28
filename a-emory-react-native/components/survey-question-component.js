import React from 'react';
import { Button, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { Pages } from '../constants/pages';
import { appStyles } from '../constants/styles';
import { HttpHandler } from '../services/httpHandler';

export class SurveyQuestionComponent extends React.Component
{
    state = {
        allQuestions: [],
        currentQuestion: {},
        answer: ''
   }

   getNextQuestion(){
    alert('getNextQuestion()');
   }

   handleAnswerEntry = (text) => {
    this.setState({ answer: text});
    }

    render(){
    return (
       <View>
         <View style={appStyles.container}>
         <Text>Question Description goes here.</Text>
         
         <TextInput style = {appStyles.inputQuestionAnswer}
                  underlineColorAndroid = "transparent"
                  placeholder = "Enter your answer here"
                  autoCapitalize = "none"
                  value={this.state.currentQuestion.Answer}
                  onChangeText = {this.handleAnswerEntry}/>

         <View style={localStyles.buttonContainer} >
            <TouchableOpacity
                  style = {appStyles.buttonPrimary}
                  onPress = {
                     () => { this.getNextQuestion(); }
                  }>
                  <Text style = {localStyles.submitButtonText}>Next</Text>
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