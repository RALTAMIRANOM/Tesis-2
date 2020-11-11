import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Modal from '@material-ui/core/Modal';
import Logo from "../../../assets/tabla_resultado.png";

import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Tooltip from '@material-ui/core/Tooltip';
import Help from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
   txtContainer: {
    padding: theme.spacing(3, 6),
    textAlign:"justify"
  },
  txtContainerTitle: {
    color: "#287198",
  },
  txtContainerTitleLeft: {
    color: "#287198",
    textAlign:"left",
    fontSize: 30,
    marginTop: "10px"
  },
  txtContainerTitleCenter: {
    color: "#287198",
    textAlign:"center",
    fontSize: 30,
    marginTop: "10px"
  },
  contGenTxt: {
    background: "#E0E0E0",
  },
  paper: {
    position: 'fixed',
    width: 1400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
  
  function getModalStyle() {
	const top = 50;
	const left = 50;
  
	return {
	  top: `${top}%`,
	  left: `${left}%`,
	  transform: `translate(-${top}%, -${left}%)`,
	};
  }

const Resultado = (props) => {
	let tablaCumplimiento = [
		{objetivo: "Objetivo 1", dpg: "DGP5", descripcion: "Gestión del Cambio", 
		nDeseado: 999, nAlcanzado: 999, porcDeseado: "100%", porcAlcanzado: "100%",
		nDeseadoOrig: 123, nAlcanzadoOrig: 456, porcDeseadoOrig: "78%", porcAlcanzadoOrig: "90%"},
		{objetivo: "Objetivo 2", dpg: "DGP6",
		descripcion: "Asegurar la generación de beneficios para la entidad en base a las inversiones de tecnologías digitales", 
		nDeseado: 999, nAlcanzado: 999, porcDeseado: "100%", porcAlcanzado: "100%",
		nDeseadoOrig: 987, nAlcanzadoOrig: 654, porcDeseadoOrig: "32%", porcAlcanzadoOrig: "10%"},
		{objetivo: "Sin objetivo", dpg: "DGP7", 
		descripcion: "Asegurar que la experiencia del ciudadano con los servicios digitales sea plena y satisfactoria", 
		nDeseado: 999, nAlcanzado: 999, porcDeseado: "100%", porcAlcanzado: "100%",
		nDeseadoOrig: 123, nAlcanzadoOrig: 456, porcDeseadoOrig: "78%", porcAlcanzadoOrig: "90%"}
	];
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);
	const [checkedOrig, setCheckedOrig] = React.useState(false);
	const [cumplimientos, setCumplimientos] = React.useState(tablaCumplimiento);

	const handleModalOpen = () => {
		setOpen(true);
	};
	
	const handleModalClose = () => {
		setOpen(false);
	};

	const handleChangeOrig = () => {
		setCheckedOrig(!checkedOrig);
	};

	return (
		<Grid container direction="column">
			<Grid container item xs={12}>
				<Grid container item xs={10}>
					<Typography  style={{marginTop: '20px', marginLeft: '60px'}} variant="h3" className={classes.txtContainerTitleLeft} fontWeight="fontWeightBold">
						Nivel de cumplimiento organizacional
					</Typography>
				</Grid>
				<Grid container item xs={2} style={{float: 'right', marginTop: '13px'}} >
					<FormControlLabel
						control={
						<Switch
							checked={checkedOrig}
							onChange={handleChangeOrig}
							name="pesoModificado"
							color="primary"
						/>
						}
						label="Pesos originales"
					/>
				</Grid>
			</Grid>
			<Grid container item xs={12}>
				<Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    	<TableRow>
                            <TableCell width="15%" align="center">Objetivos estratégicos</TableCell>
                            <TableCell width="10%" align="center">DPG</TableCell>
                            <TableCell width="35%" align="center">Descripción</TableCell>
                            <TableCell width="10%" align="center">NCUM(D) Deseado</TableCell>
                            <TableCell width="10%" align="center">NCUM(D) Alcanzado</TableCell>
                            <TableCell width="10%" align="center">% NCUM(DPG) Deseado</TableCell>
                            <TableCell width="10%" align="center">% NCUM(DPG) Alcanzado</TableCell>
                        </TableRow>
                    </TableHead>
					<TableBody>
						{cumplimientos.map((cump) => (
							<TableRow key={cump.objetivo}>
								<TableCell width="15%" align="center">{cump.objetivo}</TableCell>
								<TableCell width="10%" align="center">{cump.dpg}</TableCell>
								<TableCell width="35%" align="center">{cump.descripcion}</TableCell>
								<TableCell width="10%" align="center">{(checkedOrig ? cump.nDeseadoOrig : cump.nDeseado)}</TableCell>
								<TableCell width="10%" align="center">{(checkedOrig ? cump.nAlcanzadoOrig : cump.nAlcanzado)}</TableCell>
								<TableCell width="10%" align="center">{(checkedOrig ? cump.porcDeseadoOrig : cump.porcDeseado)}</TableCell>
								<TableCell width="10%" align="center">{(checkedOrig ? cump.porcAlcanzadoOrig : cump.porcAlcanzado)}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Grid>
			<Grid container item xs={12}>
				<Typography style={{marginTop: '20px', marginLeft: '60px'}} variant="h3" className={classes.txtContainerTitleLeft} fontWeight="fontWeightBold">
					Resultado general
				</Typography>
				<Tooltip style={{marginTop: '13px'}} title="Ver tabla">
					<IconButton aria-label="ver-tabla"
						onClick={handleModalOpen}>
					<Help />
					</IconButton>
				</Tooltip>
			</Grid>
			<Modal
				open={open}
				onClose={handleModalClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
			>
				<div style={modalStyle} className={classes.paper}>
					<Typography style={{marginTop: '20px', marginLeft: '60px'}} variant="h3" className={classes.txtContainerTitleCenter} fontWeight="fontWeightBold">
						Nivel de cumplimiento organizacional (NCUMO)
					</Typography>
					<img src={Logo} width={1350}/>
				</div>
			</Modal>
			<Grid container item xs={12}>
				<Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    	<TableRow>
                            <TableCell colSpan={2} width="20%" align="center">Nivel de cumplimiento organizacional</TableCell>
                            <TableCell width="80%" align="center">Descripción</TableCell>
                        </TableRow>
                    </TableHead>
					<TableBody>
						<TableRow key={0}>
							<TableCell width="10%" align="center">
                                1
                            </TableCell>
							<TableCell width="10%">
                                Inicial
                            </TableCell>
							<TableCell width="80%">
                                El nivel de cumplimiento ...
                            </TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Grid>
		</Grid>
	);
};

export default Resultado;
