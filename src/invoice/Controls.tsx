import React, { useCallback } from "react";
import useObservable from "../hooks/useObservable";
import { discount$, isConfirmed$, tax$ } from "./business";

export default function CardHeader() {
  const discount = useObservable<number>(discount$);
  const tax = useObservable<number>(tax$);
  const isConfirmed = useObservable<boolean>(isConfirmed$);

  const onDiscountChanged = useCallback((e: any) => {
    discount$.next(e.target.value);
  }, []);

  const onTaxChanged = useCallback((e: any) => {
    tax$.next(e.target.value);
  }, []);

  const onToggleConfirm = useCallback(() => {
    isConfirmed$.next(!isConfirmed);
  }, [isConfirmed]);

  return (
    <div className="card-footer">
      <div className="form-group row">
        <label htmlFor="discount" className="col-sm-2 col-form-label">
          Discount
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            id="discount"
            value={discount}
            onChange={onDiscountChanged}
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="tax" className="col-sm-2 col-form-label">
          Tax
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            className="form-control"
            id="tax"
            value={tax}
            onChange={onTaxChanged}
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary mb-2"
        onClick={onToggleConfirm}
      >
        {!isConfirmed ? "Confirm" : "UnConfirm"}
      </button>
    </div>
  );
}
