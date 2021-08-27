const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_10':
            return {counter: state.counter + 10};

        case 'SUB_2':
            return {counter: state.counter - 2};

        default:
            return state.count;
    }
}

export default reducer;