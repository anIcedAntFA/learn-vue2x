<script>
import { mapGetters } from 'vuex';
import TaskItem from '../TaskItem';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
  computed: {
    // convert store.state.name => this.name
    // ...mapState('task', {
    //   tasks: 'tasks',
    // }),
    ...mapGetters('task', {
      name: 'name',
      tasks: 'tasks',
      completedTasks: 'completedTasks',
    }),

    showTask() {
      return this.tasks;
    },
  },
  data() {
    return {};
  },
};
</script>

<template lang="">
  <div>
    <div>Task List</div>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <TaskItem :task="task" />
      </li>
    </ul>
  </div>
</template>

<style lang=""></style>
