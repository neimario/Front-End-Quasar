<template>
  <q-page
    class="window-height window-width row justify-center items-center"
    style="background: linear-gradient(#8274C5, #5A4A9F);"
  >

    <div class="column ">
      <div class="row">
        <q-card square class="shadow-24" style="width:400px;height:340px;">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-xs">LOGIN do USUARIO</h4>
          </q-card-section>
          <q-card-section>
            <q-form class="q-mt-lg q-b-xs q-b-sm">
              <q-input v-model="nome" label="Nome">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input square clearable v-model="senha" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>

            </q-form>
          </q-card-section>
          <q-card-actions class="row justify-center .rt">
            <q-btn class="size_imput" @click="gravar()" label="Ok" color="primary"/>
            <q-btn class="size_imput" label="limpar" type="reset" color="primary" />
          </q-card-actions>
           <q-card-section class = "centro de texto q-pa-none">
            <p class = " row justify-center"> Criar uma conta </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<style scoped>
.size_imput
{
    margin-top: 1px;
    height: 50px;
    width: 80px;
}
</style>
