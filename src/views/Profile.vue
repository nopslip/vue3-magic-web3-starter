<template>
  <div class="profile">
    <img alt="Bloom Starter Kit Logo" src="../assets/logo.png" />
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
