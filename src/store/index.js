import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: null,
    count: 0,
    network: "ETH",
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
    },
    CLEAR_USER_DATA(state) {
      state.user = "";
      localStorage.removeItem("user"); // not sure what/where was adding this but it was getting added so i'm also removing it
      localStorage.removeItem("vuex");
      location.reload();
    },
    bumpLastLogin: (state) => state.count++,
    clearCounter: (state) => (state.count = 0),
    switchNetwork: (state, newNetwork) => (state.network = newNetwork),
  },
  actions: {
    async login({ commit }, params) {
      await params.magic.auth.loginWithMagicLink({ email: params.email });
      const data = await params.magic.user.getMetadata();
      commit("SET_USER_DATA", data);
    },
    async logout({ commit }, magic) {
      await magic.magic.user.logout();
      commit("CLEAR_USER_DATA");
    },
    changeNetwork({ commit }) {
      const newNetwork = this.state.network == "ETH" ? "MATIC" : "ETH";
      commit("switchNetwork", newNetwork);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
