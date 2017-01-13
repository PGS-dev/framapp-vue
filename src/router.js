import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/index';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
import LoginForm from './components/LoginForm';
import AdminProductsList from './components/AdminProductsList';

Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
  if (!store.state.auth.user) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
};

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: ProductsList },
    { path: '/products/', component: ProductsList },
    { path: '/products/:category', component: ProductsList },
    { path: '/product/:id', name: 'product', component: ProductDetails },
    { path: '/login', name: 'login', component: LoginForm },
    { path: '/admin/products', name: 'admin-products', component: AdminProductsList, beforeEnter: requireAuth },
    { path: '*', name: '404', component: { template: '<h1>Page not found</h1>' } },
  ],
});

export default router;
