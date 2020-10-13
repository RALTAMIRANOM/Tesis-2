import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Logo from '../../assets/logoBl.svg'
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
//import TabContext from '@material-ui/lab/TabContext';


const styles = {
  root: {
    color: '#D9D9D9',
    size: 1.2,
    "&$selected": {
      color: '#FFFFFF',
      indicatorColor: '#FFFFFF' },        
  },
  selected: {}
};

class Header extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {open: false, anchorEl: null, value:0};
        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.handleInicio= this.handleInicio.bind(this);
        this.handleEvaluacion= this.handleEvaluacion.bind(this);
        this.handleResultado= this.handleResultado.bind(this);
    }

    //const dispatch = useDispatch();

    /*const handleLogout = () => {
        dispatch(logoutUserAction());
        props.history.push("/");
    }*/

    handleMenu(event) {
        this.setState(state => ({
          open: !state.open,
          anchorEl: event.currentTarget
        }));
    }

    handleClose() {
        this.setState(state => ({
          open: false
        }));
    }

    handleChange(event,newValue) {
        this.setState(state => ({
          value: newValue
        }));
    }

    handleInicio(props) {
        console.log("res");
        this.props.history.push("/login");
    }


    handleEvaluacion() {
        this.setState(state => ({
          open: false
        }));
    }

    handleResultado() {
        this.setState(state => ({
          open: false
        }));
    }



    render () {
        const actionClasses = this.props.classes;
        return(
            
            <div style={{flexGrow:1}}>
                
                <AppBar position="static" style={{ background: '#FFFFFF'}}>
                <Toolbar >
                    <img src={Logo}  style={{height:80, width: 150}} fill='#FFFFFF'/>
                    {<Typography variant="h6" style={{flexGrow:1}}>
                    </Typography>}
                    { (
                    <div>
                        <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color='#4F4F4F'
                        >
                        <AccountCircle fontSize="large"/>
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        anchorEl={this.state.anchorEl}
                        getContentAnchorEl={null}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        open={this.state.open}
                        onClose={this.handleClose}                
                        >
                        <MenuItem onClick={this.handleClose}>Mi perfil</MenuItem>
                        <MenuItem onClick={this.handleClose}>Cerrar Sesión</MenuItem>
                        </Menu>
                    </div>
                    )}
                </Toolbar>
                {/* <Paper square >
                    <Tabs
                        TabIndicatorProps={{style: {background:'#FFFFFF'}}}
                        value={this.state.value}
                        style={{ background: '#287198'}}
                        onChange={(event, newValue) => {
                            this.handleChange(event,newValue);
                        }}
                        variant="fullWidth"
                        textColor="primary"
                        aria-label="icon tabs example"
                    >
                        <Tab label="Inicio" classes={actionClasses} onClick={this.handleInicio} />
                        <Tab label="Evaluación" classes={actionClasses}  />
                        <Tab label="Resultados" classes={actionClasses} />
                    </Tabs>
                </Paper> */}
                </AppBar>
            </div>
        );  
    }
}

export default withStyles(styles)(Header);
