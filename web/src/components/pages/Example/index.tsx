import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Header from "../../elements/Header";

import styles from "./Example.less";

const ExamplePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={styles.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={styles.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={styles.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={styles.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={styles.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={styles.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={styles.paper}>xs=3</Paper>
        </Grid>
      </Grid>
      <Header>Example</Header>
      <p>This example page.</p>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
    </div>
  );
};

export default ExamplePage;
