<template>
  <div class="postcss-page">
    <!-- 页面头部 -->
    <section class="page-header bg-gradient-to-r from-green-500 to-teal-600 text-white">
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">PostCSS 后处理</h1>
        <p class="text-xl opacity-90 max-w-3xl">
          掌握 CSS 后处理技术，实现现代化的样式构建流程
        </p>
      </div>
    </section>

    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- 侧边导航 -->
        <aside class="lg:col-span-1">
          <div class="sticky top-24">
            <nav class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">PostCSS 生态</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#what-is" class="nav-link">什么是 PostCSS</a></li>
                <li><a href="#plugins" class="nav-link">核心插件</a></li>
                <li><a href="#autoprefixer" class="nav-link">Autoprefixer</a></li>
                <li><a href="#preset-env" class="nav-link">postcss-preset-env</a></li>
                <li><a href="#cssnano" class="nav-link">优化插件</a></li>
                <li><a href="#config" class="nav-link">配置使用</a></li>
              </ul>
            </nav>
          </div>
        </aside>

        <!-- 主内容区域 -->
        <main class="lg:col-span-3">
          <!-- PostCSS 介绍 -->
          <section id="what-is" class="content-section">
            <h2 class="section-title">什么是 PostCSS？</h2>
            <div class="prose">
              <p>
                PostCSS 是一个用 JavaScript 工具和插件来转换 CSS 代码的工具。
                它不是一个预处理器，而是一个后处理器，可以通过插件系统实现各种 CSS 处理功能。
              </p>
              
              <div class="feature-grid">
                <div class="feature-card">
                  <h3>🔧 插件化架构</h3>
                  <p>模块化的插件系统，按需选择功能</p>
                </div>
                <div class="feature-card">
                  <h3>⚡ 高性能</h3>
                  <p>比传统预处理器快 3-30 倍</p>
                </div>
                <div class="feature-card">
                  <h3>🔮 未来 CSS</h3>
                  <p>提前使用未来的 CSS 特性</p>
                </div>
                <div class="feature-card">
                  <h3>🛠️ 工具集成</h3>
                  <p>易于集成到现有构建流程</p>
                </div>
              </div>
            </div>
          </section>

          <!-- 核心插件 -->
          <section id="plugins" class="content-section">
            <h2 class="section-title">核心插件生态</h2>
            <div class="plugins-showcase">
              <div class="plugin-category">
                <h3>🚀 现代化插件</h3>
                <div class="plugin-list">
                  <div class="plugin-item">
                    <strong>autoprefixer</strong> - 自动添加浏览器前缀
                  </div>
                  <div class="plugin-item">
                    <strong>postcss-preset-env</strong> - 使用未来 CSS 特性
                  </div>
                  <div class="plugin-item">
                    <strong>postcss-custom-properties</strong> - CSS 变量支持
                  </div>
                </div>
              </div>

              <div class="plugin-category">
                <h3>🎨 增强功能</h3>
                <div class="plugin-list">
                  <div class="plugin-item">
                    <strong>postcss-nested</strong> - 嵌套规则支持
                  </div>
                  <div class="plugin-item">
                    <strong>postcss-mixins</strong> - 混合器功能
                  </div>
                  <div class="plugin-item">
                    <strong>postcss-simple-vars</strong> - Sass 风格变量
                  </div>
                </div>
              </div>

              <div class="plugin-category">
                <h3>⚡ 优化插件</h3>
                <div class="plugin-list">
                  <div class="plugin-item">
                    <strong>cssnano</strong> - CSS 压缩优化
                  </div>
                  <div class="plugin-item">
                    <strong>postcss-uncss</strong> - 移除未使用样式
                  </div>
                  <div class="plugin-item">
                    <strong>postcss-assets</strong> - 资源管理
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Autoprefixer 演示 -->
          <section id="autoprefixer" class="content-section">
            <h2 class="section-title">Autoprefixer 自动前缀</h2>
            <div class="demo-container">
              <div class="code-comparison">
                <div class="before">
                  <h4>输入 CSS</h4>
                  <pre class="code-block"><code>.example {
  display: flex;
  background: linear-gradient(to right, #000, #fff);
  transform: rotate(45deg);
  user-select: none;
}</code></pre>
                </div>
                <div class="after">
                  <h4>PostCSS 处理后</h4>
                  <pre class="code-block"><code>.example {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background: -webkit-linear-gradient(left, #000, #fff);
  background: linear-gradient(to right, #000, #fff);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}</code></pre>
                </div>
              </div>
              
              <div class="config-example">
                <h4>配置示例</h4>
                <pre class="code-block"><code>// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        '> 1%',
        'last 2 versions',
        'Firefox ESR'
      ]
    })
  ]
}</code></pre>
              </div>
            </div>
          </section>

          <!-- 现代 CSS 特性 -->
          <section id="preset-env" class="content-section">
            <h2 class="section-title">postcss-preset-env 未来特性</h2>
            <div class="preset-env-demo">
              <div class="features-grid">
                <div class="feature-demo">
                  <h4>CSS 变量</h4>
                  <div class="code-comparison">
                    <div class="before">
                      <h5>现代 CSS</h5>
                      <pre class="code-block"><code>:root {
  --main-color: #06c;
}

