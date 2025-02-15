 

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 mt-32">
      <div className="flex bg-white p-8 rounded-lg shadow-lg">
        <div className='w-1/2'>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Let's Work Together!</h2>
        <p className="text-gray-600 text-center mb-8">
          Have a project in mind? Need expert SEO or website development services? I'm here to help! Whether it's optimizing your online presence, creating a professional website, or boosting your brand, I'm just a message away.
        </p>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-[#1E3F62] w-full hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send Message
            </button>
          </div>
        </form>
        </div>
 
        <div className="mt-10 text-center w-1/2">
          <p className="text-gray-700 font-semibold mb-4">Contact information</p>
          <p className="text-gray-600">Address: [Your Address]</p>
          <p className="text-gray-600">Phone: +8801620173656</p>
          <p className="text-gray-600">Email: mamun.miah.dev@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;