<template>
  <q-page padding class="cordefundo">

    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="home" icon="home" to="/" />
        <q-breadcrumbs-el label="categoria" />
      </q-breadcrumbs>
    </div>

    <div class="row justify-center">
      <div class="col-6">
        <q-form
          class="q-gutter-md q-mt-lg"
        >
          <q-input
            filled
            v-model="categoria.nome"
            label="Cadastrar Categoria *"
            hint=""  bg-color="blue-3"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
          />
          <div>
            <q-btn @click="gravar()" label="adicionar" color="primary" to="/listarcategorias"/>
            <q-btn @click="reset()" label="limpar" type="reset" color="primary" flat class="q-ml-sm" />
          </div>
        </q-form>
      </div>

    </div>

  </q-page>
</template>

<script>
export default {
  data () {
    return {
      categoria: {
        nome: ''
      }
    }
  },
  methods: {
    gravar () {
      const cloned = JSON.parse(JSON.stringify(this.categoria))
      this.$axios.post('http://localhost:8081/v1/categoria', cloned)
        .then(function (response) {
          this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'success',
            message: 'Categoria salva com sucesso'
          })
          console.log('salvou categoria')
        })
        .catch(function (error) {
          console.log(error)
        })
      this.reset()
    },
    reset () {
      this.categoria.nome = ' '
    }
  }
}
</script>
