import React, { useState } from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Container, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../../../images/cover.jpg";

import { Logins } from "./Types";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { loginActionCreators } from "../../../state/actions";
import { State } from "../../../state/reducers";
import { Form, Formik } from "formik";

const useStyles = makeStyles({
  root: {
    "& .MuiFilledInput-root": {
      background: "rgb(232, 241, 250, 1)",
      fontWeight: "20px",
      fontStyle: "italic",
    },
  },
  background: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "87vh",
  },
  formBackground: {
    backgroundColor: "rgb(0, 0, 0, 0.7)",
    color: "white",
    borderRadius: "20px",
    height: 500,
    marginTop: "100px",
  },
  form: {
    width: "400px",
  },
  logo: {
    width: 70,
  },
  button: {
    marginTop: "20px",
  },
});

const Login: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { login } = bindActionCreators(loginActionCreators, dispatch);

  const [loginData, setloginData] = useState<Logins>({
    email: "",
    password: "",
  });

  return (
    <Container maxWidth={false} className={classes.background}>
      <Grid container justify="center" alignItems="center">
        <Grid
          container
          md={4}
          alignItems="center"
          justify="center"
          className={classes.formBackground}
        >
          <Formik
            initialValues={loginData}
            onSubmit={(values) => {
              setloginData(values);
              login(loginData);
            }}
          >
            {({ values, handleChange, handleBlur }) => (
              <Form>
                <Grid
                  direction="column"
                  container
                  md={12}
                  justify="center"
                  justifyContent="flex-start"
                  alignItems="center"
                  className={classes.root}
                >
                  <FontAwesomeIcon icon={faUserCircle} size="10x" />
                  <TextField
                    variant="filled"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    className={classes.form}
                    color="primary"
                    margin="normal"
                    fullWidth={true}
                    required
                  />
                  <TextField
                    variant="filled"
                    name="password"
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    className={classes.form}
                    margin="normal"
                    fullWidth={true}
                    type="password"
                    required
                  />
                  <Button
                    type="submit"
                    className={classes.button}
                    variant="contained"
                    color="primary"
                  >
                    Login
                  </Button>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
