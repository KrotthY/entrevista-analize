<template>
  <div class="container  mt-5">
    <div class="row">
        <div class="col text-lef">
            <h2>Vista de Automoviles</h2>
        </div>
    </div>

    <div class="row"  >
      <div class="col-md-4 col-xs-12 mt-3" v-for="auto  of autos" v-bind:key="auto">
        <div class="card " style="width: 18rem; background-color: aliceblue;">
          <div class="card-body">
            <h5 class="card-title">Marca {{ auto.marca }}</h5>
            <img src="" alt="cossa">
            <br>
            <p class="card-text"><b>Descripcion </b> </p>
            <p>{{auto.descripcion }}</p>
            <a href="#" class="btn btn-primary">Ver</a>
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
    }
  },

  created () {
    this.getAutos()
  }

}
</script>

<style>
</style>
