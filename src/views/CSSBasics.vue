<template>
  <div class="css-basics-page">
    <!-- 页面头部 -->
    <section class="page-header bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">CSS 基础知识</h1>
        <p class="text-xl opacity-90 max-w-3xl">
          深入学习 CSS 的核心概念，掌握现代前端开发必备的样式技能
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
                    :to="`/css/basics/${item.path}`"
                    class="nav-item"
                    :class="{ 'nav-item-active': $route.path.includes(item.path) }"
                  >
                    <span class="nav-icon mr-2" :class="item.iconClass">{{ item.icon }}</span>
                    {{ item.name }}
                  </router-link>
                </li>
              </ul>
            </nav>

            <!-- 进度指示器 -->
            <div class="bg-white rounded-lg shadow-md p-6 mt-6">
              <h4 class="font-semibold text-gray-900 mb-3">学习进度</h4>
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: progress + '%' }"></div>
              </div>
              <p class="text-sm text-gray-600 mt-2">{{ completedModules }}/{{ modules.length }} 模块完成</p>
            </div>
          </div>
        </aside>

        <!-- 主内容区域 -->
        <main class="flex-1">
          <!-- 默认概览页面 -->
          <div v-if="$route.path === '/css/basics'" class="overview">
            <div class="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">CSS 基础概览</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                CSS（层叠样式表）是用于描述网页外观和格式的语言。通过本节的学习，你将掌握：
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="concept-card">
                  <h3 class="font-semibold text-lg mb-2">🎨 视觉设计</h3>
                  <p class="text-gray-600">颜色、字体、间距等基础视觉元素的控制方法</p>
                </div>
                <div class="concept-card">
                  <h3 class="font-semibold text-lg mb-2">📐 布局系统</h3>
                  <p class="text-gray-600">Flexbox、Grid 等现代布局技术的原理和应用</p>
                </div>
                <div class="concept-card">
                  <h3 class="font-semibold text-lg mb-2">✨ 动效交互</h3>
                  <p class="text-gray-600">CSS 动画、过渡效果和变换的实现技巧</p>
                </div>
                <div class="concept-card">
                  <h3 class="font-semibold text-lg mb-2">📱 响应式设计</h3>
                  <p class="text-gray-600">适配不同设备和屏幕尺寸的设计方法</p>
                </div>
              </div>

              <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 学习建议</h3>
                <ul class="text-blue-800 space-y-1">
                  <li>• 按照左侧模块顺序学习，循序渐进</li>
                  <li>• 每个模块都有交互式示例，请动手实践</li>
                  <li>• 注意观察不同属性值的视觉效果差异</li>
                  <li>• 建议在浏览器开发者工具中实验和调试</li>
                </ul>
              </div>
            </div>

            <!-- 模块卡片 -->
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <div
                v-for="item in modules"
                :key="item.path"
                class="module-card group"
              >
                <div class="module-icon" :class="item.iconClass">
                  {{ item.icon }}
                </div>
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ item.name }}</h3>
                <p class="text-gray-600 text-sm">{{ item.description }}</p>
              </div>
            </div>
          </div>

          <!-- 具体模块内容 -->
          <router-view v-if="$route.path !== '/basics'" />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSSBasics',
  data() {
    return {
      modules: [
        {
          name: '布局系统',
          path: 'layout',
          icon: '📐',
          iconClass: 'bg-blue-100 text-blue-600',
          description: '掌握 Flexbox、Grid、定位等核心布局技术',
          completed: false
        },
        {
          name: '颜色系统',
          path: 'colors',
          icon: '🎨',
          iconClass: 'bg-red-100 text-red-600',
          description: '学习颜色表示方法、渐变和颜色理论',
          completed: false
        },
        {
          name: '字体排版',
          path: 'typography',
          icon: '✏️',
          iconClass: 'bg-green-100 text-green-600',
          description: '掌握字体、行高、字间距等排版基础',
          completed: false
        },
        {
          name: '间距系统',
          path: 'spacing',
          icon: '📏',
          iconClass: 'bg-yellow-100 text-yellow-600',
          description: '理解内外边距、盒模型的工作原理',
          completed: false
        },
        {
          name: '边框样式',
          path: 'borders',
          icon: '🔲',
          iconClass: 'bg-purple-100 text-purple-600',
          description: '学习边框、圆角、轮廓的设计技巧',
          completed: false
        },
        {
          name: '阴影效果',
          path: 'shadows',
          icon: '🌓',
          iconClass: 'bg-gray-100 text-gray-600',
          description: '掌握盒阴影、文字阴影的使用方法',
          completed: false
        },
        {
          name: '变换效果',
          path: 'transforms',
          icon: '🔄',
          iconClass: 'bg-indigo-100 text-indigo-600',
          description: '学习 2D/3D 变换、旋转、缩放等效果',
          completed: false
        },
        {
          name: '动画系统',
          path: 'animations',
          icon: '✨',
          iconClass: 'bg-pink-100 text-pink-600',
          description: '掌握 CSS 动画、过渡效果的实现',
          completed: false
        }
      ]
    }
  },
  computed: {
    completedModules() {
      return this.modules.filter(module => module.completed).length
    },
    progress() {
      return Math.round((this.completedModules / this.modules.length) * 100)
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
  @apply text-blue-600 bg-blue-50;
}

.nav-icon {
  @apply w-8 h-8 rounded-lg flex items-center justify-center text-sm;
}

/* 进度条样式 */
.progress-bar {
  @apply w-full bg-gray-200 rounded-full h-2 overflow-hidden;
}

.progress-fill {
  @apply h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out;
}

/* 概念卡片样式 */
.concept-card {
  @apply p-4 bg-gray-50 rounded-lg border border-gray-200;
}

/* 模块卡片样式 */
.module-card {
  @apply block p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300;
}

.module-icon {
  @apply w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-4;
}

.module-card:hover .module-icon {
  @apply transform scale-110;
}

/* 页面头部样式 */
.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px 0;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .sticky {
    position: static;
  }
}
</style>
