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
.button {
  background-color: white;
  border: 1.5px solid #17eec6;
  border-radius: 15px;
  width: max-content;

  .v-btn__content {
    color: black;

    .v-icon {
      font-size: 20px;
      color: #17eec6;
    }
  }

  &:hover {
    background-color: rgb(23, 238, 198, 0.1);

    .v-btn__content > .v-icon {
      color: black;
    }
  }
}
</style>
