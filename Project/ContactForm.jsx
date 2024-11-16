import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const ContactForm = ({ onSave }) => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', jobTitle: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', jobTitle: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField label="First Name" name="firstName" fullWidth onChange={handleChange} value={form.firstName} />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Last Name" name="lastName" fullWidth onChange={handleChange} value={form.lastName} />
        </Grid>
        {/* Repeat for other fields */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained">Save Contact</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
