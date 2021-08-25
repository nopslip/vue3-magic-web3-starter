<template>
  <div class="bg-grey-50 px-8 py-8 mx-auto max-w-md sm:max-w-x1">
    <div class="flex items-center justify-center rounded-lg py-6">
      <!-- <h1 class="font-semibold text-black-700 text-lg">TEST PAGE</h1> -->
      <img
        class="h-60 rounded-lg shadow-xl mb-6"
        src="../assets/logo.png"
        alt="Bloom logo"
      />
    </div>
    <div v-if="email" class="text-left mt-3 px-4">
      <h3>Hello! {{ email }}</h3>
      <h3 class="py-3">Your Ethereum Address is: {{ publicAddress }}</h3>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    email: (state) => state.user.email,
    issuer: (state) => state.user.issuer,
    publicAddress: (state) => state.user.publicAddress,
  }),
};
</script>
<style></style>
