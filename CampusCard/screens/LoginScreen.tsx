import * as React from 'react';
import {Button, Pressable, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Stack } from "react-native-spacing-system";

import { Text, View } from '../components/Themed';
import {useState} from "react";
import Constants from "expo-constants";

let email ='';
let pass ='';
const setEmail = (text: string) => {
    email = text;
}
const setPass = (text: string) => {
    pass = text;
}

export default function LoginScreen() {
    const handleSignUp = () => {
        Alert.alert(
            "User Added",
            "Please login with your new credentials",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
    }
    const handleLogin = () => {
        Alert.alert(
            "Logged In",
            "You may now proceed to use the app",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
    }
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <TextInput placeholder="Email" onChangeText={text => setEmail(text)} style={{width: 200, display: 'flex'}}/>
            </View>
            <Stack size={16} />
            <View style={styles.textContainer}>
                <TextInput placeholder="Password" secureTextEntry={true} onChangeText={text => setPass(text)} style={{width: 200, display: 'flex'}}/>
            </View>
            <Stack size={16} />

            <TouchableOpacity onPress={handleSignUp}>
                <Text>Sign up</Text>
            </TouchableOpacity>
            <Stack size={16} />

            <TouchableOpacity onPress={handleLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
        backgroundColor: 'lightgrey'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    textContainer: {
        display: 'flex',
        backgroundColor: 'white',
    }
});
