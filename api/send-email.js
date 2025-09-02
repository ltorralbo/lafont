const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  try {
    const publicTemplate = path.join(process.cwd(), 'app', 'public', 'plantilla.html');
    const rootTemplate = path.join(process.cwd(), 'plantilla.html');
    const templatePath = fs.existsSync(publicTemplate) ? publicTemplate : rootTemplate;
    const htmlTemplate = fs.readFileSync(templatePath, 'utf8');

    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE || 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const { to, subject, from } = {
      to: (req.body && req.body.to) || req.query.to || process.env.DEFAULT_TO,
      subject:
        (req.body && req.body.subject) ||
        req.query.subject ||
        'Confirmación de tu cita - Lafont Estética',
      from:
        (req.body && req.body.from) ||
        req.query.from ||
        process.env.DEFAULT_FROM ||
        'Lafont Estética <no-reply@lafontestetica.cl>',
    };

    if (!to) {
      return res.status(400).json({ error: 'Missing recipient "to"' });
    }

    await transporter.sendMail({ from, to, subject, html: htmlTemplate });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('send-email error', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};


