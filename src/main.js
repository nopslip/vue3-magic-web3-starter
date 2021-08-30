import App from "@/App.vue";
import { createApp } from "vue";
import store from "@/store";
import router from "@/router";
import "@/assets/tailwind.css";
import { ethers } from "ethers";
import { Magic } from "magic-sdk";

const bloomApp = createApp(App);

// Matic Network Details
const customNodeOptions = {
  rpcUrl: "https://rpc-mumbai.matic.today",
  chainId: 80001,
};

// Create Magic Instance for Matic
const magicMatic = new Magic(process.env.VUE_APP_MAGIC_KEY, {
  network: customNodeOptions,
});
magicMatic.network = "matic";

// Create Magic Instance for Ethereum (Ropsten Testnet)
const magicEthereum = new Magic(process.env.VUE_APP_MAGIC_KEY, {
  network: "ropsten",
});
magicEthereum.network = "ropsten";

// create an instance of Magic with Matic provider
bloomApp.config.globalProperties.$magicMatic = magicMatic;

// create an instance of Magic with Ethereum provider
bloomApp.config.globalProperties.$magicEth = magicEthereum;

// create an instance of ETH Web3, add it to apps global properties
bloomApp.config.globalProperties.$ethWeb3 = new ethers.providers.Web3Provider(
  magicEthereum.rpcProvider
);

// create an instance of Matic Web3, add it to apps global properties
bloomApp.config.globalProperties.$maticWeb3 = new ethers.providers.Web3Provider(
  magicMatic.rpcProvider
);

bloomApp.use(store);
bloomApp.use(router);

bloomApp.mount("#app");
