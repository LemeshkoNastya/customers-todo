<template>
  <div class="payments">
    <h1 class="payments__title">Платежи</h1>
    <div class="payments__list">
      <div v-for="payment in payments" :key="payment.id" class="payment">
        <div class="payment__info">
          <p class="payment__text payment__sum">
            <span>Сумма: </span>
            <span class="payment__value">{{ payment.sum | sumFormat }}</span>
          </p>
          <p class="payment__text">
            <span>Дата: </span>
            <span class="payment__value">{{ payment.date.split(" ")[0] }}</span>
          </p>
        </div>
        <BaseButton
          :text="paymentsButton.name"
          :icon="paymentsButton.icon"
          @click.native="clickButton(payment)"
        />
      </div>
    </div>
    <BasePopup
      :popup="showPopup"
      :options="optionsPopup"
      @close="showPopup = false"
    />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BasePopup from "@/components/BasePopup.vue";
import sumFormat from "@/helpers/sumFormat";
import { mapGetters } from "vuex";

export default {
  filters: { sumFormat },
  components: { BaseButton, BasePopup },
  data() {
    return {
      showPopup: false,
      optionsPopup: {},
    };
  },
  computed: {
    ...mapGetters(["payments", "paymentsButton", "paymentSender"]),
  },
  methods: {
    clickButton(payment) {
      const paymentDetail = [
        { id: 0, label: "Сумма", value: sumFormat(payment.sum) },
        { id: 1, label: "Дата", value: payment.date },
        {
          id: 2,
          label: "Отправитель",
          value: this.paymentSender(payment.idUser),
        },
        { id: 3, label: "Получатель", value: payment.recipient },
      ];

      this.optionsPopup = {
        title: this.paymentsButton.titlePopup,
        buttonSave: this.paymentsButton.buttonPopupSave,
        component: this.paymentsButton.componentPopup,
        data: paymentDetail,
        width: 600,
      };

      this.showPopup = true;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.payments {
  margin-top: 56px;
  background: $background;
  min-height: calc(100vh - 56px);
  height: 100%;

  &__title {
    margin-top: 50px;
    text-align: center;
    font-size: 36px;
    color: $fonts;
  }

  &__list {
    margin: 50px auto;
    width: 80%;
  }

  .payment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: 20px 40px;
    background: white;
    border-radius: 10px;

    &:not(:first-child) {
      margin-top: 20px;
    }

    &__info {
      display: flex;
      width: 100%;
    }

    &__sum {
      width: 50%;
    }

    &__text {
      margin-bottom: 0;
      font-size: 18px;
      color: $fonts;
    }

    &__value {
      margin-bottom: 0;
      font-size: 18px;
      font-weight: 500;
    }
  }
}
</style>
