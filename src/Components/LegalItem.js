import React from "react";
import { Link } from "react-router-dom";

const LegalItem = ({ title, to }) => {
  return (
    <Link to={to}>
      <div className="legal-item">
        <h5 className="legal-h5">{title}</h5>
        <p className="icon">
          <svg
            width="7"
            height="12"
            viewBox="0 0 7 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.3333L5.66667 5.99996L1 10.6666"
              stroke="#262F56"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </div>
    </Link>
  );
};

export default LegalItem;
