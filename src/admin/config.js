import { fetchUtils } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' })
  }
  // add your own headers here
  options.headers.set('Access-Control-Expose-Headers', 'X-Total-Count')
  return fetchUtils.fetchJson(url, options)
}

export const dataProvider = jsonServerProvider(
  'http://localhost:3000',
  httpClient
)

//custom DataProvider
// const apiUrl = 'http://localhost:3000'
// const httpClient = fetchUtils.fetchJson

// const dataProvider = {
//   getList: (resource, params) => {
//     const { page, perPage } = params.pagination
//     const { field, order } = params.sort
//     const query = {
//       sort: JSON.stringify([field, order]),
//       range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//       filter: JSON.stringify(params.filter),
//     }
//     const url = `${apiUrl}/${resource}?${stringify(query)}`

//     return httpClient(url).then(({ headers, json }) => ({
//       data: json,
//       total: parseInt(headers.get('content-range').split('/').pop(), 10),
//     }))
//   },

//   getOne: (resource, params) =>
//     httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
//       data: json,
//     })),

//   getMany: (resource, params) => {
//     const query = {
//       filter: JSON.stringify({ id: params.ids }),
//     }
//     const url = `${apiUrl}/${resource}?${stringify(query)}`
//     return httpClient(url).then(({ json }) => ({ data: json }))
//   },

//   getManyReference: (resource, params) => {
//     const { page, perPage } = params.pagination
//     const { field, order } = params.sort
//     const query = {
//       sort: JSON.stringify([field, order]),
//       range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
//       filter: JSON.stringify({
//         ...params.filter,
//         [params.target]: params.id,
//       }),
//     }
//     const url = `${apiUrl}/${resource}?${stringify(query)}`

//     return httpClient(url).then(({ headers, json }) => ({
//       data: json,
//       total: parseInt(headers.get('content-range').split('/').pop(), 10),
//     }))
//   },

//   update: (resource, params) =>
//     httpClient(`${apiUrl}/${resource}/${params.id}`, {
//       method: 'PUT',
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => ({ data: json })),

//   updateMany: (resource, params) => {
//     const query = {
//       filter: JSON.stringify({ id: params.ids }),
//     }
//     return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
//       method: 'PUT',
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => ({ data: json }))
//   },

//   create: (resource, params) =>
//     httpClient(`${apiUrl}/${resource}`, {
//       method: 'POST',
//       body: JSON.stringify(params.data),
//     }).then(({ json }) => ({
//       data: { ...params.data, id: json.id },
//     })),

//   delete: (resource, params) =>
//     httpClient(`${apiUrl}/${resource}/${params.id}`, {
//       method: 'DELETE',
//     }).then(({ json }) => ({ data: json })),

//   deleteMany: (resource, params) => {
//     const query = {
//       filter: JSON.stringify({ id: params.ids }),
//     }
//     return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
//       method: 'DELETE',
//     }).then(({ json }) => ({ data: json }))
//   },
// }
