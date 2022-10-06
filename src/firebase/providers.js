import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup , } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() =>{
    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log({credentials});
        const {displayName, email, uid, photoURL} = result.user;
        
        return {
            ok:true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        return {
            ok:false,
            errorMessage: error.message
        }
    }
}

export const registerUserWithEmailPassword = async( {email, password, dosplayName} ) =>{
    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL} = resp.user;
        console.log(resp)

    } catch (error) {
        console.log(error)
        return {
            ok:false,
            errorMessage: error.message
        }
    }
}