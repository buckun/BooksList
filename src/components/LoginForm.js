import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';

import { Spinner } from './common'

import firebase from 'firebase';


const LoginForm = (props) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState();
    const [isLoading, setIsLoadinge] = useState(false);

    const onClickListener = (viewId) => {
        switch (viewId) {
            case 'restore_password':
                Alert.alert("Alert", "Button pressed " + email);

                break;
            case 'login':
                loginClickButton();
                break;
            case 'register':
                Alert.alert("Alert", "Button pressed " + viewId);
                break;

            default:
                Alert.alert("Alert", "Button pressed " + viewId);
                break;
        }
    }

    const loginClickButton = () => {
        setIsLoadinge(true)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                setIsLoadinge(false)
                setEmail("")
                setPassword("")
                setErrorMessage()
            })
            .catch((err) => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((response) => {
                        setIsLoadinge(false)
                        setEmail("")
                        setPassword("")
                        setErrorMessage()
                    })
                    .catch((error) => {
                        setIsLoadinge(false)
                        setErrorMessage("Authentication failed")
                    });
            });
    }

    const errorMsg = errorMessage ? (
        <Text style={{ color: 'red' }}>
            {errorMessage}
        </Text>
    ) : null;

    const loading = isLoading ? (
        <Spinner />
    ) : <Text style={styles.loginText}>Login</Text>;

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        placeholderTextColor='grey'
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        value={email}
                        onChangeText={(email) => setEmail(email)} />
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/nolan/40/000000/email.png' }} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        placeholderTextColor='grey'
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={password}
                        onChangeText={(password) => setPassword(password)} />
                    <Image style={styles.inputIcon} source={{ uri: 'https://img.icons8.com/nolan/40/000000/key.png' }} />
                </View>

                <View style={{ alignSelf: 'flex-start', marginStart: 12 }}>
                    {errorMsg}
                </View>

                <TouchableOpacity style={styles.btnForgotPassword} onPress={() => onClickListener('restore_password')}>
                    <Text style={styles.btnText}>Forgot your password?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => onClickListener('login')}>
                    {loading}
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.buttonContainer} onPress={() => onClickListener('register')}>
                    <Text style={styles.btnText}>Register</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const resizeMode = 'center';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 300,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginRight: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 300,
        borderRadius: 30,
        backgroundColor: 'transparent'
    },
    btnForgotPassword: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 18,
        width: 300,
        backgroundColor: 'transparent'
    },
    loginButton: {
        backgroundColor: "#00b5ec",

        shadowColor: "#808080",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    },
    loginText: {
        color: 'white',
    },
    bgImage: {
        flex: 1,
        resizeMode,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    btnText: {
        color: "white",
        fontWeight: 'bold',
    }

});

export default LoginForm;
