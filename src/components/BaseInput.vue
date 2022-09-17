<template>
  <div class="textfield">
    <v-text-field
      v-model="currentText"
      :label="label"
      :rules="rules"
      dense
      solo
      clearable
      color="#1cdab7"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  props: ["text", "label", "rules"],
  data: () => {
    return {
      currentText: null,
    };
  },
  watch: {
    currentText() {
      this.$emit("update:text", this.currentText || null);
    },
    text() {
      this.currentText = this.text;
    },
  },
  beforeMount() {
    if (this.text !== null && this.text !== "") {
      this.currentText = this.text;
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

div .textfield {
  width: 100%;

  &_clickable {
    cursor: pointer;
  }

  .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat) {
    & > .v-input__control > .v-input__slot {
      margin: 0;
      padding: 0 10px;
      box-shadow: none;
      border: 2px solid $cyan-light;
      border-radius: 15px;

      .v-text-field__slot {
        padding: 0 20px 0 10px;
        min-height: 40px;

        .v-label {
          margin-left: 10px;
        }
      }
    }

    &.v-input--is-focused > .v-input__control > .v-input__slot {
      border: 2px solid $cyan-light;
      box-shadow: $box-shadow;
    }
  }
}
</style>
