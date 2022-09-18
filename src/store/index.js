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
        componentPopup: "UserEdit",
      }
    ],
    payments: [{
        id: 0,
        idUser: 0,
        sum: 900,
        date: "03.09.2022 14:47",
        recipient: "ООО 'Цитрусовый рай'",
      },
      {
        id: 1,
        idUser: 1,
        sum: 3500,
        date: "17.09.2022 17:20",
        recipient: "ООО 'Деливери Фраг Инк.'",
      },
      {
        id: 2,
        idUser: 1,
        sum: 15000,
        date: "17.09.2022 20:00",
        recipient: "Техник Центр Ко",
      },
      {
        id: 3,
        idUser: 2,
        sum: 600,
        date: "01.09.2022 12:47",
        recipient: "Кенди Денди Фабрик",
      },
      {
        id: 4,
        idUser: 3,
        sum: 2000,
        date: "05.09.2022 15:13",
        recipient: "Шелл Стейшон",
      },
      {
        id: 5,
        idUser: 3,
        sum: 800,
        date: "05.09.2022 16:54",
        recipient: "ООО 'Гросери Стор'",
      },
      {
        id: 6,
        idUser: 3,
        sum: 200,
        date: "06.09.2022 10:04",
        recipient: "Кофе Бин Компани",
      },
      {
        id: 7,
        idUser: 6,
        sum: 6000,
        date: "11.09.2022 21:45",
        recipient: "Ресторан Марсельеза",
      },
      {
        id: 8,
        idUser: 7,
        sum: 9000,
        date: "14.08.2022 11:59",
        recipient: "ООО 'Фёрниче Стор'",
      },
      {
        id: 9,
        idUser: 7,
        sum: 100,
        date: "27.08.2022 12:00",
        recipient: "Пейпер Шоп",
      },
      {
        id: 10,
        idUser: 9,
        sum: 20000,
        date: "02.09.2022 19:34",
        recipient: "Авиасейлз",
      },
      {
        id: 11,
        idUser: 5,
        sum: 8000,
        date: "31.08.2022 23:49",
        recipient: "ООО 'Вуд Фактори'",
      },
      {
        id: 12,
        idUser: 4,
        sum: 14000,
        date: "31.07.2022 12:01",
        recipient: "Кристал Пелас Москоу",
      },
      {
        id: 13,
        idUser: 4,
        sum: 1900,
        date: "01.08.2022 16:43",
        recipient: "Транспортейшен Холдинг",
      },
      {
        id: 14,
        idUser: 8,
        sum: 330,
        date: "15.08.2022 20:00",
        recipient: "Старбакс",
      },
      {
        id: 15,
        idUser: 8,
        sum: 1200,
        date: "16.08.2022 14:41",
        recipient: "Убер такси",
      },
      {
        id: 16,
        idUser: 8,
        sum: 8880,
        date: "16.09.2022 17:18",
        recipient: "ООО 'Форд Мануфактёр Сервис'",
      },
      {
        id: 17,
        idUser: 8,
        sum: 11000,
        date: "16.09.2022 15:43",
        recipient: "ООО 'Форд Мануфактёр'",
      },
    ],
    paymentsButton: {
      name: "Детали",
      icon: "mdi-information-outline",
      titlePopup: "Детали платежа",
      buttonPopupSave: false,
      componentPopup: "PaymentDetail",
    },
  },
  mutations: {
    saveUserTodo(state, payload) {
      const indexUser = state.users.findIndex((user) => user.id === payload.id);
      if (indexUser > -1) state.users[indexUser].todo = payload.todo;
    },
    saveUserEdit(state, payload) {
      const indexUser = state.users.findIndex((user) => user.id === payload.id);
      if (indexUser > -1) {
        state.users[indexUser].name = payload.name;
        state.users[indexUser].mail = payload.mail;
        state.users[indexUser].phone = payload.phone;
      }
    },
  },
  getters: {
    usersList(state) {
      return state.users;
    },
    usersButtons(state) {
      return state.usersButton;
    },
    payments(state) {
      return state.payments;
    },
    paymentsButton(state) {
      return state.paymentsButton;
    },
    paymentSender: (state) => (id) => {
      const user = state.users.find(user => user.id === id);
      return user !== undefined ? user.name : null;
    },
  },
  actions: {},
  modules: {}
})