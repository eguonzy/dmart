import React from "react";

function MiniCard({ count, title }) {
  return (
    <div className="mini-card">
      <div className="mini-count">
        <p>{count}</p>
        <p> {title}</p>
      </div>
    </div>
  );
}

export default MiniCard;
