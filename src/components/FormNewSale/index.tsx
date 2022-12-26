import * as main from "../../styles/main"
import { useContext } from "react"
import { SalesContext } from "../../contexts/sales"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const FormNewSale = () => {

  interface iItemOfSale {
    cod: number,
    type: string,
    category: string,
    reference: string, 
    description: string,
    provider: string,
    price: number,
    cost: number
  }

  interface iSale {
    client: string,
    cod: number,
    description: string,
    items: Array<iItemOfSale>,
    total: number,
    received: number
  }

  const saleSchema = yup.object().shape({
    client: yup
      .string()
      .required("Preencha o nome do cliente"),
    cod: yup
      .number(),
    description: yup
      .string(),
    price: yup
      .string(),
    pay_type: yup
      .string()
      .required("Selecione uma forma de pagamento"),
    obs: yup
      .string()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(saleSchema),
  });

  const submit = async (data: object) => {
    //const result = await login(data);

    // if (result.status === 200) {
    console.log(data);
    //toast.success("Login realizado.");

    /*setTimeout(function() {
        navigate("/dashboard")
      }, 2000);*/

    // } else {
    //  toast.error("Ops! Algo deu errado.")
    //}
  };

  const { itemsQty, set_items_qty_sum, set_items_qty_sub, set_modal_sale } = useContext(SalesContext)

  const createKey = () => Math.floor(Math.random() * 192837465)

  const getQtyToRender = () => {

    let temp = 1

    let qtyToRender = []

    for (let i = 1; i <= itemsQty; i++) {

      if (itemsQty === 0) {
        return qtyToRender
      }

      if (temp <= itemsQty) {
        qtyToRender.push("add")
      }
    }

    return qtyToRender
  }

  const qtyToRender = getQtyToRender()

  return (
    <main.Form_new_sale onSubmit={handleSubmit(submit)} noValidate>
      <main.Label_general>Cliente</main.Label_general>
      <main.Input_general placeholder="Nome do cliente"           {...register("client")} />
      {errors.client?.message && (
            <main.P_aria_label aria-label="error">
            </main.P_aria_label>
          )}

      <main.Div_floating_info>

        {/* DIV DO BOTÃO DE ADICIONAR ITEM */}
        <main.Div_items_button_add>
          <main.Label_general>Itens</main.Label_general>
          <main.Button_add_item onClick={(e) => {
            e.preventDefault()
            set_items_qty_sum()
          }}>+</main.Button_add_item>
          {itemsQty > 0 ? (
            <main.Button_remove_item onClick={(e) => {
              e.preventDefault()
              set_items_qty_sub()
            }}>-</main.Button_remove_item>
          ) : (null)}
        </main.Div_items_button_add>
        {/* DIV DO BOTÃO DE ADICIONAR ITEM */}



        {/* DIV DO RESUMO DO TOTAL DE ITENS DO CARRINHO E DO TOTAL DA VENDA */}
        <main.Div_resume_cart_and_total style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>🛒{itemsQty}</main.Div_resume_cart_and_total>
        {/* DIV DO RESUMO DO TOTAL DE ITENS DO CARRINHO E DO TOTAL DA VENDA */}

      </main.Div_floating_info>


      {qtyToRender.length === 0 ? (
        null
      ) : (
        qtyToRender.map((item) => {
          return (<main.Div_Item key={createKey()}>
            <main.Div_item_info>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <label style={{ fontWeight: "bold" }}>COD</label>
                <input style={{ width: "45px", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }}           {...register("cod")} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontWeight: "bold" }}>DESCRIÇÃO</label>
                <input style={{ width: "105px", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }} {...register("description")} />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontWeight: "bold" }}>PREÇO</label>
                <input type="number" style={{ width: "105px", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }} {...register("price")} />
              </div>
            </main.Div_item_info>

            <main.Div_item_info>
              <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <label style={{ fontWeight: "bold" }}>Pagamento:</label>
                <select style={{ width: "100%", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }} {...register("pay_type")}>
                  <option value="">Selecione</option>
                  <option value="A vista">A vista</option>
                  <option value="Pix">Pix</option>
                  <option value="Débito">Débito</option>
                  <option value="Crédito">Crédito</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
            </main.Div_item_info>

            <main.Div_item_info>
              <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <label style={{ fontWeight: "bold" }}>OBS</label>
                <textarea style={{ width: "100%", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }} {...register("obs")} />
              </div>
            </main.Div_item_info>

          </main.Div_Item>)
        })
      )}

      {/* FORMULÁRIO DO ITEM ADICIONADO */}

      {/* FORMULÁRIO DO ITEM ADICIONADO */}

      <button type="submit">Concluir</button>
      <button onClick={(e) => {
        e.preventDefault()
        set_modal_sale()
      }}>Cancelar</button>
    </main.Form_new_sale>
  )
}

export default FormNewSale
