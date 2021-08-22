<template>
  <!-- <div id="nav" class="bg-blue-500">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link v-if="this.$store.state.user" to="/profile"
      >Profile</router-link
    >
    <router-link v-if="!this.$store.state.user" to="/login">Login</router-link>
    <button v-else type="button" class="button" @click="logout">Logout</button>
  </div> -->

  <div class="bg-grey-50 px-8 py-8 mx-auto max-w-md sm:max-w-x1">
    <img
      class="h-60 rounded-lg shadow-xl mb-6"
      src="../assets/logo.png"
      alt="Bloom logo"
    />
    <h1 class="text-lg">{{ msg }}</h1>
    <h2 v-if="!this.$store.state.user" class="text-purple-500">
      User is NOT logged in!
    </h2>
    <h2 v-else class="text-green-500">User IS logged in!</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Bloom Starter Kit!",
    };
  },
};
</script>
