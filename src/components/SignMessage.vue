<template>
  <div v-if="isLoading">
    <div class="swapping-squares-spinner mx-auto">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
      <div class="square"></div>
    </div>
  </div>
  <form v-else class="mt-4 space-y-3" @submit.prevent="signMessage">
    <input type="hidden" name="remember" value="true" />
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="signed-message" class="sr-only">Message to Sign</label>
        <input
          v-model="message"
          name="message"
          type="message"
          autocomplete="message"
          required
          class="
            appearance-none
            relative
            block
            w-full
            px-3
            py-2
            border border-gray-300
            placeholder-gray-500
            text-gray-900
            rounded
            focus:outline-none
            focus:ring-indigo-500
            focus:border-indigo-500
            focus:z-10
            sm:text-sm
          "
          placeholder="Message to Sign"
          value
        />
      </div>
    </div>
    <div>
      <button
        type="submit"
        name="button"
        class="
          group
          relative
          w-full
          flex
          justify-center
          py-2
          px-4
          border border-transparent
          sm:text-xs
          md:text-lg
          font-medium
          rounded-md
          text-white
          bg-red-500
          hover:bg-red-600
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        <!-- <span class="absolute left-0 inset-y-0 flex items-center pl-3">
          <LockClosedIcon
            class="h-5 w-5 text-blue-500 group-hover:text-blue-400"
            aria-hidden="true"
          /> 
        </span> -->
        Sign Message
      </button>
    </div>
  </form>
  <div v-if="signedMessage" class="py-3">
    <h1>Signed Message: {{ signedMessage }}</h1>
  </div>
</template>
<script>
export default {
  name: "sign-message",
  data() {
    return {
      message: "",
      isLoading: false,
      signedMessage: null,
    };
  },
  methods: {
    async signMessage() {
      this.isLoading = true;
      this.signedMessage = null;
      const provider =
        this.$store.state.network === "ETH" ? this.$ethWeb3 : this.$maticWeb3;
      const signer = provider.getSigner();
      this.signedMessage = await signer.signMessage(this.message);
      console.debug("Signed Message: ", this.signedMessage);
      this.isLoading = false;
    },
  },
};
</script>
<style>
.swapping-squares-spinner,
.swapping-squares-spinner * {
  box-sizing: border-box;
}

.swapping-squares-spinner {
  height: 65px;
  width: 65px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.swapping-squares-spinner .square {
  height: calc(65px * 0.25 / 1.3);
  width: calc(65px * 0.25 / 1.3);
  animation-duration: 1000ms;
  border: calc(65px * 0.04 / 1.3) solid #ff1d5e;
  margin-right: auto;
  margin-left: auto;
  position: absolute;
  animation-iteration-count: infinite;
}

.swapping-squares-spinner .square:nth-child(1) {
  animation-name: swapping-squares-animation-child-1;
  animation-delay: 500ms;
}

.swapping-squares-spinner .square:nth-child(2) {
  animation-name: swapping-squares-animation-child-2;
  animation-delay: 0ms;
}

.swapping-squares-spinner .square:nth-child(3) {
  animation-name: swapping-squares-animation-child-3;
  animation-delay: 500ms;
}

.swapping-squares-spinner .square:nth-child(4) {
  animation-name: swapping-squares-animation-child-4;
  animation-delay: 0ms;
}

@keyframes swapping-squares-animation-child-1 {
  50% {
    transform: translate(150%, 150%) scale(2, 2);
  }
}

@keyframes swapping-squares-animation-child-2 {
  50% {
    transform: translate(-150%, 150%) scale(2, 2);
  }
}

@keyframes swapping-squares-animation-child-3 {
  50% {
    transform: translate(-150%, -150%) scale(2, 2);
  }
}

@keyframes swapping-squares-animation-child-4 {
  50% {
    transform: translate(150%, -150%) scale(2, 2);
  }
}
</style>
