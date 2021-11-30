import './App.css'

import React from 'react'
import { Admin, Resource } from 'react-admin'
import { UserList, UserCreate, UserEdit } from './admin/users'
import { ProductList, ProductCreate, ProductEdit } from './admin/products'
import { dataProvider } from './admin/config'

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name='users'
      list={UserList}
      create={UserCreate}
      edit={UserEdit}
    />
    <Resource
      name='products'
      list={ProductList}
      create={ProductCreate}
      edit={ProductEdit}
    />
  </Admin>
)

export default App
