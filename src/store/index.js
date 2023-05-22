import Vue from 'vue';
import Vuex from 'vuex';
import taskStore from './task';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    task: taskStore,
  },
});

export default store;
