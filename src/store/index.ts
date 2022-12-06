import { createStore } from "vuex";
import { $useAuthStore } from "./auth";
import { $useTodoListStore } from "./todo-list";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { $useAuthStore, $useTodoListStore },
});
