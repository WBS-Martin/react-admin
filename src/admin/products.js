// in src/users.js
import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  Create,
  SimpleForm,
  TextInput,
  Edit,
  required,
} from 'react-admin'

export const ProductList = (props) => (
  <List {...props}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='price' />
    </Datagrid>
  </List>
)

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' validate={required()} />
      <TextInput source='price' validate={required()} />
    </SimpleForm>
  </Create>
)

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='name' validate={required()} />
      <TextInput source='price' validate={required()} />
    </SimpleForm>
  </Edit>
)
