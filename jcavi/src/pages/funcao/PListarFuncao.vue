<template>
  <q-page padding>
    <div class="row col-10 justify-center text-h5">Lista Funções</div>
    <div class="row q-pa-lg justify-center">
      <q-table class="col-6"
        :data="funcoes"
        :columns="colunas"
        row-key="nome"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      colunas: [
        { name: 'id', align: 'right', label: 'ID', field: 'id', sortable: true },
        { name: 'nome', align: 'left', label: 'nome', field: 'nome', sortable: true }
      ],
      funcoes: []
    }
  },
  mounted () {
    this.buscarFuncoes()
  },
  methods: {
    buscarFuncoes () {
      this.$axios.get('http://localhost:8081/v1/funcoes')
        .then((response) => {
          this.funcoes = response.data
        })
    }
  }
}
</script>
