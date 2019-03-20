const initState = {
    offerCreationError: null
}

const jobOfferReducer = (state = initState, action) => {
    switch(action.type){
        case 'OFFER_CREATE_SUCCESS':
            console.log('offer_create_success');
            return {
                ...state,
                offerCreationError: null
            }
        case 'OFFER_CREATE_ERR':
            console.log('offer_create_err');
            return {
                ...state,
                offerCreationError: action.err
            }
        default:
            return state;
    }
};

export default jobOfferReducer;