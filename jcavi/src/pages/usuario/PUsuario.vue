<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);"
  >
    <div class="column ">
      <div class="row">
        <q-card square class="shadow-24" style="width:400px;height:620px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-xs">Cadastro de usuario</h4>
          </q-card-section>
          <q-card-section>
            <q-form>
              <q-input clas="zip-input" v-model="usuario.nome" label="Nome">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input class="zip-input" v-model="usuario.email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <q-input class="zip-input" v-model="usuario.senha" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <q-input class="zip-input" v-model="usuario.profissao" label="Profissao">
                <template v-slot:prepend>
                  <q-icon name="build" />
                </template>
              </q-input>
               <q-input  class="zip-input" v-model="usuario.salario" label="Salario">
                <template v-slot:prepend>
                  <q-icon name="attach_money" />
                </template>
              </q-input>
              <q-input class="zip-input" v-model="usuario.enderecos[0].cidade" label="Cidade">
                <template v-slot:prepend>
                  <q-icon name="location_city" />
                </template>
              </q-input>
              <q-input class="zip-input" v-model="usuario.enderecos[0].bairro" label="Bairro">
                <template v-slot:prepend>
                  <q-icon name="menu" />
                </template>
              </q-input>
              <q-input class="zip-input" v-model="usuario.enderecos[0].logradouro" label="Logradouro">
                <template v-slot:prepend>
                  <q-icon name="wb_auto" />
                </template>
              </q-input>
              <q-input class="zip-input" v-model="usuario.enderecos[0].cep" label="CEP">
                <template v-slot:prepend>
                  <q-icon name="filter_8" />
                </template>
                 <q-input class="" v-model="usuario.enderecos[0].uf" label="UF">
                <template v-slot:prepend>
                  <q-icon name="info" />
                </template>
              </q-input>
              </q-input>
               <div>
              <q-select class="zip-input" bg-color="blue-1" filled
                  v-model="usuario.funcoes"
                  :options="funcoes"
                  option-value="id"
                  option-label="nome"
                  label="Permissao"
              />
             </div>
            </q-form>
          </q-card-section>
          <div class="row justify-center">
          <q-card-actions class="q-p-lg">
            <q-btn @click="gravar()" label="adicionar" color="primary" to="/usuario/listar"/>
            <q-btn @click="reset()" size = md label="limpar" type="reset" color="primary" />
          </q-card-actions>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<style scoped>
.zip-input
{
margin-top: 10px;
height: 35px;
}
</style>
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
        funcao: [],
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
          this.funcoes = response.data
        })
        .catch((error) => {
          console.log(error.message)
        })
    },
    reset () {
      this.usuario.nome = ''
      this.usuario.email = ''
      this.usuario.senha = ''
      this.usuario.profissao = ''
      this.usuario.salario = ''
      this.usuario.enderecos[0].cidade = ''
      this.usuario.enderecos[0].bairro = ''
      this.usuario.enderecos[0].cidade = ''
      this.usuario.enderecos[0].logradouro = ''
      this.usuario.enderecos[0].cep = ''
      this.usuario.enderecos[0].uf = ''
    }
  }
}
</script>
