import React from "react";
import useObservable from "../hooks/useObservable";
import { isConfirmed$ } from "./business";

export default function CardHeader() {
  const isConfirmed = useObservable<boolean>(isConfirmed$);

  return (
    <div className="card-header">
      Invoice: <strong>04/10/2021</strong>
      <span className="float-right">
        <strong>Status:</strong> {isConfirmed ? "Confirmed" : "Pending"}
      </span>
    </div>
  );
}
