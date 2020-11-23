import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Medidor from "../../../assets/medidor.svg";
import CustomButton from "../../../components/Button";
import "./Evaluacion.css";
import PrincipalEvaluacion from "./PrincipalEvaluacion";

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

const Evaluacion  = (props) => {
  const classes = useStyles();
  const actionClasses = props.classes;
  const [active, setActive] = React.useState(true);
  const [paso, setPaso] = React.useState(0);

  const handleChange = () => {
    setActive(false);
  };

  return active ? (
    <Grid container direction="column">   
        <Grid container item className={classes.contGenTxt}>
          <Grid container item xs={8}>
            <Grid item xs={12} className={classes.txtContainer}>
              <Typography variant="h3" className={classes.txtContainerTitle}>¿En qué consiste la evaluación?</Typography>
              <Typography variant="h5">
              La evaluación consiste en medir y hacer un
              seguimiento de los avances de la implementación de
               Gobierno Digital en los municipios.
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.txtContainer}>
              <Typography variant="h3" className={classes.txtContainerTitle}>Pasos a seguir</Typography>
              <Typography variant="h5">
              <li>Distribuir sus Objetivos Estratégicos con los criterios del Plan de Gobierno Digital</li>
              </Typography>
              <Typography variant="h5">
              <li>Modificar los pesos asignados a cada componente de acuerdo a su criterio</li>
              </Typography>
              <Typography variant="h5">
              <li>Responder el cuestionario de preguntas por componente</li>
              </Typography>              
            </Grid>
            <Grid item xs={12} className={classes.txtContainer}>
              <Typography variant="h3" className={classes.txtContainerTitle}>¿Cuánto tiempo me tomará?</Typography>
              <Typography variant="h5">
              La evaluación tardará aproximadamente 4 horas
              </Typography>
            </Grid>
          </Grid>
          <Grid container item xs={4} justify="center" alignContent="center">
            <div className="top-section-E">
              <img src={Medidor} alt="medidor" top="100"/>
              <div className="btn-container-E">
                <CustomButton
                  text="EMPEZAR"
                  type="primary"
                  size="15rem"
                  action={handleChange}
                />
              </div>
            </div>
          </Grid>
        </Grid>
    </Grid>
  ):
  (
    <PrincipalEvaluacion eval={props.eval} entity={props.entity}/>
  )
};

export default Evaluacion;