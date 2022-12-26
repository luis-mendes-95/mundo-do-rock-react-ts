import React, { createContext } from "react";
import { useState } from "react";

export const SalesContext = createContext<iSalesProviderFunctions>({} as iSalesProviderFunctions);

interface iSalesProviderFunctions {
  showModalAddSale: boolean,
  itemsQty: number,
  set_items_qty_sum: () => void,
  set_items_qty_sub: () => void,
  set_items_qty: () => void,
  addSale: () => void,
  editSale: () => void,
  deleteSale: () => void,
  set_modal_sale: () => boolean | unknown | string,
}

interface iSalesProviderProps {
  children: React.ReactNode;
}

interface iItem {
  cod: number,
  type: string, //modelo?? Tipo.
  category: string,
  reference: string, //banda, seriado? Referência.
  description: string,
  provider: string,
  price: number,
  cost: number
}

interface iSale {
  id: number,
  date: string,
  client: string,
  items: Array<iItem>,
  total: number,
  received: number
}

export const SalesProvider = ({ children }: iSalesProviderProps) => {

  const [showModalAddSale, setShowModalAddSale] = useState(false)

  let [itemsQty, setItemsQty] = useState(0)

  const addSale = () => { }

  const editSale = () => { }

  const deleteSale = () => { }

  const set_modal_sale = () => {
    setShowModalAddSale(!showModalAddSale)
  }

  const set_items_qty_sum = () => {
    setItemsQty(itemsQty += 1)
  }

  const set_items_qty_sub = () => {
    setItemsQty(itemsQty -= 1)
  }

  const set_items_qty = () => {
    setItemsQty(itemsQty = 1)
  }

  return (
    <SalesContext.Provider
      value={{
        showModalAddSale,
        itemsQty,
        set_items_qty_sum,
        set_items_qty_sub,
        set_items_qty,
        addSale,
        editSale,
        deleteSale,
        set_modal_sale
      }}
    >
      {children}
    </SalesContext.Provider>
  );
}