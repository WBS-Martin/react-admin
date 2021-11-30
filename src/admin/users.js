// in src/users.js
import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  required,
} from 'react-admin'

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

export const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='first_name' validate={required()} />
      <TextInput source='last_name' validate={required()} />
      <TextInput source='email' validate={required()} />
      <TextInput source='gender' validate={required()} />
    </SimpleForm>
  </Create>
)

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='first_name' validate={required()} />
      <TextInput source='last_name' validate={required()} />
      <TextInput source='email' validate={required()} />
      <TextInput source='gender' validate={required()} />
    </SimpleForm>
  </Edit>
)
