import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import TablePage from "@/pages/TablePage";
import Maquette from "@/pages/Maquette";
import Formulaire from "@/pages/Formulaire";

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'table',
      component: TablePage
    },
    {
      path: '/maquette',
      name: 'maquette',
      component: Maquette
    },
    {
      path: '/formulaire',
      name:'formulaire',
      component: Formulaire
    }
  ]
})
