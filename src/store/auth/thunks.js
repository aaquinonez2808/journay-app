import {checkingCredentials} from './authSlice'

export const checkingAuthntication = (email, password) =>{
    return async ( dispatch ) =>{
        dispatch(checkingCredentials());
    }
}