import * as main from "../../styles/main"
import { useContext } from "react"
import { SalesContext } from "../../contexts/sales"

const FormDeleteSale = () => {

  const { set_modal_delete_sale ,dataDelete, deleteSale, set_show_sales_list } = useContext(SalesContext)

  console.log(dataDelete)

  return (
    <div style={{width:"100%", display:"flex", justifyContent:"center", flexDirection:"column", textAlign:"center", alignItems:"center", gap:"5px", fontWeight:"bold"}}>
      TEM CERTEZA QUE DESEJA EXCLUIR?
      <main.Button_save style={{width:"50%"}} onClick={()=>{deleteSale(dataDelete)}}>Sim</main.Button_save>
      <main.Button_delete style={{width:"50%"}} onClick={()=>{set_show_sales_list()}}>Cancelar</main.Button_delete>
    </div>
  )
}

export default FormDeleteSale
