import Header from "../../components/Header"
import SalesControls from "../../components/SalesControls"
import GlobalStyle from "../../styles/GlobalStyles"
import { SalesContext } from "../../contexts/sales"
import { useContext } from "react"
import FormNewSale from "../../components/FormNewSale"
import { ToastContainer } from "react-toastify";
import * as main from "../../styles/main"
import SalesList from "../../components/SalesList"
import FormEditSale from "../../components/FormEditSale"
import FormDeleteSale from "../../components/FormDeleteSale"

const SalesPage = () => {

  const { showSalesList, showModalAddSale, showModalEditSale, showModalDeleteSale, dataEdit, dataDelete } = useContext(SalesContext)


  return (
    <>
      <Header />
      <SalesControls />


      {showSalesList === true ? (
        <SalesList />
      ) : (
        null
      )}

      {showModalAddSale === true ? (
        <FormNewSale />
      ) : (
        null
      )}

      {showModalEditSale === true ? (
        <FormEditSale />
      ) : (
        null
      )}

      {showModalDeleteSale === true ? (
        <FormDeleteSale />
      ) : (
        null
      )}


      <GlobalStyle />
      <ToastContainer />
    </>
  )
}

export default SalesPage