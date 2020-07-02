import Vue from 'vue';
import VueRouter from 'vue-router';

//import pages 
import Main from './Pages/Main/Main';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    meta: {
      title: 'Resume',
      showFeedback: false
    }
  }
];
  
const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
});
  
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Julia Shibalova`;
  next();
});
  
export default router;