<template>
  <div class="container mt-5">
    <div class="row">
        <div class="col text-center">
            <h2 class="font-italic">Modificar un Auto</h2>
        </div>
    </div>
    <br><br>
    <div class="row">
      <div class="col-lg-2"></div>
      <div class="col-lg-8">
        <div class="card">
        <div class="card-body">
          <form action="" >

            <div class="form-group row">
              <label for="marca" class="col-sm-3 col-form-label font-weight-bold">Marca</label>
              <div class="col">
                <input type="text" name="marca" class="form-control" placeholder="Marca" v-model.trim="form.marca">
              </div>
            </div>
            <div class="form-group row">
              <label for="descripcion" class="col-sm-3 col-form-label font-weight-bold">Descripcion</label>
              <div class="col">
                <textarea style="resize: none;" type="text" placeholder="Ingrese una descripcion" class="form-control norezise" name="descripcion"  rows="2" v-model.trim="form.descripcion"></textarea>
              </div>
            </div>
            <div class="row">
              <div class="col d-flex justify-content-between">
                <button class="btn btn-secondary  btn-sm" @click="atras">Atras</button>
                <button   class="btn btn-primary btn-sm" @click="editar" >Editar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
      <div class="col-lg-2"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditAuto',
  data () {
    return {
      form: {
        idAuto: '',
        marca: '',
        descripcion: ''
      }
    }
  },

  methods: {
    atras () {
      this.$router.push({ name: 'ListaAuto' })
    },
    editar () {
      const ruta = `http://127.0.0.1:8000/api/v1.0/autos/${this.form.idAuto}/`
      axios.put(ruta, this.form).then((response) => {
        console.log(response)
      })
        .catch(err => console.log(err))
    }
  },

  mounted () {
    this.form.idAuto = this.$route.params.id
    const ruta = `http://127.0.0.1:8000/api/v1.0/autos/${this.form.idAuto}/`
    axios.get(ruta).then((response) => {
      this.form.marca = response.data.marca
      this.form.descripcion = response.data.descripcion
    })
      .catch(err => console.log(err))
  }

}
</script>

<style>

</style>
