<template>
  <div class="html-basics-page">
    <!-- 头部导航区域 -->
    <section class="hero-section bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div class="container mx-auto px-4 py-12">
        <div class="text-center mb-8">
          <div class="flex items-center justify-center mb-4">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
              <span class="text-white font-bold text-2xl">&lt;/&gt;</span>
            </div>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            HTML <span class="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">实用开发</span>
          </h1>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            专注实际开发中的HTML应用，掌握语义化标签、表单处理、多媒体内容和现代Web技术
          </p>
        </div>

        <!-- 学习进度 -->
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-gray-900">学习进度</h3>
              <span class="text-sm text-gray-500">{{ completedCount }}/{{ totalCount }} 已完成</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
                :style="{ width: progressPercentage + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 主要内容区域 -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- 侧边导航 -->
        <aside class="lg:w-80 flex-shrink-0">
          <div class="sticky top-24">
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div class="p-4 border-b border-gray-200">
                <h2 class="text-lg font-semibold text-gray-900">学习内容</h2>
              </div>
              <nav class="p-2">
                <router-link
                  v-for="item in navItems"
                  :key="item.path"
                  :to="`/html/${item.path}`"
                  class="nav-item"
                  :class="{ 'nav-item-active': $route.path.includes(item.path) }"
                >
                  <div class="flex items-center">
                    <div class="nav-icon" :class="item.iconClass">
                      <span class="text-lg">{{ item.icon }}</span>
                    </div>
                    <div class="ml-3 flex-1">
                      <div class="nav-title">{{ item.title }}</div>
                      <div class="nav-description">{{ item.description }}</div>
                    </div>
                    <div v-if="item.completed" class="text-green-500 text-sm">
                      ✓
                    </div>
                  </div>
                </router-link>
              </nav>
            </div>

            <!-- 快速提示 -->
            <div class="mt-6 bg-orange-50 rounded-lg p-4 border border-orange-200">
              <h3 class="text-sm font-semibold text-orange-800 mb-2">💡 学习提示</h3>
              <p class="text-sm text-orange-700 leading-relaxed">
                HTML是网页的骨架结构。掌握语义化标签不仅有助于SEO优化，更能提升代码可读性和可维护性。
              </p>
            </div>
          </div>
        </aside>

        <!-- 主内容区域 -->
        <main class="flex-1 min-w-0">
          <div class="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[600px]">
            <!-- HTML概览页面 -->
            <div v-if="$route.path === '/html'" class="overview p-8">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">HTML 实用开发概览</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                HTML（超文本标记语言）是网页的骨架结构。通过本节的学习，你将掌握现代Web开发中最实用的HTML技能：
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="concept-card">
                  <h3 class="font-semibold text-lg mb-2">📝 语义化标签</h3>
                  <p class="text-gray-600">掌握HTML5语义化元素，提升SEO和可访问性</p>
                </div>
                <div class="concept-card">
                  <h3 class="font-semibold text-lg mb-2">📋 表单开发</h3>
                  <p class="text-gray-600">现代表单设计、验证和用户体验优化</p>
                </div>
                <div class="concept-card">
                  <h3 class="font-semibold text-lg mb-2">🎬 多媒体处理</h3>
                  <p class="text-gray-600">音频、视频、图片的响应式处理技巧</p>
                </div>
                <div class="concept-card">
                  <h3 class="font-semibold text-lg mb-2">🎨 Canvas绘图</h3>
                  <p class="text-gray-600">使用Canvas API实现图形绘制和动画效果</p>
                </div>
                <div class="concept-card">
                  <h3 class="font-semibold text-lg mb-2">📋 文档头部</h3>
                  <p class="text-gray-600">Meta标签、资源引入和性能优化</p>
                </div>
              </div>

              <div class="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-orange-900 mb-2">💡 学习建议</h3>
                <ul class="text-orange-800 space-y-1">
                  <li>• 从语义化标签开始，建立正确的HTML编写习惯</li>
                  <li>• 重点掌握表单开发，这是实际项目中最常用的技能</li>
                  <li>• 学习多媒体处理，提升页面的视觉表现力</li>
                  <li>• Canvas绘图为高级交互功能打基础</li>
                  <li>• 文档头部优化直接影响页面性能和SEO效果</li>
                </ul>
              </div>
            </div>
            
            <!-- 子页面内容 -->
            <router-view v-else />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HTMLBasics',
  data() {
    return {
      navItems: [
        {
          title: '文档头部',
          description: 'Meta标签、Script、Link等',
          path: 'header',
          icon: '📋',
          iconClass: 'w-10 h-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center',
          completed: false
        },
        {
          title: '语义化标签',
          description: '掌握HTML5语义化元素的使用',
          path: 'semantic',
          icon: '📝',
          iconClass: 'w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center',
          completed: false
        },
        {
          title: '表单开发',
          description: '学习表单元素和验证技巧',
          path: 'forms',
          icon: '📋',
          iconClass: 'w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center',
          completed: false
        },
        {
          title: '多媒体内容',
          description: '音频、视频和图片的处理',
          path: 'media',
          icon: '🎬',
          iconClass: 'w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center',
          completed: false
        },
        {
          title: 'Canvas 绘图',
          description: '学习Canvas API进行图形绘制',
          path: 'canvas',
          icon: '🎨',
          iconClass: 'w-10 h-10 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center',
          completed: false
        }
      ]
    }
  },
  computed: {
    completedCount() {
      return this.navItems.filter(item => item.completed).length
    },
    totalCount() {
      return this.navItems.length
    },
    progressPercentage() {
      return this.totalCount === 0 ? 0 : Math.round((this.completedCount / this.totalCount) * 100)
    }
  },
  created() {
    // HTML根路径显示概览页面，不自动重定向
  }
}
</script>

