// Imports ------------------------------------------------
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import CodeIcon from "@material-ui/icons/Code";
import InfoIcon from "@material-ui/icons/Info";
import VideocamIcon from "@material-ui/icons/Videocam";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Route, Switch, Link } from "react-router-dom";
import Home from "../Home";
import { SwipeableDrawer } from "@material-ui/core";
import colors from "../../components/colors";
import Footer from "../../components/Footer";
import PageTwo from "../PageTwo";

// import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";

const drawerWidth = 240;

// Use Styles ---------------------------------------------
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: colors.orange,

    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    backgroundColor: colors.paleOrange,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

// export -------------------------------------------------
export default function Main() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const sideBarLink = () => {
  //   if (key === "About Me")
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        // color="lightBlue"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Zac Edens Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        variant='permanent'
        onClick={handleDrawerClose}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to={"/"}>
            <ListItem button key={"About Me"}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={"About Me"} />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link to={"/photography"}>
            <ListItem button key={"Photography"}>
              <ListItemIcon>
                <CameraAltIcon />
              </ListItemIcon>
              <ListItemText primary={"Photography"} />
            </ListItem>
          </Link>
          <Link to={"/coding"}>
            <ListItem button key={"Web Dev"}>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary={"Web Dev"} />
            </ListItem>
          </Link>
          <ListItem button key={"Videography"}>
            <ListItemIcon>
              <VideocamIcon />
            </ListItemIcon>
            <ListItemText primary={"Videography"} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            key={"Email"}
            onClick={() => {
              navigator.clipboard.writeText("edens.zac@gmail.com");
            }}
          >
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary={"Email"} />
          </ListItem>
          <ListItem button key={"Github"}>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
            <ListItemText primary={"Github"} />
          </ListItem>
          <ListItem button key={"LinkedIn"}>
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <ListItemText primary={"LinkedIn"} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key={"Instagram"}>
            <ListItemIcon>
              <InstagramIcon />
            </ListItemIcon>
            <ListItemText primary={"Instagram"} />
          </ListItem>
          <ListItem button key={"Twitter"}>
            <ListItemIcon>
              <TwitterIcon />
            </ListItemIcon>
            <ListItemText primary={"Twitter"} />
          </ListItem>
        </List>
        <Divider />
      </SwipeableDrawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/pageTwo' component={PageTwo} />
        </Switch>
        <Footer />
      </main>
    </div>
  );
}
