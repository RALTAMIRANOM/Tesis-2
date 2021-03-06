import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import TrackChangesIcon from "@material-ui/icons/TrackChanges";
import AssignmentIcon from "@material-ui/icons/Assignment";
import TableChartIcon from "@material-ui/icons/TableChart";
import GradeIcon from "@material-ui/icons/Grade";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import ObjetivosEstrategicos from "./Fases/ObjetivosEstrategicos.jsx";
import Puntuacion from "./Fases/Puntuacion.jsx";
import Cuestionario from "./Fases/Cuestionario.jsx";
import Resultado from "../Result/Resultado";

import * as APIEvaluation from "../../../dataAccess/evaluation";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

/* function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
} */

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 500,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 360,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  txtContainerTitleLeft: {
    color: "#287198",
    textAlign: "left",
    fontSize: 30,
    marginTop: "10px",
  },
}));

/* const flexContainer = {
  display: "flex",
  flexDirection: "row",
  padding: 0,
}; */

const PrincipalEvaluacion = (props) => {
  const classes = useStyles();
  const actionClasses = props.classes;
  const [fase, setFase] = React.useState(1);
  const [idEvaluacion, setIdEvaluacion] = React.useState(0);
  const [objetivos, setObjetivos] = React.useState(null);
  const [puntuacion, setPuntuacion] = React.useState([]);
  const [cuestionario, setCuestionario] = React.useState([]);
  const [resultado, setResultado] = React.useState(null);
  const [valorDialogo, setValorDialogo] = React.useState(false);

  const handleChangeDialogo = () => {
    setValorDialogo(!valorDialogo);
  };

  const handleListItemClick = (event, index) => {
    // eslint-disable-next-line default-case
    switch (index) {
      case 1:
        // eslint-disable-next-line eqeqeq
        if (fase != 4) setFase(1);
        break;
      case 2:
        if (fase != 4) {
          if (objetivos.length != 0) setFase(2);
          else handleChangeDialogo();
        }
        break;
      case 3:
        if (fase != 4) {
          if (
            (objetivos.length != 0 && puntuacion.length != 0) ||
            props.phase == 3
          )
            setFase(3);
          else handleChangeDialogo();
        }
        break;
      case 4:
        if (
          (objetivos.length != 0 &&
            puntuacion.length != 0 &&
            cuestionario.length != 0) ||
          props.phase == 3
        )
          setFase(4);
        else handleChangeDialogo();
        break;
    }
  };

  useEffect(() => {
    setFase(props.phase);
    async function setListaObjetivos() {
      console.log("evaluacionnnnnn", props.eval);
      const auxObjetivos = await APIEvaluation.consultObjectives(props.eval);
      console.log(auxObjetivos);
      setObjetivos(auxObjetivos);
    }
    setListaObjetivos();
  }, []);

  const guardarObjetivo = (nuevObjetivos) => {
    /* Registrar objetivos */
    async function registrarObjetivos() {
      let auxObjectives = [];
      nuevObjetivos.forEach((objetivo) => {
        auxObjectives.push({
          idCriterion: objetivo.idCriterion,
          idEvaluation: props.eval,
          description: objetivo.description,
        });
      });
      console.log(auxObjectives);
      const resultRegister = await APIEvaluation.registerObjectives(
        auxObjectives
      );
      console.log("guardar objetivos", resultRegister);
    }

    setObjetivos(nuevObjetivos);
    registrarObjetivos();
    setFase(2);
  };

  const guardarPuntuacion = (listaPuntaje) => {
    setPuntuacion(listaPuntaje);
    setFase(3);
  };

  const terminarObjetivo = (auxCuestionario) => {
    setCuestionario(auxCuestionario);
    console.log(auxCuestionario);
    /*props.submit(objetivos, puntuacion, auxCuestionario);*/
    setFase(4);
  };

  return (
    objetivos && (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <List component="nav" aria-label="main mailbox folders">
              <ListItem
                button
                selected={fase === 1}
                onClick={(event) => handleListItemClick(event, 1)}
              >
                <ListItemIcon
                  style={{
                    color: objetivos.length > 0 ? "limegreen" : "black",
                  }}
                >
                  <TrackChangesIcon />
                </ListItemIcon>
                <ListItemText
                  style={{
                    color: objetivos.length > 0 ? "limegreen" : "black",
                  }}
                  primary="Objetivos estratégicos"
                />
              </ListItem>
              <ListItem
                button
                selected={fase === 2}
                onClick={(event) => handleListItemClick(event, 2)}
              >
                <ListItemIcon
                  style={{
                    color:
                      props.phase == 3 ||
                      props.phase == 4 ||
                      (objetivos.length > 0 && puntuacion.length > 0)
                        ? "limegreen"
                        : "black",
                  }}
                >
                  <TableChartIcon />
                </ListItemIcon>
                <ListItemText
                  style={{
                    color:
                      props.phase == 3 ||
                      props.phase == 4 ||
                      (objetivos.length > 0 && puntuacion.length > 0)
                        ? "limegreen"
                        : "black",
                  }}
                  primary="Puntuación"
                />
              </ListItem>
              <ListItem
                button
                selected={fase === 3}
                onClick={(event) => handleListItemClick(event, 3)}
              >
                <ListItemIcon
                  style={{
                    color:
                      props.phase == 4 ||
                      fase == 4 ||
                      (objetivos.length > 0 &&
                        puntuacion.length > 0 &&
                        cuestionario.length > 0)
                        ? "limegreen"
                        : "black",
                  }}
                >
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText
                  style={{
                    color:
                      props.phase == 4 ||
                      fase == 4 ||
                      (objetivos.length > 0 &&
                        puntuacion.length > 0 &&
                        cuestionario.length > 0)
                        ? "limegreen"
                        : "black",
                  }}
                  primary="Cuestionarios"
                />
              </ListItem>
              <ListItem
                button
                selected={fase === 4}
                onClick={(event) => handleListItemClick(event, 4)}
              >
                <ListItemIcon>
                  <GradeIcon />
                </ListItemIcon>
                <ListItemText primary="Resultados" />
              </ListItem>
            </List>
          </Grid>
          <Dialog
            open={valorDialogo}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleChangeDialogo}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"Advertencia"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                No puede avanzar a la siguiente fase sin completar
                {objetivos.length == 0
                  ? " los objetivos estratégicos."
                  : puntuacion.length == 0 &&
                    props.phase != 3 &&
                    props.phase != 4
                  ? " la tabla de puntuaciones."
                  : " el cuestionario."}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleChangeDialogo} color="primary">
                Acepto
              </Button>
            </DialogActions>
          </Dialog>
          <Grid item xs={10}>
            <Typography
              style={{ marginTop: "10px" }}
              variant="h3"
              className={classes.txtContainerTitleLeft}
              fontWeight="fontWeightBold"
            >
              Entidad: {props.entity}
            </Typography>
            {fase == 1 && (
              <ObjetivosEstrategicos
                eval={props.eval}
                objetivos={objetivos}
                submit={guardarObjetivo}
                status={props.status}
              />
            )}
            {fase == 2 && (
              <Puntuacion eval={props.eval} submit={guardarPuntuacion} />
            )}
            {fase == 3 && (
              <Cuestionario eval={props.eval} submit={terminarObjetivo} />
            )}
            {fase == 4 && <Resultado eval={props.eval} />}
          </Grid>
        </Grid>
      </div>
    )
  );
};

export default PrincipalEvaluacion;
