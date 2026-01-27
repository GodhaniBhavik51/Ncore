import { contactPerson } from "../../assets/images";

const ContactPage = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-image">
          <img
            src={contactPerson}
            alt="Contact Support"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p className="subtitle">
            We'd love to hear from you. Get in touch with us.
          </p>

          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Surname" />
            </div>

            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message" rows={5}></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage