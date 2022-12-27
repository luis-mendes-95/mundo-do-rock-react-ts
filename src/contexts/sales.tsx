import React, { createContext } from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const SalesContext = createContext<iSalesProviderFunctions>({} as iSalesProviderFunctions);

interface iSalesProviderFunctions {
  showModalAddSale: boolean,
  itemsQty: number,
  set_items_qty_sum: () => void,
  set_items_qty_sub: () => void,
  set_items_qty: () => void,
  addSale: (data: object) => void,
  editSale: () => void,
  deleteSale: () => void,
  set_modal_sale: () => boolean | unknown | string,
  salesDatabase: object[] 
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
  const [salesDatabase, setSalesDatabase] = useState([] as iSale[] | object[])
  let [itemsQty, setItemsQty] = useState(0)

  useEffect(() => {
    let sales_database = localStorage.getItem("@Mundo_do_rock_Sales")

    if (sales_database) {
      return setSalesDatabase(JSON.parse(sales_database))
    } else {
      return localStorage.setItem("@Mundo_do_rock_Sales", JSON.stringify(salesDatabase))
    }

  }, [])


  const addSale = (data:object) => {
    setSalesDatabase([...salesDatabase, data])
    localStorage.setItem("@Mundo_do_rock_Sales", JSON.stringify(salesDatabase))
    return salesDatabase
  }

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
        set_modal_sale,
        salesDatabase
      }}
    >
      {children}
    </SalesContext.Provider>
  );
}