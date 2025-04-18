import about_video from '../../assets/about_video.mp4';
import Video from '../../shared/Video';

const AboutObliqa = () => {

  const services = [
    { title: "Web Design", desc: "Visually stunning and responsive websites that reflect your brand's identity." },
    { title: "Web Development", desc: "Robust, scalable, and secure web applications tailored to your needs." },
    { title: "SEO", desc: "Rank higher on search engines and increase organic traffic." },
    { title: "Digital Marketing", desc: "Social media marketing, PPC campaigns, and brand growth strategies." },
  ]
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section with Background Video */}
      <section className="relative w-full h-screen flex items-center justify-center text-center text-white">
        {/* Background Video */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <Video videoSrc={about_video} className="w-full h-full object-cover absolute" />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> {/* Dark Overlay */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-7xl font-bold">About OBLIQA IT Solution</h1>
          <p className="mt-4 text-xl max-w-xl mx-auto">
            Your trusted partner in web design, development, SEO, and digital marketing.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">About Us</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-justify">
            At Obliqa IT Solution, we stand for excellence, faith, and innovation. As a startup company, we bring fresh ideas and a dynamic approach to the ever-evolving tech industry. We don’t just take on projects, we take our clients visions seriously, turning their ideas into success stories.

            Technology should empower businesses, not just support them. That’s why we go beyond coding. We strategize, innovate, and deliver solutions that truly make a difference. Whether it’s a small startup or a large enterprise, our expert development team is ready to build, scale, and optimize with cutting-edge technology.

            But we’re not stopping here. Our mission is bigger. We aim to make Obliqa IT a globally recognized technology leader known for delivering solutions that redefine industries while keeping client satisfaction at the heart of everything we do.

            Let’s build the future together.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Our Mission</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-justify">
            At OBLIQA IT Solutions, our mission is to empower businesses of all sizes by delivering cutting-edge, scalable, and intuitive digital solutions that drive growth and efficiency. We are committed to helping our clients thrive in an increasingly digital world by offering customized services in web development, mobile applications, digital marketing, and cloud-based technologies.
            Through continuous innovation, a client-first mindset, and a deep understanding of emerging trends, we aim to transform ideas into impactful digital experiences. Our goal is not only to solve current challenges but to anticipate future opportunities enabling our clients to stay ahead in a competitive marketplace.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
    </div>
  );
};

export default AboutObliqa;
