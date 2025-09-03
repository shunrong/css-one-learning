<template>
  <div class="preprocessors-page">
    <!-- 页面头部 -->
    <section class="page-header bg-gradient-to-r from-pink-500 to-purple-600 text-white">
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">CSS 预处理器</h1>
        <p class="text-xl opacity-90 max-w-3xl">
          探索 Sass 和 Less 的强大功能，提升 CSS 开发效率和代码质量
        </p>
      </div>
    </section>

    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- 侧边导航 -->
        <aside class="lg:w-64 flex-shrink-0">
          <div class="sticky top-24">
            <nav class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">学习模块</h3>
              <ul class="space-y-2">
                <li v-for="item in modules" :key="item.path">
                  <router-link
                    :to="`/css/preprocessors/${item.path}`"
                    class="nav-item"
                    :class="{ 'nav-item-active': $route.path.includes(item.path) }"
                  >
                    <span class="nav-icon mr-2" :class="item.iconClass">{{ item.icon }}</span>
                    {{ item.name }}
                  </router-link>
                </li>
              </ul>
            </nav>

            <!-- 特性对比 -->
            <div class="bg-white rounded-lg shadow-md p-6 mt-6">
              <h4 class="font-semibold text-gray-900 mb-3">特性对比</h4>
              <div class="comparison-table text-sm">
                <div class="comparison-row">
                  <span class="feature">变量</span>
                  <span class="sass">✓</span>
                  <span class="less">✓</span>
                </div>
                <div class="comparison-row">
                  <span class="feature">嵌套</span>
                  <span class="sass">✓</span>
                  <span class="less">✓</span>
                </div>
                <div class="comparison-row">
                  <span class="feature">混合器</span>
                  <span class="sass">✓</span>
                  <span class="less">✓</span>
                </div>
                <div class="comparison-row">
                  <span class="feature">函数</span>
                  <span class="sass">✓✓</span>
                  <span class="less">✓</span>
                </div>
                <div class="comparison-row">
                  <span class="feature">条件语句</span>
                  <span class="sass">✓</span>
                  <span class="less">✗</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <!-- 主内容区域 -->
        <main class="flex-1">
          <!-- 默认概览页面 -->
          <div v-if="$route.path === '/css/preprocessors'" class="overview">
            <div class="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">CSS 预处理器概览</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                CSS 预处理器是一种工具，让你可以使用编程语言的特性来编写 CSS，然后编译生成标准的 CSS 代码。
                它们提供了变量、嵌套、混合器、函数等功能，大大提升了样式开发的效率和可维护性。
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="concept-card">
                  <h3 class="font-semibold text-lg mb-2 text-pink-600">🎨 Sass/SCSS</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    功能最强大的 CSS 预处理器，支持两种语法格式，拥有丰富的函数库和控制指令。
                  </p>
                  <ul class="text-xs text-gray-500 space-y-1">
                    <li>• 强大的编程功能</li>
                    <li>• 活跃的社区支持</li>
                    <li>• 丰富的内置函数</li>
                    <li>• 模块化系统</li>
                  </ul>
                </div>
                <div class="concept-card">
                  <h3 class="font-semibold text-lg mb-2 text-blue-600">⚡ Less</h3>
                  <p class="text-gray-600 text-sm mb-3">
                    轻量级的 CSS 预处理器，语法简洁易学，可以在浏览器端运行。
                  </p>
                  <ul class="text-xs text-gray-500 space-y-1">
                    <li>• 语法简单易学</li>
                    <li>• 可浏览器端编译</li>
                    <li>• 与 CSS 兼容性好</li>
                    <li>• 轻量级实现</li>
                  </ul>
                </div>
              </div>

              <div class="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-pink-900 mb-2">🚀 为什么使用预处理器？</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-pink-800">
                  <div>
                    <h4 class="font-medium mb-2">开发效率</h4>
                    <ul class="text-sm space-y-1">
                      <li>• 变量管理主题色彩</li>
                      <li>• 嵌套减少重复代码</li>
                      <li>• 混合器复用样式片段</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-medium mb-2">代码质量</h4>
                    <ul class="text-sm space-y-1">
                      <li>• 模块化组织代码</li>
                      <li>• 函数式编程思维</li>
                      <li>• 更好的代码复用性</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- 模块卡片 -->
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <router-link
                v-for="item in modules"
                :key="item.path"
                :to="`/preprocessors/${item.path}`"
                class="module-card group"
              >
                <div class="module-icon" :class="item.iconClass">
                  {{ item.icon }}
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ item.name }}</h3>
                <p class="text-gray-600 text-sm">{{ item.description }}</p>
                <div class="mt-4 text-pink-600 font-medium text-sm">
                  深入学习 →
                </div>
              </router-link>
            </div>

            <!-- 快速对比 -->
            <div class="mt-12 bg-white rounded-lg shadow-md p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">Sass vs Less 快速对比</h2>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="sass-example">
                  <h3 class="text-lg font-semibold text-pink-600 mb-3">Sass/SCSS 示例</h3>
                  <pre class="code-block"><code>// 变量
