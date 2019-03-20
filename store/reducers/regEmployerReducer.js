const initState = {
    regError: null
}

const regEmployerReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_EMPLOYER_SUCCESS':
            console.log('create_employer_success');
            return {
                ...state,
                authError: null
            }
        case 'CREATE_EMPLOYER_ERROR':
            console.log('create_employer_err');
            return {
                ...state,
                authError: action.err
            }
        default:
            return state;
    }
};

export default regEmployerReducer;