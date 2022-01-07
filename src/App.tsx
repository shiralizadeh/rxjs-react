import React from "react";

import "./App.css";

import CardHeader from "./invoice/CardHeader";
import InvoiceFooter from "./invoice/InvoiceFooter";
import InvoiceHeader from "./invoice/InvoiceHeader";
import InvoiceItems from "./invoice/InvoiceItems";
import Controls from "./invoice/Controls";

function App() {
  return (
    <div className="container">
      <div className="card m-5">
        <CardHeader />

        <div className="card-body">
          <InvoiceHeader />

          <InvoiceItems />

          <InvoiceFooter />
        </div>

        <Controls />
      </div>
    </div>
  );
}

export default App;
