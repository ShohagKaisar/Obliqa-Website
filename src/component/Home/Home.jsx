
import Hero from '../Hero/Hero';
import About from '../About/About';
import WhyChoseUs from '../WhyChoseUs/WhyChoseUs';
import GetStartedSection from '../GetStartedSection/GetStartedSection';
import GetInTouch from '../../shared/GetInTouch';
import WorkProcess from '../WorkProcess/WorkProcess';
import PricingPlans from '../PricingPlans/PricingPlans';
import GlobeViewer from '../../shared/GlobeViewer';
import Map from '../Map/Map';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <GetStartedSection></GetStartedSection>
      <WorkProcess></WorkProcess>
      <WhyChoseUs></WhyChoseUs>
      <PricingPlans></PricingPlans>
      <GetInTouch></GetInTouch>
      <GlobeViewer></GlobeViewer>
      {/* <Map></Map> */}
    </div>
  );
};

export default Home;