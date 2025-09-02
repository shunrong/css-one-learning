<template>
  <div class="tailwind-page">
    <!-- 页面头部 -->
    <section class="page-header bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">TailwindCSS</h1>
        <p class="text-xl opacity-90 max-w-3xl">
          掌握原子化 CSS 框架，提升开发效率和设计一致性
        </p>
      </div>
    </section>

    <div class="container mx-auto px-4 py-8">
      <!-- TailwindCSS 概述 -->
      <section class="content-section">
        <h2 class="section-title">TailwindCSS 原子化设计理念</h2>
        <div class="overview-content">
          <div class="intro-text">
            <p class="text-lg text-gray-600 mb-6">
              TailwindCSS 是一个功能优先（utility-first）的 CSS 框架，
              它提供了大量的原子化 CSS 类，让你可以快速构建现代化的用户界面。
            </p>
          </div>

          <div class="philosophy-grid">
            <div class="philosophy-card">
              <h3 class="text-lg font-semibold text-cyan-700 mb-3">🎯 功能优先</h3>
              <p class="text-gray-600 text-sm">
                使用小而专一的工具类，而不是预设计的组件，获得更大的灵活性。
              </p>
            </div>
            <div class="philosophy-card">
              <h3 class="text-lg font-semibold text-cyan-700 mb-3">🎨 约束驱动</h3>
              <p class="text-gray-600 text-sm">
                通过设计系统约束，确保视觉一致性和可维护性。
              </p>
            </div>
            <div class="philosophy-card">
              <h3 class="text-lg font-semibold text-cyan-700 mb-3">⚡ 高效开发</h3>
              <p class="text-gray-600 text-sm">
                无需离开 HTML，直接在标记中设计，提升开发效率。
              </p>
            </div>
            <div class="philosophy-card">
              <h3 class="text-lg font-semibold text-cyan-700 mb-3">📱 响应式优先</h3>
              <p class="text-gray-600 text-sm">
                内置响应式设计系统，轻松适配各种屏幕尺寸。
              </p>
            </div>
          </div>

          <div class="comparison-demo">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">传统 CSS vs TailwindCSS</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="comparison-column">
                <h4 class="font-semibold text-red-600 mb-3">传统方式</h4>
                <pre class="code-block"><code>/* CSS */
.btn {
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background-color: #2563eb;
}

/* HTML */
&lt;button class="btn"&gt;
  点击我
&lt;/button&gt;</code></pre>
              </div>
              <div class="comparison-column">
                <h4 class="font-semibold text-cyan-600 mb-3">TailwindCSS</h4>
                <pre class="code-block"><code>/* 无需写 CSS */

/* HTML */
&lt;button class="px-4 py-2 bg-blue-500 text-white rounded border-none cursor-pointer hover:bg-blue-600"&gt;
  点击我
