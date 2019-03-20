export const registerEmployer = (employer) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        var uid = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('employers').doc(uid).set({
            ...employer,
          }).then(() => {
            dispatch({ type: 'CREATE_EMPLOYER_SUCCESS' });
          }).catch((err) => {
            dispatch({ type: 'CREATE_EMPLOYER_ERROR', err });
          });
    }
}