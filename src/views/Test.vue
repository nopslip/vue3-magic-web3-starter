<template>
  <div class="grid items-center justify-center grid-cols-3 py-8">
    <div></div>
    <div>
      <div class="flex items-center justify-center rounded-lg py-6">
        <!-- <h1 class="font-semibold text-black-700 text-lg">TEST PAGE</h1> -->
        <img
          class="h-60 rounded-lg shadow-xl mb-6"
          src="../assets/logo.png"
          alt="Bloom logo"
        />
      </div>
      <div class="grid py-3 justify-center sm:grid-cols-3 gap-4">
        <div class="py-3">
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
            Bump Counter
          </button>
        </div>
        <div class="py-3">
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
            "
          >
            Clear Counter
          </button>
        </div>

        <div class="py-3">
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
          >
            count: {{ count }}
          </button>
        </div>
      </div>
      <hr />
      <div>
        <router-link
          v-if="!userData"
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
      </div>
      <div class="text-left py-4">
        <h3>User Email: {{ userData.email }}</h3>
        <h3 class="py-3">User Address: {{ userData.publicAddress }}</h3>
      </div>

      <button
        v-if="userData"
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
    </div>

    <div></div>
  </div>
</template>
<script>
export default {
  computed: {
    userData() {
      return this.$store.state.user;
    },
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("bumpLastLogin");
    },
    clearCounter() {
      this.$store.commit("clearCounter");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped></style>
