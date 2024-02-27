import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export const TabsWrapper = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Query">
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={() => {}}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Tab>
          <Tab label="Query" />
          <Tab label="Query" />
        </Tabs>
      </Box>
    </Box>
  );
};
