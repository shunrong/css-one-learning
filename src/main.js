import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '@/styles/global.css'

// 路由配置
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/basics',
    name: 'CSSBasics',
    component: () => import('@/views/CSSBasics.vue'),
    children: [
      { path: 'layout', component: () => import('@/components/basics/Layout.vue') },
      { path: 'colors', component: () => import('@/components/basics/Colors.vue') },
      { path: 'typography', component: () => import('@/components/basics/Typography.vue') },
      { path: 'spacing', component: () => import('@/components/basics/Spacing.vue') },
      { path: 'borders', component: () => import('@/components/basics/Borders.vue') },
      { path: 'shadows', component: () => import('@/components/basics/Shadows.vue') },
      { path: 'transforms', component: () => import('@/components/basics/Transforms.vue') },
      { path: 'animations', component: () => import('@/components/basics/Animations.vue') }
    ]
  },
  {
    path: '/preprocessors',
    name: 'Preprocessors',
    component: () => import('@/views/Preprocessors.vue'),
    children: [
      { path: 'sass', component: () => import('@/components/preprocessors/SassDemo.vue') },
      { path: 'less', component: () => import('@/components/preprocessors/LessDemo.vue') },
      { path: 'comparison', component: () => import('@/components/preprocessors/Comparison.vue') }
    ]
  },
  {
    path: '/postcss',
    name: 'PostCSS',
    component: () => import('@/views/PostCSS.vue')
  },
  {
    path: '/css-in-js',
    name: 'CSSInJS',
    component: () => import('@/views/CSSInJS.vue')
  },
  {
    path: '/tailwind',
    name: 'Tailwind',
    component: () => import('@/views/Tailwind.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
