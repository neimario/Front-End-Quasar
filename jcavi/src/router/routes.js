
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/PDashboard.vue') },
      { path: 'categorias', component: () => import('pages/categoria/PCategoria.vue') },
      { path: 'listarcategorias', component: () => import('pages/categoria/PListarCategorias.vue') },
      { path: 'fabricante/listar', component: () => import('pages/fabricante/PListarFabricante.vue') },
      { path: 'fabricantes', component: () => import('pages/fabricante/PFabricante.vue') },
      { path: 'funcoes', component: () => import('pages/funcao/PFuncao.vue') },
      { path: 'funcao/listar', component: () => import('pages/funcao/PListarFuncao.vue') },
      { path: 'pedidos', component: () => import('pages/pedido/PPedido.vue') },
      { path: 'produtos', component: () => import('pages/produto/PProduto.vue') },
      { path: 'produto/listar', component: () => import('pages/produto/PListarProduto.vue') },
      { path: 'usuarios', component: () => import('pages/usuario/PUsuario.vue') },
      { path: 'usuario/listar', component: () => import('pages/usuario/PListarUsuario.vue') },
      { path: 'testes', component: () => import('pages/teste.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
