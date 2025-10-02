// src/components/JobList.jsx
import React from "react";
import JobCard from "./jobcard";
import { Box, Typography } from "@mui/material";

const JobList = ({ jobs, onApply }) => {
  return (
    <Box>
      {jobs.length === 0 ? (
        <Typography variant="body1" color="textSecondary" style={{ marginTop: 24 }}>
          No jobs match your filters. Try clearing some filters.
        </Typography>
      ) : (
        jobs.map((job) => <JobCard key={job.id} job={job} onApply={onApply} />)
      )}
    </Box>
  );
};

export default JobList;
