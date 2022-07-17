import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  ListItemIcon,
  ListItemSecondaryAction,
  Paper,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/fontawesome-free-solid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function Treatment() {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={7}>
      <CardHeader
        avatar={
          <FontAwesomeIcon icon={Icons.faMedkit} size="3x" color="#009688" />
        }
        titleTypographyProps={{ variant: "h5" }}
        title="Recommended Treatment"
        subheader="Treatment recommendations based on diagnosis"
      />
      <CardContent>
        <Paper style={{ maxHeight: 200, overflow: "auto" }} elevation={0}>
          <List className={classes.root}>
            <ListItem alignItems="flex-start" button>
              <ListItemIcon>
                <FontAwesomeIcon
                  icon={Icons.faTablets}
                  size="1x"
                  color="black"
                />
              </ListItemIcon>
              <ListItemText
                onClick={() => alert("Place order")}
                primary="Brunch this weekend?"
              />
              <ListItemSecondaryAction>
                <Button
                  onClick={() => alert("Place order")}
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.button}
                >
                  Place Order
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText primary="Summer BBQ" />
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
