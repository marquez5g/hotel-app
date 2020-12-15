<template>
  <div id="RegistrarUsuario">
    <!-- <h2>{{ username }}</h2> -->
    <h2>
      Ingrese sus datos: <span> "Prueba span"<!-- {{ balance }} --></span>
    </h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RegistrarUsuario",
  data: function () {
    return {
      msg: "¡Usuario registrado con éxito!",
    };
  },
  created: function (user) {
    axios
      .post("http://127.0.0.1:8000/users/", user)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert("ERROR Servidor");
      });
  },
};
</script>

<style>
#RegistrarUsuario {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#RegistrarUsuario h2 {
  font-size: 50px;
  color: #283747;
}
#RegistrarUsuario span {
  color: crimson;
  font-weight: bold;
}
</style>
