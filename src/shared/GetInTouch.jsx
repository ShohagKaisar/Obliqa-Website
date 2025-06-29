
import { NavLink } from 'react-router-dom';

const GetInTouch = () => {
  return (
    <div className='mt-4'>
      {/* Call to Action Section */}
        <section className="py-8 text-center px-6">
          <div className="container mx-auto">
            <h2 className="lg:text-5xl text-3xl font-bold mb-4 text-gray-800">Ready to Transform Your Business?</h2>
            <p className="max-w-xl mx-auto text-[#717171] mb-6">
              Let's work together to create a digital presence that drives results. Contact us today!
            </p>
            <NavLink onClick={() => window.scrollTo(0, 0)} to={'/contact'}>
            <button className="px-8 py-3 bg-[#f27f20] rounded-full font-semibold text-white bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Now
            </button>
      </NavLink>
          </div>
        </section>
    </div>
  );
};

export default GetInTouch;