import React, { Component, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { register } from "./UserForm.module";
import InputAdornment from "@material-ui/core/InputAdornment";

import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid,
  TextField,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import ErrorIcon from "@material-ui/icons/Error";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import VisibilityOffTwoToneIcon from "@material-ui/icons/VisibilityOffTwoTone";
import CloseIcon from "@material-ui/icons/Close";
import { LocalHospitalSharp } from "@material-ui/icons";

class Registration extends Component {
  state = {
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    age: "",
    phoneNumber: true,
    error: null,
    errorOpen: false,
  };

  errorClose = (e) => {
    this.setState({
      errorOpen: false,
    });
  };

  handleChange = (name) => (e) => {
    // if (e.target.value === "");
    this.setState({
      [name]: e.target.value,
    });
  };

  calculateAge = (dob) => (e) => {
    var today = new Date();
    var birthDate = new Date(e.target.value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    console.log(age);
    this.setState({
      age: age,
    });
  };

  passwordMatch = () => this.state.password === this.state.passwordConfrim;

  showPassword = () => {
    this.setState((prevState) => ({ hidePassword: !prevState.hidePassword }));
  };

  isValid = () => {
    if (this.state.email === "") {
      return false;
    }
    return true;
  };
  submitRegistration = (e) => {
    e.preventDefault();
    if (!this.passwordMatch()) {
      this.setState({
        errorOpen: true,
        error: "Passwords don't match",
      });
    }
    const newUserCredentials = {
      firstName: this.state.gender,
      // password: this.state.password,
      // passwordConfrim: this.state.passwordConfrim,
    };
    console.log("this.props.newUserCredentials", newUserCredentials);
    //dispath to userActions
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <CssBaseline />

        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LocalHospitalSharp className={classes.icon} />
          </Avatar>

          <form
            className={classes.form}
            onSubmit={() => this.submitRegistration}
          >
            {" "}
            <Grid item container spacing={1} justify="center">
              <Grid item xs={12} sm={6} md={6}>
                <FormControl required fullWidth margin="normal">
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoFocus
                    onChange={this.handleChange("firstName")}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormControl required fullWidth margin="normal">
                  {/* <InputLabel htmlFor="lastName" className={classes.labels}>
                    Last Name
                  </InputLabel> */}
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoFocus
                    onChange={this.handleChange("lastName")}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormControl component="fieldset">
                  <FormLabel htmlFor="gender" className={classes.labels}>
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    onChange={this.handleChange("gender")}
                    row
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                      className={classes.radio}
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                      className={classes.radio}
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                      className={classes.radio}
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <InputLabel htmlFor="dob" className={classes.labels}>
                  Date of Birth
                </InputLabel>
                <FormControl required fullWidth margin="normal">
                  <Input
                    name="dob"
                    type="date"
                    className={classes.inputs}
                    disableUnderline={true}
                    onChange={
                      (this.handleChange("dob"), this.calculateAge("dob"))
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormControl required fullWidth margin="normal">
                  <TextField
                    name="age"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="age"
                    label="Age in years"
                    autoFocus
                    disabled
                    value={this.state.age}
                    onChange={this.handleChange("age")}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <FormControl required fullWidth margin="normal">
                  <TextField
                    name="phoneNumber"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="phoneNumber"
                    label="Phone Number"
                    autoFocus
                    onChange={this.handleChange("phoneNumber")}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                {" "}
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Button
                  disabled={!this.isValid()}
                  disableRipple
                  variant="contained"
                  className={classes.button}
                  type="submit"
                  onClick={this.submitRegistration}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>

          {this.state.error ? (
            <Snackbar
              variant="error"
              key={this.state.error}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              open={this.state.errorOpen}
              onClose={this.errorClose}
              autoHideDuration={3000}
            >
              <SnackbarContent
                className={classes.error}
                message={
                  <div>
                    <span style={{ marginRight: "8px" }}>
                      <ErrorIcon fontSize="large" color="error" />
                    </span>
                    <span> {this.state.error} </span>
                  </div>
                }
                action={[
                  <IconButton
                    key="close"
                    aria-label="close"
                    onClick={this.errorClose}
                  >
                    <CloseIcon color="error" />
                  </IconButton>,
                ]}
              />
            </Snackbar>
          ) : null}
        </Paper>
      </div>
    );
  }
}

export default withStyles(register)(Registration);
