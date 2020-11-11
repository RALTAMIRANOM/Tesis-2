import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
    const [listaPuntaje, setListaPuntaje] = React.useState(tablaPuntuacion);

    const guardarPuntuacion = () => {
        props.submit(listaPuntaje);
    };

    return(
        <div className={classes.root}>
            <Grid item xs={12}>
                <Typography variant="h3" className={classes.txtContainerTitleCenter} fontWeight="fontWeightBold">
                    Puntuación
                </Typography>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    	<TableRow>
                            <TableCell width="10%" align="center">Componente clave (CC)</TableCell>
                            <TableCell width="40%" align="center">Variables críticas (VC)</TableCell>
                            <TableCell width="5%" align="center">DPG1</TableCell>
                            <TableCell width="5%" align="center">DPG2</TableCell>
                            <TableCell width="5%" align="center">DPG3</TableCell>
                            <TableCell width="5%" align="center">DPG4</TableCell>
                            <TableCell width="5%" align="center">DPG5</TableCell>
                            <TableCell width="5%" align="center">DPG6</TableCell>
                            <TableCell width="5%" align="center">DPG7</TableCell>
                            <TableCell width="15%" align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listaPuntaje.map((fila) => (
                            <TableRow key={fila.clase}>
                                <TableCell width="10%" align="center">{fila.clase}</TableCell>
                                <TableCell width="40%" align="left">{fila.nombre}</TableCell>
                                {fila.dpgs.map((dpg) => (
                                    <TableCell width="5%" align="center">{dpg}</TableCell>
                                ))}
                                <TableCell width="15%" align="center">A</TableCell>
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