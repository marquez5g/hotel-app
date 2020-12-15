import vueRouter from 'vue-router'
import RegistarUsuario from './components/RegistrarUsuario'
import MostrarHabitaciones from './components/MostrarHabitaciones'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/users/',
            name: "add_user",
            component: RegistarUsuario
        },
        {
            path: '/rooms/',
            name: "show_rooms",
            component: MostrarHabitaciones
        },
    ]
})
export default router