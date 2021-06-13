import React from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import {Repos, Users} from './routes';
import {AppBar, Toolbar, Grid, Tooltip} from '@material-ui/core';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import DarkIcon from '@material-ui/icons/Brightness4';
import LightIcon from '@material-ui/icons/Brightness5';
import {createMuiTheme, CssBaseline} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },
    appBar: {
        marginBottom: '10px'
    },
    title: {
        flexGrow: 1,
    },
    button: {
        cursor: 'pointer'
    },
    logo: {
        display: 'flex',
        alignItems: 'center'
    },
    logoIcon: {
        margin: '5px'
    }
}));

function App() {
    const classes = useStyles();
    const [theme, setTheme] = React.useState('light');
    const appTheme = createMuiTheme({
        palette: {
            type: theme
        }
    });


    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline/>
            <div className={classes.root}>
                <AppBar className={classes.appBar} position="static">
                    <Toolbar>
                        <Grid container justify="space-between" alignItems="center">
                            <Grid item className={classes.logo}>
                                <GitHubIcon className={classes.logoIcon} fontSize="large"/>
                                <h3>GITHUB USER REPOSITORIES</h3>
                            </Grid>
                            <Grid item>
                                <Tooltip title="toggle light/dark theme">
                                    {theme === 'light' ?
                                        <DarkIcon className={classes.button} fontSize="large"
                                                  onClick={() => setTheme('dark')}/>
                                        : <LightIcon className={classes.button} fontSize="large"
                                                     onClick={() => setTheme('light')}/>}
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <BrowserRouter>
                    <Switch>
                        <Route path='/users' component={Users}/>
                        <Route path='/repos/:username' component={Repos}/>
                        <Route component={() => <Redirect to='/users'/>}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </ThemeProvider>
    );
}

export default App;
