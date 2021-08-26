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
          <h1 class="py-3">We're logged in!</h1>
          <button @click="getUserBalance">Log User Balance 1</button><br />
          <button @click="getUserBalance2">Log User Balance 2</button><br />
          <button class="text-green-700" @click="signMessage">
            Sign Message</button
          ><br />
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

export default {
  computed: mapState({
    email: (state) => state.user.email,
    issuer: (state) => state.user.issuer,
    publicAddress: (state) => state.user.publicAddress,
  }),
  methods: {
    getProvider() {
      return this.$store.state.network === "ETH"
        ? this.$ethWeb3
        : this.$maticWeb3;
    },
    async getUserBalance() {
      const balance = await this.getProvider().getBalance(this.publicAddress);
      console.debug("balance1: ", ethers.utils.formatEther(balance));
      return balance;
    },
    async getUserBalance2() {
      const provider = this.getProvider();
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const balance = ethers.utils.formatEther(
        await provider.getBalance(address) // Balance is in wei
      );
      console.debug("balance2: ", balance);
      return balance;
    },
    async signMessage() {
      const provider = this.getProvider();
      const signer = provider.getSigner();
      const originalMessage = "UP UP AND AWAY!";
      const signedMessage = await signer.signMessage(originalMessage);
      console.debug("Signed Message: ", signedMessage);
    },
  },
};
</script>
<style></style>
