import { SalesContext } from "../../contexts/sales"
import { useContext } from "react"
import * as main from "../../styles/main"

const SalesControls = () => {

    const { addSale, editSale, deleteSale, set_modal_sale, set_items_qty } = useContext(SalesContext)

    return (
        <main.Div_background>
            <main.H2_title>Vendas</main.H2_title>
            <main.Div_controls>
                <main.Button_control onClick={(e)=>{
                    e.preventDefault()
                    set_modal_sale()
                    set_items_qty()
                    }}>Adicionar</main.Button_control>
                <main.Div_search>
                    <main.Input_search placeholder="Pesquise aqui"/>
                    <main.Button_search>🔍</main.Button_search>
                </main.Div_search>
            </main.Div_controls>
        </main.Div_background>
    )
}


export default SalesControls