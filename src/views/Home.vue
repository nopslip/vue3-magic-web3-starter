<template>
  <div class="bg-grey-50 px-8 py-8 mx-auto max-w-md sm:max-w-x1">
    <img
      class="h-60 rounded-lg shadow-xl mb-6"
      src="../assets/logo.png"
      alt="Bloom logo"
    />
    <h1 class="text-lg">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Bloom Starter Kit!",
    };
  },
  name: "Home",
};
</script>