.button {
  color: var(--main-color);
}</code></pre>
                    </div>
                    <div class="after">
                      <h5>兼容性处理</h5>
                      <pre class="code-block"><code>:root {
  --main-color: #06c;
}

.button {
  color: #06c;
  color: var(--main-color);
}</code></pre>
                    </div>
                  </div>
                </div>

                <div class="feature-demo">
                  <h4>自定义选择器</h4>
                  <div class="code-comparison">
                    <div class="before">
                      <h5>现代 CSS</h5>
                      <pre class="code-block"><code>@custom-selector :--heading h1, h2, h3;

:--heading {
  margin-top: 0;
}</code></pre>
                    </div>
                    <div class="after">
                      <h5>编译后</h5>
                      <pre class="code-block"><code>h1, h2, h3 {
  margin-top: 0;
}</code></pre>
                    </div>
                  </div>
                </div>

                <div class="feature-demo">
                  <h4>嵌套规则</h4>
                  <div class="code-comparison">
                    <div class="before">
                      <h5>嵌套语法</h5>
                      <pre class="code-block"><code>.component {
  & .title {
    font-size: 1.2em;
    
    & a {
      text-decoration: none;
    }
  }
}</code></pre>
                    </div>
                    <div class="after">
                      <h5>编译后</h5>
                      <pre class="code-block"><code>.component .title {
  font-size: 1.2em;
}

.component .title a {
  text-decoration: none;
}</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 优化配置 -->
          <section id="cssnano" class="content-section">
            <h2 class="section-title">CSS 优化与压缩</h2>
            <div class="optimization-demo">
              <div class="optimization-example">
                <h4>cssnano 压缩效果</h4>
                <div class="code-comparison">
                  <div class="before">
                    <h5>压缩前 (1.2KB)</h5>
                    <pre class="code-block"><code>.header {
  background-color: rgba(255, 255, 255, 1);
  padding: 10px 20px 10px 20px;
  margin: 0px;
  border-radius: 5px 5px 5px 5px;
}

.header .title {
  font-size: 24px;
  font-weight: normal;
  color: #333333;
}

