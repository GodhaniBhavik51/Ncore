import { contactPerson, contactRenil } from '../../assets/images';
import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import contantUsController from './contact-us-controller';

const ContactPage = () => {
  const { theme, formData, handleChange, handleSubmit, loading, breadcrumb,hideBreadcrumb } =
    contantUsController();

  return (
    <>
      {!hideBreadcrumb && <Breadcrumb items={breadcrumb} />}
      <section className="contact-section">
        <div className="contact-detail">
          <h2>Contact Us</h2>
          <p className="subtitle">
            We'd love to hear from you. Get in touch with us.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-image">
            <img
              src={theme === 'renil' ? contactRenil : contactPerson}
              alt="Contact Support"
            />
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
                required></textarea>

              <button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactPage;
