<template>
  <v-app>
    <v-app-bar app color="#222222" class="orange--text text px-4" min-height="68px">
      <v-app-bar-nav-icon color="white" :to="{ name: 'Home' }"></v-app-bar-nav-icon>

      <v-toolbar-title class="display-1 darken-4">Ken Skversky</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="white--text px-4 font-weight-regular" text>Log In</v-btn>

      <v-btn class="white--text px-4 font-weight-regular" text>Sign Up</v-btn>
    </v-app-bar>
  </v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";
// import Test from "./components/Test";

export default {
  name: "App",

  components: {
    // Test
    // Test
  },

  data: () => ({
    //
  })
};
</script>
