import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [{
        id: 0,
        name: "Денис Баранов",
        phone: "+79275639473",
        mail: "den4382@mail.ru",
        todo: [{
            name: "Купить билеты родителям",
            done: true,
          },
          {
            name: "Заказать пиццу",
            done: true,
          },
          {
            name: "Подготовиться к приходу гостей",
            done: false,
          }
        ],
      },
      {
        id: 1,
        name: "Олеся Михеева",
        phone: "+79994752954",
        mail: "olesya_miheeva@mail.ru",
        todo: [{
            name: "Обговорить дизайн нового проекта",
            done: false,
          },
          {
            name: "Провести ТО автомобиля",
            done: true,
          }
        ],
      },
      {
        id: 2,
        name: "Глеб Михайлов",
        phone: "+79376407589",
        mail: "gleb_mih@mail.ru",
        todo: [{
            name: "Придумать новый логотип",
            done: false,
          },
          {
            name: "Купить 6 новых стульев",
            done: false,
          }
        ],
      },
      {
        id: 3,
        name: "Дмитрий Ильин",
        phone: "+79062893482",
        mail: "dmitry8374@mail.ru",
        todo: [{
            name: "Забронировать ресторан на вечер",
            done: true,
          },
          {
            name: "Оповестить гостей",
            done: false,
          },
          {
            name: "Выбрать десерт",
            done: true,
          }
        ],
      },
      {
        id: 4,
        name: "Степан Сидороф",
        phone: "+79992437462",
        mail: "sidorOFF@mail.ru",
        todo: [{
            name: "Провести дегустацию",
            done: false,
          },
          {
            name: "Отвезти отца на работу",
            done: true,
          }
        ],
      },
      {
        id: 5,
        name: "Иван Потапов",
        phone: "+79278465386",
        mail: "potap.i@mail.ru",
        todo: [{
            name: "Забронировать отель в Москве",
            done: true,
          },
          {
            name: "Оформить трансфер в аэропорт",
            done: true,
          },
          {
            name: "Обсудить с братом детали концерта",
            done: false,
          }
        ],
      },
      {
        id: 6,
        name: "Злата Вдовина",
        phone: "+79374619480",
        mail: "zlata.v@mail.ru",
        todo: [{
            name: "Побить рекорд прогулки в 15 км",
            done: false,
          },
          {
            name: "Подготовить гостинную к хэллоуину",
            done: false,
          }
        ],
      },
      {
        id: 7,
        name: "Даниил Шилов",
        phone: "+79992736494",
        mail: "shilov.danya@mail.ru",
        todo: [{
            name: "Купить сыну игрушку",
            done: true,
          },
          {
            name: "Созвониться с клинингом окон в офис",
            done: false,
          },
        ],
      },
      {
        id: 8,
        name: "Кирилл Беляев",
        phone: "+79034957264",
        mail: "belyaev.kir@mail.ru",
        todo: [{
            name: "Выбрать новый объектив в подарок брату",
            done: false,
          },
          {
            name: "Договориться о доставке",
            done: true,
          }
        ],
      },
      {
        id: 9,
        name: "Марк Журавлев",
        phone: "+79990234957",
        mail: "mark3283@mail.ru",
        todo: [{
            name: "Заказать продуктов",
            done: true,
          },
          {
            name: "Приготовить ужин",
            done: false,
          },
        ],
      },
    ],
    usersButton: [{
        name: "Задачи",
        icon: "mdi-format-list-checks",
        titlePopup: "Задачи",
        buttonPopupSave: true,
        componentPopup: "TodoList",
      },
      {
        name: "Редактировать",
        icon: "mdi-pencil",
        titlePopup: "Редактирование пользователя",
        buttonPopupSave: true,
        componentPopup: "TodoList",
      }
    ],
  },
  mutations: {
    saveUserTodo(state, payload) {
      const indexUser = state.users.findIndex((user) => user.id === payload.id);
      if (indexUser > -1) state.users[indexUser].todo = payload.todo;
    },
  },
  getters: {
    usersList(state) {
      return state.users;
    },
    usersButtons(state) {
      return state.usersButton;
    },
    todoList: (state) => (id) => {
      return state.users.find((user) => user.id === id).todo;
    },
  },
  actions: {},
  modules: {}
})