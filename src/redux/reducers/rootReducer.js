import {FETCH_USERS, PUSH_USER} from "../actions/action.types";

let initialState = {users: []}

const rootReducer = (state = initialState, action) => { //
    switch (action.type) {
        case FETCH_USERS:
            // console.log('payload:', action.payload);
            return {...state, users: [...action.payload]};
        case PUSH_USER:
            return {...state, users: [...state.users, action.payload]};
        default:
            return state;
    }
}

export {rootReducer};