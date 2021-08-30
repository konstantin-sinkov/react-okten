import {FETCH_USERS, PUSH_USER} from "./action.types";

const fetchUsers = (value) => {
    return {type: FETCH_USERS, payload: value}
}

const postUser = (value) => {
    return {type: PUSH_USER, payload: value}
}

export {fetchUsers, postUser}