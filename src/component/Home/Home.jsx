
import Hero from '../Hero/Hero';
import About from '../About/About';
import WhyChoseUs from '../WhyChoseUs/WhyChoseUs';
// import Map from '../Map/Map';
import GetStartedSection from '../GetStartedSection/GetStartedSection';
import GetInTouch from '../../shared/GetInTouch';
import WorkProcess from '../WorkProcess/WorkProcess';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <GetStartedSection></GetStartedSection>
      <WhyChoseUs></WhyChoseUs>
      <WorkProcess></WorkProcess>
      <GetInTouch></GetInTouch>
      {/* <Map></Map> */}
    </div>
  );
};

export default Home;