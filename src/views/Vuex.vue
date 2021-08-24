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
      <div v-if="!userData.email">
        <p class="py-4">
          You are not currently logged in. You can<span>
            <router-link to="/login" class="text-blue-500">
              login here.</router-link
            ></span
          >
        </p>
      </div>
      <div v-if="userData.email" class="text-left mt-3 px-4">
        <h3>User Email: {{ userData.email }}</h3>
        <h3 class="py-3">User Address: {{ userData.publicAddress }}</h3>
      </div>
      <hr />
      <div class="py-4 text-center">
        <button
          v-if="userData.email"
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
    </div>

    <div></div>
  </div>
</template>
<script>
export default {
  computed: {
    userData() {
      return this.$store.state.user ? this.$store.state.user : "false";
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
