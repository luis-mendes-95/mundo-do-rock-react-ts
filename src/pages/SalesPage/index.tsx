import Header from "../../components/Header"
import SalesControls from "../../components/SalesControls"
import GlobalStyle from "../../styles/GlobalStyles"
import { SalesContext } from "../../contexts/sales"
import { useContext } from "react"
import FormNewSale from "../../components/FormNewSale"
import { ToastContainer } from "react-toastify";
import * as main from "../../styles/main"
import SalesList from "../../components/SalesList"

const SalesPage = () => {

  const { showModalAddSale } = useContext(SalesContext)

  return (
    <>
      <Header />
      <SalesControls />
      {showModalAddSale === true ? (
        <FormNewSale />
      ) : (
        <SalesList/>
      )}
      
     
      <GlobalStyle />
      <ToastContainer />
    </>
  )
}

export default SalesPage