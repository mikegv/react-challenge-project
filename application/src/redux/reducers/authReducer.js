import { LOGIN, LOGOUT, ISLOADING } from '../actions/types'

const INITIAL_STATE = { email: null, token: null, isLoading: false };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ISLOADING:
            return { ...state, isLoading: true }
        case LOGIN:
            return { ...state, email: action.payload.email, token: action.payload.token, isLoading: false }
        case LOGOUT:
            return { ...state, ...INITIAL_STATE }
        default:
            return state;
    }
}