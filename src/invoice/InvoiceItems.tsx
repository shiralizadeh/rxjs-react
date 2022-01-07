import React from "react";
import useObservable from "../hooks/useObservable";
import { invoiceItems$ } from "./business";

export default function Items() {
  const invoiceItems = useObservable<any>(invoiceItems$) || [];

  return (
    <div className="table-responsive-sm">
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="center">#</th>
            <th>Item</th>

            <th className="right">Unit Cost</th>
            <th className="center">Qty</th>
            <th className="right">Total</th>
          </tr>
        </thead>
        <tbody>
          {invoiceItems.map((item: any, index: number) => {
            const total = item.unitCost * item.quantity;

            return (
              <tr key={item.id}>
                <td className="center">{index + 1}</td>
                <td className="left strong">{item.title}</td>

                <td className="right">$ {item.unitCost}</td>
                <td className="center">{item.quantity}</td>
                <td className="right">$ {total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
