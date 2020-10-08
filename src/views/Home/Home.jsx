import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Logo from "../../assets/logo.svg";
import Reloj from "../../assets/reloj.svg";
import "./Home.css";
import CustomButton from "../../components/Button";
import { makeStyles } from "@material-ui/core";
import Img1 from "../../assets/img1.svg";
import Img2 from "../../assets/img2.svg";
import Img3 from "../../assets/img3.svg";

const useStyles = makeStyles((theme) => ({
  txtContainer: {
    padding: theme.spacing(3, 6),
  },
  contGenTxt: {
    background: "#E0E0E0",
  },
}));

const Home = (props) => {
  const classes = useStyles();

  const handleLogin = () => {
    console.log("res");
    props.history.push("/login");
  };

  return (
    <Grid container direction="column">
      <Grid container item>
        <div className="top-section">
          <img src={Logo} alt="Logo" />
          <div className="btn-container">
            <CustomButton
              text="INGRESAR"
              type="primary"
              size="15rem"
              action={handleLogin}
            />
          </div>
        </div>
      </Grid>
      <Grid container item className={classes.contGenTxt}>
        <Grid container item xs={8}>
          <Grid item xs={12} className={classes.txtContainer}>
            <Typography variant="h3">¿Qué es el Gobierno Digital?</Typography>
            <Typography variant="h5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              consequuntur illum, odit, nulla facere dicta nam quos ab beatae
              repellendus molestias. Molestias sapiente praesentium quod
              explicabo asperiores rerum voluptatem! Incidunt!
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.txtContainer}>
            <Typography variant="h3">¿Por qué medirse?</Typography>
            <Typography variant="h5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              consequuntur illum, odit, nulla facere dicta nam quos ab beatae
              repellendus molestias. Molestias sapiente praesentium quod
              explicabo asperiores rerum voluptatem! Incidunt!
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={4} justify="center" alignContent="center">
          <img src={Reloj} alt="reloj" />
        </Grid>
      </Grid>
      <Grid container item>
        <Grid container item xs={12} justify="center">
          <Typography variant="h6" align="center">
            HERRAMIENTAS PARA REALIZAR MEDICIÓN
          </Typography>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid
            container
            item
            xs={12}
            sm={4}
            justify="center"
            alignContent="center"
          >
            <img src={Img1} alt="img1" />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={4}
            justify="center"
            alignContent="center"
          >
            <img src={Img2} alt="img2" />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={4}
            justify="center"
            alignContent="center"
          >
            <img src={Img3} alt="img3" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
