<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo & Current Tech -->
          <div class="flex items-center space-x-3">
            <!-- 首页Logo -->
            <router-link to="/" class="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-xs">前端</span>
              </div>
              <span class="text-xl font-bold text-gray-900">前端全栈学习</span>
            </router-link>
            
            <!-- 当前技术指示 -->
            <div v-if="currentTech" class="flex items-center text-gray-500">
              <span class="mx-2">/</span>
              <div class="flex items-center space-x-2">
                <div :class="currentTech.iconClass">
                  <span class="text-sm">{{ currentTech.symbol }}</span>
                </div>
                <span class="font-medium text-gray-700">{{ currentTech.name }}</span>
              </div>
            </div>
          </div>

          <!-- 桌面端导航 -->
          <div class="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4">
            <!-- 首页显示技术聚合导航 -->
            <template v-if="$route.path === '/'">
              <component
                v-for="item in techNavItems"
                :key="item.path"
                :is="item.disabled ? 'span' : 'router-link'"
                :to="item.disabled ? undefined : item.path"
                class="nav-link"
                :class="{ 
                  'nav-link-active': !item.disabled && $route.path.startsWith(item.path),
                  'nav-link-disabled': item.disabled
                }"
              >
                {{ item.name }}
                <span v-if="item.disabled" class="text-xs ml-1 opacity-60">敬请期待</span>
              </component>
            </template>
            
            <!-- 技术详情页显示模块导航 -->
            <template v-else>
              <component
                v-for="item in currentTechModulesWithHome"
                :key="item.path"
                :is="'router-link'"
                :to="item.path"
                class="nav-link"
                :class="{ 'nav-link-active': isNavItemActive(item) }"
              >
                {{ item.name }}
              </component>
            </template>
          </div>

          <!-- 移动端菜单按钮 -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    :d="mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"></path>
            </svg>
          </button>
        </div>

        <!-- 移动端导航菜单 -->
        <div v-show="mobileMenuOpen" class="md:hidden border-t border-gray-200 py-4">
          <!-- 首页显示技术聚合导航 -->
          <template v-if="$route.path === '/'">
            <component
              v-for="item in techNavItems"
              :key="item.path"
              :is="item.disabled ? 'div' : 'router-link'"
              :to="item.disabled ? undefined : item.path"
              class="block px-4 py-2 rounded-md"
              :class="item.disabled 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'"
              @click="!item.disabled && (mobileMenuOpen = false)"
            >
              {{ item.name }}
              <span v-if="item.disabled" class="text-xs ml-1">敬请期待</span>
            </component>
          </template>
          
          <!-- 技术详情页显示模块导航 -->
          <template v-else>
            <router-link
              v-for="item in currentTechModulesWithHome"
              :key="item.path"
              :to="item.path"
              class="block px-4 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              :class="{ 'bg-blue-50 text-blue-600': isNavItemActive(item) }"
              @click="mobileMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
          </template>
        </div>
      </div>
    </nav>

    <!-- 主内容区域 -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- 页脚 -->
    <footer class="bg-white border-t border-gray-200 mt-8">
      <div class="container mx-auto px-4 py-8">
        <div class="text-center text-gray-600 py-4">
          <p>&copy; 2024 前端全栈学习. 系统性的前端技术学习平台</p>
          <p class="mt-2 text-sm">
            涵盖 HTML 结构、CSS 样式、JavaScript 交互等前端核心技术
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false,
      // 首页技术聚合导航
      techNavItems: [
        { name: 'HTML', path: '/html' },
        { name: 'CSS', path: '/css' },
        { name: 'JavaScript', path: '/javascript' }
      ],
      // 技术信息
      techInfo: {
        html: {
          name: 'HTML',
          symbol: '</>',
          iconClass: 'w-6 h-6 bg-orange-100 text-orange-600 rounded flex items-center justify-center'
        },
        css: {
          name: 'CSS',
          symbol: '{}',
          iconClass: 'w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center'
        },
        javascript: {
          name: 'JavaScript',
          symbol: 'JS',
          iconClass: 'w-6 h-6 bg-yellow-100 text-yellow-600 rounded flex items-center justify-center'
        }
      },
      // 各技术的模块导航
      techModules: {
        html: [
          { name: '文档头部', path: '/html/header' },
          { name: '语义标签', path: '/html/semantic' },
          { name: '表单', path: '/html/forms' },
          { name: '多媒体', path: '/html/media' },
          { name: 'Canvas', path: '/html/canvas' }
        ],
        css: [
          { name: '基础', path: '/css/basics' },
          { name: '预处理器', path: '/css/preprocessors' },
          { name: 'PostCSS', path: '/css/postcss' },
          { name: 'CSS-in-JS', path: '/css/css-in-js' },
          { name: 'Tailwind', path: '/css/tailwind' }
        ],
        javascript: [
          { name: '数据类型', path: '/javascript/datatypes' },
          { name: '函数', path: '/javascript/functions' },
          { name: '原型', path: '/javascript/prototype' },
          { name: 'DOM', path: '/javascript/dom' },
          { name: 'BOM', path: '/javascript/bom' },
          { name: '异步', path: '/javascript/async' },
          { name: '模块', path: '/javascript/modules' }
        ]
      }
    }
  },
  computed: {
    currentTech() {
      if (this.$route.path.startsWith('/html')) {
        return this.techInfo.html
      } else if (this.$route.path.startsWith('/css')) {
        return this.techInfo.css
      } else if (this.$route.path.startsWith('/javascript')) {
        return this.techInfo.javascript
      }
      return null
    },
    currentTechModules() {
      if (this.$route.path.startsWith('/html')) {
        return this.techModules.html
      } else if (this.$route.path.startsWith('/css')) {
        return this.techModules.css
      } else if (this.$route.path.startsWith('/javascript')) {
        return this.techModules.javascript
      }
      return []
    },
    currentTechModulesWithHome() {
      const modules = this.currentTechModules
      if (modules.length === 0) return []
      
      // 获取技术根路径
      const techRoot = this.$route.path.startsWith('/html') ? '/html'
        : this.$route.path.startsWith('/css') ? '/css'
        : this.$route.path.startsWith('/javascript') ? '/javascript'
        : ''
      
      return [
        { name: '首页', path: techRoot },
        ...modules
      ]
    }
  },
  methods: {
    isNavItemActive(item) {
      const currentPath = this.$route.path
      
      // 获取技术根路径
      const techRoot = currentPath.startsWith('/html') ? '/html'
        : currentPath.startsWith('/css') ? '/css'
        : currentPath.startsWith('/javascript') ? '/javascript'
        : ''
      
      // 如果是首页（技术根路径），严格匹配
      if (item.path === techRoot) {
        return currentPath === techRoot
      }
      
      // 如果是子页面，使用startsWith匹配
      return currentPath === item.path || currentPath.startsWith(item.path + '/')
    }
  },
  watch: {
    $route() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-gray-900 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors whitespace-nowrap;
}

.nav-link-active {
  @apply text-blue-600 bg-blue-50;
}

.nav-link-disabled {
  @apply text-gray-400 cursor-not-allowed;
}

.nav-link-disabled:hover {
  @apply text-gray-400;
}

/* 平滑过渡效果 */
#app {
  transition: all 0.3s ease;
}

/* 路由过渡动画 */
.router-enter-active,
.router-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.router-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.router-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 响应式导航优化 */
@media (max-width: 1200px) {
  .nav-link {
    font-size: 0.75rem;
    padding: 0.5rem 0.75rem;
  }
}

@media (max-width: 1024px) {
  .nav-link {
    font-size: 0.7rem;
    padding: 0.5rem 0.5rem;
  }
}
</style>
