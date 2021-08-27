<template>
  <div v-if="isLoading">
    <div class="flower-spinner mx-auto">
      <div class="dots-container">
        <div class="bigger-dot">
          <div class="smaller-dot"></div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div>
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
        @click="changeNetwork"
      >
        Change Network
      </button>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "change-network",
  data() {
    return {};
  },
  computed: mapState({
    email: (state) => state.user.email,
    issuer: (state) => state.user.issuer,
    publicAddress: (state) => state.user.publicAddress,
    network: (state) => state.network,
  }),
  methods: {
    async changeNetwork() {
      this.isLoading = true;
      // this.balance = null;
      this.$store.dispatch("changeNetwork");
      this.isLoading = false;
    },
  },
};
</script>
