<template>
  <div
    class="
      grid grid-cols-3
      items-center
      justify-center
      bg-gray-50
      py-12
      px-4
      sm:px-6
      lg:px-8
    "
  >
    <div></div>
    <div
      v-if="!userData.email"
      class="max-w-md w-full space-y-8 bg-gray-200 px-4 py-4 rounded-md"
    >
      <div>
        <img
          class="mx-auto h-20 w-auto"
          src="../assets/logo.png"
          alt="Workflow"
        />
        <h2
          class="
            mt-6
            text-center
            sm:text-lg
            md:text-xl
            font-extrabold
            text-gray-900
          "
        >
          Login or Sign Up
        </h2>
        <!-- <p class="mt-2 text-center text-sm text-gray-600">
          Or
          {{ " " }}
          <a href="#" class="font-medium text-indigo-200 hover:text-indigo-100"
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
                relative
                block
                w-full
                px-3
                py-2
                border border-gray-300
                placeholder-gray-500
                text-gray-900
                rounded
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
        </div>
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
              sm:text-xs
              md:text-lg
              font-medium
              rounded-md
              text-white
              bg-red-500
              hover:bg-red-600
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                aria-hidden="true"
              />
            </span>
            Send Magic Link
          </button>
        </div>
      </form>
    </div>
    <div v-else class="text-center mx-auto">
      <h1 class="mb-4">You're already logged in!</h1>
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
</template>
<script>
import { SDKError, RPCError, ExtensionError } from "magic-sdk";
import { LockClosedIcon } from "@heroicons/vue/solid";

export default {
  computed: {
    userData() {
      return this.$store.state.user ? this.$store.state.user : "false";
    },
  },
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
          magic:
            this.$store.state.network === "ETH"
              ? this.$magicEth
              : this.$magicMatic,
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
    logout() {
      this.$store.dispatch("logout", {
        magic:
          this.$store.state.network === "ETH"
            ? this.$magicEth
            : this.$magicMatic,
      });
    },
  },
  components: {
    LockClosedIcon,
  },
};
</script>
<style scoped></style>
