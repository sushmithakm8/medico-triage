import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './Medico-triage.css';
import {
  Button,
  CircularProgress,
  Grid,
  makeStyles,
  Paper,
} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import Diagnosis from '../Diagnosis/diagnosis';
import Speciality from '../Speciality/Speciality';
import Investigation from '../Investigation/Investigation';
import Treatment from '../Treatment/Treatment';
import { getDefaultNormalizer } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 700,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function MedicoTriage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [allOptions, setallOptions] = React.useState([]);
  const [showDiagnosis, setshowDiagnosis] = React.useState(false);
  const [showResults, setshowResults] = React.useState(false);
  const [result, setResult] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoadingSpeciality, setIsLoadingSpeciality] = React.useState(true);
  const [isLoadingInvestigation, setIsLoadingInvestigation] =
    React.useState(true);
  const [isLoadingTreatment, setIsLoadingTreatment] = React.useState(true);

  const loading = open && options.length === 0;
  const res = {
    a: 'b',
  };
  React.useEffect(() => {
    if (!loading) {
      return undefined;
    }

    return () => {};
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const onChangeHandle = async (value) => {
    setallOptions([]);
    if (value.length > 1) {
      const response = await fetch('http://10.189.197.13:3002/', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: value,
      });

      const countries = await response.json();
      const finalResponse = [];
      countries.res.forEach((element) => {
        finalResponse.push({ title: element, value: element });
      });
      setallOptions(finalResponse);
    }
  };

  const getDiagnosis = async (selectedValue) => {
    console.log(selectedValue);
    setshowDiagnosis(true);
    setshowResults(true);
    // if (value.length > 1) {
    //   const response = await fetch("http://10.189.197.13:3002/", {
    //     method: "post",
    //     headers: { "Content-Type": "application/json" },
    //     body: value,
    //   });

    //   const countries = await response.json();
    //   const finalResponse = [];
    //   countries.res.forEach((element) => {
    //     finalResponse.push({ title: element, value: element });
    //   });
    //   setallOptions(finalResponse);
    // }
    let response;
    try {
      // response = await axios.get(`url`);
      response = {
        possibleDiagnosis: [
          { value: 'Pulmonary Tuberculosis', probability: '78' },
          { value: 'xyz', probability: '54' },
          { value: 'abc', probability: '90' },
          { value: 'lmn', probability: '12' },
          { value: 'opq', probability: '33' },
        ],
        possibleSpeciality: ['abc', 'mno'],
        possibleInvestigation: ['Chest X-ray', 'CT Scan'],
        possibleTreatment: ['Pyrazinamide', 'Rifampicin'],
      };
    } catch (error) {
      setIsLoading(false);
      setIsLoadingSpeciality(false);
      setIsLoadingInvestigation(false);
      setIsLoadingTreatment(false);
      return;
    }
    setResult(response);
    setIsLoading(false);
    setIsLoadingSpeciality(false);
    setIsLoadingInvestigation(false);
    setIsLoadingTreatment(false);
  };

  return (
    <>
      <div className="head">
        <div className={classes.root}>
          <Paper className={classes.paper} style={{ background: '#3f50b5' }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm container>
                <Grid item xs container>
                  <Grid item xs={10}>
                    <Autocomplete
                      id="asynchronous"
                      noOptionsText={'No matches found'}
                      multiple
                      limitTags={3}
                      open={open}
                      onChange={(event, selectedValue) =>
                        getDiagnosis(selectedValue.value)
                      } // You can get the `selectedValue` inside your handler function on every time user select some new value
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
                      options={allOptions}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Enter Symptoms Here...."
                          variant="outlined"
                          style={{ background: '#ffffff' }}
                          onChange={(ev) => {
                            // dont fire API if the user delete or not entered anything
                            if (
                              ev.target.value !== '' ||
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
                    <Button onClick={getDiagnosis}>
                      <SearchOutlined
                        className="fa fa-plus-circle"
                        style={{ color: 'white', fontSize: 35 }}
                      />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>

      <div
        className={classes.root}
        style={{ marginTop: '12%', marginRight: '5%', marginLeft: '5%' }}
      >
        <Grid container spacing={3}>
          {showDiagnosis ? (
            <Grid item xs={12}>
              <Paper
                className={classes.paper}
                style={{ background: 'none', boxShadow: 'none' }}
              >
                {isLoading ? (
                  <div className="spinner-border text-primary" role="status">
                    {' '}
                    <span className="sr-only">Loading...</span>{' '}
                  </div>
                ) : (
                  <Diagnosis values={result.possibleDiagnosis} />
                )}
              </Paper>
            </Grid>
          ) : (
            ''
          )}
          {showResults ? (
            <>
              <Grid item xs={12} sm={4}>
                {isLoadingSpeciality ? (
                  <div className="spinner-border text-primary" role="status">
                    {' '}
                    <span className="sr-only">Loading...</span>{' '}
                  </div>
                ) : (
                  <Speciality values={result.possibleSpeciality} />
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                {isLoadingInvestigation ? (
                  <div className="spinner-border text-primary" role="status">
                    {' '}
                    <span className="sr-only">Loading...</span>{' '}
                  </div>
                ) : (
                  <Investigation values={result.possibleInvestigation} />
                )}
              </Grid>
              <Grid item xs={12} sm={4}>
                {isLoadingTreatment ? (
                  <div className="spinner-border text-primary" role="status">
                    {' '}
                    <span className="sr-only">Loading...</span>{' '}
                  </div>
                ) : (
                  <Treatment values={result.possibleTreatment} />
                )}
              </Grid>{' '}
            </>
          ) : (
            ''
          )}
        </Grid>
      </div>
    </>
  );
}
