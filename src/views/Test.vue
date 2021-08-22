<template>
  <div
    class="
      flex
      items-center
      justify-center
      bg-gray-50
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div class="max-w-md w-full space-y-8">
      <h1>TEST PAGE</h1>
      <div class="px-6 py-4">
        <button
          @click="increment"
          class="
            bg-transparent
            hover:bg-blue-500
            text-blue-700
            font-semibold
            hover:text-white
            py-2
            px-4
            border border-blue-500
            hover:border-transparent
            rounded
          "
        >
          Bump State Counter
        </button>
        <button
          @click="clearCounter"
          class="
            bg-transparent
            hover:bg-red-500
            text-red-700
            font-semibold
            hover:text-white
            py-2
            px-4
            border border-red-500
            hover:border-transparent
            rounded
            text-left
          "
        >
          Clear Counter
        </button>
        <div class="px-6 py-4">
          <button
            v-if="this.$store.state.user"
            @click="logout"
            class="
              bg-transparent
              hover:bg-blue-500
              text-blue-700
              font-semibold
              hover:text-white
              py-2
              px-4
              border border-blue-500
              hover:border-transparent
              rounded
            "
          >
            Logout
          </button>
          <router-link
            v-if="!this.$store.state.user"
            to="/login"
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
            >Login</router-link
          >

          <p class="mt-6">user store: {{ this.$store.state.user }}</p>
          <p class="mt=6">user count: {{ this.$store.state.count }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    increment() {
      this.$store.commit("bumpLastLogin");
    },
    clearCounter() {
      this.$store.commit("clearCounter");
    },
    logout() {
      console.debug(this.$store.state.user);
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>
