
import { NavLink } from 'react-router-dom';

const GetInTouch = () => {
  return (
    <div>
      {/* Call to Action Section */}
      <NavLink onClick={()=> window.scrollTo(0,0)} to={'/contact'}>
        <section className="py-16 text-center px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="max-w-xl mx-auto text-gray-600 mb-6">
              Let's work together to create a digital presence that drives results. Contact us today!
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
              Get in Touch
            </button>
          </div>
        </section>
</NavLink>
    </div>
  );
};

export default GetInTouch;