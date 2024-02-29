import React, { useState, useEffect } from "react";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

import TableDataComponent from "./TableDataComponent";
import { useMyContext } from "../../MyContext";
import { queries } from "../../data/queries";
import { customers } from "../../data/customers";
import { orderDetails } from "../../data/orderDetails";
import { exportCSVFile } from "../../appUtils";

import "./QueryInterfaceComponent.css";

export const QueryInterfaceComponent = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState({});
  const [isError, setIsError] = useState("");
  const [isToastOpen, setIsToastOpen] = React.useState(false);
  const { selectedQueryId, setSelectedQueryId } = useMyContext();

  useEffect(() => {
    setQuery(queries[selectedQueryId]);
  }, [selectedQueryId]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsToastOpen(false);
  };

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setIsLoading(false);
        setIsToastOpen(true);
        if (selectedQueryId !== "" && selectedQueryId !== undefined) {
          resolve(selectedQueryId % 2 === 0 ? customers : orderDetails);
        } else {
          reject("Incorrect Query");
        }
      }, 3000);
    });
  };

  const handleRunButtonClick = async () => {
    setIsLoading(true);
    setIsError("");

    try {
      const result = await fetchData();
      setTableData(result);
    } catch (e) {
      setIsError("Incorrect Query");
      setTableData({});
    }
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="query-interface">
      {/* <div className="tabs">
        <TabsWrapper />
      </div> */}
      <BaseTextareaAutosize
        aria-label="minimum height"
        minRows={10}
        placeholder="Enter your Query here"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSelectedQueryId("");
        }}
      />
      <div className="button-container">
        <Button
          variant="contained"
          startIcon={<PlayArrowIcon />}
          onClick={handleRunButtonClick}
        >
          Run Query
        </Button>
        <FileDownloadOutlinedIcon
          color="primary"
          sx={{ marginLeft: "auto", cursor: "pointer" }}
          onClick={() => {
            exportCSVFile(Object.keys(tableData), tableData, "data.csv");
          }}
        />
        <DeleteIcon
          color="primary"
          sx={{ cursor: "pointer", marginLeft: "8px" }}
          onClick={() => {
            setQuery("");
            setSelectedQueryId("");
            setTableData({});
          }}
        />
      </div>
      {isLoading ? (
        <CircularProgress sx={{ padding: "10px" }} size={25} />
      ) : (
        <TableDataComponent tableData={tableData} />
      )}

      <Snackbar
        open={isToastOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        message={isError === "" ? "Data Fetched Successfully" : "Invalid Query"}
        action={action}
      />
    </div>
  );
};
