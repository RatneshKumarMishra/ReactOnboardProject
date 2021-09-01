import React from 'react'
import {StyleSheet,View,Text,TextInput,Button,TouchableOpacity} from 'react-native'

function Signup({navigation}) {
    
    return (
        <View style={styles.container}>
        <Text >This is Signup Screen</Text>
        <TextInput style={styles.input} placeholder="USERNAME" />
        <TextInput style={styles.input} placeholder="PASSWORD" />
        <Button  title="Signup"/>
        <View style={{marginTop:20,}}>
        <Button onPress={() =>navigation.navigate('Login')} title="Go back"/>
        </View>  
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', alignItems: 'center',
       
    },
    input:{
      borderBottomWidth:3,
       borderBottomColor:'red',
       margin:5,
       marginBottom:20
       
    }
})

export default Signup;
