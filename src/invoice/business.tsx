import { ajax } from "rxjs/ajax";
import {
  BehaviorSubject,
  combineLatest,
  from,
  map,
  mergeMap,
  reduce,
} from "rxjs";

const invoiceItems$ = ajax.getJSON<[]>("http://localhost:3001/invoiceItems");

const discount$ = new BehaviorSubject(20);
const tax$ = new BehaviorSubject(10);
const isConfirmed$ = new BehaviorSubject(false);

const invoiceSubTotal$ = invoiceItems$.pipe(
  mergeMap((invoiceItems: any) => from(invoiceItems)),
  reduce((acc, { unitCost, quantity }: any) => unitCost * quantity + acc, 0)
);

const invoiceDiscount$ = combineLatest([invoiceSubTotal$, discount$]).pipe(
  map(([invoiceSubTotal, discount]: any) =>
    Math.round(invoiceSubTotal * (discount / 100.0))
  )
);

const invoiceTax$ = combineLatest([invoiceSubTotal$, tax$]).pipe(
  map(([invoiceSubTotal, tax]: any) =>
    Math.round(invoiceSubTotal * (tax / 100.0))
  )
);

const invoiceTotal$ = combineLatest([
  invoiceSubTotal$,
  invoiceDiscount$,
  invoiceTax$,
]).pipe(
  map(([invoiceSubTotal, invoiceDiscount, invoiceTax]: any) =>
    Math.round(invoiceSubTotal - invoiceDiscount + invoiceTax)
  )
);

export {
  invoiceItems$,
  discount$,
  tax$,
  isConfirmed$,
  invoiceSubTotal$,
  invoiceDiscount$,
  invoiceTax$,
  invoiceTotal$,
};
