<template>
  <div class="detail">
    <p v-for="detail in data" :key="detail.id" class="detail__field">
      <span class="detail__label">{{ detail.label }}:</span>
      <span class="detail__text">{{ detail.value }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.detail {
  margin-top: 30px;

  & &__field {
    display: flex;

    @include for-size(big-phone) {
      flex-direction: column;
      margin-bottom: 10px;
    }
  }

  &__label {
    display: block;
    min-width: 160px;
    font-size: 18px;
    font-weight: 600;

    @include for-size(big-phone) {
      font-size: 16px;
    }
  }

  &__text {
    font-size: 18px;
  }
}
</style>
