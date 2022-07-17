import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import {
  Card,
  CardContent,
  CardHeader,
  ListItemIcon,
  ListItemSecondaryAction,
  Paper,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/fontawesome-free-solid";
import CircularProgressWithLabel from "../CircularProgressBar/CircularProgressBar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function Diagnosis(props) {
  const classes = useStyles();
  const passData = (diagnosis) => {
    props.getResult(diagnosis);
  };
  return (
    <Card className={classes.root} elevation={7}>
      <CardHeader
        avatar={
          <FontAwesomeIcon icon={Icons.faDiagnoses} size="3x" color="#2196f3" />
        }
        titleTypographyProps={{ variant: "h5" }}
        title="Probable Diagnosis"
        subheader="This is only the probable diagnosis based on symptoms provided. Please visit the doctor (in-person or virtual) for a diagnosis and interventions."
      />
      <CardContent>
        <Paper style={{ maxHeight: 200, overflow: "auto" }} elevation={0}>
          <List className={classes.root}>
            <ListItem
              alignItems="flex-start"
              button
              onClick={() => passData("sgdvhjasdvjhk")}
            >
              <ListItemIcon>
                <FontAwesomeIcon
                  icon={Icons.faHandPointRight}
                  size="1x"
                  color="black"
                />
              </ListItemIcon>
              <ListItemText primary="Brunch this weekend?" />
              <ListItemSecondaryAction>
                <CircularProgressWithLabel variant="determinate" value={75} />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                // secondary={
                //   <React.Fragment>
                //     <Typography
                //       component="span"
                //       variant="body2"
                //       className={classes.inline}
                //       color="textPrimary"
                //     >
                //       to Scott, Alex, Jennifer
                //     </Typography>
                //   </React.Fragment>
                // }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText primary="Oui Oui" />
            </ListItem>
          </List>
        </Paper>
      </CardContent>
    </Card>
  );
}
