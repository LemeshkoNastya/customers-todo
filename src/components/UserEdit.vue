<template>
  <div class="user-edit">
    <div v-for="info in currentUser" :key="info.label">
      <span>{{ info.label }}</span>
      <BaseInput
        :text.sync="info.value"
        :label="info.label"
        :rules="rulesInput(info.label)"
      />
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";

export default {
  props: ["data"],
  components: { BaseInput },
  data() {
    return {
      currentUser: [
        { label: "Имя", value: this.data.name },
        { label: "Почта", value: this.data.mail },
        { label: "Телефон", value: this.data.phone },
      ],
      rules: {
        required: (value) => !!value || "Поле обязательное",
        mail: (value) =>
          /.+@.+\..+/.test(value) || "Неверный адрес электронной почты",
        phone: (value) =>
          /^\+7\d{10}$/.test(value) ||
          "Неверный формат телефона (+79990001122)",
      },
    };
  },
  watch: {
    currentUser: {
      handler(val) {
        if (this.rules.required(val[0].value) === true)
          val.forEach((field, index) => {
            if (this.rules.required(field.value) === true) {
              if (index === 0) this.data.name = field.value;
              else if (index === 1 && this.rules.mail(field.value) === true) {
                this.data.mail = field.value;
              } else if (
                index === 2 &&
                this.rules.phone(field.value) === true
              ) {
                this.data.phone = field.value;
              }
            }
          });
      },
      deep: true,
    },
  },
  methods: {
    rulesInput(field) {
      if (field === "Почта") {
        return [this.rules.required, this.rules.mail];
      } else if (field === "Телефон") {
        return [this.rules.required, this.rules.phone];
      } else {
        return [this.rules.required];
      }
    },
  },
};
</script>

<style lang="scss"></style>
