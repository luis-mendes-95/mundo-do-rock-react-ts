import Header from "../../components/Header"
import SalesControls from "../../components/SalesControls"
import GlobalStyle from "../../styles/GlobalStyles"
import { SalesContext } from "../../contexts/sales"
import { useContext } from "react"
import FormNewSale from "../../components/FormNewSale"
import { ToastContainer } from "react-toastify";

const SalesPage = () => {

  const { showModalAddSale } = useContext(SalesContext)

  return (
    <>
      <Header />
      <SalesControls />
      {showModalAddSale === true ? (
        <FormNewSale/>
      ) : (
        null
      )}
      <GlobalStyle />
      <ToastContainer/>
    </>
  )
}

export default SalesPage