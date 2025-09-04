<template>
  <div class="js-basics-page">
 
    <!-- 主要内容区域 -->
    <div class="container mx-auto px-4 py-8 mt-8">
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[600px]">
        <!-- JavaScript概览页面 -->
        <div v-if="$route.path === '/javascript'" class="overview p-8" key="js-overview">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">JavaScript 核心编程概览</h2>
          <p class="text-gray-600 mb-6 leading-relaxed">
            JavaScript是现代Web开发的核心语言。通过本节的学习，你将掌握JavaScript编程的核心技能：
          </p>

          <!-- 学习进度面板 -->
          <div class="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-yellow-900">📊 学习进度</h3>
              <span class="text-sm text-yellow-700">{{ completedCount }}/{{ totalCount }} 已完成</span>
            </div>
            <div class="w-full bg-yellow-200 rounded-full h-3 mb-3">
              <div 
                class="bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full transition-all duration-500"
                :style="{ width: progressPercentage + '%' }"
              ></div>
            </div>
            <p class="text-sm text-yellow-700">
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
                  :to="`/javascript/${item.path}`"
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
                <h4 class="text-blue-800 font-semibold mb-2">🔄 循序渐进</h4>
                <ul class="text-blue-700 text-sm space-y-1">
                  <li>• 按照推荐顺序学习各个章节</li>
                  <li>• 每章学完后及时标记完成状态</li>
                  <li>• 多练习代码示例，加深理解</li>
                </ul>
              </div>
              <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 class="text-green-800 font-semibold mb-2">🛠️ 实践导向</h4>
                <ul class="text-green-700 text-sm space-y-1">
                  <li>• 动手编写每个代码示例</li>
                  <li>• 尝试修改代码观察不同效果</li>
                  <li>• 结合实际项目应用所学知识</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 注意事项 -->
          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-yellow-900 mb-3">⚠️ 学习注意事项</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 class="text-yellow-800 font-medium mb-2">基础概念</h4>
                <ul class="text-yellow-700 text-sm space-y-1">
                  <li>• 重点理解作用域和闭包概念</li>
                  <li>• 掌握this关键字的指向规则</li>
                  <li>• 理解同步与异步的区别</li>
                </ul>
              </div>
              <div>
                <h4 class="text-yellow-800 font-medium mb-2">实践建议</h4>
                <ul class="text-yellow-700 text-sm space-y-1">
                  <li>• 避免全局变量污染</li>
                  <li>• 养成良好的代码规范习惯</li>
                  <li>• 学会使用浏览器调试工具</li>
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
  name: 'JSBasics',
  data() {
    return {
      navItems: [
        {
          title: '数据类型',
          description: '基础数据类型与类型转换',
          path: 'datatypes',
          icon: '📊',
          iconClass: 'w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center',
          completed: false
        },
        {
          title: '函数编程',
          description: '函数声明、闭包和高阶函数',
          path: 'functions',
          icon: '⚡',
          iconClass: 'w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center',
          completed: false
        },
        {
          title: '原型继承',
          description: '原型链和面向对象编程',
          path: 'prototype',
          icon: '🔗',
          iconClass: 'w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center',
          completed: false
        },
        {
          title: 'DOM操作',
          description: '文档对象模型和事件处理',
          path: 'dom',
          icon: '🎛️',
          iconClass: 'w-10 h-10 bg-red-100 text-red-600 rounded-lg flex items-center justify-center',
          completed: false
        },
        {
          title: 'BOM API',
          description: '浏览器对象模型和Web API',
          path: 'bom',
          icon: '🌐',
          iconClass: 'w-10 h-10 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center',
          completed: false
        },
        {
          title: '异步编程',
          description: 'Promise、async/await和异步流程',
          path: 'async',
          icon: '⏱️',
          iconClass: 'w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center',
          completed: false
        },
        {
          title: '模块系统',
          description: 'ES6模块和模块化开发',
          path: 'modules',
          icon: '📦',
          iconClass: 'w-10 h-10 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center',
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
      localStorage.setItem('javascript-progress', JSON.stringify(progress))
    },
    loadProgress() {
      try {
        const saved = localStorage.getItem('javascript-progress')
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
      if (percentage === 0) return '开始你的JavaScript学习之旅！'
      if (percentage < 30) return '刚刚起步，继续加油！'
      if (percentage < 60) return '进展不错，保持学习节奏！'
      if (percentage < 90) return '即将完成，最后冲刺！'
      return '恭喜完成JavaScript核心学习！'
    }
  },
  created() {
    this.loadProgress()
  }
}
</script>

<style scoped>
/* 页面布局 */
.js-basics-page {
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
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(251, 146, 60, 0.1) 100%);
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
  background: linear-gradient(135deg, #fef3c7, #fed7aa);
  border-color: #fcd34d;
  box-shadow: 0 2px 8px rgba(251, 191, 36, 0.15);
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
  color: #d97706;
}

.nav-item-active .nav-description {
  color: #b45309;
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
.nav-item:nth-child(6) { animation-delay: 0.6s; }
.nav-item:nth-child(7) { animation-delay: 0.7s; }

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
