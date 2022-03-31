import React from 'react';
import { Dimensions, TouchableOpacity, StyleSheet, Text, TextInput, View } from 'react-native';
import { Pages } from '../constants/pages';
import { appStyles } from '../constants/styles';
import { HttpHandler } from '../services/httpHandler';

export class SurveyQuestionComponent extends React.Component
{
    state = {
        allQuestions: this.props.route.params.questions,
        currentQuestion: this.props.route.params.questions[0],
   }

   async getNextQuestion(){
    console.log(this.state.currentQuestion);
    let result = await new HttpHandler().AnswerQuestion(this.state.currentQuestion);

    if(result === true){
      let nextIndex = this.state.allQuestions
         .findIndex(question => 
            question.questionDefinition === this.state.currentQuestion.questionDefinition) + 1;
    
      if(nextIndex >= this.state.allQuestions.length){
          this.props.navigation.navigate(Pages.EmailEntry);
        }else{
           this.setState({ 
              currentQuestion: {
                 ...this.state.allQuestions[nextIndex],
                 answer: ''
              }
           });
        }
    }else{
       alert('An error occured.');
    }
   }

   async exitSurvey(){
      this.props.navigation.navigate(Pages.EmailEntry);
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
       <View style={appStyles.container}>
          <View style={appStyles.contentContainer} >
            <View style={localStyles.questionContainer}>
               <Text>{this.state.currentQuestion.questionDefinition.description}</Text>
            </View>

            <View style={localStyles.answerContainer}>
               <TextInput style = {localStyles.inputQuestionAnswer}
                           underlineColorAndroid = "transparent"
                           placeholder = "Enter your answer here"
                           autoCapitalize = "none"
                           multiline={true}
                           value={this.state.currentQuestion.answer || ''}
                           onChangeText = {this.handleAnswerEntry}/>
            </View>

            <View style={localStyles.buttonContainer} >
               <TouchableOpacity
                     style = {appStyles.buttonPrimary}
                     onPress = {
                        () => { this.getNextQuestion(); }
                     }>
                     <Text style = {localStyles.submitButtonText}>Next</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                     style = {appStyles.buttonPrimary}
                     onPress = {
                        () => { this.exitSurvey(); }
                     }>
                     <Text style = {localStyles.submitButtonText}>Exit</Text>
                  </TouchableOpacity>
               </View>
          </View>
       </View>
   );
  }
}

const localStyles = StyleSheet.create({
   questionContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').width / 2,
   },
   answerContainer: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
   },
   inputQuestionAnswer: {
      flex: 1,
      margin: 15,
      padding: 10,
      width: Dimensions.get('window').width / 2,
      backgroundColor: 'white',
      borderColor: '#5453A6',
      //placeholderTextColor: '#000000',
      borderWidth: 5,
      borderRadius: 10,
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