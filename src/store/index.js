import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { Magic } from "magic-sdk";

const m = new Magic(process.env.VUE_APP_MAGIC_KEY);

export default createStore({
  state: {
    user: null,
    count: 0,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      console.debug(
        "pre mutate SET_USER_DATA: state, userData",
        state,
        userData
      );
      state.user = userData;
      // console.debug("userData before writing to local storage", userData);
      //localStorage.setItem("user", JSON.stringify(userData));
      // console.debug("post mutate SET_USER_DATA state.user:", state.user);
    },
    CLEAR_USER_DATA(state) {
      // console.debug("pre CLEAR_USER_DATA: localStorage", localStorage);
      state.user = null;
      localStorage.removeItem("vuex");
      location.reload();
      // console.debug("post CLEAR_USER_DATA: localStorage", localStorage);
      //console.debug("POST CLEAR 2 user", localStorage.getItem("vuex"));
    },
    bumpLastLogin: (state) => state.count++,
    clearCounter: (state) => (state.count = 0),
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
  // getters: {
  //   fullUser(state, getters) {
  //     return state.user.filter(userData => idk > 0);
  //   }
  // },
  modules: {},
  plugins: [createPersistedState()],
});
