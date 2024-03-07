const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/chat', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const Message = mongoose.model('Message', {
    text: String
});

app.use(express.static('public'));
app.use(express.json());

app.get('/messages', async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

app.post('/messages', async (req, res) => {
    const message = new Message({
        text: req.body.text
    });
    await message.save();
    res.status(201).send('Message saved successfully');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
