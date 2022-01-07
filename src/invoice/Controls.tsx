import React from "react";

export default function CardHeader({
  controls,
  onDicountChanged,
  onTaxChanged,
  onToggleConfirm,
}: any) {
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
            value={controls.discount}
            onChange={onDicountChanged}
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
            value={controls.tax}
            onChange={onTaxChanged}
          />
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary mb-2"
        onClick={onToggleConfirm}
      >
        {!controls.isConfirmed ? "Confirm" : "UnConfirm"}
      </button>
    </div>
  );
}
