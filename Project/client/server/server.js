const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/contactDB', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(express.json());

const ContactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  company: String,
  jobTitle: String,
});

const Contact = mongoose.model('Contact', ContactSchema);

app.post('/contacts', async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.status(201).send(contact);
});

app.get('/contacts', async (req, res) => {
  const contacts = await Contact.find();
  res.send(contacts);
});

app.put('/contacts/:id', async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(contact);
});

app.delete('/contacts/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
