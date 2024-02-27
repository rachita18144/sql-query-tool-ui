import React from "react";
import { useMyContext } from "../../MyContext";
import { queries } from "../../data/queries";

import "./History.css";

export const History = () => {
  const { setSelectedQueryId } = useMyContext();
  return (
    <div className="history-container">
      <div className="history-heading">History</div>
      <div className="query-list">
        {queries.map((query, index) => {
          return (
            <div
              className="query-item"
              onClick={() => setSelectedQueryId(index)}
            >
              {query}
            </div>
          );
        })}
      </div>
    </div>
  );
};
