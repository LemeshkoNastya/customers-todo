<template>
  <li class="list__item">
    <BaseCheckbox :label="todo.name" :value.sync="todo.done" />
    <BaseIcon :icon="'mdi-delete-outline'" @click.native="$emit('delete')" />
  </li>
</template>

<script>
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import BaseIcon from "@/components/BaseIcon.vue";

export default {
  props: ["todo"],
  components: { BaseCheckbox, BaseIcon },
};
</script>

<style lang="scss">
.list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:first-child) {
    margin-top: 10px;
  }
}
</style>
