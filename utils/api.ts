import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { AxiosError } from 'axios'
import { Notification } from 'element-ui'

// eslint-disable-next-line import/no-mutable-exports
let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
  $axios.onError((_error: AxiosError) => {
    Notification.error({
      title: 'Data loading error',
      message: 'Please try again later'
    })
  });
}

export { $axios }
