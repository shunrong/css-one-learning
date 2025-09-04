<template>
  <div class="home-page">
    <!-- Hero 区域 -->
    <section class="hero bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div class="container mx-auto px-4 py-20">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            前端 <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">全栈学习</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            系统性学习前端核心技术栈，从 HTML 结构到 CSS 样式，再到 JavaScript 交互，全面提升前端开发技能
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/css" class="btn-primary text-lg px-8 py-3">
              开始学习
            </router-link>
            <a href="#technologies" class="btn-secondary text-lg px-8 py-3">
              探索技术栈
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术栈介绍 -->
    <section id="technologies" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">核心技术栈</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            掌握前端开发的三大核心技术，构建完整的前端技能体系
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div 
            v-for="(tech, index) in technologies" 
            :key="index"
            class="tech-card"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="tech-icon mb-6">
              <div :class="tech.iconClass">
                <span class="tech-symbol">{{ tech.symbol }}</span>
              </div>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ tech.title }}</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">{{ tech.description }}</p>
            <div class="mb-6">
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="skill in tech.skills" 
                  :key="skill"
                  class="skill-tag"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
            <router-link 
              :to="tech.path" 
              class="tech-button"
              :class="tech.available ? 'tech-button-available' : 'tech-button-disabled'"
            >
              {{ tech.available ? '开始学习' : '即将推出' }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 学习特色 -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">学习特色</h2>
          <p class="text-lg text-gray-600">实用导向的学习方式，注重实际开发中的应用</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(feature, index) in learningFeatures" 
            :key="index"
            class="feature-item text-center"
          >
            <div class="feature-icon-wrapper mb-4">
              <div :class="feature.iconClass">
                <span class="text-2xl">{{ feature.icon }}</span>
              </div>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-sm text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 推荐学习路径 -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">推荐学习路径</h2>
          <p class="text-lg text-gray-600">循序渐进，从结构到样式到交互，构建完整的前端技能</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="learning-roadmap">
            <div 
              v-for="(step, index) in learningRoadmap" 
              :key="index"
              class="roadmap-step"
              :class="{ 'step-available': step.available }"
            >
              <div class="step-indicator">
                <div class="step-number">{{ index + 1 }}</div>
                <div v-if="index < learningRoadmap.length - 1" class="step-connector"></div>
              </div>
              <div class="step-content">
                <h3 class="step-title">{{ step.title }}</h3>
                <p class="step-description">{{ step.description }}</p>
                <div class="step-skills">
                  <span 
                    v-for="skill in step.skills" 
                    :key="skill"
                    class="skill-chip"
                  >
                    {{ skill }}
                  </span>
                </div>
                <component 
                  :is="step.available ? 'router-link' : 'div'"
                  :to="step.available ? step.path : undefined"
                  class="step-action"
                  :class="step.available ? 'step-action-available' : 'step-action-disabled'"
                >
                  {{ step.available ? '开始学习' : '即将推出' }}
                </component>
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
      technologies: [
        {
          title: 'HTML',
          symbol: '</>',
          description: '网页的骨架结构，掌握语义化标签、表单处理、多媒体内容、Canvas 绘图等实用技能',
          skills: ['语义化标签', '表单开发', '音视频处理', 'Canvas 绘图', 'Web 组件'],
          path: '/html',
          available: true,
          iconClass: 'w-20 h-20 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center text-3xl font-bold'
        },
        {
          title: 'CSS',
          symbol: '{}',
          description: '网页的视觉样式，从基础布局到现代工程化方案，全面掌握样式设计与开发技能',
          skills: ['布局设计', '响应式开发', '动画效果', '预处理器', '工程化方案'],
          path: '/css',
          available: true,
          iconClass: 'w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl font-bold'
        },
        {
          title: 'JavaScript',
          symbol: 'JS',
          description: '网页的交互逻辑，学习 JavaScript 基础语法、DOM 操作、BOM API 等核心概念',
          skills: ['数据类型', '函数编程', '原型继承', 'DOM 操作', 'BOM API'],
          path: '/javascript',
          available: true,
          iconClass: 'w-20 h-20 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center text-3xl font-bold'
        }
      ],
      learningFeatures: [
        {
          title: '实用导向',
          description: '专注实际开发中的应用场景',
          icon: '🎯',
          iconClass: 'w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto'
        },
        {
          title: '互动演示',
          description: '丰富的代码示例和实时预览',
          icon: '⚡',
          iconClass: 'w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto'
        },
        {
          title: '现代标准',
          description: '基于最新的Web标准和最佳实践',
          icon: '🚀',
          iconClass: 'w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto'
        },
        {
          title: '循序渐进',
          description: '从基础到高级的系统性学习路径',
          icon: '📚',
          iconClass: 'w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto'
        }
      ],
      learningRoadmap: [
        {
          title: 'HTML 结构基础',
          description: '掌握HTML标签、语义化开发、表单设计等核心技能',
          skills: ['语义化标签', '表单验证', '多媒体内容', 'SEO优化'],
          path: '/html',
          available: true
        },
        {
          title: 'CSS 样式设计',
          description: '学习CSS布局、动画、响应式设计和现代CSS工程化',
          skills: ['Flexbox/Grid', '响应式设计', 'CSS动画', '预处理器'],
          path: '/css',
          available: true
        },
        {
          title: 'JavaScript 交互',
          description: '掌握JavaScript编程、DOM操作和现代前端开发',
          skills: ['基础语法', 'DOM操作', '原型继承', 'BOM API'],
          path: '/javascript',
          available: true
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

/* 技术栈卡片样式 */
.tech-card {
  text-align: center;
  background: white;
  border: 2px solid #f1f5f9;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

.tech-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.tech-card:hover::before {
  transform: translateX(0);
}

.tech-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
  transform: translateY(-8px);
}

.tech-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.tech-symbol {
  font-family: 'Courier New', monospace;
  font-weight: bold;
}

.skill-tag {
  display: inline-block;
  background: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  margin: 0.125rem;
}

.tech-button {
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
}

.tech-button-available {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
}

.tech-button-available:hover {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.tech-button-disabled {
  background: #f1f5f9;
  color: #94a3b8;
  cursor: not-allowed;
}

/* 学习特色样式 */
.feature-item {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

.feature-item:nth-child(1) { animation-delay: 0.1s; }
.feature-item:nth-child(2) { animation-delay: 0.2s; }
.feature-item:nth-child(3) { animation-delay: 0.3s; }
.feature-item:nth-child(4) { animation-delay: 0.4s; }

.feature-icon-wrapper {
  display: flex;
  justify-content: center;
}

/* 学习路径样式 */
.learning-roadmap {
  position: relative;
}

.roadmap-step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 3rem;
  position: relative;
}

.step-indicator {
  position: relative;
  margin-right: 2rem;
}

.step-number {
  width: 50px;
  height: 50px;
  background: white;
  border: 3px solid #e2e8f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #94a3b8;
  font-size: 1.125rem;
  z-index: 1;
  position: relative;
  transition: all 0.3s ease;
}

.step-available .step-number {
  border-color: #3b82f6;
  color: #3b82f6;
  background: #dbeafe;
}

.step-connector {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 60px;
  background: #e2e8f0;
}

.step-available .step-connector {
  background: linear-gradient(to bottom, #3b82f6, #e2e8f0);
}

.step-content {
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  border: 2px solid #f1f5f9;
  transition: all 0.3s ease;
}

.step-available .step-content {
  border-color: #dbeafe;
}

.step-content:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.step-title {
  font-size: 1.375rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

.step-description {
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1rem;
}

.step-skills {
  margin-bottom: 1.5rem;
}

.skill-chip {
  display: inline-block;
  background: #f8fafc;
  color: #475569;
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0.25rem 0.25rem 0.25rem 0;
  border: 1px solid #e2e8f0;
}

.step-available .skill-chip {
  background: #eff6ff;
  color: #3b82f6;
  border-color: #bfdbfe;
}

.step-action {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  font-size: 0.9rem;
}

.step-action-available {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
}

.step-action-available:hover {
  background: linear-gradient(135deg, #2563eb, #1e40af);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
}

.step-action-disabled {
  background: #f8fafc;
  color: #94a3b8;
  cursor: not-allowed;
  border: 1px solid #e2e8f0;
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
