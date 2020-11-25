import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import * as APIEvaluation from '../../../../dataAccess/evaluation';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 700,
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
    txtContainerTitleLeft: {
        color: "#287198",
        textAlign:"left",
        fontSize: 20,
        marginTop: "10px"
    },
}));

const Puntuacion = (props) => {
    let tablaPuntuacion = [
        {
            clase: "FCE1",
            nombre: "Competencias TIC de los empleados",
            dpgs: [0,0,0,0,0,3,3]
        },
        {
            clase: "FCE2",
            nombre: "La interoperabilidad de los sistemas de información en las unidades de gobierno.",
            dpgs: [3,0,3,3,3,3,3]
        },
        {
            clase: "FCE3",
            nombre: "Competencias TIC de los empleados",
            dpgs: [3,0,3,3,3,3,3]
        }
    ];
    const classes = useStyles();
    const actionClasses = props.classes;
    const [listaPuntaje, setListaPuntaje] = React.useState([]);
    // const [boolEditPuntajes, setBoolEditPuntajes] = React.useState([]);
    const [criterios, setCriterios] = React.useState([]);

    async function setListaPuntuacion(){
        console.log("evaluacionnnnnn", props.eval)
        let auxPuntuacion = await APIEvaluation.consultWeightModify(props.eval);
        let aux = auxPuntuacion.map(item=>{
            item.edit = false;
        return item});
        // let arr = Array(auxPuntuacion.length).fill(false);
        // setBoolEditPuntajes(arr);
        // setListaPuntaje(auxPuntuacion);
        setListaPuntaje(aux);
    }

    async function setListaCriterios(){
        console.log("evaluacionnnnnn", props.eval)
        const auxCriterios = await APIEvaluation.getCriterion(props.eval);
        console.log(auxCriterios)
        setCriterios(auxCriterios);
    }

    async function init(){
        await setListaCriterios();
        await setListaPuntuacion();
        
    }

    useEffect(() => {
        init();
      }, []);

    const guardarPuntuacion = () => {
        props.submit(listaPuntaje);
    };

    const handleEditWeights = (index) => {
        let auxListaPuntaje = [...listaPuntaje];
        auxListaPuntaje[index].edit = !auxListaPuntaje[index].edit;
        setListaPuntaje(auxListaPuntaje);
    }

    const handleChangeWeights = (indexGen,indexIn,e) => {
        let auxFilter = [...listaPuntaje];
        auxFilter[indexGen].weights[indexIn] = e.target.value;
        setListaPuntaje(auxFilter);
    }

    return(
        <div className={classes.root}>
            <Grid item xs={12}>
                <Typography  style={{marginTop: '10px', marginBottom: '10px'}} variant="h3" className={classes.txtContainerTitleLeft} fontWeight="fontWeightBold">
                    Puntuación
				</Typography>
                <Table className={classes.table} aria-label="simple table" style={{height:"20vh", maxHeight:"20vh", overflowY:"scroll"}}>
                    <TableHead>
                    	<TableRow>
                            <TableCell width="10%" align="center">Componente clave (CC)</TableCell>
                            <TableCell width="40%" align="center">Variables críticas (VC)</TableCell>
                            {criterios.map((criterio, indexCriterio) => {
                            return <TableCell width="5%" align="center">{criterio.code}</TableCell>
                            })}
                            <TableCell width="15%" align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {listaPuntaje.map((fila, index) => (
                            <TableRow key={index}>
                                <TableCell width="10%" align="center">{fila.keyComponent}</TableCell>
                                <TableCell width="40%" align="left">{fila.criticalVariableName}</TableCell>
                                {fila.weights.map((dpg, index1) => (
                                    <TableCell width="5%" align="center" key={index1}>
                                        <TextField value={dpg} disabled={fila.edit===false} onChange={e=>handleChangeWeights(index,index1,e)}/>
                                    </TableCell>
                                ))}
                                <TableCell width="15%" align="center">
                                    <ListItemIcon style={{color:'#287198' }}>
                                                {fila.edit===false?<Edit onClick={()=>handleEditWeights(index)}/>:<CheckIcon onClick={()=>handleEditWeights(index)}/>}
                                    </ListItemIcon>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Typography variant="h3" className={classes.txtContainerTitleCenter} fontWeight="fontWeightBold">
                    <Button variant="outlined" color="primary" onClick={() => guardarPuntuacion()}>
                        Guardar
                    </Button>
                </Typography>
            </Grid>
        </div>
    );
}

export default Puntuacion;