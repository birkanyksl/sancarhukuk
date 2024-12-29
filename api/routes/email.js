const router = require("express").Router();
require('dotenv').config();
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// POST MAIL
router.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;
  
    try {
      const response = await resend.emails.send({
        from: 'noreply@resend.dev',
        to: 'birkanyksl613@gmail.com',
        subject: `Yeni mesaj: ${subject}`, 
        text: `Ad: ${name}\nE-posta: ${email}\nMesaj: ${message}`,
      });
  
      res.status(200).json({ success: true, messageId: response.id });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });
  
  module.exports = router;