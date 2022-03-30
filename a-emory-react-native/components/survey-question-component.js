import React from 'react';
import { Button, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { Pages } from '../constants/pages';
import { appStyles } from '../constants/styles';
import { HttpHandler } from '../services/httpHandler';

export class SurveyQuestionComponent extends React.Component
{
    state = {
        allQuestions: this.props.route.params.questions,
        currentQuestion: this.props.route.params.questions[0],
        answer: ''
   }

   async getNextQuestion(){
    console.log(this.state.currentQuestion);
    let result = await new HttpHandler().AnswerQuestion(this.state.currentQuestion);
    console.log(result);
    let nextIndex = this.state.allQuestions.indexOf(this.state.currentQuestion) + 1;
    
    if(nextIndex >= this.state.allQuestions.length){
        this.props.navigation.navigate(Pages.EmailEntry);
   }

    this.setState({ currentQuestion: this.state.allQuestions[nextIndex]});
   }

   handleAnswerEntry = (text) => {
    this.setState({ 
       currentQuestion: {
          ...this.state.currentQuestion,
          answer: text
       }
    });
    }

    render(){
    return (
       <View>
         <View style={appStyles.container}>
         <Text>{this.state.currentQuestion.questionDefinition.description}</Text>
         
         <TextInput style = {appStyles.inputQuestionAnswer}
                  underlineColorAndroid = "transparent"
                  placeholder = "Enter your answer here"
                  autoCapitalize = "none"
                  multiline={true}
                  value={this.state.currentQuestion.answer}
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