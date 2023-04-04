import React from "react";
import "./BannerContent.css";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
const BannerContent = () => {
  return (
    <Box className="box-cont"
      sx={{
        // width: 800,
        height: 400,
        // backgroundColor: "primary.da rk",
        position: "absolute",
        top: "150px",
    left: "50px",
    paddingLeft: "2.5rem",
      }}
    >
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          
      <div>
        <p className="first-p">Hello! Welcome to</p>
        <h1 className="first-h1">Readit blog</h1>
        <p className="second-p">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
      </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerContent;