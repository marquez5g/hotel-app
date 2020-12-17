<template>
  <div id="app" class="app">
    <div class="header">
      <h1>OnlyRooms</h1>
      <nav>
        <button @click="inicio">Inicio</button>
        <button @click="registrar">Registarse</button>
      </nav>
    </div>

    <div class="main-component">
      <router-view></router-view>
    </div>

    <div class="footer">
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
      <h2>Sobre nosotros</h2>
    </div>
  </div>
</template>


<script>
import vueRouter from "vue-router";

export default {
  name: "App",

  data: function () {
    return {
      is_auth: localStorage.getItem("isAuth") || false,
    };
  },

  components: {},

  methods: {

    registrar: function () {
      this.$router.push({
        name: "RegistrarUsuario",
        // params: { username: username },
      });
    },
    inicio: function () {
      this.$router.push({
        name: "Inicio",
        // params: { username: username },
      });
    }, 
  },

};
</script>









<style>


@font-face {
  font-family: "Muli-Regular";
  src: url("./fonts/muli/Muli-Regular.ttf");
}
@font-face {
  font-family: "Muli-SemiBold";
  src: url("./fonts/muli/Muli-SemiBold.ttf");
}
@font-face {
  font-family: "Gotham";
  src: url("./fonts/muli/Gotham-Bold.ttf");
} 

body {
  margin: 0 0 0 0;
}

.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;

  /* background-color: #283747; */
  color: #e5e7e9;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h1 {
  width: 20%;
  text-align: center;
  color: #283747
}

.header nav {
  height: 100%;
  width: 40%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 20px;
}

.header nav button {
  color: #e5e7e9;
  background: #283747;
  border: 1px solid #e5e7e9;

  border-radius: 5px;
  padding: 10px 20px;
}

.header nav button:hover {
  color: #283747;
  background: #e5e7e9;
  border: 1px solid #e5e7e9;
}

.main-component {
  height: 75vh;
  margin: 0%;
  padding: 0%;

  background: #fdfefe;
}

.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;

  /* background-color: #283747; */
  color: #e5e7e9;
}

.footer h2 {
  width: 100%;
  height: 100%;
  color:#283747;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


