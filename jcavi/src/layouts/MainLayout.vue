  <template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
              <q-btn
                flatss
                dense
                round
                icon="menu"
                aria-label="Menu"
                @click="leftDrawerOpen = !leftDrawerOpen"
              />
        <q-toolbar-title>
          SISTEMAS DE VENDAS
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-orange-2"
    >
      <q-list>
        <q-item-label
          header
          class=""
        >
         MENU LINK
        </q-item-label>
        <MenuLink
          v-for="link in menuLink"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuLink from 'components/MenuLink'

export default {
  name: 'MainLayout',
  components: {
    MenuLink
  },
  data () {
    return {
      leftDrawerOpen: false,
      menuLink: [
        {
          title: 'Categoria',
          caption: 'cadastrar/listar categorias',
          icon: 'category',
          link: '/categorias'
        },
        {
          title: 'Função do usuário',
          caption: 'cadastrar/listar funções',
          icon: 'functions',
          link: '/funcoes'
        },
        {
          title: 'Fabricante',
          caption: 'cadastrar/listar fabricante',
          icon: 'airport_shuttle',
          link: '/fabricantes'
        },
        {
          title: 'Produto',
          caption: 'cadastrar/listar produto',
          icon: 'dashboard',
          link: '/produtos'
        },
        {
          title: 'Usuário',
          caption: 'cadastrar/listar usuário',
          icon: 'person_add',
          link: '/usuarios'
        },
        {
          title: 'Pedido',
          caption: 'cadastrar/listar pedido de venda',
          icon: 'domain',
          link: '/pedidos'
        },
        {
          title: 'teste',
          caption: 'cadastrar/listar pedido de venda',
          icon: 'domain',
          link: '/testes'
        }
      ]
    }
  }
}
</script>
