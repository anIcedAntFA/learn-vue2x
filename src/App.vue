<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {},
  // data: () => {
  //   return {
  //     task: this.$store.state.task,
  //   };
  // },
  computed: {
    // convert store.state.name => this.name
    ...mapGetters('task', {
      name: 'name',
      tasks: 'tasks',
      completedTasks: 'completedTasks',
    }),

    showTask() {
      return this.tasks;
    },
  },
  methods: {
    ...mapMutations('task', {
      setName: 'setName',
    }),
    ...mapActions('task', {
      updateProfile: 'updateProfile',
    }),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.isSelect {
  color: orange;
}
</style>
