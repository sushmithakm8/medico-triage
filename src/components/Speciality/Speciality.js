import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Icon,
  ListItemIcon,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/fontawesome-free-solid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Speciality(props) {
  const data = props.values;
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={7}>
      <CardHeader
        avatar={<FontAwesomeIcon icon={Icons.faHospital} size="3x" />}
        titleTypographyProps={{ variant: 'h5' }}
        title="Speciality"
        subheader="Showing the suggestions based on the diagnosis"
      />
      <CardContent>
        <List className={classes.root}>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <FontAwesomeIcon
                icon={Icons.faStethoscope}
                size="1x"
                color="black"
              />
            </ListItemIcon>
            <ListItemText
              onClick={() => alert('hi')}
              primary="Brunch this weekend?"
            />
            <ListItemSecondaryAction>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                className={classes.button}
              >
                Book Appointment
              </Button>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider variant="inset" component="li" />
          {data.map((parameter) => (
            <div>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  {
                    <FontAwesomeIcon
                      icon={Icons.faHospitalAlt}
                      size="1x"
                      color="black"
                    />
                  }
                </ListItemAvatar>
                <ListItemText primary={parameter} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
