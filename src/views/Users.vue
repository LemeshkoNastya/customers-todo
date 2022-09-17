<template>
  <div class="users">
    <h2 class="users__title">Пользователи</h2>
    <div class="users__list">
      <div v-for="user in usersList" :key="user.id" class="user">
        <div class="user__info">
          <h4 class="user__name">{{ user.name }}</h4>
          <div>
            <span class="user__label">Почта: </span>
            <a :href="`mailto:${user.mail}`" class="user__link">
              {{ user.mail }}
            </a>
            <span class="user__label">, телефон: </span>
            <a :href="`tel:${user.phone}`" class="user__link">
              {{ user.phone }}
            </a>
          </div>
        </div>
        <div class="user__buttons">
          <BaseButton
            v-for="button in usersButtons"
            :key="button.name"
            :text="button.name"
            :icon="button.icon"
            @click.native="clickButton(button, user.id)"
            class="user__button"
          />
        </div>
      </div>
    </div>
    <BasePopup
      :popup="showPopup"
      :options="optionsPopup"
      @close="showPopup = false"
      @save="optionsPopup.component === 'TodoList' ? saveTodo() : saveUser()"
    />
  </div>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import BasePopup from "@/components/BasePopup.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { BaseButton, BasePopup },
  data() {
    return {
      currentText: null,
      showPopup: false,
      optionsPopup: {},
    };
  },
  computed: {
    ...mapGetters(["usersList", "usersButtons", "todoList"]),
  },
  methods: {
    ...mapMutations(["saveUserTodo"]),
    clickButton(button, id) {
      this.optionsPopup = {
        title: button.titlePopup,
        buttonSave: button.buttonPopupSave,
        component: button.componentPopup,
        data: {
          id: id,
          todo: JSON.parse(JSON.stringify(this.todoList(id))),
        },
        width: 600,
      };

      this.showPopup = true;
    },
    saveTodo() {
      this.saveUserTodo(this.optionsPopup.data);
      this.showPopup = false;
    },
    saveUser() {
      console.log("saveUser");
      this.showPopup = false;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.users {
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
}

.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: white;
  border-radius: 10px;

  &:not(:first-child) {
    margin-top: 20px;
  }

  &:hover {
    box-shadow: $box-shadow;
  }

  &__info {
    color: $fonts;
  }

  &__name {
    margin-bottom: 10px;
    font-size: 26px;
    font-weight: 600;
  }

  &__label {
    font-size: 18px;
    font-weight: 500;
  }

  & &__link {
    border-bottom: 2px solid white;
    color: $fonts;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;

    &:hover {
      border-bottom: $border;
      color: $cyan;
    }
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  &__button {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
}
</style>
