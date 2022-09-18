<template>
  <div class="page">
    <h1 class="page__title">Платежи</h1>
    <div class="page__content">
      <div v-for="payment in payments" :key="payment.id" class="card payment">
        <div class="card__info payment__info">
          <p class="card__details payment__sum">
            <span>Сумма: </span>
            <span class="card__text">{{ payment.sum | sumFormat }}</span>
          </p>
          <p class="card__details">
            <span>Дата: </span>
            <span class="card__text">{{ payment.date.split(" ")[0] }}</span>
          </p>
        </div>
        <BaseButton
          :text="paymentsButton.name"
          :icon="paymentsButton.icon"
          @click.native="clickButton(payment)"
          class="payment__button"
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

.payment {
  @media (max-width: 340px) {
    flex-direction: column;
  }

  &__info {
    width: 100%;
    @include for-size(tablet-portrait) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__sum {
    width: 50%;

    @include for-size(tablet-portrait) {
      width: 100%;
    }
  }

  &__button {
    @media (max-width: 340px) {
      margin-top: 20px;
    }
  }
}
</style>
