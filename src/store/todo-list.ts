import { todoListService } from "@/utils";
import { TodoList } from "@/types";

export const $useTodoListStore = {
  namespaced: true,
  state: {
    all: {},
  },
  mutations: {
    getAllRequest(state: any) {
      state.all = { loading: true };
    },
    getAllSuccess(state: any, list: TodoList) {
      state.all = { items: list };
    },
    getAllFailure(state: any, error: any) {
      state.all = { error };
    },
  },
  actions: {
    async getAll(store: any) {
      store.commit("getAllRequest");

      todoListService.getAll().then(
        (data: TodoList) => {
          //console.log(data);
          store.commit("getAllSuccess", data);
        },
        (error) => store.commit("getAllFailure", error)
      );
    },
  },
};
