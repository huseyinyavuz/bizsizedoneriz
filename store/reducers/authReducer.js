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
        default:
            return state;
    }
};

export default authReducer;