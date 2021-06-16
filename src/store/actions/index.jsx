import { useScrollTrigger } from '@material-ui/core'
import firebase from '../../configs/firebase'
import swal from 'sweetalert';


const set_data = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SETDATA",
            data: data
        })
        console.log('yes its working', data)
    }
}

const admin_google_login = () => {
    return (dispatch) => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...

                var user_data = {
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid,
                }

                firebase.database().ref('/').child(`admin/${user.uid}`).set(user_data)
                    .then(() => {
                        dispatch({ type: 'SETADMIN', payload: user_data })
                        swal('Welcome', user.displayName, 'success')
                    })

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                alert(email)
                // ...
            });

        console.log('yes its working')
    }

}
const admin_google_signOut = () => {
    return (dispatch) => {
        var user_data = {
            name: '',
            email: '',
            profile: '',
            uid: '',
        }
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SETADMIN', payload: user_data })

            swal('SignOut', "user", 'success')
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
}


const google_signOut = () => {
    return (dispatch) => {
        let user_data = {
            name: '',
            email: '',
            profile: '',
            uid: '',
        }
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SETUSER', payload: user_data })

            swal('SignOut', "user", 'success')
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
}

const google_login = () => {
    console.log('facebook working')
    return (dispatch) => {
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...

                let user_data = {
                    name: user.displayName,
                    email: user.email,
                    profile: user.photoURL,
                    uid: user.uid,
                }

                firebase.database().ref('/').child(`users/${user.uid}`).set(user_data)
                    .then(() => {
                        dispatch({ type: 'SETUSER', payload: user_data })
                        swal('Welcome', user.displayName, 'success')
                    })

            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                alert(email)
                // ...
            });

        console.log('yes its working')
    }
}




const add_hotal = (data) => {
    
    return (dispatch) => {
        firebase.database().ref('/').child(`users/${user.uid}/add_hotal`).set(data)
        .then(() => {
            dispatch({ type: 'SETHOTAL', payload: data })
            swal('Welcome', data.name, 'success')
        })
    }
}

export {
    set_data, 
    google_login,
    google_signOut, 
    admin_google_login,
    admin_google_signOut,
    add_hotal,
}