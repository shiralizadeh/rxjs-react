import React from "react";

export default function Header({ controls, total }: any) {
  console.log({ total });

  return (
    <div className="row">
      <div className="col-lg-4 col-sm-5"></div>

      <div className="col-lg-4 col-sm-5 ml-auto">
        <table className="table table-clear">
          <tbody>
            <tr>
              <td className="left">
                <strong>Subtotal</strong>
              </td>
              <td className="right">$ {total.subTotal}</td>
            </tr>
            <tr>
              <td className="left">
                <strong>Discount ({controls.discount}%)</strong>
              </td>
              <td className="right">$ {total.discount}</td>
            </tr>
            <tr>
              <td className="left">
                <strong>Tax ({controls.tax}%)</strong>
              </td>
              <td className="right">$ {total.tax}</td>
            </tr>
            <tr>
              <td className="left">
                <strong>Total</strong>
              </td>
              <td className="right">
                <strong>$ {total.total}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
