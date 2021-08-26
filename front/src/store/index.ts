import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface PointState {
  point: number;
}

const mutations = {
  addPoint(state: PointState, num: number): void {
    state.point += num;
  },
  deletePoint(state: PointState, num: number): void {
    state.point -= num;
  },
  setPoint(state: PointState, num: number): void {
    state.point = num;
  },
};

export default new Vuex.Store({
  state: { point: 20 },
  mutations: mutations,
});