&lt;/button&gt;</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 核心概念 -->
      <section class="content-section">
        <h2 class="section-title">核心概念与工具类</h2>
        <div class="concepts-content">
          <div class="concept-category">
            <h3 class="concept-title">🎨 颜色系统</h3>
            <div class="color-demo">
              <div class="color-palette">
                <div class="color-section">
                  <h4 class="text-sm font-semibold text-gray-700 mb-2">Gray</h4>
                  <div class="color-row">
                    <div class="color-item bg-gray-100" title="gray-100"></div>
                    <div class="color-item bg-gray-300" title="gray-300"></div>
                    <div class="color-item bg-gray-500" title="gray-500"></div>
                    <div class="color-item bg-gray-700" title="gray-700"></div>
                    <div class="color-item bg-gray-900" title="gray-900"></div>
                  </div>
                </div>
                <div class="color-section">
                  <h4 class="text-sm font-semibold text-gray-700 mb-2">Blue</h4>
                  <div class="color-row">
                    <div class="color-item bg-blue-100" title="blue-100"></div>
                    <div class="color-item bg-blue-300" title="blue-300"></div>
                    <div class="color-item bg-blue-500" title="blue-500"></div>
                    <div class="color-item bg-blue-700" title="blue-700"></div>
                    <div class="color-item bg-blue-900" title="blue-900"></div>
                  </div>
                </div>
                <div class="color-section">
                  <h4 class="text-sm font-semibold text-gray-700 mb-2">Green</h4>
                  <div class="color-row">
                    <div class="color-item bg-green-100" title="green-100"></div>
                    <div class="color-item bg-green-300" title="green-300"></div>
                    <div class="color-item bg-green-500" title="green-500"></div>
                    <div class="color-item bg-green-700" title="green-700"></div>
                    <div class="color-item bg-green-900" title="green-900"></div>
                  </div>
                </div>
              </div>
              <div class="color-usage">
                <h4 class="font-semibold mb-2">颜色使用示例</h4>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">bg-blue-100</span>
                  <span class="px-3 py-1 bg-green-500 text-white rounded-full text-sm">bg-green-500</span>
                  <span class="px-3 py-1 bg-red-500 text-white rounded-full text-sm">bg-red-500</span>
                  <span class="px-3 py-1 text-purple-600 border border-purple-600 rounded-full text-sm">text-purple-600</span>
                </div>
              </div>
            </div>
          </div>

          <div class="concept-category">
            <h3 class="concept-title">📏 间距系统</h3>
            <div class="spacing-demo">
              <div class="spacing-scale">
                <h4 class="font-semibold mb-3">内边距 (Padding) 示例</h4>
                <div class="spacing-examples">
                  <div class="spacing-item p-1 bg-blue-100 border border-blue-300">p-1</div>
                  <div class="spacing-item p-2 bg-blue-100 border border-blue-300">p-2</div>
                  <div class="spacing-item p-4 bg-blue-100 border border-blue-300">p-4</div>
                  <div class="spacing-item p-6 bg-blue-100 border border-blue-300">p-6</div>
                  <div class="spacing-item p-8 bg-blue-100 border border-blue-300">p-8</div>
                </div>
              </div>
              <div class="spacing-scale">
                <h4 class="font-semibold mb-3">外边距 (Margin) 示例</h4>
                <div class="spacing-examples">
                  <div class="spacing-container">
                    <div class="spacing-item m-2 bg-green-100 border border-green-300">m-2</div>
                  </div>
                  <div class="spacing-container">
                    <div class="spacing-item m-4 bg-green-100 border border-green-300">m-4</div>
                  </div>
                  <div class="spacing-container">
                    <div class="spacing-item m-6 bg-green-100 border border-green-300">m-6</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="concept-category">
            <h3 class="concept-title">📱 响应式设计</h3>
            <div class="responsive-demo">
              <div class="breakpoint-info">
                <h4 class="font-semibold mb-3">断点系统</h4>
                <div class="breakpoints-grid">
                  <div class="breakpoint-item">
                    <span class="breakpoint-name">sm</span>
                    <span class="breakpoint-value">640px</span>
                  </div>
                  <div class="breakpoint-item">
                    <span class="breakpoint-name">md</span>
                    <span class="breakpoint-value">768px</span>
                  </div>
                  <div class="breakpoint-item">
                    <span class="breakpoint-name">lg</span>
                    <span class="breakpoint-value">1024px</span>
                  </div>
                  <div class="breakpoint-item">
                    <span class="breakpoint-name">xl</span>
                    <span class="breakpoint-value">1280px</span>
                  </div>
                  <div class="breakpoint-item">
                    <span class="breakpoint-name">2xl</span>
                    <span class="breakpoint-value">1536px</span>
                  </div>
                </div>
              </div>
              <div class="responsive-example">
                <h4 class="font-semibold mb-3">响应式示例</h4>
                <div class="responsive-box bg-red-500 sm:bg-blue-500 md:bg-green-500 lg:bg-purple-500 xl:bg-yellow-500 text-white p-4 rounded text-center font-semibold">
                  调整浏览器窗口大小查看颜色变化
                </div>
                <p class="text-sm text-gray-600 mt-2">
                  类名：<code class="bg-gray-100 px-1 rounded">bg-red-500 sm:bg-blue-500 md:bg-green-500 lg:bg-purple-500 xl:bg-yellow-500</code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 实用工具类 -->
      <section class="content-section">
        <h2 class="section-title">实用工具类演示</h2>
        <div class="utilities-demo">
          <div class="utility-category">
            <h3 class="utility-title">🎭 显示与定位</h3>
            <div class="utility-examples">
              <div class="utility-item">
                <div class="flex items-center justify-center h-16 bg-blue-100 border border-blue-300 rounded">
                  <span class="text-blue-800">flex items-center justify-center</span>
                </div>
              </div>
              <div class="utility-item">
                <div class="grid grid-cols-3 gap-2">
                  <div class="bg-green-100 p-2 text-center rounded">1</div>
                  <div class="bg-green-100 p-2 text-center rounded">2</div>
                  <div class="bg-green-100 p-2 text-center rounded">3</div>
                </div>
                <p class="text-sm text-gray-600 mt-1">grid grid-cols-3 gap-2</p>
              </div>
            </div>
          </div>

          <div class="utility-category">
            <h3 class="utility-title">✨ 效果与动画</h3>
            <div class="utility-examples">
              <div class="utility-item">
                <div class="transform hover:scale-110 transition-transform duration-300 bg-purple-500 text-white p-4 rounded cursor-pointer text-center">
                  悬停缩放效果
                </div>
                <p class="text-sm text-gray-600 mt-1">transform hover:scale-110 transition-transform</p>
              </div>
              <div class="utility-item">
                <div class="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-4 rounded cursor-pointer">
                  阴影变化效果
                </div>
                <p class="text-sm text-gray-600 mt-1">shadow-lg hover:shadow-xl transition-shadow</p>
              </div>
            </div>
          </div>

          <div class="utility-category">
            <h3 class="utility-title">🎨 状态变体</h3>
            <div class="utility-examples">
              <div class="utility-item">
                <button class="bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-800 text-white px-4 py-2 rounded transition-colors">
                  多状态按钮
                </button>
                <p class="text-sm text-gray-600 mt-1">hover:, focus:, active: 状态</p>
              </div>
              <div class="utility-item">
                <div class="group cursor-pointer">
                  <div class="bg-gray-200 group-hover:bg-gray-300 p-4 rounded">
                    <h4 class="group-hover:text-blue-600 transition-colors">分组悬停</h4>
                    <p class="text-gray-600 group-hover:text-gray-800">悬停父元素查看效果</p>
                  </div>
                </div>
                <p class="text-sm text-gray-600 mt-1">group group-hover: 分组状态</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 组件构建 -->
      <section class="content-section">
        <h2 class="section-title">用 TailwindCSS 构建组件</h2>
        <div class="components-demo">
          <div class="component-example">
            <h3 class="component-title">卡片组件</h3>
            <div class="component-showcase">
              <div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div class="md:flex">
                  <div class="md:shrink-0">
                    <div class="h-48 w-full md:h-full md:w-48 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                  </div>
                  <div class="p-8">
                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">案例研究</div>
                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">学习 TailwindCSS</a>
                    <p class="mt-2 text-slate-500">通过实际项目学习如何使用 TailwindCSS 构建现代化的用户界面。</p>
                    <div class="mt-4">
                      <button class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition-colors">
                        阅读更多
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="component-code">
              <h4 class="font-semibold mb-2">HTML 代码</h4>
              <pre class="code-block"><code>&lt;div class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden"&gt;
  &lt;div class="md:flex"&gt;
    &lt;div class="md:shrink-0"&gt;
      &lt;div class="h-48 w-full md:h-full md:w-48 bg-gradient-to-r from-cyan-400 to-blue-500"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="p-8"&gt;
      &lt;div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"&gt;案例研究&lt;/div&gt;
      &lt;a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"&gt;
        学习 TailwindCSS
      &lt;/a&gt;
      &lt;p class="mt-2 text-slate-500"&gt;
        通过实际项目学习如何使用 TailwindCSS 构建现代化的用户界面。
      &lt;/p&gt;
      &lt;div class="mt-4"&gt;
        &lt;button class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition-colors"&gt;
          阅读更多
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
            </div>
          </div>

          <div class="component-example">
            <h3 class="component-title">表单组件</h3>
            <div class="component-showcase">
              <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">联系我们</h2>
                <form class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                    <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入您的姓名">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                    <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="请输入您的邮箱">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">消息</label>
                    <textarea rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none" placeholder="请输入您的消息"></textarea>
                  </div>
                  <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    发送消息
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 配置与定制 -->
      <section class="content-section">
        <h2 class="section-title">配置与定制</h2>
        <div class="config-content">
          <div class="config-section">
            <h3 class="config-title">基础配置</h3>
            <pre class="code-block"><code>// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1e40af',
          secondary: '#64748b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}</code></pre>
          </div>

          <div class="config-section">
            <h3 class="config-title">自定义工具类</h3>
            <pre class="code-block"><code>// 在 CSS 文件中添加自定义工具类
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-md p-6 border border-gray-200;
  }
}

