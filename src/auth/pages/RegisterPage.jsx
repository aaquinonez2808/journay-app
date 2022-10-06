import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';


const formData = {
    displayName:'',
    email:'',
    password:''
}

const formValidations = {
  email:[value => value.includes('@'), 'El correo debe de tener una @'],
  password:[value => value.length>=6 , 'El password debe de tener mas de 6 letrass'],
  displayName:[value => value.length>=1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {
  const [isSubmit, setisSubmit] = useState(false);
  const {displayName, email, password, onInputChange, formState, isFormValid, displayNameValid, emailValid, passwordValid} = useForm(formData, formValidations);

  const dispatch = useDispatch();
  const onSubmit = (event) =>{
    event.preventDefault()
    setisSubmit(true)
    if(!isFormValid) return
    console.log(formState);
    dispatch(startCreatingUserWithEmailPassword(formState)) 

  }
  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={onSubmit}>
          <Grid container>
           
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder='Nombre completo' 
                fullWidth
                value={displayName}
                name={"displayName"}
                onChange={onInputChange}
                error = {displayNameValid!==null && isSubmit}
                helperText={isSubmit && displayNameValid}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Correo" 
                type="email" 
                placeholder='correo@google.com' 
                fullWidth
                value={email}
                name={"email"}
                onChange={onInputChange}
                error = {emailValid!==null && isSubmit}
                helperText={isSubmit && emailValid}
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Contraseña" 
                type="password" 
                placeholder='Contraseña' 
                fullWidth
                value={password}
                name={"password"}
                onChange={onInputChange}
                error = {passwordValid!==null && isSubmit}
                helperText={isSubmit && passwordValid}
              />
            </Grid>
            
            <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={ 12 }>
                <Button variant='contained' fullWidth type='submit'>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>


            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                ingresar
              </Link>
            </Grid>

          </Grid>


        </form>

    </AuthLayout>
  )
}
