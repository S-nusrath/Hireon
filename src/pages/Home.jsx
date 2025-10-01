import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import heroImage from "../assets/hero.jpg";
//import feature1 from "../assets/feature1.png";
//import feature2 from "../assets/feature2.png";

function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: "80vh",
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold" }}>
          Hireon 🚀
        </Typography>
        <Typography variant="h5" sx={{ mt: 2, maxWidth: "600px" }}>
          AI-powered student hiring and skill-building platform. Get jobs & learn the skills you need.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 2 }}
            href="/register"
          >
            Get Started
          </Button>
          <Button variant="outlined" color="inherit" href="/login">
            Login
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, px: 4 }}>
        <Typography variant="h4" align="center" sx={{ mb: 4 }}>
          Key Features
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ textAlign: "center", py: 4 }}>
              <img src={feature1} alt="Skill Gap Analyzer" width="80" style={{ marginBottom: "16px" }} />
              <CardContent>
                <Typography variant="h6">Skill Gap Analyzer</Typography>
                <Typography variant="body2" color="text.secondary">
                  See which skills you need to qualify for top jobs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ textAlign: "center", py: 4 }}>
              <img src={feature2} alt="Job Notifications" width="80" style={{ marginBottom: "16px" }} />
              <CardContent>
                <Typography variant="h6">Job Notifications</Typography>
                <Typography variant="body2" color="text.secondary">
                  Get real-time job alerts based on your interests and branch.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
