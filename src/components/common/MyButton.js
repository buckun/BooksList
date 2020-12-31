import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Spinner } from './Spinner';

const MyButton = ({ spinner, title, onPress, color }) => {
    const content = spinner ? (
        <Spinner />
    ) : (
            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={onPress}>
                <Text style={styles.loginText}>Logout</Text>
            </TouchableOpacity>
        )

    return (
        <View style={styles.buttonWrapper}>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        marginTop: 20,
        height: 49,
        borderRadius: 10,
        justifyContent: 'center',
        fontSize: 18,
        backgroundColor: '#fff'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        width: 300,
        borderRadius: 30,
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
})

export { MyButton }