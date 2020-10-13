import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
/*   txtContainer: {
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
  }, */
}));

const Resultado = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="column">   
        <Grid container item xs={16}>

        </Grid>
    </Grid>
  )
};

export default Resultado;
