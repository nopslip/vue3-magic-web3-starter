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
  <div v-else class="mb-3 grid grid-cols-2">
    <div class="py-6">
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
    <div class="py-6">
      <span v-if="balance">Balance: {{ balance }}</span>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { utils } from "ethers";
export default {
  name: "get-balance",
  data() {
    return {
      balance: null,
      isLoading: false,
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
      this.isLoading = true;
      this.balance = null;
      const balanceWei = await this.getProvider().getBalance(
        this.publicAddress
      );
      this.balance = utils.formatEther(balanceWei);
      this.isLoading = false;
    },
  },
};
</script>

<style>
.flower-spinner,
.flower-spinner * {
  box-sizing: border-box;
}

.flower-spinner {
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.flower-spinner .dots-container {
  height: calc(70px / 7);
  width: calc(70px / 7);
}

.flower-spinner .smaller-dot {
  background: #ff1d5e;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  animation: flower-spinner-smaller-dot-animation 2.5s 0s infinite both;
}

.flower-spinner .bigger-dot {
  background: #ff1d5e;
  height: 100%;
  width: 100%;
  padding: 10%;
  border-radius: 50%;
  animation: flower-spinner-bigger-dot-animation 2.5s 0s infinite both;
}

@keyframes flower-spinner-bigger-dot-animation {
  0%,
  100% {
    box-shadow: rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px;
  }

  50% {
    transform: rotate(180deg);
  }

  25%,
  75% {
    box-shadow: rgb(255, 29, 94) 26px 0px 0px, rgb(255, 29, 94) -26px 0px 0px,
      rgb(255, 29, 94) 0px 26px 0px, rgb(255, 29, 94) 0px -26px 0px,
      rgb(255, 29, 94) 19px -19px 0px, rgb(255, 29, 94) 19px 19px 0px,
      rgb(255, 29, 94) -19px -19px 0px, rgb(255, 29, 94) -19px 19px 0px;
  }

  100% {
    transform: rotate(360deg);
    box-shadow: rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px;
  }
}

@keyframes flower-spinner-smaller-dot-animation {
  0%,
  100% {
    box-shadow: rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px;
  }

  25%,
  75% {
    box-shadow: rgb(255, 29, 94) 14px 0px 0px, rgb(255, 29, 94) -14px 0px 0px,
      rgb(255, 29, 94) 0px 14px 0px, rgb(255, 29, 94) 0px -14px 0px,
      rgb(255, 29, 94) 10px -10px 0px, rgb(255, 29, 94) 10px 10px 0px,
      rgb(255, 29, 94) -10px -10px 0px, rgb(255, 29, 94) -10px 10px 0px;
  }

  100% {
    box-shadow: rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px,
      rgb(255, 29, 94) 0px 0px 0px, rgb(255, 29, 94) 0px 0px 0px;
  }
}
</style>
