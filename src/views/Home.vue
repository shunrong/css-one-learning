<template>
  <div class="home-page">
    <!-- Hero 区域 -->
    <section class="hero bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div class="container mx-auto px-4 py-20">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            CSS <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">全栈学习</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            从基础样式到现代工程化方案，一站式掌握 CSS 的方方面面
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/basics" class="btn-primary text-lg px-8 py-3">
              开始学习
            </router-link>
            <a href="#features" class="btn-secondary text-lg px-8 py-3">
              了解更多
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 特性介绍 -->
    <section id="features" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">学习内容</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            系统性的 CSS 知识体系，从基础概念到高级应用，帮你构建完整的前端样式技能树
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="feature-card card card-hover fade-in"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="feature-icon mb-6">
              <div :class="feature.iconClass">
                <i :class="feature.icon"></i>
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ feature.title }}</h3>
            <p class="text-gray-600 mb-4">{{ feature.description }}</p>
            <router-link :to="feature.path" class="text-blue-600 hover:text-blue-700 font-medium">
              深入学习 →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术栈展示 -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">技术栈概览</h2>
          <p class="text-lg text-gray-600">涵盖现代前端开发中的主流 CSS 技术</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div 
            v-for="(tech, index) in techStack" 
            :key="index"
            class="tech-item text-center"
          >
            <div class="tech-logo mx-auto mb-3" :style="{ backgroundColor: tech.color }">
              <span class="tech-name">{{ tech.name }}</span>
            </div>
            <p class="text-sm text-gray-600">{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 学习路径 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">学习路径</h2>
          <p class="text-lg text-gray-600">按照推荐的顺序，循序渐进掌握 CSS</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="learning-path">
            <div 
              v-for="(step, index) in learningPath" 
              :key="index"
              class="step-item"
              :class="{ 'step-completed': step.completed }"
            >
              <div class="step-number">{{ index + 1 }}</div>
              <div class="step-content">
                <h3 class="step-title">{{ step.title }}</h3>
                <p class="step-description">{{ step.description }}</p>
                <router-link :to="step.path" class="step-link">
                  {{ step.completed ? '复习' : '开始学习' }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      features: [
        {
          title: 'CSS 基础',
          description: '掌握布局、颜色、字体、间距、边框、阴影、变换和动画等核心概念',
          path: '/basics',
          icon: 'css3-alt',
          iconClass: 'w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center'
        },
        {
          title: 'CSS 预处理器',
          description: '学习 Sass 和 Less，了解变量、嵌套、混合器等高级特性',
          path: '/preprocessors',
          icon: 'sass',
          iconClass: 'w-12 h-12 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-content'
        },
        {
          title: 'PostCSS 后处理',
          description: '掌握现代 CSS 工程化必备的后处理工具和插件生态',
          path: '/postcss',
          icon: 'cogs',
          iconClass: 'w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center'
        },
        {
          title: 'CSS-in-JS',
          description: '探索组件化时代的样式解决方案，理解其原理和最佳实践',
          path: '/css-in-js',
          icon: 'js-square',
          iconClass: 'w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center'
        },
        {
          title: 'TailwindCSS',
          description: '掌握原子化 CSS 框架，提升开发效率和样式一致性',
          path: '/tailwind',
          icon: 'wind',
          iconClass: 'w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center'
        },
        {
          title: '最佳实践',
          description: '学习现代前端项目中的 CSS 架构设计和性能优化策略',
          path: '/best-practices',
          icon: 'star',
          iconClass: 'w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center'
        }
      ],
      techStack: [
        { name: 'CSS3', color: '#1572B6', description: '现代CSS标准' },
        { name: 'Sass', color: '#CF649A', description: 'CSS预处理器' },
        { name: 'Less', color: '#1D365D', description: 'CSS预处理器' },
        { name: 'PostCSS', color: '#DD3A0A', description: 'CSS后处理' },
        { name: 'Styled', color: '#DB7093', description: 'CSS-in-JS' },
        { name: 'Tailwind', color: '#06B6D4', description: '原子化CSS' }
      ],
      learningPath: [
        {
          title: 'CSS 基础知识',
          description: '学习 CSS 的基本语法、选择器、盒模型等核心概念',
          path: '/basics',
          completed: false
        },
        {
          title: 'CSS 预处理器',
          description: '掌握 Sass/Less 的语法和工程化应用',
          path: '/preprocessors',
          completed: false
        },
        {
          title: 'PostCSS 生态',
          description: '了解 CSS 后处理的强大功能和插件系统',
          path: '/postcss',
          completed: false
        },
        {
          title: 'CSS-in-JS 方案',
          description: '探索组件化开发中的样式管理最佳实践',
          path: '/css-in-js',
          completed: false
        },
        {
          title: 'TailwindCSS 实战',
          description: '学习原子化 CSS 的设计理念和实际应用',
          path: '/tailwind',
          completed: false
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Hero 区域样式 */
.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
}

/* 特性卡片样式 */
.feature-card {
  text-align: center;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  background: white;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.1);
}

.feature-icon {
  display: flex;
  justify-content: center;
}

/* 技术栈样式 */
.tech-item {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

.tech-item:nth-child(1) { animation-delay: 0.1s; }
.tech-item:nth-child(2) { animation-delay: 0.2s; }
.tech-item:nth-child(3) { animation-delay: 0.3s; }
.tech-item:nth-child(4) { animation-delay: 0.4s; }
.tech-item:nth-child(5) { animation-delay: 0.5s; }
.tech-item:nth-child(6) { animation-delay: 0.6s; }

.tech-logo {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 0.75rem;
  margin-bottom: 0.75rem;
}

.tech-name {
  color: white;
  font-weight: 600;
  font-size: 0.75rem;
}

/* 学习路径样式 */
.learning-path {
  position: relative;
}

.learning-path::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
}

.step-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  position: relative;
}

.step-number {
  width: 40px;
  height: 40px;
  background: white;
  border: 3px solid #3b82f6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #3b82f6;
  margin-right: 2rem;
  z-index: 1;
}

.step-completed .step-number {
  background: #3b82f6;
  color: white;
}

.step-content {
  flex: 1;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.step-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.step-description {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.step-link {
  display: inline-flex;
  align-items: center;
  color: #3b82f6;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.step-link:hover {
  color: #2563eb;
}

/* 动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .learning-path::before {
    left: 15px;
  }
  
  .step-number {
    width: 30px;
    height: 30px;
    margin-right: 1rem;
    font-size: 0.875rem;
  }
  
  .step-content {
    padding: 1rem;
  }
  
  .tech-logo {
    width: 50px;
    height: 50px;
    font-size: 0.625rem;
  }
}
</style>
