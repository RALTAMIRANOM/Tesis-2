import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Evaluacion from "./Evaluacion";
import Inicio from "../Initial/Inicio";
import Resultado from "../Result/Resultado";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TableChartIcon from '@material-ui/icons/TableChart';
import InboxIcon from '@material-ui/icons/Inbox';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';


import ObjetivosEstrategicos from './Fases/ObjetivosEstrategicos.jsx';
import Puntuacion from './Fases/Puntuacion.jsx';
import Cuestionario from './Fases/Cuestionario.jsx';

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
  
function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}
  
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
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
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
}));

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };

const PrincipalEvaluacion = (props) => {
	const classes = useStyles();
	const actionClasses = props.classes;
	const [fase, setFase] = React.useState(1);
    const [objetivo, setObjetivo] = React.useState(null);
    const [puntuacion, setPuntuacion] = React.useState(null);
    const [cuestionario, setCuestionario] = React.useState(null);

    const handleListItemClick = (event, index) => {
        setFase(index);
        console.log("Fase ", index);
    };

	const guardarObjetivo = (nuevObjetivo) => {
        setObjetivo(nuevObjetivo);
        setFase(2);
    }

    const guardarPuntuacion = (nuevaPuntuacion) => {
        setPuntuacion(nuevaPuntuacion);
        setFase(3);
    }

    const terminarObjetivo = (auxCuestionario) => {
        setCuestionario(auxCuestionario);
        props.submit(objetivo, puntuacion, auxCuestionario);
    }
    
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs={2}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem
                        button
                        selected={fase === 1}
                        onClick={(event) => handleListItemClick(event, 1)}>
                    <ListItemIcon>
                        <TrackChangesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Objetivos estratégicos" />
                    </ListItem>
                    <ListItem
                        button
                        selected={fase === 2}
                        onClick={(event) => handleListItemClick(event, 2)}>
                    <ListItemIcon>
                        <TableChartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Puntuación" />
                    </ListItem>
                    <ListItem
                        button
                        selected={fase === 3}
                        onClick={(event) => handleListItemClick(event, 3)}>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cuestionarios" />
                    </ListItem>
                </List>
				</Grid>
				<Grid item xs={10}>
					{fase == 1 && <ObjetivosEstrategicos submit={guardarObjetivo}/>}
                    {fase == 2 && <Puntuacion submit={guardarPuntuacion}/>}
                    {fase == 3 && <Cuestionario submit={terminarObjetivo}/>}
				</Grid>
			</Grid>
		</div>
	);
};

export default PrincipalEvaluacion;