import img from '../../assets/img/logo_big.jpg'
import * as header from "../../styles/header"
import GlobalStyle from "../../styles/GlobalStyles"

const Header = () => {
  return (
    <>
      <header.Header_app>
        <header.Img_logo src={img} alt="logo-mundo-do-rock" />
      </header.Header_app>
      <GlobalStyle />
    </>
  )
}

export default Header