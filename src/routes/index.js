import VueRouter from 'vue-router';

// import TaskView from '../views/Task';

const TaskView = () => import('../views/Task');

const routes = [
  {
    path: '',
    name: 'home',
    redirect: '/task',
  },
  {
    path: '/task',
    name: 'task',
    component: TaskView,
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: import.meta.env.BASE_URL,
  routes,
});

export default router;
