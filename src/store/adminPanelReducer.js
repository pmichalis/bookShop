
const initialState = {
    book : {}
}

const adminPanelReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
         console.log ("unkown no action " + action.type);
         return state;
    }
}

export default adminPanelReducer;