import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
} from 'react-native';

const Banner = (props) => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.bannerText}>
                        {props.text}
                    </Text>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 'auto',
        height: 370,
        backgroundColor: '#0200EB',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bannerText: {
        fontSize: 34,
        color: 'white'
    }

});

export default Banner;
