import { Button, Container, Grid, makeStyles, Modal } from "@material-ui/core";
import React from "react";
import colors from "./colors";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: colors.white,
    marginBottom: theme.spacing(10),
    borderRadius: "4px",
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      padding: "0px 10px 0px 5px",
      marginTop: "0px",
      fontSize: "4em",
      color: colors.blue3,
      justifyContent: "center",
      textAlign: "center",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "0px 10px 0px 5px",
      marginTop: "0px",
      fontSize: "4.5em",
      color: colors.blue2,
      justifyContent: "flex-end",
      textAlign: "left",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0px 10px 0px 5px",
      marginTop: "0px",
      fontSize: "4.5em",
      color: colors.blue3,
      justifyContent: "flex-end",
      textAlign: "left",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0px 10px 0px 5px",
      marginTop: "0px",
      fontSize: "4.5em",
      color: colors.blue3,
      justifyContent: "flex-end",
      textAlign: "left",
    },
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: "5px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    justifyContent: "center",
  },
  imageContainer: {
    [theme.breakpoints.down("xs")]: {
      margin: "65px 65px",
    },
  },
  paragraph: {
    padding: "15px 15px 15px 0px",
    borderRadius: "5px",
    fontSize: "1.5em",
  },
  paper: {
    position: "absolute",
    borderRadius: "7px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.up("sm")]: {
      width: 500,
    },
    [theme.breakpoints.down("xs")]: {
      width: 350,
    },
  },
  background: {
    backgroundColor: colors.blue1,
  },
  disclaimer: {
    color: colors.pinkGrey,
  },
  disclaimerButton: {
    backgroundColor: colors.pinkGrey,
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
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title' className={classes.disclaimer}>
        Disclaimer
      </h2>
      <p id='simple-modal-description'>{props.disclaimer}</p>
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

            <p className={classes.paragraph}>{props.paragraph}</p>
            <Button
              variant='contained'
              onClick={handleOpen}
              className={classes.disclaimerButton}
            >
              Disclaimer
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              aria-labelledby='simple-modal-title'
              aria-describedby='simple-modal-description'
            >
              {body}
            </Modal>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HeaderCard;
