<template>
  <div id="app"></div>
  <Navbar />
  <router-view />
</template>
<script>
import Navbar from "@/components/Navbar.vue";
//import Home from "@/views/Home.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  padding: 5px;
  text-decoration: none;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #e55e5e;
}

#nav > button {
  padding: 0.6rem 1rem;
  cursor: pointer;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50px;
  width: 5rem;
  outline: none;
  transition: 0.3s;
  margin: 0 auto;
  font-size: 14px;
  font-weight: bold;
}

#nav > button:hover {
  background-color: #e55e5e;
  color: white;
}
</style>
