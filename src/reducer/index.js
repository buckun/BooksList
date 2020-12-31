import {combineReducers} from 'redux'
import bookList from './bookReducer'
import SelectedBookReducer from './SelectedBookReducer'


export default combineReducers({
    books: bookList,
    selectedBook: SelectedBookReducer
});