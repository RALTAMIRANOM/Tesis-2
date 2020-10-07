import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Logo from '../assets/img/logo.svg'
import { withStyles } from "@material-ui/core/styles";

class Header extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {open: false, anchorEl: null, value:0};
        this.onClickInicio = this.onClickInicio.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

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
    onClickInicio(){
        this.props.history.push("/client-list")
    }
    //onClick={this.onClickStart}
    render () {
       
        return(
            <div>
            <Header />
            holii
          </div>
            
            );  
        }
    }

export default Start;

/*
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Logo from '../assets/img/logo.svg'
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    color: '#D9D9D9',
    size: 1.2,
    "&$selected": {
      color: '#FFFFFF'    }
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
    }

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

    render () {
        const actionClasses = this.props.classes;
        return(
            
            <div style={{flexGrow:1}}>
                
                <AppBar position="static" style={{ background: '#287198' }}>
                <Toolbar >
                    <img src={Logo}  style={{height:80, width: 120}} fill='white'/>
                    <BottomNavigation
                        
                        value={this.state.value}
                        style={{ background: '#287198'}}
                        onChange={(event, newValue) => {
                            this.handleChange(event,newValue);
                        }}
                        showLabels
                        
                        >
                        <BottomNavigationAction label="Inicio" classes={actionClasses}/>
                        <BottomNavigationAction label="Evaluación" classes={actionClasses} />
                        <BottomNavigationAction label="Resultados" classes={actionClasses} />
                        </BottomNavigation>
                        {<Typography variant="h6" style={{flexGrow:1}}>
                        </Typography>}
                        { (
                        <div>
                            <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                            >
                            <AccountCircle fontSize="large"/>
                            </IconButton>
                            <Menu
                            id="menu-appbar"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            anchorEl={this.state.anchorEl}
                            getContentAnchorEl={null}
                            transformOrigin={{
                                vertical: 'top',
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
                    </AppBar>
                </div>
            );  
        }
    }
    
    export default withStyles(styles)(Header);
    
*/
