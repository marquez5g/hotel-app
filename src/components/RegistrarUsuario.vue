<template>
  <div
    class="wrapper"
    style="background-image: url('assets/bg-registration-form-2.jpg')"
  >
    <div class="inner">
      <form ref="roomsForm" v-on:submit.prevent="registarUsuario">
        <h3>Formulario de registro</h3>
        <div class="form-group">
          <div class="form-wrapper">
            <label for="">Nombre</label>
            <input type="Nombre" class="form-control" v-model="user.nombres" required/>
          </div>
        </div>
        <div class="form-wrapper">
          <label for="">Apellido</label>
          <input
            type="Apellido"
            class="form-control"
            v-model="user.apellidos"
            required
          />
        </div>
        <div class="form-wrapper">
          <label for="">Documento</label>
          <input
            type="Documento"
            class="form-control"
            v-model="user.documento"
            required
          />
        </div>
        <div class="form-wrapper">
          <label for="">Correo</label>
          <input type="Correo" class="form-control" v-model="user.email" required/>
        </div>
        <div class="form-wrapper">
          <label for="">Contraseña</label>
          <input
            type="password"
            class="form-control"
            v-model="user.password"
            required
          />
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" /> Acepto términos y condiciones
            <span class="checkmark"></span>
          </label>
        </div>
        <button>Registrarse</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RegistrarUsuario",
  data: function () {
    return {
      user: {
        nombres: "",
        apellidos: "",
        documento: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    registarUsuario() {
      axios
        .post("https://hotel-api-5g.herokuapp.com/users/", this.user)
        .then((result) => {
          alert("Registro exitoso");
          this.$refs.roomsForm.reset();
        })
        .catch((error) => {
          alert("ERROR Servidor");
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: "Muli-Regular";
  color: rgb(255, 255, 255);
  font-size: 13px;
  margin: 0;
}

input,
textarea,
select,
button {
  font-family: "Muli-Regular";
  color: rgb(255, 255, 255);
  font-size: 13px;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
ul {
  margin: 0;
}

img {
  max-width: 100%;
}

ul {
  padding-left: 0;
  margin-bottom: 0;
}

a:hover {
  text-decoration: none;
}

:focus {
  outline: none;
}

.wrapper {
  min-height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}

.inner {
  min-width: 992px;
  margin: auto;
  padding-top: 68px;
  padding-bottom: 40px;
  background: url("../assets/fondo.png");
}
.inner h3 {
  font-size: 18px;
  font-family: "Gotham";
  text-align: left;
  margin-bottom: 30px;
  color: rgb(255, 255, 255);
  letter-spacing: 0px;
}

form {
  width: 40%;
  padding-left: 75px;
}

.form-wrapper {
  margin-bottom: 15px;
}
.form-wrapper label {
  color: #ccc;
  font-family: "Muli-Regular";
  font-size: 13px;
  margin-bottom: 9px;
  display: block;
}

.form-control {
  border: 1px solid #ccc;
  display: block;
  width: 70%;
  height: 30px;
  padding: 0 20px;
  border-radius: 05px;
  font-family: "Muli-Bold";
  background: none;
}
.form-control:focus {
  border: 1px solid #f4f4f477;
}

select {
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  padding-left: 20px;
}
select option[value=""][disabled] {
  display: none;
}

button {
  border: none;
  width: 230px;
  height: 30px;
  margin: left;
  margin-top: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: #cdbdb0;
  font-size: 15px;
  color: #fff;
  font-family: "Gotham";
  border-radius: 05px;
  overflow: hidden;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
button:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f4f4f472;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 0 50%;
  transform-origin: 0 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
button:hover:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}

.checkbox {
  position: relative;
}
.checkbox label {
  padding-left: 22px;
  cursor: pointer;
}
.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkmark {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 12px;
  width: 13px;
  border-radius: 2px;
  background-color: #ebebeb;
  border: 1px solid #ccc;
  font-family: Material-Design-Iconic-Font;
  color: #000;
  font-size: 10px;
  font-weight: bolder;
}
.checkmark:after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  content: "\f26b";
}

@media (max-width: 991px) {
  .inner {
    min-width: 768px;
  }
}
@media (max-width: 767px) {
  .inner {
    min-width: auto;
    background: none;
    padding-top: 0;
    padding-bottom: 0;
  }

  form {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
}

/*# sourceMappingURL=style.css.map */
</style>
