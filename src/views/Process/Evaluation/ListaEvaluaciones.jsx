import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import Radio from '@material-ui/core/Radio';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TableChartIcon from '@material-ui/icons/TableChart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import * as APIEvaluation from '../../../dataAccess/evaluation';

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
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    table: {
        minWidth: 650,
    },
    txtContainerTitleCenter: {
        color: "#287198",
        textAlign:"center",
        fontSize: 30
    },
    txtLittleTitleCenter: {
        color: "#287198",
        textAlign:"center",
        fontSize: 15
    },
    txtContainerTitleLeft: {
        color: "#287198",
        textAlign:"left",
        fontSize: 20,
        marginTop: "10px"
    },
}));

const ListaEvaluaciones = (props) => {
    let evals = {
        nuevas: [],
        proceso: [],
        terminadas: []
    };

    const classes = useStyles();
	const actionClasses = props.classes;
    const [evaluaciones, setEvaluaciones] = React.useState(evals);

    const handleEvaluacionSeleccionada = (idEval, nameEntity, status) => {
        //props.submit(idEval);
        props.submit(idEval, nameEntity, status);
    };

    useEffect(() => {
        async function setEvaluationsList(){
            console.log("entroooo")
            const auxEvaluations = await APIEvaluation.consultEvaluations();
            setEvaluaciones(auxEvaluations);
        }
        setEvaluationsList();
    },[]);

    return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <Typography  style={{marginTop: '10px', marginBottom: '10px'}} variant="h3" className={classes.txtContainerTitleCenter} fontWeight="fontWeightBold">
                    Evaluaciones 
				</Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            <strong>
                                Evaluaciones nuevas
                            </strong>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid item xs={12}>
                            {evaluaciones.nuevas.length > 0 ?
                            <List component="nav" aria-label="main mailbox folders">
                                {evaluaciones.nuevas.map((evaluacion) => {
                                    return <ListItem
                                                button
                                                onClick={(event) => handleEvaluacionSeleccionada(evaluacion.id, evaluacion.nameEntity, 1)}>
                                        <ListItemText primary={evaluacion.nameEntity}/>
                                        <ListItemText primary={evaluacion.addressEntity}/>
                                    </ListItem>
                                })}
                            </List> : "No se encontraron evaluaciones creadas recientemente."}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            <strong>
                                Evaluaciones en proceso
                            </strong>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid item xs={12}>
                            {evaluaciones.nuevas.length > 0 ?
                            <List component="nav" aria-label="main mailbox folders">
                                {evaluaciones.proceso.map((evaluacion) => {
                                    return <ListItem
                                                button
                                                onClick={(event) => handleEvaluacionSeleccionada(evaluacion.id, evaluacion.nameEntity, 2)}>
                                        <ListItemText primary={evaluacion.nameEntity}/>
                                        <ListItemText primary={evaluacion.addressEntity}/>
                                    </ListItem>
                                })}
                            </List> : "No se encontraron evaluaciones en proceso."}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            <strong>
                                Evaluaciones terminadas
                            </strong>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid item xs={12}>
                            {evaluaciones.terminadas.length > 0 ?
                            <List component="nav" aria-label="main mailbox folders">
                                {evaluaciones.terminadas.map((evaluacion) => {
                                    return <ListItem
                                                button
                                                onClick={(event) => handleEvaluacionSeleccionada(evaluacion.id, evaluacion.nameEntity, 3)}>
                                        <ListItemText primary={evaluacion.nameEntity}/>
                                        <ListItemText primary={evaluacion.addressEntity}/>
                                    </ListItem>
                                })}
                            </List> : "No se encontraron evaluaciones concluídas."}
                        </Grid>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </div>
    );
}

export default ListaEvaluaciones;