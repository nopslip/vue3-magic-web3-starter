<template>
  <div class="grid grid-cols-3 bg-grey-50 px-8 py-8">
    <div></div>
    <div>
      <div class="flex items-center justify-center">
        <img
          class="h-60 rounded-lg shadow-xl mb-6"
          src="../assets/logo.png"
          alt="Bloom logo"
        />
      </div>
      <div class="flex items-center justify-center">
        <h1 class="text-lg">{{ msg }}</h1>
      </div>
      <div class="flex items-center justify-center py-4">
        <router-link
          v-if="!userData.email"
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
    </div>
  </div>
  <div></div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    userData() {
      return this.$store.state.user ? this.$store.state.user : "false";
    },
  },
  data() {
    return {
      msg: "Welcome to Bloom Starter Kit!",
    };
  },
};
</script>
