export const CHANGE_NAME = 'CHANGE_NAME';

const initialState = {
    name: "Roman"
};


module.exports = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            var newName = action.payload;
            return { name: newName };
        default:
            return state;
    }


};
