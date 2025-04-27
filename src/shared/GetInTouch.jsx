
import { NavLink } from 'react-router-dom';

const GetInTouch = () => {
  return (
    <div>
      {/* Call to Action Section */}
      <NavLink onClick={()=> window.scrollTo(0,0)} to={'/contact'}>
        <section className="py-16 text-center px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-[#263238]">Ready to Transform Your Business?</h2>
            <p className="max-w-xl mx-auto text-[#717171] mb-6">
              Let's work together to create a digital presence that drives results. Contact us today!
            </p>
            <button className="bg-[#f27f20] text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
              Contact Now
            </button>
          </div>
        </section>
</NavLink>
    </div>
  );
};

export default GetInTouch;