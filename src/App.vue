<template>
  <v-app id="app">
    <v-app-bar app color="#FFFFFF" class="header">
      <router-link to="/" class="header__link">Пользователи</router-link>
      <router-link to="/payments" class="header__link">Платежи</router-link>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");
@import "@/assets/styles/main.scss";

#app {
  font-family: "Montserrat", sans-serif;

  .header {
    background: white;
    box-shadow: $box-shadow;

    &__link {
      font-size: 18px;
      color: $fonts;
      text-decoration: none;

      &:not(:first-child) {
        margin-left: 20px;
      }

      &:hover {
        color: $cyan;
      }
    }

    .router-link-exact-active {
      border-bottom: $border-bottom;
    }
  }
}
</style>
