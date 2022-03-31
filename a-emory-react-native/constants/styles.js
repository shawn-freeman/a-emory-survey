import { StyleSheet, Dimensions } from 'react-native';

/*
Lightest: #CCCCFF - Periwinkle
Light: #9EA9ED
Dark: #7575CF
Darkest: #5453A6
*/
export const appStyles = StyleSheet.create({
    container: {
       flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccccff',
        color: '#5453A6',
     },
     contentContainer: {
      flex: 1,
    },
     input: {
        margin: 15,
        padding: 10,
        height: 40,
        backgroundColor: 'white',
        borderColor: '#5453A6',
        //placeholderTextColor: '#000000',
        borderWidth: 5,
        borderRadius: 10,
     },
   buttonPrimary: {
      backgroundColor: '#7575CF',
      padding: 10,
      margin: 15,
      height: 40,
   },
   buttonCircle: {
      backgroundColor: '#7575CF',
      padding: 10,
      margin: 15,
      height: 50,
      width: 50,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
   },
  });