.header .subtitle {
  font-size: 16px;
  color: #666666;
  margin-top: 5px;
}</code></pre>
                  </div>
                  <div class="after">
                    <h5>压缩后 (0.3KB)</h5>
                    <pre class="code-block"><code>.header{background-color:#fff;padding:10px 20px;margin:0;border-radius:5px}.header .title{font-size:24px;font-weight:400;color:#333}.header .subtitle{font-size:16px;color:#666;margin-top:5px}</code></pre>
                  </div>
                </div>
              </div>

              <div class="optimization-stats">
                <h4>优化统计</h4>
                <div class="stats-grid">
                  <div class="stat-item">
                    <span class="stat-value">75%</span>
                    <span class="stat-label">体积减少</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-value">50ms</span>
                    <span class="stat-label">加载提升</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-value">100%</span>
                    <span class="stat-label">兼容性</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 实际配置 -->
          <section id="config" class="content-section">
            <h2 class="section-title">项目配置示例</h2>
            <div class="config-examples">
              <div class="config-tab-content">
                <div class="config-item">
                  <h4>基础配置</h4>
                  <pre class="code-block"><code>// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 1
    }),
    require('cssnano')({
      preset: 'default'
    })
  ]
}</code></pre>
                </div>

                <div class="config-item">
                  <h4>Webpack 集成</h4>
                  <pre class="code-block"><code>// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                  ['postcss-preset-env', { stage: 1 }]
                ]
              }
            }
          }
        ]
      }
    ]
  }
}</code></pre>
                </div>

                <div class="config-item">
                  <h4>Vite 配置</h4>
                  <pre class="code-block"><code>// vite.config.js
export default {
  css: {
    postcss: {
      plugins: [
        require('autoprefixer'),
        require('postcss-preset-env')({
          stage: 1,
          features: {
            'nesting-rules': true,
            'custom-properties': true
          }
        })
      ]
    }
  }
}</code></pre>
                </div>

                <div class="config-item">
                  <h4>package.json 配置</h4>
                  <pre class="code-block"><code>{
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ],
  "postcss": {
    "plugins": {
      "autoprefixer": {},
      "postcss-preset-env": {
        "stage": 1
      }
    }
  }
}</code></pre>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCSS'
}
</script>

<style scoped>
.postcss-page {
  @apply min-h-screen bg-gray-50;
}

.page-header {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  padding: 20px 0;
}

.nav-link {
  @apply text-gray-600 hover:text-green-600 transition-colors;
}

.content-section {
  @apply bg-white rounded-lg shadow-md p-8 mb-8;
}

.section-title {
  @apply text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200;
}

.prose p {
  @apply text-gray-600 leading-relaxed mb-4;
}

.feature-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 mt-6;
}

.feature-card {
  @apply p-4 bg-green-50 rounded-lg border border-green-200;
}

.feature-card h3 {
  @apply font-semibold text-green-800 mb-2;
}

.feature-card p {
  @apply text-green-700 text-sm;
}

.plugins-showcase {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6;
}

.plugin-category h3 {
  @apply font-semibold text-gray-900 mb-4;
}

.plugin-list {
  @apply space-y-3;
}

.plugin-item {
  @apply p-3 bg-gray-50 rounded border border-gray-200 text-sm;
}

.plugin-item strong {
  @apply text-green-600;
}

.demo-container {
  @apply space-y-6;
}

.code-comparison {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-6;
}

.before, .after {
  @apply space-y-2;
}

.before h4, .after h4, .before h5, .after h5 {
  @apply font-semibold text-gray-900;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

.config-example {
  @apply space-y-2;
}

.preset-env-demo {
  @apply space-y-8;
}

.features-grid {
  @apply space-y-8;
}

.feature-demo {
  @apply space-y-4;
}

.feature-demo h4 {
  @apply font-semibold text-gray-900;
}

.optimization-demo {
  @apply space-y-8;
}

.optimization-example {
  @apply space-y-4;
}

.optimization-stats {
  @apply space-y-4;
}

.stats-grid {
  @apply grid grid-cols-3 gap-4;
}

.stat-item {
  @apply text-center p-4 bg-green-50 rounded-lg border border-green-200;
}

.stat-value {
  @apply block text-2xl font-bold text-green-600;
}

.stat-label {
  @apply block text-sm text-green-700 mt-1;
}

.config-examples {
  @apply space-y-6;
}

.config-item {
  @apply space-y-3;
}

.config-item h4 {
  @apply font-semibold text-gray-900;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .code-comparison {
    @apply grid-cols-1;
  }
  
  .plugins-showcase {
    @apply grid-cols-1;
  }
}
</style>
