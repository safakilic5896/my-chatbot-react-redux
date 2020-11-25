import React from "react";
import DenseAppBar from "../navbar";
import Grid from "@material-ui/core/Grid";
import ChatLayout from "../chatLayout";

const AppPage = () => {
  return (
    <>
      <Grid item xs={12}>
        <DenseAppBar />
      </Grid>
      <Grid item xs={12} style={{ minHeight: "90h" }}>
        <ChatLayout />
      </Grid>
    </>
  );
};

export default AppPage;
