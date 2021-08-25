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
      <div class="text-center">
        <div v-if="publicAddress" class="py-3">
          <h1>We're logged in!</h1>
          <button @click="getUserBalance">Trigger Web3</button>
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
// import { ethWeb3 } from "@/web3/web3.js";

export default {
  computed: mapState({
    email: (state) => state.user.email,
    issuer: (state) => state.user.issuer,
    publicAddress: (state) => state.user.publicAddress,
  }),
  methods: {
    async getUserBalance() {
      const balance = await this.$ethWeb3.getBalance(this.publicAddress);
      console.debug("balance: ", ethers.utils.formatEther(balance));
    },
  },
};
</script>
<style></style>
