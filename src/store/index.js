import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { Magic } from "magic-sdk";

const m = new Magic(process.env.VUE_APP_MAGIC_KEY);

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem("user");
      location.reload();
    },
  },
  actions: {
    async login({ commit }, email) {
      await m.auth.loginWithMagicLink(email);
      const data = await m.user.getMetadata();
      commit("SET_USER_DATA", data);
    },
    async logout({ commit }) {
      await m.user.logout();
      commit("CLEAR_USER_DATA");
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
