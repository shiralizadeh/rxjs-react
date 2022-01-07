import React from "react";

export default function CardHeader({ isConfirmed }: any) {
  return (
    <div className="card-header">
      Invoice: <strong>04/10/2021</strong>
      <span className="float-right">
        <strong>Status:</strong> {isConfirmed ? "Confirmed" : "Pending"}
      </span>
    </div>
  );
}