$primary-color: #3498db;
$font-size: 16px;

// 嵌套和混合器
.button {
  background: $primary-color;
  font-size: $font-size;
  
  &:hover {
    background: darken($primary-color, 10%);
  }
  
  @include border-radius(4px);
}

// 混合器定义
@mixin border-radius($radius) {
  border-radius: $radius;
}</code></pre>
                </div>
                
                <div class="less-example">
                  <h3 class="text-lg font-semibold text-blue-600 mb-3">Less 示例</h3>
                  <pre class="code-block"><code>// 变量
@primary-color: #3498db;
@font-size: 16px;

// 嵌套和混合器
.button {
  background: @primary-color;
  font-size: @font-size;
  
  &:hover {
    background: darken(@primary-color, 10%);
  }
  
  .border-radius(4px);
}

// 混合器定义
.border-radius(@radius) {
  border-radius: @radius;
}</code></pre>
                </div>
              </div>
            </div>
          </div>

          <!-- 具体模块内容 -->
          <router-view v-if="$route.path !== '/preprocessors'" />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preprocessors',
  data() {
    return {
      modules: [
        {
          name: 'Sass 深入学习',
          path: 'sass',
          icon: '🎨',
          iconClass: 'bg-pink-100 text-pink-600',
          description: '学习 Sass/SCSS 的变量、嵌套、混合器、函数等高级特性'
        },
        {
          name: 'Less 实战指南',
          path: 'less',
          icon: '⚡',
          iconClass: 'bg-blue-100 text-blue-600',
          description: '掌握 Less 的语法特性和实际项目应用技巧'
        },
        {
          name: '对比与选择',
          path: 'comparison',
          icon: '⚖️',
          iconClass: 'bg-purple-100 text-purple-600',
          description: '深入对比 Sass 和 Less，选择适合的预处理器'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* 导航样式 */
.nav-item {
  @apply flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors;
}

.nav-item-active {
  @apply text-pink-600 bg-pink-50;
}

.nav-icon {
  @apply w-8 h-8 rounded-lg flex items-center justify-center text-sm;
}

/* 对比表格 */
.comparison-table {
  @apply space-y-2;
}

.comparison-row {
  @apply grid grid-cols-3 gap-2 text-center;
}

.feature {
  @apply text-left font-medium text-gray-700;
}

.sass {
  @apply text-pink-600 font-semibold;
}

.less {
  @apply text-blue-600 font-semibold;
}

/* 概念卡片样式 */
.concept-card {
  @apply p-4 bg-gray-50 rounded-lg border border-gray-200;
}

/* 模块卡片样式 */
.module-card {
  @apply block p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-pink-300 transition-all duration-300;
}

.module-icon {
  @apply w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-4;
}

.module-card:hover .module-icon {
  @apply transform scale-110;
}

/* 页面头部样式 */
.page-header {
  background: linear-gradient(135deg, #e91e63 0%, #9c27b0 100%);
  padding: 20px 0;
}

/* 代码样式 */
.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .sticky {
    position: static;
  }
}
</style>
