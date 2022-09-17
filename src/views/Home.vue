<template>
  <div class="users">
    <BaseInput :text.sync="currentText" :label="'Текст'" />
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";

export default {
  name: "Home",
  components: { BaseInput },
  data() {
    return {
      currentText: null,
    };
  },
};
</script>
