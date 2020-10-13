import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Logo from "../../../assets/logoB.svg";
import Medidor from "../../../assets/medidor.svg";
import "./Inicio.css";
import CustomButton from "../../../components/Button";
import { makeStyles } from "@material-ui/core";
import Img1 from "../../../assets/img1.svg";
import Img2 from "../../../assets/img2.svg";
import Img3 from "../../../assets/img3.svg";
import Img4 from "../../../assets/img4.svg";
import Img5 from "../../../assets/img5.svg";
import Footer from "../../../components/Footer/Footer";


const useStyles = makeStyles((theme) => ({
  txtContainer: {
    padding: theme.spacing(3, 6),
    textAlign:"justify"
  },
  txtContainerTitle: {
    color: "#287198",
  },
  txtContainerTitleCenter: {
    color: "#287198",
    textAlign:"center",
    fontSize: 30
  },
  contGenTxt: {
    background: "#E0E0E0",
  },
}));

const Inicio = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column">   
        <Grid container item xs={16}>
          <div className="top-section-I">
            <img src={Logo} alt="Logo" />
          </div>
        </Grid>
        <Grid container item className={classes.contGenTxt}>
          <Grid container item xs={8}>
            <Grid item xs={12} className={classes.txtContainer}>
              <Typography variant="h3" className={classes.txtContainerTitle}>¿Qué es el <b>Gobierno Digital</b>?</Typography>
              <Typography variant="h5">
              Según la Organización de los Estados Americanos, es la aplicación de las 
              Tecnologías de información y Comunicación (TIC) al funcionamiento del sector 
              público, con el objetivo de brindar mejores servicios al ciudadano e incrementar 
              la eficiencia, transparencia y la participación ciudadana (OEA, 2006)
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.txtContainer}>
              <Typography variant="h3" className={classes.txtContainerTitle}>¿Por qué medirse?</Typography>
              <Typography variant="h5">
              <li>Ayuda a dar seguimiento y visibilidad del cumplimiento del avance de su Plan de Gobierno Digital</li>
              </Typography>
              <Typography variant="h5">
              <li>Ayuda a dar visibilidad de los servicios digitales que brinda la municipalidad en base a buenas 
              prácticas de gobierno y gestión de TI</li>
              </Typography>            
            </Grid>
          </Grid>
          <Grid container item xs={4} justify="center" alignContent="center">
            <img src={Medidor} alt="medidor" />
          </Grid>
        </Grid>
        <Grid container item>
          <Grid container item xs={12} justify="center">
            <Typography variant="h3" className={classes.txtContainerTitleCenter} fontWeight="fontWeightBold">
              <b>
                HERRAMIENTAS PARA REALIZAR MEDICIÓN
              </b>
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
              spacing={2}
              direction="column"
            >
              <img src={Img4} alt="img4" />
              <img src={Img2} alt="img2" />            
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={4}
              justify="center"
              alignContent="center"
              spacing={2}
              direction="column"
            >            
              <img src={Img3} alt="img3" />
              <img src={Img5} alt="img5" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default Inicio;
