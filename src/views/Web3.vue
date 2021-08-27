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
      <div class="text-center break-words ...">
        <div v-if="publicAddress" class="py-3">
          <h1 class="py-3">User logged in with email: {{ email }}</h1>
          <hr />
          <div class="mb-3">
            <h1 class="py-2">Connected to: {{ network }} network</h1>
            <a
              class="text-purple-600 font-bold"
              target="_blank"
              :href="'https://etherscan.io/address/' + publicAddress"
              >{{ publicAddress }}</a
            >
          </div>
          <hr />
          <GetBalance></GetBalance>

          <hr />
          <div class="py-3">

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

import SignMessage from "@/components/SignMessage";
import GetBalance from "@/components/GetBalance";


export default {
  name: "Web3",
  computed: mapState({
    email: (state) => state.user.email,
    issuer: (state) => state.user.issuer,
    publicAddress: (state) => state.user.publicAddress,
    network: (state) => state.network,
  }),
   components: {
    SignMessage,
    GetBalance,
  },
};
</script>
<style></style>
