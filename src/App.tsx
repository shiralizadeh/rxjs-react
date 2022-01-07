import React, {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import axios from "axios";

import "./App.css";

import CardHeader from "./invoice/CardHeader";
import InvoiceFooter from "./invoice/InvoiceFooter";
import InvoiceHeader from "./invoice/InvoiceHeader";
import InvoiceItems from "./invoice/InvoiceItems";
import Controls from "./invoice/Controls";

function App() {
  const [invoiceItems, setItems] = useState([]);
  const [controls, setControls] = useState({
    discount: 20,
    tax: 10,
    isConfirmed: false,
  });

  useEffect(() => {
    axios.get("http://localhost:3001/invoiceItems").then(({ data }) => {
      setItems(data);
    });
  }, []);

  const onDicountChanged = useCallback(
    (e: any) =>
      setControls((controls) => ({
        ...controls,
        discount: e.target.value,
      })),
    []
  );

  const onTaxChanged = useCallback(
    (e: any) =>
      setControls((controls) => ({
        ...controls,
        tax: e.target.value,
      })),
    []
  );

  const onToggleConfirm = useCallback(
    () =>
      setControls((controls) => ({
        ...controls,
        isConfirmed: !controls.isConfirmed,
      })),
    []
  );

  const subTotal = invoiceItems.reduce(
    (acc, { unitCost, quantity }: any) => unitCost * quantity + acc,
    0
  );
  const discount = Math.round(subTotal * (controls.discount / 100.0));
  const tax = Math.round(subTotal * (controls.tax / 100.0));
  const total = subTotal - discount + tax;

  const invoiceTotal = {
    subTotal,
    discount,
    tax,
    total,
  };

  return (
    <div className="container">
      <div className="card m-5">
        <CardHeader isConfirmed={controls.isConfirmed} />

        <div className="card-body">
          <InvoiceHeader />

          <InvoiceItems items={invoiceItems} />

          <InvoiceFooter controls={controls} total={invoiceTotal} />
        </div>

        <Controls
          controls={controls}
          onDicountChanged={onDicountChanged}
          onTaxChanged={onTaxChanged}
          onToggleConfirm={onToggleConfirm}
        />
      </div>
    </div>
  );
}

export default App;
