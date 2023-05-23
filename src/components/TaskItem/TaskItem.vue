<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TaskItem',
  props: ['task'],
  methods: {
    ...mapMutations('task', {
      toggleStatusTask: 'TOGGLE_STATUS_TASK',
    }),
  },
};
</script>

<template>
  <div>
    <input
      type="checkbox"
      name="task-item"
      :id="`task-item-${task.id}`"
      :checked="task.status === 'completed'"
      @change="toggleStatusTask(task.id)"
    />
    <label
      :for="`task-item-${task.id}`"
      :class="{ 'is-completed': task.status === 'completed' }"
    >
      {{ task.title }}
    </label>
    <div>
      {{ task }}
    </div>
    <button>delete</button>
  </div>
</template>

<style lang="scss">
.is-completed {
  text-decoration: line-through;
}
</style>
