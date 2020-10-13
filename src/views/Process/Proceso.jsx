import React from "react";
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
import Inicio from "./Initial/Inicio";
import Resultado from "./Result/Resultado";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#FFFFFF",
    size: 1.2,
    "&$selected": {
      color: "#FFFFFF",
      indicatorColor: "#FFFFFF"},        
  },
  selected: {}
}));

const Proceso = (props) => {
  const classes = useStyles();
  const actionClasses = props.classes;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                        <Tab value={1} label="Evaluación" classes={actionClasses}  />
                        <Tab value={2} label="Resultados" classes={actionClasses} />
                    </Tabs>
                    {value===0 && <Inicio/>}
                    {value===1 && <Evaluacion/>}
                    {value===2 && <Resultado/>}
        </Paper>
        <Footer />
      </Grid>
  );
};

export default Proceso;