@layer utilities {
  .text-shadow-sm {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  .backdrop-blur-xs {
    backdrop-filter: blur(2px);
  }
}</code></pre>
          </div>

          <div class="config-section">
            <h3 class="config-title">项目集成</h3>
            <div class="integration-tabs">
              <div class="integration-item">
                <h4 class="font-semibold mb-2">Vite 项目</h4>
                <pre class="code-block"><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// vite.config.js
export default {
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}</code></pre>
              </div>
              <div class="integration-item">
                <h4 class="font-semibold mb-2">Next.js 项目</h4>
                <pre class="code-block"><code>npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true,
  },
}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 最佳实践 -->
      <section class="content-section">
        <h2 class="section-title">最佳实践</h2>
        <div class="best-practices">
          <div class="practice-grid">
            <div class="practice-item">
              <h3 class="practice-title">🎯 设计系统</h3>
              <ul class="practice-list">
                <li>建立一致的设计令牌</li>
                <li>定义标准的组件模式</li>
                <li>使用语义化的自定义类</li>
                <li>维护设计与代码的同步</li>
              </ul>
            </div>
            <div class="practice-item">
              <h3 class="practice-title">⚡ 性能优化</h3>
              <ul class="practice-list">
                <li>使用 PurgeCSS 移除未使用的样式</li>
                <li>合理配置 content 选项</li>
                <li>避免过度嵌套的组合类</li>
                <li>使用 JIT 模式提升构建速度</li>
              </ul>
            </div>
            <div class="practice-item">
              <h3 class="practice-title">🛠️ 开发体验</h3>
              <ul class="practice-list">
                <li>配置编辑器插件和自动补全</li>
                <li>使用类名排序工具</li>
                <li>建立团队编码规范</li>
                <li>充分利用官方文档和工具</li>
              </ul>
            </div>
            <div class="practice-item">
              <h3 class="practice-title">🎨 组件化</h3>
              <ul class="practice-list">
                <li>提取可复用的组件模式</li>
                <li>使用 @apply 指令组合样式</li>
                <li>避免过长的类名列表</li>
                <li>保持组件的单一职责</li>
              </ul>
            </div>
          </div>

          <div class="tips-section">
            <h3 class="tips-title">💡 实用技巧</h3>
            <div class="tips-grid">
              <div class="tip-item">
                <h4 class="tip-title">类名组织</h4>
                <p class="tip-description">按功能分组排列类名：布局 → 尺寸 → 外观 → 交互</p>
                <code class="tip-example">flex items-center w-full h-12 bg-blue-500 text-white hover:bg-blue-600</code>
              </div>
              <div class="tip-item">
                <h4 class="tip-title">条件样式</h4>
                <p class="tip-description">在 JavaScript 中动态组合类名</p>
                <code class="tip-example">className={`btn ${primary ? 'btn-primary' : 'btn-secondary'}`}</code>
              </div>
              <div class="tip-item">
                <h4 class="tip-title">调试技巧</h4>
                <p class="tip-description">使用 outline 类快速调试布局</p>
                <code class="tip-example">outline outline-red-500 outline-1</code>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tailwind'
}
</script>

