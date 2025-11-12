const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '50mb' }));  // Untuk menerima gambar yang besar

app.post('/send-image', async (req, res) => {
    const { image } = req.body;
    const telegramBotToken = '8455031136:AAHQnuV6OIPAC3acIjgMnIuMUDk-58JDfO4';
    const chatId = '8285317490';

    try {
        await axios.post(`https://api.telegram.org/bot${telegramBotToken}/sendPhoto`, {
            chat_id: chatId,
            photo: image
        });
        res.send('Image sent successfully');
    } catch (error) {
        res.status(500).send('Error sending image');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
