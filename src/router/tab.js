

export default {
  path: '/component',
  component: tab,
  children: [
    { path: '/', component: Tab1 },
    { path: '/components/Tab2', component: Tab2 }
  ]
}
