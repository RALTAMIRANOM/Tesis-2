import React from "react";
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from "@material-ui/core/Grid";
import "./Login.css";
import Typography from "@material-ui/core/Typography";
import LogoBlack from "../../assets/logoBl.svg";
import CustomButton from "../../components/Button";
import Footer from "../../components/Footer/Footer";
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {useDispatch} from "react-redux";
import {loginUserAction} from "../../redux/actions/userActions";
import * as loginDA from "../../dataAccess/login"

const useStyles = makeStyles((theme) => ({
  txtContainer: {
    padding: theme.spacing(3, 6),
    textAlign:"justify"
  },
  txtContainerTitleCenter: {
    color: "#287198",
    textAlign:"center",
  },
  txtContainerSubTitle: {
    color: "#287198",
    textAlign:"justify",
    fontSize: 20
  },
  contGenTxt: {
    background: "#E0E0E0",
  },
}));

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderColor: 'green',
      borderWidth: 2,
    },
/*     '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 2,
    } */
    /* ,
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,
      borderColor: '#287198',
      padding: '4px !important', // override inline-style
    }, */
  },
})(TextField);


const Login = (props) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    username: '',
    password: '',
    showPassword: false,
  });
  const dispatch = useDispatch();

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };
  const handleChange = (e) => {
    setValues({...values,[e.target.name]: e.target.value});
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleProcess = async () => {
    const {username, password} = values;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(String(username).toLowerCase())){
      let validate = await loginDA.valitateUser(username,password)
      console.log (validate)
      if (validate.idPerson != -1){
          props.history.push("/proceso");
          dispatch(loginUserAction({username:username,password:password}));
      }
      else alert ("Error de autenticación")
     /*  if(loginDA.valitateUser(username,password).then(response => {
          
      })
        ){
      }
      if(username==="municipalidad@pucp.edu.pe" && password==="municipalidad123"){
        props.history.push("/proceso");
        dispatch(loginUserAction({username:username,password:password}));
      }else alert("Error de autenticación"); */
    }else{
      alert("Email invalido");
    }
  };

  return(
    <Grid container direction="row" xs={12}>
       <Grid
            container
            item
            xs={12}
            sm={6}
            justify="center"
            alignContent="center"
          >
            <div className="top-section-L"/>        
        </Grid>
        <Grid
            container
            item
            xs={12}
            sm={6}
            justify="center"
            alignContent="center"
            direction="column"
          >
            <img src={LogoBlack} alt="logoBl" /><br/>
            <Typography variant="h4" className={classes.txtContainerTitleCenter}><b>Iniciar Sesión</b></Typography><br/>
            <ValidationTextField
            className={classes.margin}
            label="Correo electrónico"
            color="#949494"
            required
            variant="outlined"
            type="email"
            name="username"
            value={values.username}
            onChange={handleChange}
            //defaultValue="user@dominio.com.pe"
            id="validation-outlined-input"
            /* error
            helperText="Correo invalido" */
            /><br/>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Contraseña*</InputLabel>
            <OutlinedInput
            className={classes.margin}
            id="outlined-adornment-password"
            label="Correo electrónico"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            name="password"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
            /> 
            </FormControl>
            <br/>
            <div className="btn-container-L">
              <CustomButton
                text="INGRESAR"
                type="primary"
                size="15rem"
                action={handleProcess}
              />
            </div>
        </Grid>
          <Footer />
    </Grid>
  ) 
};

export default Login;