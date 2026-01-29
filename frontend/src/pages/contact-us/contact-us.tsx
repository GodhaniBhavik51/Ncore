import { contactPerson } from '../../assets/images';
import contantUsController from './contact-us-controller';

const ContactPage = () => {
  const { formData, handleChange, handleSubmit, loading, status } = contantUsController();

  return (
    <section className="contact-section">
      <div className="contact-detail">
        <h2>Contact Us</h2>
        <p className="subtitle">We'd love to hear from you.</p>
      </div>

      <div className="contact-container">
        <div className="contact-image">
          <img src={contactPerson} alt="Contact Support" />
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData?.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData?.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData?.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData?.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={formData?.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactPage;
