<template>
  <v-checkbox
    v-model="currentValue"
    :label="label"
    color="#70c4dd"
    hide-details
  ></v-checkbox>
</template>

<script>
export default {
  props: ["label", "value"],
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    value() {
      this.currentValue = this.value;
    },
    currentValue() {
      this.$emit("update:value", this.currentValue);
    },
  },
};
</script>

<style lang="scss">
.v-input--selection-controls {
  margin: 0;
  padding: 0;
}
</style>
