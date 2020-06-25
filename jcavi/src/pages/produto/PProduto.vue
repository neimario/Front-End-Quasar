<template>
  <q-page class="cordefundo">

    <div class="q-pa-md q-gutter-sm row justify-center ">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="home" icon="home" to="/" />
        <q-breadcrumbs-el label="produto" />
      </q-breadcrumbs>
    </div>
    <div class="column">
      <div class="row justify-center" >
        <q-card square class="shadow-20" style="width:400px;height:420px;">
          <q-card-section class="bg-deep-purple-7">
            <h5 class="text-h6 text-white q-my-xs">Cadastro de Produtos</h5>
          </q-card-section>
          <q-card-section>
            <q-form class="q-t-xs">
              <q-input v-model="produto.nome" label="Nome">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="produto.descricao" label="Descricao">
                <template v-slot:prepend>
                  <q-icon name="description" />
                </template>
              </q-input>
              <q-input square clearable v-model="produto.preco" label="preco">
                <template v-slot:prepend>
                  <q-icon name="attach_money" />
                </template>
              </q-input>
              <div class="col-5">
              <q-select bg-color="blue-2" filled
                  v-model="produto.fabricante"
                  :options="fabricantes"
                  option-value="id"
                  option-label="nome"
                  label="Categorias"
              />
             </div>
            </q-form>
          </q-card-section>
          <div class="row justify-center">
          <q-card-actions class="q-pt-xs">
            <q-btn @click="gravar()" label="adicionar" color="primary" to="/produto/listar"/>
            <q-btn @click="reset()" size = md label="limpar" type="reset" color="primary" />
          </q-card-actions>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<style scoped>
.cordefundo{
  background: aqua;
}
</style>

<script>
export default {
  data () {
    return {
      produto: {
        nome: '',
        descricao: '',
        preco: '',
        fabricante: []
      },
      fabricantes: []
    }
  },
  mounted () {
    this.buscarFabricante()
  },
  methods: {
    gravar () {
      const cloned = JSON.parse(JSON.stringify(this.produto))
      console.log(cloned)
      this.$axios.post('http://localhost:8081/v1/produto', cloned)
        .then(function (response) {
        })
        .catch(function (error) {
          console.log('erro ao salvar usuário', error.message)
        })
    },
    buscarFabricante () {
      this.$axios.get('http://localhost:8081/v1/fabricantes')
        .then((response) => {
          this.fabricantes = response.data
        })
        .catch((error) => {
          console.log(error.message)
        })
    }
  }
}
</script>
