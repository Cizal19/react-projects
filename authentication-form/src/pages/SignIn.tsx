import { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Formik, useFormik } from "formik";
import { SignInFormSchema } from "../schemas/SignInFormSchema";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
}

const theme = createTheme();

const SignIn = () => {
  
  useEffect(() => {
    document.title = 'Sign In';
  }, [])

  const [savedInfo, setSavedInfo] = useState<FormValues>(
    () => JSON.parse(localStorage.getItem("savedInfo")!)
  )

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(false))
  }, [])

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/Home`;
    navigate(path);
  }

  const errorNotify = () => {
    toast.error('Invalid Email or Password', {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  }

  const successNotify = () => {
    toast.success('Signed in successfully', {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  }


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignInFormSchema,
    onSubmit: async (values, actions) => {
      if ((values.email === savedInfo.email) && (values.password === savedInfo.password)) {
        successNotify()
        localStorage.setItem('isLoggedIn', JSON.stringify(true))
        await new Promise((resolve) => setTimeout(resolve, 3000))
        routeChange()
      } else {
        errorNotify()
        await new Promise((resolve) => setTimeout(resolve, 3000))
        actions.resetForm()
      }
    }
  })


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="off" 
              autoFocus
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && !values.email}
              helperText={
                (errors.email && touched.email) && errors.email
              }
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && !values.password}
              helperText={
                (errors.password && touched.password) && errors.password
              }
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <ToastContainer />
      </Container>
    </ThemeProvider>
  )
}

export default SignIn
