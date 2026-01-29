const contactModel = require("../models/contact.model.js");
const mailTransporter = require("../config/mail.config.js");

exports.sendContactMessage = async (req, res) => {
  try {
    const contactData = contactModel(req.body);

    const { firstName, lastName, email, subject, message } = contactData;

    if (!email || !message) {
      return res.status(400).json({ success: false, message: "Invalid data" });
    }

    await mailTransporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `Contact Form: ${subject}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>New Contact Message</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:30px 0;">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
          
          <!-- HEADER -->
          <tr>
            <td style="background:#0f172a;color:#ffffff;padding:20px 30px;">
              <h2 style="margin:0;font-size:20px;">New Contact Inquiry</h2>
              <p style="margin:5px 0 0;font-size:13px;opacity:0.8;">
                Website Contact Form Submission
              </p>
            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style="padding:30px;">
              <p style="margin:0 0 15px;font-size:14px;color:#334155;">
                You have received a new message from your website contact form.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#334155;">
                <tr>
                  <td style="padding:8px 0;width:140px;"><strong>Full Name:</strong></td>
                  <td style="padding:8px 0;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;"><strong>Email:</strong></td>
                  <td style="padding:8px 0;">${email}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;"><strong>Subject:</strong></td>
                  <td style="padding:8px 0;">${subject}</td>
                </tr>
              </table>

              <div style="margin-top:20px;">
                <p style="margin:0 0 8px;font-weight:bold;color:#0f172a;">
                  Message:
                </p>
                <div style="background:#f1f5f9;border-left:4px solid #0f172a;padding:15px;border-radius:4px;font-size:14px;color:#334155;line-height:1.6;">
                  ${message}
                </div>
              </div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f8fafc;padding:15px 30px;text-align:center;font-size:12px;color:#64748b;">
              This email was generated automatically from your website contact form.
              <br/>
              © ${new Date().getFullYear()} Your Company Name
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
    });

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
