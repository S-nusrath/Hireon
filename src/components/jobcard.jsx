// src/components/JobCard.jsx
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Box
} from "@mui/material";

const JobCard = ({ job, onApply }) => {
  return (
    <Card elevation={3} style={{ borderRadius: 16, marginBottom: 16 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Box>
            <Typography variant="h6" component="div">
              {job.title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {job.company} • {job.location}
            </Typography>
          </Box>
          <Box textAlign="right">
            <Chip label={job.roleType} size="small" style={{ marginBottom: 8 }} />
            <Box>
              <Typography variant="caption" color="textSecondary">
                {job.postedAt}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box marginTop={1} marginBottom={1}>
          <Typography variant="body2" color="textSecondary" style={{ minHeight: 44 }}>
            {job.description}
          </Typography>
        </Box>

        <Box display="flex" gap={1} flexWrap="wrap">
          <Chip label={job.branch} size="small" />
          <Chip label={job.workType} size="small" />
          {job.stipend && <Chip label={job.stipend} size="small" />}
        </Box>
      </CardContent>

      <CardActions style={{ padding: 16 }}>
        <Button size="small" variant="contained" onClick={() => onApply(job)}>
          Apply
        </Button>
        <Button size="small">Save</Button>
        <Typography variant="caption" style={{ marginLeft: "auto" }}>
          {job.roleType}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default JobCard;
