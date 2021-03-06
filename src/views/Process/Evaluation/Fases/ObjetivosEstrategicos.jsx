import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

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
        display: 'flex',
        height: '100vh',
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
    txtContainerTitleLeft: {
        color: "#287198",
        textAlign:"left",
        fontSize: 20,
        marginTop: "10px"
    },
}));

const greenTheme = createMuiTheme({ palette: { primary: green } })

const ObjetivosEstrategicos = (props) => {
    /*let listaDesafios = [
        {
            codigo: "DPG1",
            nombre: "Gestión del Cambio",
            descripcion: "Lorem ipsum 1 para la Gestión del Cambio",
        },
        {
            codigo: "DPG2",
            nombre: "Asegurar la generación ...",
            descripcion: "Lorem ipsum 2 para Asegurar la generación ...",
        },
        {
            codigo: "DPG3",
            nombre: "Asegurar que la experiencia ...",
            descripcion: "Lorem ipsum 3 para Asegurar que la experiencia ...",
        },
        {
            codigo: "DPG4",
            nombre: "Digitalizar servicios ...",
            descripcion: "Lorem ipsum 4 para Digitalizar servicios ...",
        },
        {
            codigo: "DPG5",
            nombre: "Garantizar la seguridad ...",
            descripcion: "Lorem ipsum 5 para Garantizar la seguridad ...",
        },
        {
            codigo: "DPG6",
            nombre: "Asegurar que el personal ...",
            descripcion: "Lorem ipsum 6 para Asegurar que el personal ...",
        },
        {
            codigo: "DPG7",
            nombre: "Asegurar la infraestructura ...",
            descripcion: "Lorem ipsum 7 para Asegurar la infraestructura ...",
        }
    ];*/
    const classes = useStyles();
	const actionClasses = props.classes;
    const [value, setValue] = React.useState(0);
    const [description, setDescription] = React.useState("");
    const [idCriterion, setIdCriterion] = React.useState(0);
    //const [code, setCode] = React.useState("");
    const [desafios, setDesafios] = React.useState([]);
    const [objetivosAEnviar, setObjetivosAEnviar] = React.useState([]);
    const [objetivos, setObjetivos] = React.useState([]);
    const [colors, setColors] = React.useState([
        {back: "#FF0000", text: "#FFFFFF"},
        {back: "#0000FF", text: "#FFFFFF"},
        {back: "#008000", text: "#FFFFFF"},
        {back: "#FFFF00", text: "#000000"},
        {back: "#F88017", text: "#FFFFFF"},
        {back: "#008080", text: "#FFFFFF"},
        {back: "#8A4117", text: "#FFFFFF"},
        {back: "#7D0552", text: "#FFFFFF"}
    ]);
    const [valorDialogo, setValorDialogo] = React.useState(false);
    const [textoDialogo, setTextoDialogo] = React.useState(0);

    const setListaObjetivos = async () => {
        const auxObjetivos = await APIEvaluation.consultObjectives(props.eval);
        console.log(auxObjetivos)
        setObjetivosAEnviar(auxObjetivos);
        return auxObjetivos;
    }

    const setListaDesafios = async (listaObj) => {
        const auxDesafios = await APIEvaluation.getCriterion();
        console.log("objetivos estrategicos", listaObj)
        listaObj.forEach((objetivo) => {
            auxDesafios.splice(auxDesafios.findIndex((obj => obj.idCriterion === objetivo.idCriterion)), 1);
        });
        setDesafios(auxDesafios);
    }

    const init = async () => {
        let arrObj = await setListaObjetivos();
        await setListaDesafios(arrObj);
    }

    useEffect(() => {
        // async function setListaObjetivos(){
        //     console.log("evaluacionnnnnn", props.eval)
            
        // }
        init();
        // setListaObjetivos();
    // },[objetivosAEnviar])
    },[])
            
    // useEffect(() => {
    //     async function setListaDesafios(){
    //         const auxDesafios = await APIEvaluation.getCriterion();
    //         console.log("objetivos estrategicos", props.objetivos)
    //         props.objetivos.forEach((objetivo) => {
    //             auxDesafios.splice(auxDesafios.findIndex((obj => obj.idCriterion === objetivo.idCriterion)), 1);
    //         });
    //         setDesafios(auxDesafios);
    //     }
    //     /* console.log("props objetivos", props.objetivos)
    //     setObjetivosAEnviar(props.objetivos);
    //     console.log("objetivos a enviar", objetivosAEnviar) */
    //     setListaDesafios();
    // }, [objetivosAEnviar]);

    const handleChangeDialogo = (texto) => {
        setValorDialogo(!valorDialogo);
        setTextoDialogo(texto);
    };

	const handleIdCriterion = (event) => {
        setIdCriterion(event.target.value);

    }
    
    const handleDelete = async (idCrit) => {
        let arrNew = null;
        if(props.status == 2){ //en proceso
            arrNew = objetivosAEnviar.map(item=>{
                if(item.idCriterion===idCrit) item.description = "Sin Objetivo";
                return item;
            })
            // setObjetivosAEnviar(listAux);  
        }else arrNew = objetivosAEnviar.filter(item=>item.idCriterion!==idCrit);
        setObjetivosAEnviar(arrNew);
        await setListaDesafios(arrNew);
    }
    
/*     const handleEdit = async (idCrit) => {

    } */
    
    const anadirObjetivo = () => {
        console.log(idCriterion, description);
        console.log(idCriterion != null && description != "");
        if(idCriterion != null && description != ""){
            let nuevObjetivo = {
                description: description,
                idCriterion: idCriterion
            };
            let auxObjetivos = objetivosAEnviar;
            auxObjetivos.push(nuevObjetivo);
            setObjetivosAEnviar(auxObjetivos);
            console.log("objetivos a enviar", objetivosAEnviar)
            // Elminar el objetivo ya seleccionado
            setIdCriterion(0);
            setDescription("");
            /* setCode(""); */
            let auxDesafios = desafios;
            auxDesafios.splice(auxDesafios.findIndex((obj => obj.idCriterion === nuevObjetivo.idCriterion)), 1);
            setDesafios(auxDesafios);
        }else{
            handleChangeDialogo(1);
        }
    }

    const enviarObjetivos = () => {
        console.log(objetivosAEnviar, objetivosAEnviar.length);
        if(objetivosAEnviar.length > 0){
            console.log("enviar objetivos",objetivosAEnviar)
            props.submit(objetivosAEnviar);
        }
        else
            handleChangeDialogo(2);
    };

	return (
        <div className={classes.root}>
            <Grid item xs={6}>
				<Grid item xs={12} style={{marginTop: '10px', marginBottom: '10px'}}>
                    <Typography  style={{marginTop: '10px'}} variant="h3" className={classes.txtContainerTitleLeft} fontWeight="fontWeightBold">
                        Objetivos Estrátegicos
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="standard-helperText"
						label="Objetivo estratégico"
                        onChange={(e) => setDescription(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12} style={{marginLeft: '-7px'}}>
					<FormControl className={classes.formControl}>
						<InputLabel id="demo-simple-select-helper-label">
                            Criterio para el desarrollo del Gob. Digital
                        </InputLabel>
						<Select
							labelId="demo-simple-select-helper-label"
							id="demo-simple-select-helper"
							value={idCriterion}
							onChange={handleIdCriterion}
						>
                            {desafios.map((desafio) => {
                                return(
                                    <MenuItem value={desafio.idCriterion}>
                                        {desafio.code}: {desafio.name}
                                    </MenuItem>
                                );
                            })}
						</Select>
						<FormHelperText>Seleccione el criterio correspondiente</FormHelperText>
					</FormControl>
				</Grid>
                <Grid item xs={12} style={{textAlign: "center"}}>
                    <MuiThemeProvider theme={greenTheme}>
                        <Button variant="outlined" color="primary" onClick={() => anadirObjetivo()}>
                            Añadir a lista
                        </Button>
                    </MuiThemeProvider>
                </Grid>
                <Grid item xs={12}>
                    <List component="nav" aria-label="main mailbox folders">
                        {objetivosAEnviar.map((objetivo, key) => {
                            return objetivo.description!=="Sin Objetivo"?<ListItem key={key}>
                                    <ListItemText primary={
                                    <Grid container direction='row'>
                                        <Grid container item xs={9}><Typography> {objetivo.description + " - " + "DPG"+objetivo.idCriterion}</Typography></Grid>
                                        <Grid container item xs={3} justify="flex-end">
{/*                                             <ListItemIcon onClick={()=>handleEdit(objetivo.idCriterion)} style={{color:'#287198' }}>
                                                <Edit />
                                            </ListItemIcon> */}
                                            <ListItemIcon  onClick={()=>handleDelete(objetivo.idCriterion)} style={{color:'red' }}>
                                                <Delete />
                                            </ListItemIcon>
                                        </Grid>
                                    </Grid>}/>
                                </ListItem>:null
                        })}
                    </List>
                </Grid>
                {objetivosAEnviar.filter(item=>item.description==="Sin Objetivo").length>0?<Grid item xs={12} style={{marginTop: "1.5rem"}}>
                    <Typography>*Los objetivos se eliminarán cuando se seleccione el botón Guardar</Typography>
                    <List component="nav" aria-label="main mailbox folders">
                        {objetivosAEnviar.map((objetivo, key) => {
                            return objetivo.description==="Sin Objetivo"?<ListItem key={key}>
                                    <ListItemText primary={
                                    <Grid container direction='row'>
                                        <Grid container item xs={9}><Typography> {"DPG"+objetivo.idCriterion}</Typography></Grid>
                                        {/* <Grid container item xs={3} justify="flex-end">
                                            <ListItemIcon style={{color:'#287198' }}>
                                                <Edit />
                                            </ListItemIcon>
                                            <ListItemIcon  onClick={()=>handleDelete(objetivo.idCriterion)} style={{color:'red' }}>
                                                <Delete />
                                            </ListItemIcon>
                                        </Grid> */}
                                    </Grid>}/>
                                </ListItem>:null
                        })}
                    </List>
                </Grid>:null}
                <Grid item xs={12} style={{textAlign: "center"}}>
                    <MuiThemeProvider theme={greenTheme}>
                        <Button variant="outlined" color="primary" onClick={() => enviarObjetivos()}>
                            Guardar
                        </Button>
                    </MuiThemeProvider>
                </Grid>
			</Grid>
			<Grid item xs={6}>
                <Grid item xs={12} style={{marginTop: '10px', marginBottom: '10px'}}>
                    <Typography  style={{marginTop: '10px'}} variant="h3" className={classes.txtContainerTitleLeft} fontWeight="fontWeightBold">
                        Lista de criterios 
					</Typography>
				</Grid>
                {desafios.map((desafio, indexDesafio) => {
                    return <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            style={{backgroundColor: colors[indexDesafio % 8].back, color: colors[indexDesafio % 8].text, opacity: .6}}
                        >
                            <Typography className={classes.heading}>
                                <strong>
                                    {desafio.code}: {desafio.name}
                                </strong>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                            {desafio.description}
                            </Typography>
                        </AccordionDetails>
                        </Accordion>;
                })}
			</Grid>
            <Dialog
                    open={valorDialogo}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleChangeDialogo}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
            >
                    <DialogTitle id="alert-dialog-slide-title">{"Error"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {(textoDialogo == 1 ? "Debe registrar un desafío y una descripción para registrar su objetivo estratégico" :
                            "Debe añadir al menos un objetivo estratégico.")}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleChangeDialogo} color="primary">
                        Acepto
                    </Button>
                    </DialogActions>
            </Dialog>
        </div>
    );
}

export default ObjetivosEstrategicos;