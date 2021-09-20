// import { Notification } from 'element-ui'
// export default function ({ $axios, _error }) {
//   $axios.onError(_error => {
//     Notification.error({
//       title: 'Fetch failed',
//       message: 'cannot load data :('
//     })
//     return Promise.resolve(false);
//   })
// }

import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/utils/api'

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor
