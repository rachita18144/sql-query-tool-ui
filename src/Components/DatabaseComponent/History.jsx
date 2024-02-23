import React from "react";

import "./History.css";

export const History = () => {
  const queries = ["SELECT * FROM customers;", "SELECT * FROM orders;"];
  return (
    <div className="history-container">
      <div className="history-heading">History</div>
      <div className="query-list">
        {queries.map((query, index) => {
          return <div className="query-item">{query}</div>;
        })}
      </div>
    </div>
  );
};
