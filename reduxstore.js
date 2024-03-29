import config from './fbConfig.json';
import * as firebase from 'firebase';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reactReduxFirebase,firebaseReducer, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore, firestoreReducer } from 'redux-firestore';
import authReducer from './store/reducers/authReducer';
import regEmployeeReducer from './store/reducers/regEmployeeReducer';
import regEmployerReducer from './store/reducers/regEmployerReducer';
import jobOfferReducer from './store/reducers/jobOfferReducer';
import thunk from 'redux-thunk';
import 'firebase/firestore';

const fbConfig = config;

firebase.initializeApp(fbConfig);

const appReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer,
    regEmployee: regEmployeeReducer,
    regEmployer: regEmployerReducer,
    jobOffer: jobOfferReducer
});

const store = createStore(appReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reactReduxFirebase(firebase), // redux binding for firebase
      reduxFirestore(firebase) // redux bindings for firestore
    )
);

export default store;