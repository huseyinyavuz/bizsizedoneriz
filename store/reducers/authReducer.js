const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'REG_FACE_SUCCESS':
            console.log('login_face_success');
            return {
                ...state,
                authError: null
            }
        case 'REG_FACE_ERR':
            console.log('login_face_err');
            return {
                ...state,
                authError: action.errorCode
            }
        case 'APP_REG_SUCCESS':
            console.log('app_reg_success');
            return {
                ...state,
                authError: null
            }
        case 'APP_REG_ERROR':
            console.log('app_reg_error');
            return {
                ...state,
                authError: action.err
            }
        default:
            return state;
    }
};

export default authReducer;