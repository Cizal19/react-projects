import { useState } from 'react';
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
import { useEffect } from "react";
import { Formik, useFormik } from "formik";
import { SignUpFormSchema } from "../schemas/SignUpFormSchema";
import { useNavigate } from "react-router-dom";

// import Snackbar from '@mui/material/Snackbar';
// import Alert from '@mui/material/Alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const theme = createTheme();

const SignUp: React.FC = () => {
  useEffect(() => {
    document.title = 'Sign Up';
  }, [])


 // const [open, setOpen] = useState(false)

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/SignIn`;
    navigate(path);
  }

  const successNotify = () => {
    toast.success('You have signed up successfully', {
      position: "bottom-center",
      autoClose: 2000,
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
    validationSchema: SignUpFormSchema,
    onSubmit: async (values, actions) => {
      localStorage.setItem("savedInfo", JSON.stringify(values))
      successNotify()
      // setOpen(true)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      actions.resetForm()
      routeChange()
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
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  autoComplete="off"
                  id="email"
                  label="Email Address"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && !values.email}
                  helperText={
                    (errors.email && touched.email) && errors.email
                  }
                />
                {/* {(errors.email && touched.email) && <Typography color="red">{errors.email}</Typography>} */}
              </Grid>
              <Grid item xs={12}>
                <TextField
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
                {/* {(errors.password && touched.password) && <Typography color="red">{errors.password}</Typography>} */}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.confirmPassword && !values.confirmPassword}
                  helperText={
                    (errors.confirmPassword && touched.confirmPassword) && errors.confirmPassword.slice(54, 75)
                  }
                />
                {/* {(errors.confirmPassword && touched.confirmPassword) && <Typography color="red">{errors.confirmPassword.slice(54, 75)}</Typography>} */}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <ToastContainer />
        {/* <Snackbar
          open={open}
          autoHideDuration={3000}
        >
          <Alert severity="success" sx={{ width: '100%' }}>
            You have signed up successfully
          </Alert>
        </Snackbar> */}
      </Container>
    </ThemeProvider>
  );
}

export default SignUp