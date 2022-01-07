import React from "react";

export default function Items({ items }: any) {
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
          {items.map((item: any, index: number) => {
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
