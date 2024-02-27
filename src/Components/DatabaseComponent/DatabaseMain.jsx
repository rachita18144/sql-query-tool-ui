import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { customers } from "../../data/customers";
import { orderDetails } from "../../data/orderDetails";
import { History } from "./History";
import "./DatabaseMain.css";

const TABLE_NAMES = {
  customers: "customers",
  order_details: "orders",
};

const TableAccordion = ({ tableName, tableData }) => {
  return (
    <Accordion className="">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {tableName}
      </AccordionSummary>
      <AccordionDetails>
        {Object.keys(tableData[0]).map((key, index) => {
          return (
            <div className="database-table-item" key={index}>
              {key}
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export const DatabaseMain = () => {
  // const [customerTable, setCustomerTable] = useState({});
  // const [orderDetailsTable, setOrderDetailsTable] = useState({});

  // useEffect(() => {
  //   setCustomerTable();
  //   setOrderDetailsTable();
  // }, []);

  return (
    <div className="left-panel">
      <History />
      <div className="table-container">
        <div className="table-heading">Tables</div>
        <TableAccordion
          tableName={TABLE_NAMES.customers}
          tableData={customers}
        />
        <TableAccordion
          tableName={TABLE_NAMES.order_details}
          tableData={orderDetails}
        />
      </div>
    </div>
  );
};
