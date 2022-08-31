<template>
   <div class="container mt-5">
    <div class="row">
        <div class="col">
            <h2>Lista un Autos</h2>
            <br>
          <table class="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">Colores Disponibles</th>
                <th scope="col">Precio</th>
                <th scope="col">Descripcion</th>
                <th scope="col" >Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="auto in autos" v-bind:key="auto.id">
                <th scope="row">{{auto.id}}</th>
                <td>{{auto.marca}}</td>
                <td>{{auto.modelo}}</td>
                <td>{{auto.color}}</td>
                <td>{{auto.precio}}</td>
                <td>{{auto.descripcion}}</td>
                <td>
                  <div class="d-flex flex-column w-0">
                    <button class="btn btn-primary btn-sm mb-1" @click="editarAuto(auto.id)">Editar</button>
                    <button class="btn btn-danger btn-sm mt-1" @click="eliminarAuto(auto.id)">Eliminar</button>

                  </div>
                </td>

              </tr>
            </tbody>
          </table>
        </div>
    </div>

    <div class="row">
      <div class="col">
        <button class="btn btn-primary btn-md mb-1" @click="volver">Volver  al inicio</button>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  data () {
    return {

      fields: [
        { key: 'id', label: '#' },
        { key: 'marca', label: 'Marca' },
        { key: 'modelo', label: 'Modelo' },
        { key: 'color', label: 'Color' },
        { key: 'precio', label: 'Precio' },
        { key: 'descripcion', label: 'Descripcion' },
        { key: 'action', label: 'Acciones' }
      ],
      autos: []
    }
  },

  methods: {
    getListaAutos () {
      const ruta = 'http://127.0.0.1:8000/api/v1.0/autos/'
      axios.get(ruta).then((response) => {
        this.autos = response.data
      })
        .catch(err => console.log(err))
    },
    editarAuto (id) {
      this.$router.push('editar/' + id)
    },
    eliminarAuto (id) {
      const ruta = `http://127.0.0.1:8000/api/v1.0/autos/${id}/`
      axios.delete(ruta, this.form).then((response) => {
        this.$router.push('/')
      })
    },
    volver () {
      this.$router.push('/')
    }
  },

  mounted () {
    this.getListaAutos()
  }
}
</script>

<style>

</style>
