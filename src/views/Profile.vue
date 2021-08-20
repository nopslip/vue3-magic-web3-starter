<template>
  <div class="bg-grey-50 px-8 py-8 mx-auto max-w-md sm:max-w-x1">
    <img
      class="h-60 rounded-lg shadow-xl mb-6"
      alt="Bloom Starter Kit Logo"
      src="../assets/logo.png"
    />
    <h1>Welcome {{ email }}</h1>
    <h3>
      Your Public Address is: <i>{{ publicAddress }}</i>
    </h3>
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
<style scoped></style>
