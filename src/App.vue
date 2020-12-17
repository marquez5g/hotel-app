<template>
sadasd
  <div id="App">
    <form v-on:submit.prevent="submitForm">
      <h1>Registrar Usuario</h1>
      <div class="icon">
        <i class="fas fa-user-circle"></i>
      </div>

      <div class="container">
        <label for="name"><strong>Nombre</strong></label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          required
          v-model="user.nombres"
        />
        <label for="lname"><strong>Apellido</strong></label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lname"
          required
          v-model="user.apellidos"
        />
        <label for="mail"><strong>E-mail</strong></label>
        <input
          type="text"
          placeholder="Enter E-mail"
          name="mail"
          required
          v-model="user.email"
        />
        <label for="psw"><strong>Password</strong></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          v-model="user.password"
        />
      </div>
      <button type="submit"><strong>SIGN UP</strong></button>
      <div class="container" style="background-color: #eee">
        <label style="padding-left: 15px">
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>
        <span class="psw"><a href="#">Forgot password?</a></span>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      user: {
        id_usuario: (int = 0),
        nombres: str,
        apellidos: str,
        email: str,
        password: str,
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("/users", this.user)
        .then((res) => {
          console.log(result);
        })
        .catch((error) => {
          alert("ERROR Servidor");
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },
};
</script>

<style>
html,
body {
  display: flex;
  justify-content: center;
  font-family: Roboto, Arial, sans-serif;
  font-size: 15px;
}
form {
  border: 5px solid #f1f1f1;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 16px 8px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.icon {
  font-size: 110px;
  display: flex;
  justify-content: center;
  color: #4286f4;
}
button {
  background-color: #4286f4;
  color: white;
  padding: 14px 0;
  margin: 10px 0;
  border: none;
  cursor: grab;
  width: 48%;
}
h1 {
  text-align: center;
  fone-size: 18;
}
button:hover {
  opacity: 0.8;
}
.formcontainer {
  text-align: center;
  margin: 24px 50px 12px;
}
.container {
  padding: 16px 0;
  text-align: left;
}
span.psw {
  float: right;
  padding-top: 0;
  padding-right: 15px;
}
/* Change styles for span on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
}
</style>