<style scoped>
/* 页面布局 */
.html-basics-page {
  min-height: 100vh;
  background: #fafafa;
}

.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(251, 146, 60, 0.1) 0%, rgba(239, 68, 68, 0.1) 100%);
  pointer-events: none;
}

/* 导航样式 */
.nav-item {
  display: block;
  padding: 1rem;
  margin: 0.25rem 0;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.nav-item:hover {
  background: #f8fafc;
  border-color: #e2e8f0;
}

.nav-item-active {
  background: linear-gradient(135deg, #fff7ed, #fef3c7);
  border-color: #fed7aa;
  box-shadow: 0 2px 8px rgba(251, 146, 60, 0.15);
}

.nav-icon {
  flex-shrink: 0;
}

.nav-title {
  font-weight: 600;
  color: #1f2937;
  font-size: 0.9rem;
  line-height: 1.3;
}

.nav-description {
  color: #6b7280;
  font-size: 0.75rem;
  line-height: 1.3;
  margin-top: 0.25rem;
}

.nav-item-active .nav-title {
  color: #ea580c;
}

.nav-item-active .nav-description {
  color: #c2410c;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .nav-item {
    padding: 0.75rem;
  }
  
  .nav-title {
    font-size: 0.85rem;
  }
  
  .nav-description {
    font-size: 0.7rem;
  }
}

/* 动画效果 */
.nav-item {
  opacity: 0;
  animation: slideInLeft 0.6s ease forwards;
}

.nav-item:nth-child(1) { animation-delay: 0.1s; }
.nav-item:nth-child(2) { animation-delay: 0.2s; }
.nav-item:nth-child(3) { animation-delay: 0.3s; }
.nav-item:nth-child(4) { animation-delay: 0.4s; }
.nav-item:nth-child(5) { animation-delay: 0.5s; }

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 内容区域滚动 */
main {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

/* 概念卡片样式 */
.concept-card {
  @apply p-4 bg-gray-50 rounded-lg border border-gray-200;
}

/* 自定义滚动条 */
main::-webkit-scrollbar {
  width: 6px;
}

main::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

main::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

main::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
