import React from "react";
import Logo from "../../images/logo.jpg";

import { Grid, Paper, Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#050A30",
    height: "100px",
    color: "white",
  },
  logo: {
    width: 70,
  },
});

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.header}>
      <Grid
        md={4}
        container
        alignContent="flex-end"
        justify="center"
        direction="column"
      >
        <img src={Logo} alt="Logo" className={classes.logo} />
      </Grid>
      <Grid
        md={4}
        container
        justify="center"
        alignContent="center"
        direction="column"
      >
        {/* <Grid item m={12}> */}
        <Typography variant="h5">Welkin Constructions</Typography>
        <Typography variant="caption" align="center">
          Procurement Management System
        </Typography>
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
};

export default Header;
