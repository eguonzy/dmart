import React from "react";

function MerchantDetailsCard({ count, title, onClicked }) {
  return (
    <div onClick={onClicked} className="merchant-option-card">
      <p className="merch-count">{count}</p>
      <p className="detail">{title}</p>
    </div>
  );
}

export default MerchantDetailsCard;
