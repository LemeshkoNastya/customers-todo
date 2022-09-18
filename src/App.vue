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
      border-bottom: $border;
    }
  }

  .page {
    margin-top: 56px;
    background: $background;
    min-height: calc(100vh - 56px);
    height: 100%;

    &__title {
      margin-top: 50px;
      text-align: center;
      font-size: 36px;
      color: $fonts;
    }

    &__content {
      margin: 50px auto;
      width: 80%;
    }
  }

  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background: white;
    border-radius: 10px;

    &:not(:first-child) {
      margin-top: 20px;
    }

    &:hover {
      box-shadow: $box-shadow;
    }

    &__content {
    }

    &__title {
      margin-bottom: 10px;
      font-size: 26px;
      font-weight: 600;
    }

    &__info {
      display: flex;
      align-items: center;
    }

    &__details {
      margin-bottom: 0;
      font-size: 18px;
      color: $fonts;
    }

    &__text {
      font-weight: 500;
    }

    &__link {
      border-bottom: 2px solid white;
      color: $fonts;
      text-decoration: none;

      &:hover {
        border-bottom: $border;
        color: $cyan;
      }
    }

    &__buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    &__button {
      &:not(:first-child) {
        margin-left: 20px;
      }
    }
  }
}
</style>
