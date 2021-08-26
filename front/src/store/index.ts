import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { Book } from "@/types/Book";
import { dummyBooks } from "@/dummyData/DummyBooks";

Vue.use(Vuex);

export interface MangaState {
  point: number;
  books: Book[];
}

const mutations = {
  addPoint(state: MangaState, num: number): void {
    state.point += num;
  },
  deletePoint(state: MangaState, num: number): void {
    state.point -= num;
  },
  setPoint(state: MangaState, num: number): void {
    state.point = num;
  },
  setDummyBooks(state: MangaState): void {
    state.books = dummyBooks;
  },
};

export default new Vuex.Store({
  state: { point: 20, books: [] },
  mutations: mutations,
  plugins: [createPersistedState()],
});
