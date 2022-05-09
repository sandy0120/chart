import axios from 'axios'
import store from '@/store'
import router from '@/router'
import i18n from '@/plugins/i18nPlugin'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_API}`,
  withCredentials: false,
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    store.commit('app/setLoading', true)
    const storeGetters = store.getters
    const token = storeGetters['persistedState/token']
    if (token) {
      config.headers['authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    store.commit('app/setLoading', false)

    if (response.status === 200 && response.data) {
      const { data } = response
      if (data.code === 200001) {
        return data
      } else {
        return data
      }
    } else {
      return response
    }
  },
  error => {
    store.commit('app/setLoading', false)
    const response = error.response
    switch (response.status) {
      case 401:
        ElMessage.error(i18n.global.t('validate_error'))
        break
      case 403:
        ElMessage.error(i18n.global.t('validate_error'))
        break
      case 404:
        ElMessage.error(i18n.global.t('validate_error'))
        break
      case 422:
        ElMessage.error(i18n.global.t('validate_error'))
        break
      default:
        break
    }

    return Promise.reject(error)
  }
)

export default service
