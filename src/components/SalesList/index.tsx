import * as main from "../../styles/main"
import { useContext, useState } from "react"
import { SalesContext } from "../../contexts/sales"


const SalesList = () => {

  const { salesDatabase, dataEdit, set_modal_edit_sale, set_modal_delete_sale } = useContext(SalesContext)

  const createKey = () => Math.floor(Math.random() * 192837465)

  return (
    <ul style={{ height: "70vh", overflow: "scroll" }}>

      
      {
      
      
      
      salesDatabase.length > 0 ? (
        salesDatabase.map((sale) => {

          let total: any = sale.item.map((item: object) => {
            return item
          }).map((item: any) => {
            return item.price
          }).reduce((acc: number, elem: number) => acc += elem, 0).toFixed(2).replace('.',',')
  
          return (
            <main.Li_item key={createKey()}>
              <div style={{display:"flex", width:"100%", justifyContent:"center"}}>

              <main.Div_item_data style={{width:"100%"}}>
                <main.H3_data_title>Data</main.H3_data_title>
                <main.P_data>{sale.date}</main.P_data>
              </main.Div_item_data>

              <main.Div_item_data style={{width:"80%"}}>
                <main.H3_data_title>Total</main.H3_data_title>
                <main.P_data>{`R$ ${total}`}</main.P_data>
              </main.Div_item_data>
              
              </div>

              <main.Div_item_data style={{width:"100%"}}>
                <main.H3_data_title>Itens:</main.H3_data_title>
                {sale.item.map((item: any) => {
                  return (
                    <main.P_data style={{border:"1pt solid black"}}>{item.description}</main.P_data>
                  )
                })}

              </main.Div_item_data>

              <div style={{ width: "100%", display: "flex", justifyContent: "space-around", margin: "5px 0" }}>
                <main.Button_more_details onClick={(e)=>{
                  e.preventDefault()
                  set_modal_edit_sale(sale)
                }}>+ detalhes</main.Button_more_details>
                <main.Button_delete onClick={()=>{set_modal_delete_sale(sale)}}>Excluir</main.Button_delete>
              </div>
              {/* 
        <h2 style={{ width: "100%", textAlign: "center" }}>Itens:</h2>
        <main.Div_item_data style={{ width: "100%" }}>
          <main.H3_data_title>Descrição</main.H3_data_title>
          <main.P_data>Camiseta branca personalizada</main.P_data>
          <main.P_data style={{ backgroundColor: "lightgreen" }}>R$ 38,00</main.P_data>
          <main.H3_data_title>Observações:</main.H3_data_title>
          <main.P_data>Estampa do flamengo frontal</main.P_data>
        </main.Div_item_data>
  
        <main.Div_item_data style={{ width: "100%" }}>
          <main.H3_data_title>Descrição</main.H3_data_title>
          <main.P_data>Caneca Mágica Personalizada</main.P_data>
          <main.P_data style={{ backgroundColor: "lightgreen" }}>R$ 59,00</main.P_data>
          <main.H3_data_title>Observações:</main.H3_data_title>
          <main.P_data>Estampa da Wandinha</main.P_data>
        </main.Div_item_data>
  
        */}
            </main.Li_item>
          )
  
        })
      ) : (
        <div style={{width: "100%", display:"flex", justifyContent:"center", fontWeight:"bold", flexDirection:"column", alignItems:"center"}}>
          <p style={{fontSize:"25pt"}}> 📖 </p>
          <p>Não há vendas nesse período</p>
        </div>
      )
      

      
      
      
      
      }

    </ul>
  )
}

export default SalesList