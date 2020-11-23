import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import Evaluacion from "../../Evaluation/Evaluacion";
import Inicio from "../../Initial/Inicio";
import Resultado from "../../Result/Resultado";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

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
    //height: 500,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const FirstStep = (props) => {
  const classes = useStyles();
  const actionClasses = props.classes;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container direction="column">   
                <div className={classes.root} >
                    <Tabs 
                        TabIndicatorProps={{style: {background:'#FFFFFF'}}}
                        orientation="vertical"
                        value={value}
                        style={{ background: '#287198'}}
                        onChange={handleChange}
                        variant="fullWidth"
                        //textColor="#FFFFFF"
                        //textColor="primary"
                        aria-label="vertical tabs example"
                        className={classes.Tabs}
                    >
                        <Tab label="Inicio" {...a11yProps(0)} />
                        <Tab label="Evaluación" {...a11yProps(1)} />
                        <Tab label="Resultados" {...a11yProps(2)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                      <Inicio/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <Evaluacion/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      <Resultado/>
                    </TabPanel>
        </div>
    </Grid>
  )
};

export default FirstStep;