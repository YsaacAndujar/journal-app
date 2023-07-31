import { types } from "types/types";
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig'
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = (email, password) =>{
    return (dispatch) => {
        dispatch(startLoading())
        firebase.auth().signInWithEmailAndPassword(email, password)
        
        .then(({user}) =>{
            dispatch(
                login(user.uid, user.displayName)
            )
        })
        .catch(e =>{
            finishLoading()
            console.log(e)
        })
        .finally(()=>{
            dispatch(finishLoading())
        })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({ user }) =>{
            dispatch(
                login(user.uid, user.displayName)
            )
        })
    } 
}

export const startRegisterWithEmailPasswordName = (email, password, name) =>{
    
    return (dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async ({user}) =>{
            await user.updateProfile({displayName: name} )
            dispatch(
                login(user.uid, user.displayName)
            )
        })
        .catch(e =>{
            console.log(e)
        })
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}