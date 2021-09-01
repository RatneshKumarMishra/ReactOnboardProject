import React from 'react'
import {StyleSheet,View,Text,TextInput,Button,TouchableOpacity} from 'react-native'

function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Text >This is Login Screen</Text>
            <TextInput style={styles.input} placeholder="USERNAME" />
            <TextInput style={styles.input} placeholder="PASSWORD" />
            <Button  title="Login"/>
            <View >
                <TouchableOpacity>
                <Text onPress={() =>navigation.navigate('Signup')} style={{marginLeft:'30%',marginTop:20,color:'red'}} >Don't have an Account</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:20,}}>
        <Button onPress={() =>navigation.navigate('HomeScreen')} title="Go back"/>
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

export default Login;
