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

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import * as APIEvaluation from '../../../../dataAccess/evaluation';

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
        display: 'relative',
        minHeight: 700,
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

const greenTheme = createMuiTheme({ palette: { primary: green } })

const Cuestionario = (props) => {
    let listaCategoria = [
        {
            codigo: 1,
            nombre: "Factores críticos de éxito",
            subcategorias: [
                {
                    nombre: "Gastos públicos en hardware, redes y telecomunicaciones.",
                    preguntas: [
                        {texto: "Los objetivos de inversión en hardware, redes y telecomunicaciones " +
                        "se establecen de acuerdo", respuesta: -1},
                        {texto: "Se buscan de manera ...", respuesta: -1},
                        {texto: "Se elabora un presupuesto anual ...", respuesta: -1}
                    ]
                },
                {
                    nombre: "Situación financiera de las unidades de gobierno.",
                    preguntas: [
                        {texto: "PregA1 ...", respuesta: -1},
                        {texto: "PregA2 ...", respuesta: -1},
                        {texto: "PregA3 ...", respuesta: -1}                    ]
                },
                {
                    nombre: "Situación financiera de las unidades de gobierno.",
                    preguntas: [
                        {texto: "PregA1 ...", respuesta: -1},
                        {texto: "PregA2 ...", respuesta: -1},
                        {texto: "PregA3 ...", respuesta: -1}
                    ]
                }
            ],
        },
        {
            codigo: 2,
            nombre: "Metas empresariales de COBIT",
            subcategorias: [
                {
                    nombre: "Subcategoria C1.",
                    preguntas: [
                        {texto: "PregC1 ...", respuesta: -1},
                        {texto: "PregC2 ...", respuesta: -1},
                        {texto: "PregC3 ...", respuesta: -1}
                    ]
                }
            ]
        },
        {
            codigo: 3,
            nombre: "Metas de alineamiento de COBIT",
            subcategorias: [
                {
                    nombre: "Subcategoria F1.",
                    preguntas: [
                        {texto: "PregF1 ...", respuesta: -1},
                        {texto: "PregF2 ...", respuesta: -1},
                        {texto: "PregF3 ...", respuesta: -1},
                        {texto: "PregF4 ...", respuesta: -1}
                    ]
                }
            ]
        },
        {
            codigo: 4,
            nombre: "Prácticas de Gestión ITIL",
            subcategorias: [
                {
                    nombre: "Subcategoria H1.",
                    preguntas: [
                        {texto: "PregH1 ...", respuesta: -1},
                        {texto: "PregH2 ...", respuesta: -1},
                        {texto: "PregH3 ...", respuesta: -1},
                        {texto: "PregH4 ...", respuesta: -1},
                        {texto: "PregH5 ...", respuesta: -1}
                    ]
                }
            ]
        },
        {
            codigo: 5,
            nombre: "Página web",
            subcategorias: [
                {
                    nombre: "Subcategoria J1.",
                    preguntas: [
                        {texto: "PregJ1 ...", respuesta: -1},
                        {texto: "PregJ2 ...", respuesta: -1},
                        {texto: "PregJ3 ...", respuesta: -1}
                    ]
                },
                {
                    nombre: "Subcategoria K1.",
                    preguntas: [
                        {texto: "PregK1 ...", respuesta: -1},
                        {texto: "PregK2 ...", respuesta: -1},
                        {texto: "PregK3 ...", respuesta: -1}
                    ]
                },
                {
                    nombre: "Subcategoria L1.",
                    preguntas: [
                        {texto: "PregL1 ...", respuesta: -1},
                        {texto: "PregL2 ...", respuesta: -1},
                        {texto: "PregL3 ...", respuesta: -1}
                    ]
                }
            ]
        }
    ];
    
    const classes = useStyles();
	const actionClasses = props.classes;
    const [value, setValue] = React.useState('');
    const [fase, setFase] = React.useState(1);
    const [categorias, setCategorias] = React.useState([]);
    const [subcategSelected, setSubcategSelected] = React.useState([-1, -1, -1, -1, -1]);
    const [tablaPreguntas, setTablaPreguntas] = React.useState([]);
    const [colors, setColors] = React.useState([
        {back: "#FF0000", text: "#FFFFFF"},
        {back: "#0000FF", text: "#FFFFFF"},
        {back: "#008000", text: "#FFFFFF"},
        {back: "#FFFF00", text: "#000000"},
        {back: "#F88017", text: "#FFFFFF"}]);
    const [valorDialogo, setValorDialogo] = React.useState(false);

    useEffect(() => {
        async function setListaPreguntas(){
            const auxCategorias = (await APIEvaluation.consultQuestionary());
            setCategorias(auxCategorias);
        }
    
        setListaPreguntas();
    }, []);

    const handleSubcategClick = (event, indexCateg, indexSubcateg) => {
        let newSubcategSelected = [...subcategSelected];
        if(indexSubcateg == subcategSelected[indexCateg])
            newSubcategSelected[indexCateg] = -1;
        else
            newSubcategSelected[indexCateg] = indexSubcateg;
        setSubcategSelected(newSubcategSelected);
        let auxPreguntas = [...categorias[indexCateg]['subcategorias'][indexSubcateg].preguntas]
        setTablaPreguntas(auxPreguntas);
    };

    const handleChangePregunta = (id, value) => {
        let auxPreguntas = [...tablaPreguntas];
        auxPreguntas[id].respuesta = value;
        setTablaPreguntas(auxPreguntas);
    };

    const cancelarSeleccion = (indexCateg) => {
        let auxSelecc = [...subcategSelected];
        auxSelecc[indexCateg] = -1;
        setSubcategSelected(auxSelecc);
        setTablaPreguntas([]);
    }

    const actualizarSeleccion = (indexCateg) => {
        let auxCateg = [...categorias];
        auxCateg[indexCateg]['subcategorias'][subcategSelected[indexCateg]].preguntas = tablaPreguntas;
        setCategorias(auxCateg);
        /*let auxCateg = [...subcategSelected];
        auxCateg[indexCateg] = -1;
        setSubcategSelected(auxCateg);*/
        cancelarSeleccion(indexCateg);
    }

    const handleDialogo = () => {
        setValorDialogo(!valorDialogo);
    };

    const terminarEvaluacion = () => {
        if(categorias.filter(x => x.subcategorias.filter(y => y.preguntas
                .filter(z => z.respuesta != -1).length != 0).length != 0).length != 0)
            props.submit(categorias);
        else
            handleDialogo();
    };

	return (
        <div className={classes.root}>
            <Grid item xs={12}>
                <Typography  style={{marginTop: '10px', marginBottom: '10px'}} variant="h3" className={classes.txtContainerTitleLeft} fontWeight="fontWeightBold">
                    Cuestionarios
				</Typography>
                {categorias.map((desafio, indexCateg) => {
                    return(
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                style={{backgroundColor: colors[indexCateg % 5].back, color: colors[indexCateg % 5].text, opacity: .6}}
                            >
                                <Typography className={classes.heading}>
                                    <strong>
                                        {desafio.nombre} ({desafio.subcategorias.filter(x => x.preguntas.filter(y => y.respuesta != -1).length == x.preguntas.length).length}/{desafio.subcategorias.length})
                                    </strong>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid item xs={6}>
                                    <List component="nav" aria-label="main mailbox folders">
                                        {desafio.subcategorias.map((subcateg, key) => {
                                            return <ListItem
                                                button
                                                onClick={(event) => handleSubcategClick(event, indexCateg, key)}>
                                            <ListItemText primary={subcateg.nombre}/>
                                            <ListItemIcon style={{color: (subcateg.preguntas.length == subcateg.preguntas.filter(y => y.respuesta != -1).length ? 
                                                    'limegreen' : 'black')}}>
                                                <CheckCircleOutlineIcon />
                                            </ListItemIcon>
                                            </ListItem>
                                        })}
                                    </List>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid item xs={12}>
                                        <Typography className={classes.txtLittleTitleCenter}>
                                            Lista de preguntas
                                        </Typography>
                                    </Grid>
                                    {subcategSelected[indexCateg] == -1 && 
                                        <div style={{marginTop: '10px'}}>
                                            Haga clic en alguna subcategoría del lado izquierdo para habilitar la lista de preguntas.
                                        </div>
                                    }
                                    {subcategSelected[indexCateg] > -1 && 
                                    <div>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell width="70%" align="center">Pregunta</TableCell>
                                            <TableCell width="15%" align="center">Sí</TableCell>
                                            <TableCell width="15%" align="center">No</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {tablaPreguntas.map((pregunta, id) => (
                                            <TableRow key={pregunta}>
                                                <TableCell component="th" scope="row"  width="70%" align="left">
                                                    {pregunta.texto}
                                                </TableCell>
                                                <TableCell width="15%" align="center">
                                                    <Radio
                                                        checked={pregunta.respuesta == 1}
                                                        onChange={() => handleChangePregunta(id, 1)}
                                                        value="a"
                                                        name="radio-button-demo"
                                                        inputProps={{ 'aria-label': 'A' }}
                                                    />
                                                </TableCell>
                                                <TableCell width="15%" align="center">
                                                    <Radio
                                                        checked={pregunta.respuesta == 0}
                                                        onChange={() => handleChangePregunta(id, 0)}
                                                        value="a"
                                                        name="radio-button-demo"
                                                        inputProps={{ 'aria-label': 'A' }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                    <Grid item xs={12} style={{textAlign:"center", marginTop: "12px"}}>
                                        <Button variant="outlined" color="primary" onClick={() => cancelarSeleccion(indexCateg)}>
                                            Regresar
                                        </Button>
                                        <Button variant="outlined" color="primary" style={{marginLeft: '10px'}}
                                                onClick={() => actualizarSeleccion(indexCateg)}>
                                            Guardar
                                        </Button>
                                    </Grid>
                                    </div>}
                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                )})}
                <Typography variant="h3" className={classes.txtContainerTitleCenter} fontWeight="fontWeightBold">
                    <Button variant="outlined" color="primary" onClick={() => terminarEvaluacion()}>
                        Finalizar
                    </Button>
                </Typography>
            </Grid>
            <Dialog
                open={valorDialogo}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleDialogo}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Error"}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    Debe responder todas las preguntas para continuar
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleDialogo} color="primary">
                    Acepto
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Cuestionario;