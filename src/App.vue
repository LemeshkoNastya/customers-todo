<template>
  <v-app id="app">
    <v-app-bar app elevation="0" color="#FFFFFF" class="header">
      <router-link to="/" class="header__link">Пользователи</router-link>
      <router-link to="/payments" class="header__link">Платежи</router-link>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");
@import "@/assets/styles/main.scss";

#app {
  font-family: "Montserrat", sans-serif;
}
.header {
  background: white;

  & &__link {
    color: black;
    text-decoration: none;

    &:not(:first-child) {
      margin-left: 20px;
    }
  }

  .router-link-exact-active {
    border-bottom: 2px solid $cyan;
  }
}
</style>
