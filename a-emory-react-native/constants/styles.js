import { StyleSheet, Dimensions } from 'react-native';

export const appStyles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CEB3DE',
        height: Dimensions.get('window').height
     },
     input: {
        margin: 15,
        height: 40,
        backgroundColor: '#DDB3DB',
        borderColor: '#9800DD',
        placeholderTextColor: 'black',
        borderWidth: 3
     },
     buttonPrimary: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
     },
  });