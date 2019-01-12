
const initialState = {
    book : {
        name : "Book name from store",
        author : "author from store"
    }
}

const adminPanelReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
         console.log ("unkown no action " + action.type);
         return state;
    }
}

export default adminPanelReducer;