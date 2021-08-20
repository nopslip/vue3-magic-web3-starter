<template>
  <div
    class="
      min-h-screen
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
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="../assets/logo.png"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login or Sign Up
        </h2>
        <!-- <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ " " }}
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
            >start your 14-day free trial</a
          >
        </p> -->
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-t-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="Email address"
              value
            />
          </div>
          <!-- <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="
                appearance-none
                rounded-none
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded-b-md
                focus:outline-none
                focus:ring-indigo-500
                focus:border-indigo-500
                focus:z-10
                sm:text-sm
              "
              placeholder="Password"
            />
          </div> -->
        </div>

        <!-- <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="
                h-4
                w-4
                text-indigo-600
                focus:ring-indigo-500
                border-gray-300
                rounded
              "
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"
              >Remember me</label
            >
          </div>

          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
              >Forgot your password?</a
            >
          </div>
        </div> -->

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
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Send Magic Link
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { SDKError, RPCError, ExtensionError } from "magic-sdk";
import { LockClosedIcon } from "@heroicons/vue/solid";

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
        })
        .then(() => {
          this.$router.push({ name: "Profile" });
        })
        .catch((err) => {
          if (err instanceof SDKError) {
            console.log(err);
          }
          if (err instanceof RPCError) {
            console.log(err);
          }
          if (err instanceof ExtensionError) {
            console.log(err);
          }
        });
    },
  },
  components: {
    LockClosedIcon,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  outline: none;
}
body {
  margin: 0;
  color: #333;
  background-color: #fff;
  min-height: 100%;
}
form,
label {
  display: flex;
  flex-flow: column;
  text-align: center;
}
.email-input {
  padding: 10px;
  margin: 1rem auto;
  border: 1px solid #ccc;
  border-radius: 50px;
  outline: none;
  transition: 0.5s;
  width: 80%;
}
.email-input:focus {
  border: 1px solid #e55e5e;
}
.submit {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  justify-content: space-between;
}
.submit > a {
  text-decoration: none;
}
.submit > button {
  padding: 0.6rem 1rem;
  cursor: pointer;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50px;
  width: 80%;
  outline: none;
  transition: 0.3s;
  margin: 0 auto;
  font-size: 14px;
}
.submit > button:hover {
  border-color: #e55e5e;
}
.error {
  color: brown;
  margin: 1rem 0 0;
}
.container {
  max-width: 42rem;
  margin: 0 auto;
  padding: 2rem 1.25rem;
  overflow: auto;
}
.login {
  max-width: 20rem;
  margin: 0px auto;
  padding: 1rem;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 4px;
  text-align: center;
}
</style>
