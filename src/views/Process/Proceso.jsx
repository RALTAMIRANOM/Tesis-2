import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Logo from "../../assets/logoB.svg";
import Medidor from "../../assets/medidor.svg";
import "./Proceso.css";
import CustomButton from "../../components/Button";
import { makeStyles } from "@material-ui/core";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Evaluacion from "./Evaluation/Evaluacion";
import ListaEvaluaciones from "./Evaluation/ListaEvaluaciones"
import PrincipalEvaluation from "./Evaluation/PrincipalEvaluacion"
import Inicio from "./Initial/Inicio";
import Resultado from "./Result/Resultado";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import * as APIEvaluation from '../../dataAccess/evaluation';
//import ImplementationImage from '../../../public/enConstruccion.png';

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#FFFFFF",
    size: 1.2,
    "&$selected": {
      color: "#FFFFFF",
      indicatorColor: "#FFFFFF"},        
  },
  txtContainerTitleCenter: {
      color: "#287198",
      textAlign:"center",
      fontSize: 25,
      marginTop: "10vh",
      marginBottom: "5vh"
  },
  imageBuilding: {
    display:"block",
    margin:"auto",
    marginBottom: "5vh"
  },  
  selected: {}
}));

const Proceso = (props) => {
  const classes = useStyles();
  const actionClasses = props.classes;
  const [value, setValue] = React.useState(0);
  const [evaluacion, setEvaluacion] = React.useState(0);
  const [nameEntity, setNameEntity] = React.useState("");
  const [status, setStatus] = React.useState(0);
  //const [objetivos, setObjetivos] = React.useState([]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const guardarEvaluacion = (objetivos, puntuacion, cuestionario) => {
    let auxEvaluacion = {
      objetivos: objetivos,
      puntuacion: puntuacion,
      cuestionario: cuestionario
    };
    setEvaluacion(auxEvaluacion);
    setValue(2);
  };

  const seleccionarEvaluacion = (idEvalProps, nameEntityProps, statusProps) => {
    console.log(idEvalProps, nameEntityProps, statusProps)
    setEvaluacion(idEvalProps);
    setNameEntity(nameEntityProps);
    setStatus(statusProps);
    console.log(evaluacion, nameEntity, status)
    if(statusProps == 2){ //proceso te dirige a PrincipalEvaluation
      setValue(5);
    }else if(statusProps == 1){ //nueva te dirige a Evaluacion
      setValue(3);
    }else{ //culminada te dirige a resultado
      setValue(4);
    }
  }

  return (
    
      <Grid container direction="column">
        <Header/>      
        <Paper square >
                    <Tabs className={classes.root}
                        TabIndicatorProps={{style: {background:'#FFFFFF'}}}
                        value={value}
                        style={{ background: '#287198'}}
                        onChange={handleChange}
                        variant="fullWidth"
                        //textColor="#FFFFFF"
                        //textColor="primary"
                        aria-label="icon tabs example"
                    >
                        <Tab value={0} label="Inicio" classes={actionClasses}/>
                        <Tab value={1} label="Evaluaciones" classes={actionClasses}  />
                        <Tab value={2} label="Reportes" classes={actionClasses} />
                    </Tabs>
                    {value===0 && <Inicio/>}
                    {value===1 && <ListaEvaluaciones submit={seleccionarEvaluacion} />}
                    {value===2 && <div><Typography  style={{marginTop: '10px'}} variant="h3" className={classes.txtContainerTitleCenter} fontWeight="fontWeightBold">
                                      En desarrollo
					                        </Typography>
                                  <img src="./enConstruccion.png" className={classes.imageBuilding}/>
                                  </div> }
                    {value===3 && <Evaluacion eval={evaluacion} entity={nameEntity} status={status}/>}
                    {value===4 && <Resultado eval={evaluacion} entity={nameEntity}/>}
                    {value===5 && <PrincipalEvaluation eval={evaluacion} entity={nameEntity} status={status}/>}
        </Paper>
        <Footer />
      </Grid>
  );
};

export default Proceso;
