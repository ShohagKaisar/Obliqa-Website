
import { Outlet } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header"
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
