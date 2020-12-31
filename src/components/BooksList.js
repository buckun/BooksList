import React, { useState } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native';

import { connect } from 'react-redux';

import BookItem from './common/BookItem'

const BooksList = (props) => {
    const [selectedId, setSelectedId] = useState(null);

    clickEventListener = (item) => {
        Alert.alert("Item selected: " + item.description)
    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        return (
           <BookItem book = {item}/>
        );
    };
    return (
        <>
            <View>
                <FlatList
                    data={props.books}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            </View>
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
    },
});

const mapStateToProps = state => {
    console.log('state', state)
    console.log('state.selectedBook', state.selectedBook)
    return {
        books: state.books,
        selectedBook: state.selectedBook
    }
}

export default connect(mapStateToProps)(BooksList);
