import About from "./component/About/About";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header"
import Hero from "./component/Hero/Hero"
import '@fortawesome/fontawesome-free/css/all.min.css';
import WhyChoseUs from "./component/WhyChoseUs/WhyChoseUs";
import Map from "./component/Map/Map";



function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <WhyChoseUs></WhyChoseUs>
      <Map></Map>
      <Footer></Footer>
    </>
  )
}

export default App
