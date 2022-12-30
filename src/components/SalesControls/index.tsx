import { SalesContext } from "../../contexts/sales"
import { useContext } from "react"
import * as main from "../../styles/main"

const SalesControls = () => {

    const { addSale, editSale, deleteSale, set_modal_add_sale, set_items_qty, showModalAddSale,
        day, month, year, set_day, set_month, set_year, get_frag_date } = useContext(SalesContext)


    const set_date_day = (data: string) => {

        if (data === "Todos") {
            return set_day(100)
        }
        const day = parseInt(data)
        set_day(day)
    }

    const set_date_month = (data: string) => {
        if (data === "Todos") {
            return set_month(100)
        }

        if (data === "Janeiro") {
            return set_month(0)
        }

        if (data === "Fevereiro") {
            return set_month(1)
        }

        if (data === "Março") {
            return set_month(2)
        }

        if (data === "Abril") {
            return set_month(3)
        }

        if (data === "Maio") {
            return set_month(4)
        }

        if (data === "Junho") {
            return set_month(5)
        }

        if (data === "Julho") {
            return set_month(6)
        }

        if (data === "Agosto") {
            return set_month(7)
        }

        if (data === "Setembro") {
            return set_month(8)
        }

        if (data === "Outubro") {
            return set_month(9)
        }

        if (data === "Novembro") {
            return set_month(10)
        }

        if (data === "Dezembro") {
            return set_month(11)
        }
        return month
    }

    const set_date_year = (data: string) => {
        if (data === "Todos") {
            return set_year(100)
        }
        const year = parseInt(data)
        set_year(year)
    }

    return (
        <main.Div_background>
            <main.H2_title>Vendas</main.H2_title>
            <main.Div_controls>
                <main.Button_control onClick={(e) => {
                    e.preventDefault()
                    set_modal_add_sale()
                    set_items_qty(1)
                }}>Nova venda</main.Button_control>
                <main.Div_search>
                    <main.Input_search placeholder="Pesquise aqui" />
                    <main.Button_search>🔍</main.Button_search>
                </main.Div_search>

            </main.Div_controls>

            {showModalAddSale === true ? (
                null
            ) : (
                <div style={{ display: "flex", width: "100%", justifyContent: "center", gap: "5px" }}>
                    <h3 style={{ fontSize: "12pt" }}>Período:</h3>
                    <select onChange={(e) => { set_date_day(e.target.value) }} style={{ width: "20%", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }}>
                        <option value="Todos">Todos</option>
                        {day === 1 ? (
                            <option value="1" selected>1</option>
                        ) : (
                            <option value="1">1</option>
                        )}

                        {day === 2 ? (
                            <option value="2" selected>2</option>
                        ) : (
                            <option value="2">2</option>
                        )}

                        {day === 3 ? (
                            <option value="3" selected>3</option>
                        ) : (
                            <option value="3">3</option>
                        )}

                        {day === 4 ? (
                            <option value="4" selected>4</option>
                        ) : (
                            <option value="4">4</option>
                        )}

                        {day === 5 ? (
                            <option value="5" selected>5</option>
                        ) : (
                            <option value="5">5</option>
                        )}

                        {day === 6 ? (
                            <option value="6" selected>6</option>
                        ) : (
                            <option value="6">6</option>
                        )}

                        {day === 7 ? (
                            <option value="7" selected>7</option>
                        ) : (
                            <option value="7">7</option>
                        )}

                        {day === 8 ? (
                            <option value="8" selected>8</option>
                        ) : (
                            <option value="8">8</option>
                        )}

                        {day === 9 ? (
                            <option value="9" selected>9</option>
                        ) : (
                            <option value="9">9</option>
                        )}

                        {day === 10 ? (
                            <option value="10" selected>10</option>
                        ) : (
                            <option value="10">10</option>
                        )}

                        {day === 11 ? (
                            <option value="11" selected>11</option>
                        ) : (
                            <option value="11">11</option>
                        )}

                        {day === 12 ? (
                            <option value="12" selected>12</option>
                        ) : (
                            <option value="12">12</option>
                        )}

                        {day === 13 ? (
                            <option value="13" selected>13</option>
                        ) : (
                            <option value="13">13</option>
                        )}

                        {day === 14 ? (
                            <option value="14" selected>14</option>
                        ) : (
                            <option value="14">14</option>
                        )}

                        {day === 15 ? (
                            <option value="15" selected>15</option>
                        ) : (
                            <option value="15">15</option>
                        )}

                        {day === 16 ? (
                            <option value="16" selected>16</option>
                        ) : (
                            <option value="16">16</option>
                        )}

                        {day === 17 ? (
                            <option value="17" selected>17</option>
                        ) : (
                            <option value="17">17</option>
                        )}

                        {day === 18 ? (
                            <option value="18" selected>18</option>
                        ) : (
                            <option value="18">18</option>
                        )}

                        {day === 19 ? (
                            <option value="19" selected>19</option>
                        ) : (
                            <option value="19">19</option>
                        )}

                        {day === 20 ? (
                            <option value="20" selected>20</option>
                        ) : (
                            <option value="20">20</option>
                        )}

                        {day === 21 ? (
                            <option value="21" selected>21</option>
                        ) : (
                            <option value="21">21</option>
                        )}

                        {day === 22 ? (
                            <option value="22" selected>22</option>
                        ) : (
                            <option value="22">22</option>
                        )}

                        {day === 23 ? (
                            <option value="23" selected>23</option>
                        ) : (
                            <option value="23">23</option>
                        )}

                        {day === 24 ? (
                            <option value="24" selected>24</option>
                        ) : (
                            <option value="24">24</option>
                        )}

                        {day === 25 ? (
                            <option value="25" selected>25</option>
                        ) : (
                            <option value="25">25</option>
                        )}

                        {day === 26 ? (
                            <option value="26" selected>26</option>
                        ) : (
                            <option value="26">26</option>
                        )}

                        {day === 27 ? (
                            <option value="27" selected>27</option>
                        ) : (
                            <option value="27">27</option>
                        )}

                        {day === 28 ? (
                            <option value="28" selected>28</option>
                        ) : (
                            <option value="28">28</option>
                        )}

                        {day === 29 ? (
                            <option value="29" selected>29</option>
                        ) : (
                            <option value="29">29</option>
                        )}

                        {day === 30 ? (
                            <option value="30" selected>30</option>
                        ) : (
                            <option value="30">30</option>
                        )}

                        {day === 31 ? (
                            <option value="31" selected>31</option>
                        ) : (
                            <option value="31">31</option>
                        )}


                    </select>
                    <select onChange={(e) => { set_date_month(e.target.value) }} style={{ width: "30%", borderRadius: "8px", border: "none", backgroundColor: "lightgray", padding: "8px" }}>
                        <option value="Todos">Todos</option>

                        {month === 0 ? (
                            <option value="Janeiro" selected>Janeiro</option>
                        ) : (
                            <option value="Janeiro">Janeiro</option>
                        )}

                        {month === 1 ? (
                            <option value="Fevereiro" selected>Fevereiro</option>
                        ) : (
                            <option value="Fevereiro">Fevereiro</option>
                        )}

                        {month === 2 ? (
                            <option value="Março" selected>Março</option>
                        ) : (
                            <option value="Março">Março</option>
                        )}

                        {month === 3 ? (
                            <option value="Abril" selected>Abril</option>
                        ) : (
                            <option value="Abril">Abril</option>
                        )}

                        {month === 4 ? (
                            <option value="Maio" selected>Maio</option>
                        ) : (
                            <option value="Maio">Maio</option>
                        )}

                        {month === 5 ? (
                            <option value="Junho" selected>Junho</option>
                        ) : (
                            <option value="Junho">Junho</option>
                        )}

                        {month === 6 ? (
                            <option value="Julho" selected>Julho</option>
                        ) : (
                            <option value="Julho">Julho</option>
                        )}

                        {month === 7 ? (
                            <option value="Agosto" selected>Agosto</option>
                        ) : (
                            <option value="Agosto">Agosto</option>
                        )}

                        {month === 8 ? (
                            <option value="Setembro" selected>Setembro</option>
                        ) : (
                            <option value="Setembro">Setembro</option>
                        )}

                        {month === 9 ? (
                            <option value="Outubro" selected>Outubro</option>
                        ) : (
                            <option value="Outubro">Outubro</option>
                        )}

                        {month === 10 ? (
                            <option value="Novembro" selected>Novembro</option>
                        ) : (
                            <option value="Novembro">Novembro</option>
                        )}

                        {month === 11 ? (
                            <option value="Dezembro" selected>Dezembro</option>
                        ) : (
                            <option value="Dezembro">Dezembro</option>
                        )}

                    </select>
                    <select onChange={(e) => { set_date_year(e.target.value) }} style={{ width: "20%", borderRadius: "4px", border: "none", backgroundColor: "lightgray", padding: "8px" }}>
                        <option value="Todos">Todos</option>
                        {year === 2022 ? (
                            <option value="2022" selected>2022</option>
                        ) : (
                            <option value="2022">2022</option>
                        )}

                        {year === 2023 ? (
                            <option value="2023" selected>2023</option>
                        ) : (
                            <option value="2023">2023</option>
                        )}

                    </select>
                </div>
            )}

        </main.Div_background>
    )
}


export default SalesControls