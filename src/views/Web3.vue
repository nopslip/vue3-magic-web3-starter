<template>
  <div class="grid items-center justify-center grid-cols-3 py-8">
    <div></div>
    <div>
      <div class="flex items-center justify-center rounded-lg py-6">
        <img
          class="h-60 rounded-lg shadow-xl mb-6"
          src="../assets/logo.png"
          alt="Bloom logo"
        />
      </div>
      <div class="text-center overflow-ellipsis overflow-hidden ...">
        <div v-if="publicAddress" class="py-3">
          <h1 class="py-3">User logged in with email: {{ email }}</h1>
          <hr />
          <h1 class="py-2">Connected to: {{ network }} network</h1>
          <h1 class="py-2">Address: {{ publicAddress }}</h1>
          <hr />
          <span class="text-green-700 text-xl" v-if="balLoading"
            >Loading Balance!</span
          >
          <br />
          <div class="mb-3" v-if="balance">
            <span>Balance: {{ balance }}</span>
          </div>
          <div class="mb-3">
            <button
              class="
                bg-transparent
                hover:bg-green-500
                text-green-700
                font-semibold
                hover:text-white
                py-2
                px-4
                border border-green-500
                hover:border-transparent
                rounded
              "
              @click="getUserBalance"
            >
              Get Balance
            </button>
          </div>
          <!-- <button @click="getUserBalance2">Log User Balance 2</button><br /> -->
          <hr />
          <div class="py-3">
            <!-- <button
              class="
                bg-transparent
                hover:bg-green-500
                text-green-700
                font-semibold
                hover:text-white
                py-2
                px-4
                border border-green-500
                hover:border-transparent
                rounded
              "
              @click="signMessage"
            >
              Sign Message
            </button> -->
            <SignMessage></SignMessage>
            <br />
          </div>
        </div>
        <div v-else class="py-3">
          <h1>{{ email }}</h1>
          <h1>You need to login before you can use Web3 features</h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { ethers } from "ethers";
import SignMessage from "@/components/SignMessage";

export default {
  name: "Web3",
  setup() {},
  data() {
    return {
      balance: null,
      balLoading: false,
    };
  },
  computed: mapState({
    email: (state) => state.user.email,
    issuer: (state) => state.user.issuer,
    publicAddress: (state) => state.user.publicAddress,
    network: (state) => state.network,
  }),
  methods: {
    getProvider() {
      return this.$store.state.network === "ETH"
        ? this.$ethWeb3
        : this.$maticWeb3;
    },
    async getUserBalance() {
      this.balLoading = true;
      this.balance = await this.getProvider().getBalance(this.publicAddress);
      console.debug("balance1: ", ethers.utils.formatEther(this.balance));
      this.balLoading = false;
    },
    // async getUserBalance2() {
    //   const provider = this.getProvider();
    //   const signer = provider.getSigner();
    //   const address = await signer.getAddress();
    //   const balance = ethers.utils.formatEther(
    //     await provider.getBalance(address) // Balance is in wei
    //   );
    //   console.debug("balance2: ", balance);
    //   return balance;
    // },
    // async signMessage() {
    //   const provider = this.getProvider();
    //   const signer = provider.getSigner();
    //   const originalMessage = "UP UP AND AWAY!";
    //   const signedMessage = await signer.signMessage(originalMessage);
    //   console.debug("Signed Message: ", signedMessage);
    // },
  },
  components: {
    SignMessage,
  },
};
</script>
<style></style>
