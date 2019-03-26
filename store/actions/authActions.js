export const registerWithFacebook = () => {
    return  async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        var app_id = '317167969003654';
        const { type, token } =  await Expo.Facebook.logInWithReadPermissionsAsync(app_id);
        console.log('type',type);
        if (type == 'success') {
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            firebase.auth().signInWithCredential(credential).then(function(result){
                dispatch({ type: 'REG_FACE_SUCCESS'});
                var user = result.user;
                console.log('user',user);
            }).catch(function(error){
                var errorCode = error.code;
                dispatch({ type: 'REG_FACE_ERR', errorCode });
                console.log(error);
            });
        }
    }
      //var provider = new firebase.auth.FacebookAuthProvider();
      //firebase.auth().signInWithRedirect(provider);
        /*firebase.auth().getRedirectResult().then(function(result) {
          dispatch({ type: 'REG_FACE_SUCCESS'});
          if (result.credential) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // ...
          }
          // The signed-in user info.
          var user = result.user;
          console.log('user',result.user);
          
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          dispatch({ type: 'REG_FACE_ERR', errorCode });
          // ...
        });*/
}

export const registerWithEmail = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      firebase.auth().createUserWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then((user) => {
        dispatch({ type: 'APP_REG_SUCCESS'});
      }).catch((err) => {
        dispatch({ type: 'APP_REG_ERROR', err})
      });
    }
  }
  