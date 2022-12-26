import * as main from "../../styles/main"
import { useContext } from "react"
import { SalesContext } from "../../contexts/sales"
import { GeneralContext } from "../../contexts/general";
import { useForm, Control, useFieldArray, useWatch } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const FormNewSale = () => {

  const { save_database } = useContext(GeneralContext)

  type FormValues = {
    date: string | unknown,
    client: string,
    item: {
      cod: number | null,
      description: string,
      price: number,
      pay_type: string,
      obs: string
    }[]
  }

  /*  const saleSchema = yup.object().shape({
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
    });*/

  const get_date = () => {

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

    const complete_date = `${day}/${month}/${year} ${hour}:${minute}:${second}`

    return complete_date
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    //resolver: yupResolver(saleSchema),
    defaultValues: {
      date: get_date(),
      client: "",
      item: [
        { cod: null, description: "", price: 0, pay_type: "", obs: "" }
      ]
    }
  });

  const { fields, append, prepend, remove } = useFieldArray({
    name: "item",
    control,
  })

  const submit = async (data: object) => {
    const result = await save_database(data);

    // if (result.status === 200) {

    //toast.success("Login realizado.");
    console.log(result)
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
            prepend({
              cod: null,
              description: "",
              price: 0,
              pay_type: "",
              obs: ""
            })
          }}>+</main.Button_add_item>
          {itemsQty > 1 ? (
            <main.Button_remove_item onClick={(e) => {
              e.preventDefault()
              set_items_qty_sub()
              remove(1)
              //prepend()
            }}>-</main.Button_remove_item>
          ) : (null)}
        </main.Div_items_button_add>
        {/* DIV DO BOTÃO DE ADICIONAR ITEM */}



        {/* DIV DO RESUMO DO TOTAL DE ITENS DO CARRINHO E DO TOTAL DA VENDA */}
        <main.Div_resume_cart_and_total style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>🛒{itemsQty}</main.Div_resume_cart_and_total>
        {/* DIV DO RESUMO DO TOTAL DE ITENS DO CARRINHO E DO TOTAL DA VENDA */}

      </main.Div_floating_info>

      {fields.map((field, index) => {
        return (<main.Div_Item key={field.id}>
          <main.Div_item_info>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <label style={{ fontWeight: "bold" }}>COD</label>
              <input style={{ width: "45px", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }}
                type="number"
                {...register(`item.${index}.cod`, { valueAsNumber: true })} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontWeight: "bold" }}>DESCRIÇÃO</label>
              <input style={{ width: "105px", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }}
                {...register(`item.${index}.description`)} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontWeight: "bold" }}>PREÇO</label>
              <input type="number" style={{ width: "105px", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }}
                {...register(`item.${index}.price`, { valueAsNumber: true })} />
            </div>
          </main.Div_item_info>

          <main.Div_item_info>
            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
              <label style={{ fontWeight: "bold" }}>Pagamento:</label>
              <select style={{ width: "100%", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }}
                {...register(`item.${index}.pay_type`)}>
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
              <textarea style={{ width: "100%", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }}
                {...register(`item.${index}.obs`)} />
            </div>
          </main.Div_item_info>

        </main.Div_Item>)
      })}

      {/*qtyToRender.length === 0 ? (
        null
      ) : (
        qtyToRender.map((item) => {
          return (<main.Div_Item key={createKey()}>
            <main.Div_item_info>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <label style={{ fontWeight: "bold" }}>COD</label>
                <input style={{ width: "45px", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }}/>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontWeight: "bold" }}>DESCRIÇÃO</label>
                <input style={{ width: "105px", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }}/>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontWeight: "bold" }}>PREÇO</label>
                <input type="number" style={{ width: "105px", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }}/>
              </div>
            </main.Div_item_info>

            <main.Div_item_info>
              <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <label style={{ fontWeight: "bold" }}>Pagamento:</label>
                <select style={{ width: "100%", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }}>
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
                <textarea style={{ width: "100%", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }} />
              </div>
            </main.Div_item_info>

          </main.Div_Item>)
        })
      )}*/}

      <button type="submit">Concluir</button>
      <button onClick={(e) => {
        e.preventDefault()
        set_modal_sale()
      }}>Cancelar</button>
    </main.Form_new_sale>
  )
}

export default FormNewSale
