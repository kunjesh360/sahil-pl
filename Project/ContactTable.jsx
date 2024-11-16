import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ContactTable = ({ contacts, onEdit, onDelete }) => (
  <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>First Name</TableCell>
          {/* Other headers */}
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>{contact.firstName}</TableCell>
            {/* Other fields */}
            <TableCell>
              <IconButton onClick={() => onEdit(contact.id)}><EditIcon /></IconButton>
              <IconButton onClick={() => onDelete(contact.id)}><DeleteIcon /></IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ContactTable;
