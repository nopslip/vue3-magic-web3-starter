import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { Magic } from "magic-sdk";
import { ethers } from "ethers";

const m = new Magic(process.env.VUE_APP_MAGIC_KEY);

const customNodeOptions = {
  rpcUrl: "https://rpc-mumbai.matic.today",
  chainId: 80001,
};

// Setting network to Matic
export const magicMatic = new Magic(process.env.VUE_APP_MAGIC_KEY, {
  network: customNodeOptions,
});
magicMatic.network = "matic";

// export const maticWeb3 = new Web3(magicMatic.rpcProvider);
export const maticWeb3 = new ethers.providers.Web3Provider(
  magicMatic.rpcProvider
);

// Setting network to Ethereum (Ropsten Testnet)
export const magicEthereum = new Magic(process.env.VUE_APP_MAGIC_KEY, {
  network: "ropsten",
});
magicEthereum.network = "ethereum";

// export const ethWeb3 = new Web3(magicEthereum.rpcProvider);
export const ethWeb3 = new ethers.providers.Web3Provider(
  magicEthereum.rpcProvider
);

export default createStore({
  state: {
    user: null,
    count: 0,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
    },
    CLEAR_USER_DATA(state) {
      state.user = "";
      localStorage.removeItem("user");
      localStorage.removeItem("vuex");
      location.reload();
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
