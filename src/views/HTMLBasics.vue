<template>
  <div class="html-basics-page">

    <!-- 主要内容区域 -->
    <div class="container mx-auto px-4 py-8 mt-8">
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[600px] overflow-hidden">
        <!-- HTML概览页面 -->
        <div v-if="$route.path === '/html'" class="overview p-8" key="html-overview">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">HTML 实用开发概览</h2>
          <p class="text-gray-600 mb-6 leading-relaxed">
            HTML（超文本标记语言）是网页的骨架结构。通过本节的学习，你将掌握现代Web开发中最实用的HTML技能：
          </p>

          <!-- 学习进度面板 -->
          <div class="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6 mb-8">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-orange-900">📊 学习进度</h3>
              <span class="text-sm text-orange-700">{{ completedCount }}/{{ totalCount }} 已完成</span>
            </div>
            <div class="w-full bg-orange-200 rounded-full h-3 mb-3">
              <div 
                class="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500"
                :style="{ width: progressPercentage + '%' }"
              ></div>
            </div>
            <p class="text-sm text-orange-700">
              完成度 {{ progressPercentage }}% - {{ getProgressMessage() }}
            </p>
          </div>

          <!-- 学习重点 -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">🎯 学习重点</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div v-for="item in navItems" :key="item.path" class="concept-card relative">
                <div class="flex items-start justify-between">
                  <div class="flex items-center mb-3">
                    <div :class="item.iconClass" class="mr-3">
                      <span class="text-lg">{{ item.icon }}</span>
                    </div>
                    <h4 class="font-semibold text-lg">{{ item.title }}</h4>
                  </div>
                  <button
                    @click="toggleCompletion(item.path)"
                    :class="[
                      'px-3 py-1 rounded-full text-xs font-medium transition-all',
                      item.completed 
                        ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                        : 'bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-800'
                    ]"
                  >
                    {{ item.completed ? '✓ 已完成' : '标记完成' }}
                  </button>
                </div>
                <p class="text-gray-600 mb-3">{{ item.description }}</p>
                <router-link 
                  :to="`/html/${item.path}`"
                  class="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  开始学习 →
                </router-link>
              </div>
            </div>
          </div>

          <!-- 学习方法 -->
          <div class="mb-8">
            <h3 class="text-xl font-semibold text-gray-800 mb-4">📚 学习方法</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 class="text-blue-800 font-semibold mb-2">🏗️ 结构化思维</h4>
                <ul class="text-blue-700 text-sm space-y-1">
                  <li>• 理解HTML语义化的重要性</li>
                  <li>• 学会选择正确的标签</li>
                  <li>• 注重文档结构的逻辑性</li>
                </ul>
              </div>
              <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 class="text-green-800 font-semibold mb-2">🎯 实践应用</h4>
                <ul class="text-green-700 text-sm space-y-1">
                  <li>• 动手编写完整的HTML页面</li>
                  <li>• 验证HTML代码的有效性</li>
                  <li>• 测试在不同浏览器中的表现</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 注意事项 -->
          <div class="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-orange-900 mb-3">⚠️ 学习注意事项</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 class="text-orange-800 font-medium mb-2">语义化标签</h4>
                <ul class="text-orange-700 text-sm space-y-1">
                  <li>• 选择最合适的语义化标签</li>
                  <li>• 避免过度使用div和span</li>
                  <li>• 考虑SEO和可访问性</li>
                </ul>
              </div>
              <div>
                <h4 class="text-orange-800 font-medium mb-2">性能优化</h4>
                <ul class="text-orange-700 text-sm space-y-1">
                  <li>• 合理使用meta标签</li>
                  <li>• 优化图片和媒体资源</li>
                  <li>• 注意页面加载性能</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 子页面内容 -->
        <router-view v-else :key="$route.path" />
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
  methods: {
    toggleCompletion(path) {
      const item = this.navItems.find(item => item.path === path)
      if (item) {
        item.completed = !item.completed
        this.saveProgress()
      }
    },
    saveProgress() {
      const progress = {}
      this.navItems.forEach(item => {
        progress[item.path] = item.completed
      })
      localStorage.setItem('html-progress', JSON.stringify(progress))
    },
    loadProgress() {
      try {
        const saved = localStorage.getItem('html-progress')
        if (saved) {
          const progress = JSON.parse(saved)
          this.navItems.forEach(item => {
            if (progress.hasOwnProperty(item.path)) {
              item.completed = progress[item.path]
            }
          })
        }
      } catch (error) {
        console.warn('Failed to load progress from localStorage:', error)
      }
    },
    getProgressMessage() {
      const percentage = this.progressPercentage
      if (percentage === 0) return '开始你的HTML学习之旅！'
      if (percentage < 30) return '基础学习阶段，继续努力！'
      if (percentage < 60) return '进展顺利，掌握核心技能！'
      if (percentage < 90) return '接近完成，最后冲刺！'
      return '恭喜完成HTML基础学习！'
    }
  },
  created() {
    this.loadProgress()
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

/* 概念卡片样式 */
.concept-card {
  @apply p-4 bg-gray-50 rounded-lg border border-gray-200;
}
</style>
