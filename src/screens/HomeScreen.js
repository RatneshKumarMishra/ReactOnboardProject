import React from 'react';
import {SafeAreaView, Text,Button} from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center',padding:20}}>
      <Text style={{textAlign:'center',fontWeight:'bold', fontSize:20}}>What You think Your become</Text>
      <Button onPress={()=>navigation.navigate('Login')} title="Go to Login"/>
    </SafeAreaView>
  );
};

export default HomeScreen;
