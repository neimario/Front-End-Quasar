<template>
  <q-page padding >
    <div class="row col-10 justify-center text-h5" color="grey-8">Lista Produto</div>
    <div class="row q-pa-md justify-center ">
      <q-table class="col-10"
        dense
        :data="produtos"
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
        { name: 'nome', align: 'left', label: 'nome', field: 'nome', sortable: true },
        { name: 'descricao', align: 'left', label: 'descricao', field: 'descricao', sortable: true },
        { name: 'preco', align: 'left', label: 'preco', field: 'preco', sortable: true }
      ],
      produtos: []
    }
  },
  mounted () {
    this.buscarProdutos()
  },
  methods: {
    buscarProdutos () {
      this.$axios.get('http://localhost:8081/v1/produtos')
        .then((response) => {
          this.produtos = response.data
        })
    }
  }
}
</script>
