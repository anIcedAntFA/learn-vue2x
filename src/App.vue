<template>
  <div id="app">
    <router-view />
    <div>{{ showTask }}</div>
    <hr />
    <div>
      <p>{{ name }}</p>
      <button @click="setName('ngockhoi98')">change name</button>
    </div>
    <hr />
    <div>
      <button @click="updateProfile">update profile</button>
    </div>
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
      tasks: 'tasks',
      name: 'name',
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
