// import React from "react";
// import PropTypes from "prop-types";
// import styles from "./Medico-triage.module.css";

// const MedicoTriage = () => (
//   <div className={styles.MedicoTriage}>Medico-triage Component</div>
// );

// MedicoTriage.propTypes = {};

// MedicoTriage.defaultProps = {};

// export default MedicoTriage;
/* eslint-disable no-use-before-define */

import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./Medico-triage.css";
import {
  CircularProgress,
  Grid,
  makeStyles,
  Paper,
  Tooltip,
} from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import AlignItemsList from "../Card/Card";
// import SpeechRecognition, {
//   useSpeechRecognition,
// } from "react-speech-recognition";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 700,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function MedicoTriage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    // (async () => {
    //   const response = await fetch(
    //     "https://country.register.gov.uk/records.json?page-size=5000"
    //   );
    //   // await sleep(1e3); // For demo purposes.
    //   const countries = await response.json();

    //   if (active) {
    //     setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
    //   }
    // })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  // const [message, setMessage] = useState("");
  // const commands = [
  //   {
  //     command: "reset",
  //     callback: () => resetTranscript(),
  //   },
  //   {
  //     command: "shut up",
  //     callback: () => setMessage("I wasn't talking."),
  //   },
  //   {
  //     command: "Hello",
  //     callback: () => setMessage("Hi there!"),
  //   },
  // ];
  // const {
  //   transcript,
  //   interimTranscript,
  //   finalTranscript,
  //   resetTranscript,
  //   listening,
  // } = useSpeechRecognition({ commands });

  // useEffect(() => {
  //   if (finalTranscript !== "") {
  //     console.log("Got final result:", finalTranscript);
  //     setOpen(true);
  //     document.getElementById("asynchronous").value = finalTranscript;
  //   }
  // }, [interimTranscript, finalTranscript]);

  // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
  //   console.log(
  //     "Your browser does not support speech recognition software! Try Chrome desktop, maybe?"
  //   );
  // }
  // const listenContinuously = () => {
  //   SpeechRecognition.startListening({
  //     continuous: true,
  //     language: "en-GB",
  //   });
  // };
  const onChangeHandle = async (value) => {
    if (value.length > 2) {
      const response = await fetch(
        "https://country.register.gov.uk/records.json?page-size=5000"
      );

      const countries = await response.json();
      setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
    }
  };

  return (
    <>
      <div className="head">
        <div className={classes.root}>
          <Paper className={classes.paper} style={{ background: "#3f50b5" }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm container>
                <Grid item xs container>
                  <Grid item xs={10}>
                    <Autocomplete
                      id="asynchronous"
                      multiple
                      limitTags={3}
                      open={open}
                      onChange={() => setOpen(true)}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      getOptionSelected={(option, value) =>
                        option.name === value.title
                      }
                      getOptionLabel={(option) => option.title}
                      options={top100Films}
                      loading={loading}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Enter Symptoms Here...."
                          variant="outlined"
                          style={{ background: "#ffffff" }}
                          onChange={(ev) => {
                            // dont fire API if the user delete or not entered anything
                            if (
                              ev.target.value !== "" ||
                              ev.target.value !== null
                            ) {
                              onChangeHandle(ev.target.value);
                            }
                          }}
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <React.Fragment>
                                {loading ? (
                                  <CircularProgress color="inherit" size={20} />
                                ) : null}
                                {params.InputProps.endAdornment}
                              </React.Fragment>
                            ),
                          }}
                        />
                      )}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={2}
                    container
                    alignItems="center"
                    justifyContent="center"
                  >
                    <SearchOutlined
                      className="fa fa-plus-circle"
                      style={{ color: "white", fontSize: 35 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>

      <div
        className={classes.root}
        style={{ marginTop: "15%", marginRight: "5%", marginLeft: "5%" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              className={classes.paper}
              style={{ background: "none", boxShadow: "none" }}
            >
              <AlignItemsList />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <AlignItemsList />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AlignItemsList />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AlignItemsList />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
];
