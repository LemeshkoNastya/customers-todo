<template>
  <v-icon class="icon">{{ icon }}</v-icon>
</template>

<script>
export default {
  props: ["icon"],
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.icon {
  color: black;
  cursor: pointer;

  &:hover {
    color: $cyan;
  }
}
</style>
