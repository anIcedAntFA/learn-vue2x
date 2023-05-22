const taskStore = {
  namespaced: true,
  state: {
    name: 'ngockhoi96',
    tasks: [
      {
        id: '1',
        title: 'todo 1',
        isImportant: false,
        status: 'pending',
      },
      {
        id: '2',
        title: 'todo 2',
        isImportant: true,
        status: 'completed',
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
    pendingTasks(state) {
      return state.tasks.filter((task) => task.status === 'pending');
    },
    completedTasks(state) {
      return state.tasks.filter((task) => task.status === 'completed');
    },
    progress(state, getters) {
      const completedTasks = getters.completedTasks;
      return Math.round((completedTasks.length / state.tasks.length) * 100);
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
