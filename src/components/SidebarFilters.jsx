// src/components/SidebarFilters.jsx
import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
  Divider
} from "@mui/material";

const branches = ["All", "CSE", "ECE", "MECH", "CIVIL","CSE-DS","CSE-AIML",];
const roleTypes = ["All", "Internship", "Full-time"];
const workTypes = ["All", "Remote", "Onsite", "Hybrid"];

const SidebarFilters = ({ filters, setFilters, onClear }) => {
  const handleChange = (key) => (e) => {
    setFilters((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <Box style={{ padding: 16 }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>

      <FormControl fullWidth size="small" style={{ marginBottom: 12 }}>
        <InputLabel>Branch</InputLabel>
        <Select value={filters.branch} label="Branch" onChange={handleChange("branch")}>
          {branches.map((b) => (
            <MenuItem key={b} value={b}>
              {b}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth size="small" style={{ marginBottom: 12 }}>
        <InputLabel>Role Type</InputLabel>
        <Select value={filters.roleType} label="Role Type" onChange={handleChange("roleType")}>
          {roleTypes.map((r) => (
            <MenuItem key={r} value={r}>
              {r}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth size="small" style={{ marginBottom: 12 }}>
        <InputLabel>Work Type</InputLabel>
        <Select value={filters.workType} label="Work Type" onChange={handleChange("workType")}>
          {workTypes.map((w) => (
            <MenuItem key={w} value={w}>
              {w}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Divider style={{ margin: "12px 0" }} />

      <Box display="flex" gap={1}>
        <Button variant="outlined" fullWidth onClick={onClear}>
          Clear
        </Button>
        <Button
          variant="contained"
          fullWidth
          onClick={() => {
            // optional: you could trigger an apply action here
          }}
        >
          Apply
        </Button>
      </Box>
    </Box>
  );
};

export default SidebarFilters;
