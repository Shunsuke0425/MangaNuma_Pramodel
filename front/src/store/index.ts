import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { Book } from "@/types/Book";
import { dummyBooks } from "@/dummyData/DummyBooks";
import { User } from "@/types/User";

Vue.use(Vuex);

export interface MangaState {
  books: Book[];
  user: User;
}

const mutations = {
  addPoint(state: MangaState, num: number): void {
    state.user.point += num;
  },
  deletePoint(state: MangaState, num: number): void {
    state.user.point -= num;
  },
  setPoint(state: MangaState, num: number): void {
    state.user.point = num;
  },
  setDummyBooks(state: MangaState): void {
    state.books = dummyBooks;
  },
  setBooks(state: MangaState, books: Book[]): void {
    state.books = books;
  },
  setUser(state: MangaState, user: User): void {
    state.user = user
  }
};

export default new Vuex.Store({
  state: { books: dummyBooks, user: {} as User },
  mutations: mutations,
  plugins: [createPersistedState()],
});
