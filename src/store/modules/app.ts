export default {
  namespaced: true,
  state: {
    loading: false,
    lang: 'ch'
  },
  getters: {
    loading: (state: any) => state.loading,
    lang: (state: any) => state.lang
  },
  mutations: {
    setLoading: (state: any, data: boolean) => {
      state.loading = data
    },
    setLang(state: any, value: any) {
      state.lang = value
    }
  },
  actions: {}
}
