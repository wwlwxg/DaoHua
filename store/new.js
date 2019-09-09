import request from '@/service'

export default {
  state: {
    List: []
  },
  mutations: {
    setList(state, list) {
      state.List = list
    }
  },
  getters: {},
  actions: {
    async getList(params) {
      const resp = await request.post('/api/v1/query', params)
      if (resp) {
      }
    }
  }
}