<style scoped>
.tailwind-page {
  @apply min-h-screen bg-gray-50;
}

.page-header {
  background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
  padding: 20px 0;
}

.content-section {
  @apply bg-white rounded-lg shadow-md p-8 mb-8;
}

.section-title {
  @apply text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200;
}

/* 概述部分 */
.overview-content {
  @apply space-y-8;
}

.philosophy-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.philosophy-card {
  @apply p-4 bg-cyan-50 rounded-lg border border-cyan-200;
}

.comparison-demo {
  @apply mt-8;
}

.comparison-column {
  @apply space-y-3;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

/* 核心概念 */
.concepts-content {
  @apply space-y-8;
}

.concept-category {
  @apply space-y-4;
}

.concept-title {
  @apply text-lg font-semibold text-gray-900;
}

.color-demo {
  @apply space-y-6;
}

.color-palette {
  @apply space-y-4;
}

.color-section {
  @apply space-y-2;
}

.color-row {
  @apply flex space-x-2;
}

.color-item {
  @apply w-8 h-8 rounded border border-gray-300 cursor-pointer;
}

.spacing-demo {
  @apply space-y-6;
}

.spacing-examples {
  @apply flex flex-wrap items-end gap-4;
}

.spacing-item {
  @apply text-xs font-mono text-center;
}

.spacing-container {
  @apply bg-gray-100 p-2 border border-gray-300 rounded;
}

.responsive-demo {
  @apply space-y-6;
}

.breakpoints-grid {
  @apply grid grid-cols-2 md:grid-cols-5 gap-3;
}

.breakpoint-item {
  @apply text-center p-3 bg-cyan-50 rounded border border-cyan-200;
}

.breakpoint-name {
  @apply block font-semibold text-cyan-700;
}

.breakpoint-value {
  @apply block text-sm text-cyan-600;
}

.responsive-box {
  @apply transition-colors duration-300;
}

/* 工具类演示 */
.utilities-demo {
  @apply space-y-8;
}

.utility-category {
  @apply space-y-4;
}

.utility-title {
  @apply text-lg font-semibold text-gray-900;
}

.utility-examples {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.utility-item {
  @apply space-y-2;
}

/* 组件演示 */
.components-demo {
  @apply space-y-12;
}

.component-example {
  @apply space-y-6;
}

.component-title {
  @apply text-lg font-semibold text-gray-900;
}

.component-showcase {
  @apply p-6 bg-gray-50 rounded-lg;
}

.component-code {
  @apply space-y-2;
}

/* 配置部分 */
.config-content {
  @apply space-y-8;
}

.config-section {
  @apply space-y-4;
}

.config-title {
  @apply text-lg font-semibold text-gray-900;
}

.integration-tabs {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.integration-item {
  @apply space-y-2;
}

/* 最佳实践 */
.best-practices {
  @apply space-y-8;
}

.practice-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.practice-item {
  @apply p-4 bg-cyan-50 rounded-lg border border-cyan-200;
}

.practice-title {
  @apply font-semibold text-cyan-800 mb-3;
}

.practice-list {
  @apply space-y-2 text-sm text-cyan-700;
}

.practice-list li {
  @apply flex items-start space-x-2;
}

.practice-list li::before {
  content: "•";
  @apply text-cyan-500 font-bold;
}

.tips-section {
  @apply space-y-4;
}

.tips-title {
  @apply text-lg font-semibold text-gray-900;
}

.tips-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6;
}

.tip-item {
  @apply p-4 bg-yellow-50 rounded-lg border border-yellow-200;
}

.tip-title {
  @apply font-semibold text-yellow-800 mb-2;
}

.tip-description {
  @apply text-sm text-yellow-700 mb-2;
}

.tip-example {
  @apply block bg-yellow-100 px-2 py-1 rounded text-xs font-mono text-yellow-800 break-all;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .philosophy-grid {
    @apply grid-cols-1;
  }
  
  .utility-examples {
    @apply grid-cols-1;
  }
  
  .practice-grid {
    @apply grid-cols-1;
  }
  
  .tips-grid {
    @apply grid-cols-1;
  }
}
</style>
