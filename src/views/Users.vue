<template>
  <div class="page">
    <h1 class="page__title">Пользователи</h1>
    <div class="page__content">
      <div v-for="user in usersList" :key="user.id" class="card user">
        <div class="card__content">
          <h4 class="card__title">{{ user.name }}</h4>
          <div class="card__info user__info">
            <p class="card__details">
              <span>почта: </span>
              <a :href="`mailto:${user.mail}`" class="card__text card__link">
                {{ user.mail }}
              </a>
            </p>
            <p class="card__details">
              <span v-if="$vuetify.breakpoint.width > 1440">, </span>
              <span>телефон: </span>
              <a :href="`tel:${user.phone}`" class="card__text card__link">
                {{ user.phone | phoneFormat }}
              </a>
            </p>
          </div>
        </div>
        <div class="card__buttons">
          <BaseButton
            v-for="button in usersButtons"
            :key="button.name"
            :text="
              $vuetify.breakpoint.width < 380 && button.name === 'Редактировать'
                ? 'Ред.'
                : button.name
            "
            :icon="button.icon"
            @click.native="clickButton(button, user)"
            class="card__button"
          />
        </div>
      </div>
    </div>
    <BasePopup
      :popup="showPopup"
      :options="optionsPopup"
      @close="closePopup()"
      @save="optionsPopup.component === 'TodoList' ? saveTodo() : saveUser()"
    />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BasePopup from "@/components/BasePopup.vue";
import phoneFormat from "@/helpers/phoneFormat";
import { mapGetters, mapMutations } from "vuex";

export default {
  filters: { phoneFormat },
  components: { BaseButton, BasePopup },
  data() {
    return {
      showPopup: false,
      optionsPopup: {},
    };
  },
  computed: {
    ...mapGetters(["usersList", "usersButtons"]),
  },
  methods: {
    ...mapMutations(["saveUserTodo", "saveUserEdit"]),
    clickButton(button, user) {
      this.optionsPopup = {
        title: button.titlePopup,
        buttonSave: button.buttonPopupSave,
        component: button.componentPopup,
        width: 600,
      };

      if (this.optionsPopup.component === "TodoList") {
        this.optionsPopup.data = {
          id: user.id,
          todo: user.todo.slice(0),
        };
      } else this.optionsPopup.data = JSON.parse(JSON.stringify(user));

      this.showPopup = true;
    },
    closePopup() {
      this.optionsPopup = {};
      this.showPopup = false;
    },
    saveTodo() {
      this.saveUserTodo(this.optionsPopup.data);
      this.showPopup = false;
    },
    saveUser() {
      this.saveUserEdit(this.optionsPopup.data);
      this.showPopup = false;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.user {
  @include for-size(tablet-portrait) {
    flex-direction: column;
    align-items: flex-start;
  }

  &__info {
    @include for-size(desktop) {
      flex-direction: column;
      // align-items: flex-start;
    }
  }
}
</style>
