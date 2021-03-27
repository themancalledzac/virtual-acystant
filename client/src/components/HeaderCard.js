import {
  Button,
  Container,
  Grid,
  makeStyles,
  Modal,
  Typography,
} from "@material-ui/core";
import React from "react";
import colors from "./colors";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    // backgroundColor: colors.white,
    marginBottom: theme.spacing(15),
    borderRadius: "4px",
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      padding: "0px 10px 10px 5px",
      marginTop: "0px",
      fontSize: "4em",
      color: colors.blue3,
      justifyContent: "center",
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "0px 10px 10px 5px",
      marginTop: "0px",
      fontSize: "4.5em",
      color: colors.blue3,
      justifyContent: "flex-end",
      textAlign: "right",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0px 10px 10px 5px",
      marginTop: "0px",
      fontSize: "4.5em",
      color: colors.blue3,
      justifyContent: "flex-end",
      textAlign: "right",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0px 10px 10px 5px",
      marginTop: "0px",
      fontSize: "4.5em",
      color: colors.blue3,
      justifyContent: "flex-end",
      textAlign: "right",
    },
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: "5px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // backgroundPosition: "center",
    justifyContent: "center",
    "&:hover": {
      opacity: "85%",
    },
  },
  imageContainer: {
    [theme.breakpoints.down("xs")]: {
      margin: "60px 60px",
    },
  },
  paragraph: {
    padding: "15px",
    borderRadius: "5px",
    fontSize: "1.5em",
  },
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function getModalStyle() {
  const top = 60;
  const left = 60;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const HeaderCard = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Disclaimer</h2>
      <p id='simple-modal-description'>{props.disclaimer}</p>
      {/* <HeaderCard /> */}
    </div>
  );

  return (
    <>
      <Container className={classes.searchBar} maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} className={classes.imageContainer}>
            <img
              className={classes.image}
              src={props.image}
              alt='headerImage'
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <h2 className={classes.title}>{props.title}</h2>

            <p className={classes.paragraph}>
              {props.paragraph}
              &nbsp;
              <Button variant='contained' onClick={handleOpen} style={{}}>
                Disclaimer
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'
              >
                {body}
              </Modal>
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HeaderCard;
