export const registerEmployee = (employee) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        var uid = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('employees').doc(uid).set({
            ...employee,
          }).then(() => {
            dispatch({ type: 'CREATE_EMPLOYEE_SUCCESS' });
          }).catch((err) => {
            dispatch({ type: 'CREATE_EMPLOYEE_ERROR', err });
          });
    }
}