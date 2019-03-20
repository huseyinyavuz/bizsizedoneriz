const initState = {
    regError: null
}

const regEmployeeReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_EMPLOYEE_SUCCESS':
            console.log('create_employee_success');
            return {
                ...state,
                authError: null
            }
        case 'CREATE_EMPLOYEE_ERROR':
            console.log('create_employee_err');
            return {
                ...state,
                authError: action.err
            }
        default:
            return state;
    }
};

export default regEmployeeReducer;