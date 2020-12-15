<template>
  <div id="MostrarHabitaciones">
    <h2>
     {{habitaciones}}
    </h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MostrarHabitaciones",
  data: function () {
    return {
      habitaciones: ""
    };
  },
  created: function () {
    axios
      .get("http://127.0.0.1:8000/rooms/")
      .then((result) => {
        this.habitaciones = result.data.additionalProp1.tipo;
      })
      .catch((error) => {
        alert("ERROR Servidor");
      });
  },
};
</script>

<style>
#MostrarHabitaciones {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#MostrarHabitaciones h2 {
  font-size: 50px;
  color: #283747;
}
#MostrarHabitaciones span {
  color: crimson;
  font-weight: bold;
}
</style>
