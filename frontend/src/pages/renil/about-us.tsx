const AboutPage = () => {
  return (
    <>
      <section className="about-intro">
        <div className="about-container">
          {/* LEFT CONTENT */}
          <div className="about-text">
            <h2>About Ncore Electricals</h2>
            <p className="about-tagline">
              Driven by innovation, committed to quality. We are lighting up the
              world one LED at a time.
            </p>

            <h3>Our Story</h3>
            <p>
              Ncore Electricals Co. has established itself as a premier
              manufacturer of LED lighting solutions in Gujarat. With a focus on
              energy efficiency and durability, our products meet the evolving
              needs of modern infrastructure.
            </p>

            <ul className="about-points">
              <li>✔ Established Excellence</li>
              <li>✔ Innovation Focused</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="about-image">
            <img src="/images/about-lighting.jpg" alt="Our Work" />
          </div>
        </div>
      </section>
      <section className="leadership">
        <h2>Leadership Team</h2>
        <p className="leadership-sub">
          Meet the visionaries behind Ncore Electricals
        </p>

        <div className="leader-grid">
          <div className="leader-card">
            <img src="/images/anil.jpg" alt="Anil Prajapati" />
            <h4>Anil Prajapati</h4>
            <span>Founder</span>
            <p>
              With years of experience in electrical engineering, Anil leads the
              technical innovation and product development strategies at Ncore.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
