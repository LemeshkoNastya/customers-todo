<template>
  <v-btn
    text
    :icon="text.length === 0"
    class="button"
    :class="{ button_hidden: text.length === 0 }"
  >
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

    @include for-size(phone) {
      font-size: 12px;
    }

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

  &_hidden > .v-btn__content {
    .v-icon--left {
      margin: 0;
    }
  }

  .v-ripple__container {
    color: $cyan;
  }
}

.v-btn:not(.v-btn--round).v-size--default {
  @include for-size(phone) {
    padding: 0 10px;
  }
}
</style>
