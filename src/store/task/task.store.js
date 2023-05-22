const taskStore = {
  namespaced: true,
  state: {
    name: 'ngockhoi96',
    tasks: [
      {
        id: '1',
        title: 'todo 1',
        isImportant: false,
        isCompleted: false,
      },
    ],
  },
  getters: {
    name(state) {
      return state.name;
    },
    tasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    setName(state, payload) {
      state.name = payload;
    },
    createTask(state, payload) {
      state.name = payload;
    },
  },
  actions: {
    updateProfile(context) {
      context.commit('setName', 'ngockhoi97');
      console.log(context.getters);
    },
  },
};

export default taskStore;
