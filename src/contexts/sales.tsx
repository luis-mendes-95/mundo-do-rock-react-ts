import React, { createContext } from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export const SalesContext = createContext<iSalesProviderFunctions>({} as iSalesProviderFunctions);

interface iSalesProviderFunctions {
  showSalesList: boolean,
  showModalAddSale: boolean,
  showModalEditSale: boolean,
  showModalDeleteSale: boolean,
  itemsQty: number,
  set_items_qty_sum: () => void,
  set_items_qty_sub: () => void,
  set_items_qty: () => void,
  set_show_sales_list: () => void,
  addSale: (data: object[]) => iSale[] | object[],
  editSale: (data: object) => void,
  deleteSale: () => void,
  set_modal_add_sale: () => boolean | unknown | string,
  set_modal_edit_sale: (data: iSale) => boolean | unknown | string,
  set_modal_delete_sale: (data: iSale) => boolean | unknown | string,
  salesDatabase: Array<any>,
  day: number,
  month: number,
  year: number
  set_day: (data: number) => number,
  set_month: (data: number) => number,
  set_year: (data: number) => number
  get_frag_date: () => object,
  dataEdit: iSale | any,
  dataDelete: iSale | any
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

  const [showSalesList, setShowSalesList] = useState(true)
  const [showModalAddSale, setShowModalAddSale] = useState(false)
  const [showModalEditSale, setShowModalEditSale] = useState(false)
  const [showModalDeleteSale, setShowModalDeleteSale] = useState(false)
  const [salesDatabase, setSalesDatabase] = useState([] as iSale[] | object[])
  const [dataEdit, setDataEdit] = useState(null as iSale | object | null)
  const [dataDelete, setDataDelete] = useState(null as iSale | object | null)
  let [itemsQty, setItemsQty] = useState(0)
  const [day, setDay] = useState(new Date().getDate())
  const [month, setMonth] = useState(new Date().getMonth())
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    let sales_database = localStorage.getItem("@Mundo_do_rock_Sales")

    if (sales_database) {
      return setSalesDatabase(JSON.parse(sales_database))
    } else {
      return localStorage.setItem("@Mundo_do_rock_Sales", JSON.stringify(salesDatabase))
    }

  }, [])

  const set_day = (data: number) => {
    setDay(data)
    return day
  }

  const set_month = (data: number) => {
    setMonth(data)
    return month
  }

  const set_year = (data: number) => {
    setYear(data)
    return year
  }


  const addSale = (data: iSale[] | object[]) => {
    setSalesDatabase(data)
    localStorage.setItem("@Mundo_do_rock_Sales", JSON.stringify(data))
    toast.success("Venda cadastrada com sucesso")
    return salesDatabase
  }

  const editSale = (data: object) => { }

  const deleteSale = () => { }

  const set_show_sales_list = () => {
    setShowSalesList(true)
    setShowModalAddSale(false)
    setShowModalDeleteSale(false)
    setShowModalEditSale(false)
  }

  const set_modal_add_sale = () => {
    setShowSalesList(false)
    setShowModalAddSale(true)
    setShowModalDeleteSale(false)
    setShowModalEditSale(false)
  }

  const set_modal_edit_sale = (data: iSale) => {
    setShowSalesList(false)
    setShowModalAddSale(false)
    setShowModalDeleteSale(false)
    setShowModalEditSale(true)
  }

  const set_modal_delete_sale = (data: iSale) => {
    setShowSalesList(false)
    setShowModalAddSale(false)
    setShowModalDeleteSale(true)
    setShowModalEditSale(false)
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

  const get_frag_date = () => {

    let day: string | number = new Date().getDate().toString()
    let week_day: string | number = new Date().getDay().toString()
    let year: string | number = new Date().getFullYear().toString()
    let month: string | number = new Date().getMonth().toString()
    let hour: string | number = new Date().getHours().toString()
    let minute: string | number = new Date().getMinutes().toString()
    let second: string | number = new Date().getSeconds().toString()

    if (week_day === "1") {
      week_day = "Segunda-feira"
    } else if (week_day === "2") {
      week_day = "Terça-Feira"
    } else if (week_day === "3") {
      week_day = "Quarta-feira"
    } else if (week_day === "4") {
      week_day = "Quinta-feira"
    } else if (week_day === "5") {
      week_day = "Sexta-feira"
    } else if (week_day === "6") {
      week_day = "Sábado"
    } else if (week_day === "7") {
      week_day = "Domingo"
    }

    if (month === "0") {
      month = "Janeiro"
    } else if (month === "1") {
      month = "Fevereiro"
    } else if (month === "2") {
      month = "Março"
    } else if (month === "3") {
      month = "Abril"
    } else if (month === "4") {
      month = "Maio"
    } else if (month === "5") {
      month = "Junho"
    } else if (month === "6") {
      month = "Julho"
    } else if (month === "7") {
      month = "Agosto"
    } else if (month === "8") {
      month = "Setembro"
    } else if (month === "9") {
      month = "Outubro"
    } else if (month === "10") {
      month = "Novembro"
    } else if (month === "11") {
      month = "Dezembro"
    }

    if (minute === "0") {
      minute = "00"
    } else if (minute === "1") {
      minute = "01"
    } else if (minute === "2") {
      minute = "02"
    } else if (minute === "3") {
      minute = "03"
    } else if (minute === "4") {
      minute = "04"
    } else if (minute === "5") {
      minute = "05"
    } else if (minute === "6") {
      minute = "06"
    } else if (minute === "7") {
      minute = "07"
    } else if (minute === "8") {
      minute = "08"
    } else if (minute === "9") {
      minute = "09"
    }

    const frag_date = {
      day: day,
      month: month,
      year: year,
      hour: hour,
      minute: minute,
      second: second
    }

    return frag_date
  }

  return (
    <SalesContext.Provider
      value={{
        showSalesList,
        showModalAddSale,
        showModalEditSale,
        showModalDeleteSale,
        itemsQty,
        set_items_qty_sum,
        set_items_qty_sub,
        set_items_qty,
        set_show_sales_list,
        addSale,
        editSale,
        deleteSale,
        set_modal_add_sale,
        set_modal_edit_sale,
        set_modal_delete_sale,
        salesDatabase,
        day,
        month,
        year,
        set_day,
        set_month,
        set_year,
        get_frag_date,
        dataDelete,
        dataEdit
      }}
    >
      {children}
    </SalesContext.Provider>
  );
}