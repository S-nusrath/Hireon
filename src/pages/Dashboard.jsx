// src/pages/Dashboard.jsx
import React, { useMemo, useState } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import Navbar from "../components/Navbar"; // keep your Navbar
import SidebarFilters from "../components/SidebarFilters";
import JobList from "../components/jobList";
import { jobs as jobData } from "../data/jobs";
import "../components/Dashboard.css";

const Dashboard = () => {
  const [filters, setFilters] = useState({
    branch: "All",
    roleType: "All",
    workType: "All"
  });

  const filteredJobs = useMemo(() => {
    return jobData.filter((j) => {
      const branchMatch = filters.branch === "All" || j.branch === filters.branch;
      const roleMatch = filters.roleType === "All" || j.roleType === filters.roleType;
      const workMatch = filters.workType === "All" || j.workType === filters.workType;
      return branchMatch && roleMatch && workMatch;
    });
  }, [filters]);

  const handleClear = () =>
    setFilters({
      branch: "All",
      roleType: "All",
      workType: "All"
    });

  const handleApply = (job) => {
    // placeholder apply action — replace with real behavior later
    alert(`Applied to: ${job.title} @ ${job.company}`);
  };

  return (
    <>
      <Navbar />
      <Box className="dashboard-root">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Paper elevation={2} style={{ borderRadius: 12, overflow: "hidden" }}>
              <SidebarFilters filters={filters} setFilters={setFilters} onClear={handleClear} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={9}>
            <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
              <div>
                <Typography variant="h5">Welcome, Rehan 👋</Typography>
                <Typography variant="body2" color="textSecondary">
                  Here are the latest opportunities matching your profile
                </Typography>
              </div>
            </Box>

            <Box marginBottom={2} display="flex" gap={2}>
              <Paper className="stat-card" elevation={2}>
                <Typography variant="subtitle2">Jobs Available</Typography>
                <Typography variant="h6">{filteredJobs.length}</Typography>
              </Paper>

              <Paper className="stat-card" elevation={2}>
                <Typography variant="subtitle2">Skills Progress</Typography>
                <Typography variant="h6">60%</Typography>
              </Paper>

              <Paper className="stat-card" elevation={2}>
                <Typography variant="subtitle2">Challenges Completed</Typography>
                <Typography variant="h6">8</Typography>
              </Paper>
            </Box>

            <JobList jobs={filteredJobs} onApply={handleApply} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
