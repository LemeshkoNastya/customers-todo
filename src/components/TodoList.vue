<template>
  <div class="todo">
    <div class="todo__actions">
      <BaseInput
        :text.sync="newTodo"
        :label="'Новая задача'"
        :rules="[rules.required, rules.unique]"
        class="todo__input"
        @keyup.enter.native="addTodo"
      />
      <BaseButton :text="'Добавить'" @click.native="addTodo" />
    </div>
    <ul :class="['todo__list', { todo__list_scroll: data.todo.length > 5 }]">
      <TodoListItem
        v-for="(todo, index) in data.todo"
        :key="todo.name"
        :todo="todo"
        @delete="data.todo.splice(index, 1)"
      />
    </ul>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import TodoListItem from "@/components/TodoListItem.vue";

export default {
  props: ["data"],
  components: { BaseInput, BaseButton, TodoListItem },
  data() {
    return {
      newTodo: null,
      rules: {
        required: (value) => !!value || "Отсутствует название",
        unique: (value) =>
          !this.data.todo.find((todo) => todo.name === value) ||
          "Такая задача уже существует",
      },
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo !== null && this.rules.unique(this.newTodo) === true) {
        this.data.todo.push({ name: this.newTodo, done: false });
        this.newTodo = null;
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";

.todo {
  margin-bottom: 10px;

  &__actions {
    display: flex;
    align-items: flex-start;
    margin: 20px 0;
  }

  &__input {
    margin-right: 50px;
  }

  & &__list {
    padding: 0 8px 0 0;

    &_scroll {
      height: 160px;
      overflow: auto;

      &::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
        border: 1px solid $cyan;
        border-radius: 15px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: $cyan;
        border: 1px solid $cyan;
        border-radius: 15px;
      }
    }
  }
}
</style>
