import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={3000}
      open={true}
      onClose={false}
      key={"SlideTransition"}
    >
      <MuiAlert elevation={6} variant="filled" severity={alert.alertType}>
        {alert.msg}
      </MuiAlert>
    </Snackbar>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
