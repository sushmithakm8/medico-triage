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
  Card,
  CardContent,
  CardHeader,
  ListItemIcon,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/fontawesome-free-solid';
import CircularProgressWithLabel from '../CircularProgressBar/CircularProgressBar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Diagnosis(props) {
  const data = props.values;
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={7}>
      <CardHeader
        avatar={
          <FontAwesomeIcon icon={Icons.faDiagnoses} size="3x" color="#2196f3" />
        }
        titleTypographyProps={{ variant: 'h5' }}
        title="Probable Diagnosis"
        subheader="Diagnosis classified based on symptoms "
      />
      <CardContent>
        <List className={classes.root}>
          {data.map((parameter) => (
            <div>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  {
                    <FontAwesomeIcon
                      icon={Icons.faFileMedicalAlt}
                      size="1x"
                      color="black"
                    />
                  }
                </ListItemAvatar>
                <ListItemText primary={parameter.value} />
                <ListItemSecondaryAction>
                  <CircularProgressWithLabel
                    variant="determinate"
                    value={parameter.probability}
                  />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
