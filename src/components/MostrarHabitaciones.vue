<template>
  <div class="table-responsive">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Numero</th>
          <th>Piso</th>
          <th>Descripcion</th>
          <th>Caracteristicas</th>
          <th>Precio diario</th>
          <th>Tipo</th>
          <!-- and so on -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" v-bind:key="item.id_habitacion">
          <td>{{ item.id_habitacion }}</td>
          <td>{{ item.numero }}</td>
          <td>{{ item.piso }}</td>
          <td>{{ item.descripcion }}</td>
          <td>{{ item.caracteristicas }}</td>
          <td>{{ item.precio_diario }}</td>
          <td>{{ item.tipo }}</td>
          <!-- and so on -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MostrarHabitaciones",
  data() {
    return {
      data: [],
    };
  },

  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get("https://hotel-api-5g.herokuapp.com/rooms/").then((result) => {
        this.data = result.data;
      });
    },
  },
};
</script>

<stylescoped></style>