import React from 'react';
// material ui components
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

// redux components
import { connect } from 'react-redux';
import { set_data, google_login, google_signOut } from '../store/actions';
import {
    Link
} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function NavBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <ClickAwayListener onClickAway={handleDrawerClose}>


            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar id="navBar">
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="end"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" edge="end" noWrap>

                            
                            <Link to='/dashboard'>
                                Dashboard
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >

                    {props.user.uid !== '' ?
                        <>
                            <div className="text-center my-1">
                                <img src={props.user.profile} alt='' width='100' />
                            </div>

                            <Divider />
                            <List>

                                <ListItem >
                                    <h4> {props.user.name}</h4>
                                </ListItem>

                            </List>
                            <Divider />
                            <List>

                                <ListItem >
                                    <ListItemIcon><MailIcon /> </ListItemIcon>
                                    <ListItemText primary={props.user.email} />
                                </ListItem>

                            </List>
                            <Divider />
                        </>
                        :
                        <>
                        
                        <List>
                       
                        </List>
                        <Divider />
                        </>}
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <div className="text-center my-2"> 
                          {props.user.name !== '' ? 
                                        
                                            <Button
                                                    onClick={() => props.google_signOut()}
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    className='btn-main mx-2'
                                                    startIcon={<PersonIcon />}
                                                >
                                                  signOut
                                                </Button>  
                                                :
                                                <Button
                                                onClick={() => props.google_login()}
                                                variant="contained"
                                                color="primary"
                                                size="small"
                                                className='btn-main mx-2'
                                                startIcon={<PersonIcon />}
                                            >
                                                Login
                                            </Button>}
                    </div>
                  
                </Drawer>




                {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
      </main> */}

            </div>
        </ClickAwayListener>

    );
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    set_data: (data) => dispatch(set_data(data)),
    google_login: () => dispatch(google_login()),
    google_signOut: () => dispatch(google_signOut())

})
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);