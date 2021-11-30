// in src/users.js
import React from 'react'
import { List, Datagrid, TextField, EmailField } from 'react-admin'

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='first_name' />
      <TextField source='last_name' />
      <EmailField source='email' />
      <TextField source='gender' />
    </Datagrid>
  </List>
)
