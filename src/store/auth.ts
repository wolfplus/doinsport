import { userService } from "@/utils";
import { User } from "@/types";
import { createStore } from "vuex";
const user = JSON.parse(localStorage.getItem("user") || "{}");
const initialState =
  user === "{}"
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const $useAuthStore = createStore({
  state: initialState,
  mutations: {
    loginSuccess(state, user: User) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, user: User) {
      return await userService.login(user.username, user.password).then(
        (user: User) => {
          commit("loginSuccess", user);
          return Promise.resolve(user);
        },
        (error: any) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },
  },
  modules: {},
});
