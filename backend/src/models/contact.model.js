const contactModel = (data = {}) => {
  return {
    firstName: String(data.firstName || '').trim(),
    lastName: String(data.lastName || '').trim(),
    email: String(data.email || '').trim().toLowerCase(),
    subject: String(data.subject || '').trim(),
    message: String(data.message || '').trim(),
    createdAt: new Date(),
  };
};

module.exports = contactModel;