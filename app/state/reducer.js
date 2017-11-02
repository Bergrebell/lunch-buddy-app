const initialState = {
    number: 42
};

module.exports = (state = initialState, action) => {

    switch(action.type) {
        case 'NUMBER_INCREASE':
            var newNumber = state.number + 1;
            return { number: newNumber };
        case 'NUMBER_DECREASE':
            var newNumber = state.number - 1;
            return { number: newNumber };
        default:
            return state;
    }
};
