import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import RegistrarUsuario from '@/components/RegistrarUsuario'
import Autenticar from '@/components/Autenticar'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/RegistrarUsuario',
      name: 'RegistrarUsuario',
      component: RegistrarUsuario
    },
    {
      path: '/Autenticar',
      name: 'Autenticar',
      component: Autenticar
    },
   
  ]
})
