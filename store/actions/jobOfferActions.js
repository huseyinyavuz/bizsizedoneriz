export const createJobOffer = (jobOffer) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        var uid = getState().firebase.auth.uid;
        jobOffer.employerId = uid;
        const firestore = getFirestore();
        firestore.collection('jobOffers').add({
            ...jobOffer
          }).then(() => {
            dispatch({ type: 'OFFER_CREATE_SUCCESS' });
          }).catch((err) => {
            dispatch({ type: 'OFFER_CREATE_ERR', err });
          });
    }
}