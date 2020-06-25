<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);"
  >

    <div class="column ">
      <div class="row">
        <q-card square class="shadow-24" style="width:400px;height:660px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-xs">Cadastro de usuario</h4>
          </q-card-section>
          <q-card-section>
            <q-form class="q-mt-xs q-b-xs q-b-sm">
              <q-input v-model="usuario.nome" label="Nome">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="usuario.email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input square clearable v-model="usuario.senha" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <q-input square clearable v-model="usuario.profisao" label="Profissao">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
               <q-input square clearable v-model="usuario.salario" label="Salario">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="usuario.enderecos[0].cidade" label="Cidade">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="usuario.enderecos[0].bairro" label="Bairro">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="usuario.enderecos[0].logradouro" label="Logradouro">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="usuario.enderecos[0].cep" label="CEP">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
                 <q-input square clearable v-model="usuario.enderecos[0].uf" label="UF">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              </q-input>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-pt-xs">
            <q-btn @click="gravar()" label="adicionar" color="primary" to="/usuario/lista"/>
            <q-btn label="limpar" type="reset" color="primary" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      usuario: {
        nome: '',
        email: '',
        senha: '',
        profissao: '',
        salario: '',
        enderecos: [
          {
            bairro: '',
            cep: '',
            cidade: '',
            logradouro: '',
            uf: ''
          }
        ],
        funcoes: []
      },
      options: [],
      isPwd: true,
      multiple: null
    }
  },
  mounted () {
    this.buscarFuncao()
  },
  methods: {
    gravar () {
      const cloned = JSON.parse(JSON.stringify(this.usuario))
      console.log(cloned)
      this.$axios.post('http://localhost:8081/v1/usuario', cloned)
        .then(function (response) {
          console.log('salvou usuário', response.message)
        })
        .catch(function (error) {
          console.log('erro ao salvar usuário', error.message)
        })
      this.reset()
    },
    buscarFuncao () {
      this.$axios.get('http://localhost:8081/v1/funcoes')
        .then((response) => {
          console.log('Dados: ', response.data)
          this.options = response.data
        })
        .catch((error) => {
          console.log(error.message)
        })
    },
    reset () {
      this.usuario.nome = ''
    }
  }
}
</script>
