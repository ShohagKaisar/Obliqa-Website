
import Hero from '../Hero/Hero';
import About from '../About/About';
import WhyChoseUs from '../WhyChoseUs/WhyChoseUs';
import Map from '../Map/Map';
import GetStartedSection from '../GetStartedSection/GetStartedSection';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <GetStartedSection></GetStartedSection>
      <WhyChoseUs></WhyChoseUs>
      <Map></Map>
    </div>
  );
};

export default Home;