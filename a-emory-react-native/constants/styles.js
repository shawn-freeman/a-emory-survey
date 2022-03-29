import { StyleSheet, Dimensions } from 'react-native';

export const appStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccccff',
        height: Dimensions.get('window').height
     },
     input: {
        margin: 15,
        padding: 10,
        height: 40,
        backgroundColor: '#DDB3DB',
        borderColor: '#9800DD',
        placeholderTextColor: 'black',
        borderWidth: 5,
        borderRadius: 10,
     },
     inputQuestionAnswer: {
      margin: 15,
      padding: 10,
      height: '25%',
      backgroundColor: '#DDB3DB',
      borderColor: '#9800DD',
      placeholderTextColor: 'black',
      borderWidth: 5,
      borderRadius: 10,
   },
   buttonPrimary: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   buttonCircle: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 50,
      width: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
   },
  });