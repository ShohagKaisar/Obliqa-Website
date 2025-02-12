import './AboutObliqa.css';

const AboutObliqa = () => {
  return (
    <div>
      <div className="about-obliqa">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>About OBLIQA IT Solutions</h1>
            <p>Your trusted partner in web design, development, SEO, and digital marketing.</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <h2>Our Mission</h2>
            <p>
              At OBLIQA IT Solutions, our mission is to empower businesses by delivering innovative,
              scalable, and user-friendly digital solutions. We strive to help our clients achieve
              their goals through cutting-edge technology and data-driven strategies.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Web Design</h3>
                <p>
                  We create visually stunning and responsive websites that captivate your audience
                  and reflect your brand's identity.
                </p>
              </div>
              <div className="service-card">
                <h3>Web Development</h3>
                <p>
                  Our team builds robust, scalable, and secure web applications tailored to your
                  business needs.
                </p>
              </div>
              <div className="service-card">
                <h3>SEO</h3>
                <p>
                  We optimize your website to rank higher on search engines, driving organic traffic
                  and increasing visibility.
                </p>
              </div>
              <div className="service-card">
                <h3>Digital Marketing</h3>
                <p>
                  From social media marketing to PPC campaigns, we help you reach your target audience
                  and grow your business online.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <h2>Our Team</h2>
            <p>
              Our team consists of passionate designers, developers, SEO experts, and digital
              marketers who are dedicated to delivering exceptional results. We collaborate closely
              with our clients to ensure their vision becomes a reality.
            </p>
            <div className="team-grid">
              <div className="team-member">
                <img src="/images/team-member1.jpg" alt="Team Member 1" />
                <h3>John Doe</h3>
                <p>Lead Web Designer</p>
              </div>
              <div className="team-member">
                <img src="/images/team-member2.jpg" alt="Team Member 2" />
                <h3>Jane Smith</h3>
                <p>Senior Web Developer</p>
              </div>
              <div className="team-member">
                <img src="/images/team-member3.jpg" alt="Team Member 3" />
                <h3>Emily Johnson</h3>
                <p>SEO Specialist</p>
              </div>
              <div className="team-member">
                <img src="/images/team-member4.jpg" alt="Team Member 4" />
                <h3>Michael Brown</h3>
                <p>Digital Marketing Strategist</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <h2>Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>
                  We stay ahead of the curve by embracing the latest technologies and trends.
                </p>
              </div>
              <div className="value-card">
                <h3>Integrity</h3>
                <p>
                  We believe in transparency, honesty, and building long-term relationships with
                  our clients.
                </p>
              </div>
              <div className="value-card">
                <h3>Excellence</h3>
                <p>
                  We are committed to delivering high-quality solutions that exceed expectations.
                </p>
              </div>
              <div className="value-card">
                <h3>Collaboration</h3>
                <p>
                  We work closely with our clients to understand their needs and achieve their goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Let's work together to create a digital presence that drives results. Contact us today
              to get started!
            </p>
            <button className="cta-button">Get in Touch</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutObliqa;