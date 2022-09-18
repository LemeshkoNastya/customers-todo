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

body {
  height: auto;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 15px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $cyan;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    background-color: #f9f9fd;
    border-left: 2px solid $cyan;
  }
}

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

      @include for-size(tablet-portrait) {
        font-size: 16px;
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

      @include for-size(small-desktop) {
        font-size: 32px;
      }

      @include for-size(tablet-portrait) {
        margin-top: 20px;
      }

      @include for-size(big-phone) {
        font-size: 24px;
      }
    }

    &__content {
      margin: 50px auto;
      width: 80%;

      @include for-size(tablet) {
        width: 90%;
      }

      @include for-size(tablet-portrait) {
        margin: 20px auto;
      }
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

    // @include for-size(tablet-portrait) {
    //   flex-direction: column;
    //   align-items: flex-start;
    // }

    @include for-size(big-phone) {
      padding: 20px;
    }

    &__content {
      @include for-size(tablet-portrait) {
        width: 100%;
      }
    }

    &__title {
      margin-bottom: 10px;
      font-size: 26px;
      font-weight: 600;

      @include for-size(tablet-portrait) {
        text-align: center;
      }

      @include for-size(big-phone) {
        font-size: 20px;
      }
    }

    &__info {
      display: flex;
      align-items: center;

      @include for-size(desktop) {
        align-items: flex-start;
      }
    }

    &__details {
      margin-bottom: 0;
      font-size: 18px;
      color: $fonts;

      @include for-size(big-phone) {
        font-size: 16px;
      }
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

      @include for-size(small-desktop) {
        flex-direction: column;
      }

      @include for-size(tablet-portrait) {
        flex-direction: row;
        margin-top: 20px;
        width: 100%;
      }
    }

    &__button {
      &:not(:first-child) {
        margin-left: 20px;

        @include for-size(small-desktop) {
          margin: 10px 0 0;
        }

        @include for-size(tablet-portrait) {
          margin: 0 0 0 10px;
        }
      }
    }
  }
}
</style>
