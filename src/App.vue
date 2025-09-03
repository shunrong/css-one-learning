<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- 导航栏 -->
    <nav class="bg-white shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <router-link to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xs">前端</span>
            </div>
            <span class="text-xl font-bold text-gray-900">前端全栈学习</span>
          </router-link>

          <!-- 桌面端导航 -->
          <div class="hidden md:flex items-center space-x-8">
            <component
              v-for="item in navItems"
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
          <component
            v-for="item in navItems"
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
      navItems: [
        { name: 'HTML', path: '/html' },
        { name: 'CSS', path: '/css' },
        { name: 'JavaScript', path: '/javascript', disabled: true }
      ]
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
  @apply text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors;
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
</style>
