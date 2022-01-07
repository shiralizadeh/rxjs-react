import React from "react";
import useObservable from "../hooks/useObservable";
import {
  discount$,
  invoiceDiscount$,
  invoiceSubTotal$,
  invoiceTax$,
  invoiceTotal$,
  tax$,
} from "./business";

export default function Header({ payment }: any) {
  const discount = useObservable<number>(discount$);
  const tax = useObservable<number>(tax$);

  const invoiceSubTotal = useObservable<number>(invoiceSubTotal$);
  const invoiceDiscount = useObservable<number>(invoiceDiscount$);
  const invoiceTax = useObservable<number>(invoiceTax$);
  const invoiceTotal = useObservable<number>(invoiceTotal$);

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
              <td className="right">$ {invoiceSubTotal}</td>
            </tr>
            <tr>
              <td className="left">
                <strong>Discount ({discount}%)</strong>
              </td>
              <td className="right">$ {invoiceDiscount}</td>
            </tr>
            <tr>
              <td className="left">
                <strong>Tax ({tax}%)</strong>
              </td>
              <td className="right">$ {invoiceTax}</td>
            </tr>
            <tr>
              <td className="left">
                <strong>Total</strong>
              </td>
              <td className="right">
                <strong>$ {invoiceTotal}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
