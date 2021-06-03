export const Coin = {
  namespaced: true,
  state: () => ({
    coin: null,
  }),
  mutations: {
    setCoin(state, value) {
      state.coin = value;
    }
  },
  actions: {
    stub(state) {
      console.log('Coin actions stub');
      console.log(state.coin);
    },
  },
  getters: {
    coin(state) {
      return state.coin;
    }
  }
};
