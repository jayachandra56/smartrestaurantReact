import { USER_AUTH, USER_AUTH_FAILED, USER_AUTH_SUCCESS, USER_LOGOUT } from "../constants"

const initialUserState = {
    userNumber: '',
    userName:'',
    isLogged: false,
    isLoading: false,
    error: ''
}

export const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case USER_AUTH: {
            return {
                ...state,
                isLoading: true,
                error:''
            }
        }
        case USER_AUTH_SUCCESS: {
            return {
                ...state,
                userNumber: action.payload.number,
                userName:action.payload.name,
                isLogged: true,
                isLoading: false,
                error:''
            }
        }
        case USER_AUTH_FAILED: {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        case USER_LOGOUT: {
            return {
                userNumber: '',
                userName:'',
                isLogged: false,
                isLoading: false,
                error: ''
            }
        }
        default: return state;
    }
}

// export default userReducer