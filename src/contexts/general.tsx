import React, { createContext } from "react";
import { useState } from "react";

export const GeneralContext = createContext<iGeneralContextProviderFunctions>({} as iGeneralContextProviderFunctions);

interface iGeneralContextProviderFunctions {
    save_database: (data: object) => object | string,
}

interface iGeneralProviderProps {
    children: React.ReactNode;
}

interface iSale {
    date: string | unknown,
    client: string,
    item: {
      cod: number | null,
      description: string,
      price: number,
      pay_type: string,
      obs: string
    }
}

export const GeneralProvider = ({ children }: iGeneralProviderProps) => {

    const [salesDatabase, setSalesDatabase] = useState([] as iSale[] | object[])

    const sales_database = localStorage.getItem("@Mundo_do_rock_sales")

    if (sales_database) {
        setSalesDatabase(JSON.parse(sales_database))
    }

    const save_database = (data: object) => {
        console.log(data)
        setSalesDatabase([...salesDatabase, data])
        localStorage.setItem("@Mundo_do_rock_Sales", JSON.stringify(salesDatabase))
        return data
    }

    return (
        <GeneralContext.Provider
            value={{
                save_database
            }}
        >
            {children}
        </GeneralContext.Provider>
    );
}