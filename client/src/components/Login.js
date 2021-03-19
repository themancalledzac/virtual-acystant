import React, { useRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import doctorImage from "../assets/images/pexels-tima-miroshnichenko-5452201.jpg";
import { useLogin } from "../utils/auth";
import { useStoreContext } from "../store";
import { LOGIN_SIGNUP_SWITCH } from "../store/action";
import { TextField } from "@material-ui/core";
import colors from "./colors";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${doctorImage})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: colors.pinkGrey,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: colors.white,
    backgroundColor: colors.blue2,
    "&:hover, &:focus": {
      backgroundColor: colors.blue3,
    },
  },
}));

export default function Login() {
  const classes = useStyles();

  const emailRef = useRef();
  const passwordRef = useRef();

  // Get the helper login function from the `useLogin` hook.
  const login = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      await login({ email, password });

      // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
    } catch (err) {
      // Handle error responses from the API
      if (err.response && err.response.data) console.log(err.response.data);
    }
    window.location.reload(false);
  };

  const [, dispatch] = useStoreContext();
  const loginSignupState = () => {
    dispatch({
      type: LOGIN_SIGNUP_SWITCH,
    });
  };

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        className='signIn'
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  type='text'
                  id='email'
                  inputRef={emailRef}
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  name='password'
                  inputRef={passwordRef}
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item container justify='flex-end'>
                <Link href='#' onClick={loginSignupState} variant='body2'>
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
