export default {
  namespaced: true,
  state() {
    return {
      user: {
        name: 'Franco',
        surname: 'Marioni',
        age: 99
      }
    }
  },
  mutations: { },
  actions: { },
  getters: {
    getUser: (state) => () => {
      return state.user
    }
  }
}
