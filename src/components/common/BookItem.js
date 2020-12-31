import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import * as Action from '../../actions/index';

const BookItem = (props) => {

    const { book, selected } = props;

    /*clickEventListener = (item) => {
        const { book, selected } = props;

        selected ? props.deselectBook()
            : props.selectBook(book);
    }

    descriptionFielt = () => {
        return selected ? (
            <Text>{props.book.description}</Text>
        ) : null;
    }*/

    console.log('descriptionFielt', props.selceted)
    return (
        <TouchableOpacity style={[styles.card, { borderColor: props.book.color }]} onPress={() => { clickEventListener(props.book) }}>
            <View style={styles.cardContent}>
                <Text style={[styles.description]}>{props.book.title}</Text>
                <Text style={styles.date}>{props.book.author}</Text>
            </View>
        </TouchableOpacity>
    )

};

const mapStateToProps = (state, props) => {
    const selceted = state.selectBook && state.selectBook.isbn === props.book.isbn;
    return {
        selceted
    };
}
export default connect(mapStateToProps, Action)(BookItem);


const styles = StyleSheet.create({
    cardContent: {
        marginLeft: 20,
        marginTop: 10,
    },
    card: {
        shadowColor: '#0200EB',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: "white",
        flexBasis: '46%',
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderLeftWidth: 6,
    },
    description: {
        fontSize: 18,
        flex: 1,
        color: "#008080",
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        flex: 1,
        color: "#696969",
        marginTop: 5
    },

})