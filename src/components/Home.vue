<template>
  <div id="User">
    <h2>
      Only <br />
      <span> Rooms </span>
    </h2>

    <form>
      <label for="llegada">Llegada:</label>
      <input type="date" id="llegada" name="llegada" />
      <label for="salida">Salida:</label>
      <input type="date" id="salida" name="salida" />
      <label for="personas">Personas:</label>
      <input type="number" name="personas" min="1" max="30" />
      <button class="btn btn-success" @click="showRooms">
        Buscar
      </button>
    </form>
    

  </div>
  
</template>

<script>
import vueRouter from "vue-router";

export default {
  name: "Home",
  data: function () {
    return {
      data: null,
    };
  },
  methods: {
    showRooms: function(){
      this.$router.push({
        name: "MostrarHabitaciones",
      })
    }
    
  },
};
</script>

<style>
#User {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
#User h2 {
  font-size: 100px;
  color: #283747;
}
#User span {
  color: rgb(187, 10, 10);
  font-weight: bold;
}
</style>