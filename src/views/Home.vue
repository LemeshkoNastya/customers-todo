<template>
  <div class="users">
    <BaseButton :text="'Задачи'" :icon="'mdi-format-list-checks'" />
    <BaseButton :text="'Редактировать'" :icon="'mdi-pencil'" />
    <BaseButton :text="'Детали'" :icon="'mdi-information-outline'" />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "Home",
  components: { BaseButton },
};
</script>
