webpackJsonp([1],{"1XJT":function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("7+uW"),a=r("/ocq"),n={name:"App",data:function(){return{is_auth:localStorage.getItem("isAuth")||!1}},components:{},methods:{registrar:function(){this.$router.push({name:"RegistrarUsuario"})},inicio:function(){this.$router.push({name:"Home"})},autenticar:function(){this.$router.push({name:"Autenticar"})}}},o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app",attrs:{id:"app"}},[r("div",{staticClass:"header"},[r("h1",[e._v("OnlyRooms")]),e._v(" "),r("nav",[r("button",{on:{click:e.inicio}},[e._v("Inicio")]),e._v(" "),r("button",{on:{click:e.registrar}},[e._v("Registarse")]),e._v(" "),r("button",{on:{click:e.autenticar}},[e._v("Iniciar sesión")])])]),e._v(" "),r("div",{staticClass:"main-component"},[r("router-view")],1),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("br"),this._v(" "),t("br"),this._v(" "),t("br"),this._v(" "),t("br"),this._v(" "),t("br"),this._v(" "),t("br"),this._v(" "),t("h2",[this._v("Sobre nosotros")])])}]};var i=r("VU/8")(n,o,!1,function(e){r("zb7q")},null,null).exports,u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"User"}},[e._m(0),e._v(" "),r("form",{attrs:{action:"/action_page.php"}},[r("label",{attrs:{for:"llegada"}},[e._v("Llegada:")]),e._v(" "),r("input",{attrs:{type:"date",id:"llegada",name:"llegada"}}),e._v(" "),r("label",{attrs:{for:"salida"}},[e._v("Salida:")]),e._v(" "),r("input",{attrs:{type:"date",id:"salida",name:"salida"}}),e._v(" "),r("label",{attrs:{for:"personas"}},[e._v("Personas:")]),e._v(" "),r("input",{attrs:{type:"number",name:"personas",min:"1",max:"30"}}),e._v(" "),r("button",{staticClass:"btn btn-success",on:{click:e.buscarDisponibilidad}},[e._v("Buscar")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",[this._v("\n    Only "),t("br"),this._v(" "),t("span",[this._v(" Rooms ")])])}]};var c=r("VU/8")({name:"User",data:function(){return{username:"none"}},created:function(){this.username=this.$route.params.username}},u,!1,function(e){r("UfB8")},null,null).exports,l=r("mtWM"),p=r.n(l),m={name:"RegistrarUsuario",data:function(){return{user:{nombres:"",apellidos:"",documento:"",email:"",password:""}}},methods:{registarUsuario(){p.a.post("https://hotel-app-5g.herokuapp.com/users/",this.user).then(e=>{console.log(e)}).catch(e=>{alert("ERROR Servidor")})}}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper",staticStyle:{"background-image":"url('assets/bg-registration-form-2.jpg')"}},[r("div",{staticClass:"inner"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.registarUsuario(t)}}},[r("h3",[e._v("Formulario de registro")]),e._v(" "),r("div",{staticClass:"form-group"},[r("div",{staticClass:"form-wrapper"},[r("label",{attrs:{for:""}},[e._v("Nombre")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.nombres,expression:"user.nombres"}],staticClass:"form-control",attrs:{type:"Nombre",required:""},domProps:{value:e.user.nombres},on:{input:function(t){t.target.composing||e.$set(e.user,"nombres",t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"form-wrapper"},[r("label",{attrs:{for:""}},[e._v("Apellido")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.apellidos,expression:"user.apellidos"}],staticClass:"form-control",attrs:{type:"Apellido",required:""},domProps:{value:e.user.apellidos},on:{input:function(t){t.target.composing||e.$set(e.user,"apellidos",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-wrapper"},[r("label",{attrs:{for:""}},[e._v("Documento")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.documento,expression:"user.documento"}],staticClass:"form-control",attrs:{type:"Documento",required:""},domProps:{value:e.user.documento},on:{input:function(t){t.target.composing||e.$set(e.user,"documento",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-wrapper"},[r("label",{attrs:{for:""}},[e._v("Correo")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"Correo",required:""},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-wrapper"},[r("label",{attrs:{for:""}},[e._v("Contraseña")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",required:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),e._m(0),e._v(" "),r("button",[e._v("Registrarse")])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"checkbox"},[t("label",[t("input",{attrs:{type:"checkbox"}}),this._v(" Acepto términos y condiciones\n          "),t("span",{staticClass:"checkmark"})])])}]};var d=r("VU/8")(m,v,!1,function(e){r("1XJT")},"data-v-7cb988de",null).exports,_={name:"Autenticar",data:function(){return{user_in:{documento:"",password:""}}},methods:{processAuthUser:function(){var e=this;p.a.post("https://hotel-app-5g.herokuapp.com/user/auth/",e.user_in,{headers:{}}).then(t=>{alert("Autenticación Exitosa"),e.$emit("log-in",e.user_in.documento)}).catch(e=>{"404"==e.response.status&&alert("ERROR 404: Usuario no encontrado."),"403"==e.response.status&&alert("ERROR 403: Contraseña Erronea.")})}}},f={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth_user",attrs:{id:"AuthUser"}},[r("div",{staticClass:"container_auth_user"},[r("h2",[e._v("Autenticarse")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.processAuthUser(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.user_in.documento,expression:"user_in.documento"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.user_in.documento},on:{input:function(t){t.target.composing||e.$set(e.user_in,"documento",t.target.value)}}}),e._v(" "),r("br"),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user_in.password,expression:"user_in.password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user_in.password},on:{input:function(t){t.target.composing||e.$set(e.user_in,"password",t.target.value)}}}),e._v(" "),r("br"),e._v(" "),r("button",{attrs:{type:"submit"}},[e._v("Iniciar Sesion")])])])])},staticRenderFns:[]};var h=r("VU/8")(_,f,!1,function(e){r("VADE")},null,null).exports;s.a.use(a.a);var g=new a.a({routes:[{path:"/",name:"Home",component:c},{path:"/RegistrarUsuario",name:"RegistrarUsuario",component:d},{path:"/Autenticar",name:"Autenticar",component:h}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:g,components:{App:i},template:"<App/>"})},UfB8:function(e,t){},VADE:function(e,t){},zb7q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.70b7c4968a9eb0d933cd.js.map