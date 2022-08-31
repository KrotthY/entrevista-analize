<template>
  <div class="container  mt-5">
    <div class="row">
        <div class="col text-lef">
            <h2>Vista previa de Automoviles</h2>
            <br>
            <button class="btn btn-sm btn-primary" @click="crear">Crear Tarjeta de automovil</button>
        </div>
    </div>
    <br>
    <div class="row"  >
      <div class="col-lg-4 col-md-4 col-xs-12 mt-3" v-for="auto  of autos" v-bind:key="auto">
        <div class="card " style="width: 18rem; background-color: aliceblue;">
          <div class="card-body">
            <h5 class="card-title">{{ auto.marca }} | {{ auto.modelo }}</h5>
            <img src="" alt="Error en cargar">
            <br>
            <p class="card-text"><b>Colores disponibles: </b> {{auto.color }}</p>
<p class="card-text"><b>Precio: </b>${{ Intl.NumberFormat().format(auto.precio)  }}</p>
            <p class="card-text"><b>Descripcion: </b> </p>
            <p>{{auto.descripcion }}</p>
            <a href="#" class="btn btn-sm btn-primary" @click="verLista">Ver lista Autos</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ListAuto',

  data () {
    return {
      autos: []
    }
  },

  methods: {
    getAutos () {
      const ruta = 'http://127.0.0.1:8000/api/v1.0/autos/'
      axios.get(ruta).then((response) => {
        this.autos = response.data
      })
        .catch(err => console.log(err))
    },

    verLista () {
      this.$router.push('/lista')
    },
    crear () {
      this.$router.push('/crear')
    }
  },

  created () {
    this.getAutos()
  }

}
</script>

<style>
</style>
