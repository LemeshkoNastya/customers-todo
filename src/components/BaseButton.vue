<template>
  <v-btn text :icon="text.length === 0" class="button">
    <v-icon v-if="icon" left> {{ icon }} </v-icon>
    {{ text }}
  </v-btn>
</template>

<script>
export default {
  props: ["text", "icon"],
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.button {
  background-color: white;
  border: 1.5px solid $cyan;
  border-radius: 15px;
  width: max-content;

  .v-btn__content {
    color: black;

    .v-icon {
      font-size: 20px;
      color: $cyan;
    }
  }

  &:hover {
    background-color: $cyan-light;

    &::before {
      background-color: transparent;
    }

    .v-btn__content > .v-icon {
      color: black;
    }
  }

  .v-ripple__container {
    color: $cyan;
  }
}
</style>
