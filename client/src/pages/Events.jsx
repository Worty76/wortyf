import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
  },
  header: {
    height: "200px",
    width: "100%",
    backgroundColor: "#161B22",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
  body: {
    textAlign: "center",
  },
}));

export default function Events() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* Header */}
      <div className={classes.header}>
        <div>
          <h1>Events</h1>
          <p>
            Connect with the Worty-F community at conferences, meetups, and
            hackathons around the world.
          </p>
        </div>
      </div>
      <br />
      {/* Body */}
      <div className={classes.body}>No events</div>
    </div>
  );
}
