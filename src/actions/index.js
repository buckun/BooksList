export const SELECT_BOOK = 'select_book';
export const DESELECT_BOOK = 'deselect_book';

export const selectBook = (book) => {
    return {
        type: SELECT_BOOK,
        payload: book
    };
};

export const deSelectBook = () => {
    return {
        type: DESELECT_BOOK,
        payload: {}
    };
}