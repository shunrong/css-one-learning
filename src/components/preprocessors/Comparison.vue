<template>
  <div class="comparison-demo">
    <div class="demo-header">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Sass vs Less 深度对比</h2>
      <p class="text-gray-600">全面对比两大主流 CSS 预处理器，助你做出最佳选择</p>
    </div>

    <!-- 特性对比表 -->
    <section class="demo-section">
      <h3 class="section-title">特性对比一览表</h3>
      
      <div class="comparison-table-container">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>特性</th>
              <th class="sass-column">Sass/SCSS</th>
              <th class="less-column">Less</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="feature in comparisonFeatures" :key="feature.name">
              <td class="feature-name">{{ feature.name }}</td>
              <td  :class="getSupportClass(feature.sass)">
                <span class="support-icon">{{ getSupportIcon(feature.sass) }}</span>
                <span class="support-text">{{ getSupportText(feature.sass) }}</span>
              </td>
              <td  :class="getSupportClass(feature.less)">
                <span class="support-icon">{{ getSupportIcon(feature.less) }}</span>
                <span class="support-text">{{ getSupportText(feature.less) }}</span>
              </td>
              <td class="feature-description">{{ feature.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 语法对比 -->
    <section class="demo-section">
      <h3 class="section-title">语法对比</h3>
      
      <div class="syntax-comparison">
        <div class="comparison-tabs">
          <button 
            v-for="tab in syntaxTabs" 
            :key="tab.id"
            @click="activeSyntaxTab = tab.id"
            class="tab-button"
            :class="{ active: activeSyntaxTab === tab.id }"
          >
            {{ tab.name }}
          </button>
        </div>
        
        <div class="tab-content">
          <div v-if="activeSyntaxTab === 'variables'" class="syntax-panel">
            <h4 class="comparison-title">变量语法</h4>
            <div class="code-comparison">
              <div class="code-column sass">
                <h5>Sass/SCSS</h5>
                <pre class="code-block"><code>// SCSS 语法
$primary-color: #3498db;
$font-size: 16px;
$border-radius: 4px;

// Sass 语法（缩进）
$primary-color: #3498db
$font-size: 16px
$border-radius: 4px

// 插值
$prefix: 'app';
.#{$prefix}-button {
  color: $primary-color;
}</code></pre>
              </div>
              <div class="code-column less">
                <h5>Less</h5>
                <pre class="code-block"><code>// Less 语法
@primary-color: #3498db;
@font-size: 16px;
@border-radius: 4px;

// 插值
@prefix: 'app';
.@{prefix}-button {
  color: @primary-color;
}</code></pre>
              </div>
            </div>
            <div class="comparison-notes">
              <div class="note sass-note">
                <h6>Sass 特点</h6>
                <ul>
                  <li>支持两种语法格式</li>
                  <li>使用 $ 符号定义变量</li>
                  <li>插值使用 #{} 语法</li>
                </ul>
              </div>
              <div class="note less-note">
                <h6>Less 特点</h6>
                <ul>
                  <li>只有一种语法格式</li>
                  <li>使用 @ 符号定义变量</li>
                  <li>插值使用 @{} 语法</li>
                </ul>
              </div>
            </div>
          </div>

          <div v-if="activeSyntaxTab === 'mixins'" class="syntax-panel">
            <h4 class="comparison-title">混合器语法</h4>
            <div class="code-comparison">
              <div class="code-column sass">
                <h5>Sass/SCSS</h5>
                <pre class="code-block"><code>// 定义混合器
@mixin button-style($bg, $color: white) {
  background: $bg;
  color: $color;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
}

// 使用混合器
.btn-primary {
  @include button-style(#007bff);
}

// 带内容块的混合器
@mixin respond-to($breakpoint) {
  @if $breakpoint == mobile {
    @media (max-width: 767px) {
      @content;
    }
  }
}

.sidebar {
  width: 300px;
  
  @include respond-to(mobile) {
    width: 100%;
  }
}</code></pre>
              </div>
              <div class="code-column less">
                <h5>Less</h5>
                <pre class="code-block"><code>// 定义混合器
.button-style(@bg, @color: white) {
  background: @bg;
  color: @color;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
}

// 使用混合器
.btn-primary {
  .button-style(#007bff);
}

// 命名空间混合器
#utils() {
  .clearfix() {
    &:after {
      content: '';
      display: table;
      clear: both;
    }
  }
}

.container {
  #utils > .clearfix();
}</code></pre>
              </div>
            </div>
          </div>

          <div v-if="activeSyntaxTab === 'functions'" class="syntax-panel">
            <h4 class="comparison-title">函数与运算</h4>
            <div class="code-comparison">
              <div class="code-column sass">
                <h5>Sass/SCSS</h5>
                <pre class="code-block"><code>// 自定义函数
@function calculate-rem($size, $base: 16px) {
  @return ($size / $base) * 1rem;
}

// 内置函数
$primary: #3498db;
$lighter: lighten($primary, 20%);
$darker: darken($primary, 15%);
$transparent: rgba($primary, 0.8);

// 颜色操作
$complement: complement($primary);
$mixed: mix($primary, #fff, 60%);

// 数学运算
$width: 100px;
$half-width: $width / 2;
$double-width: $width * 2;

// 列表和映射
$fonts: 'Helvetica', 'Arial', sans-serif;
$breakpoints: (
  'small': 480px,
  'medium': 768px,
  'large': 1024px
);

@each $name, $size in $breakpoints {
  .breakpoint-#{$name} {
    width: $size;
  }
}</code></pre>
              </div>
              <div class="code-column less">
                <h5>Less</h5>
                <pre class="code-block"><code>// 内置函数
@primary: #3498db;
@lighter: lighten(@primary, 20%);
@darker: darken(@primary, 15%);
@transparent: rgba(@primary, 80%);

// 颜色操作
@mixed: mix(@primary, #fff, 60%);

// 数学运算
@width: 100px;
@half-width: @width / 2;
@double-width: @width * 2;

// 字符串函数
@prefix: "app";
@escaped: e("calc(100% - 20px)");

// 单位转换
@pixels: 16px;
@rems: unit(@pixels / 16, rem);

// 类型检测
.when-string() when (isstring(@value)) {
  content: "是字符串";
}

.when-number() when (isnumber(@value)) {
  content: "是数字";
}</code></pre>
              </div>
            </div>
          </div>

          <div v-if="activeSyntaxTab === 'control'" class="syntax-panel">
            <h4 class="comparison-title">控制指令</h4>
            <div class="code-comparison">
              <div class="code-column sass">
                <h5>Sass/SCSS</h5>
                <pre class="code-block"><code>// @if 条件判断
@mixin theme($name) {
  @if $name == dark {
    background: #333;
    color: #fff;
  } @else if $name == light {
    background: #fff;
    color: #333;
  } @else {
    background: #f5f5f5;
    color: #666;
  }
}

// @for 循环
@for $i from 1 through 4 {
  .col-#{$i} {
    width: 25% * $i;
  }
}

// @each 遍历
$social: facebook, twitter, youtube;
@each $network in $social {
  .icon-#{$network} {
    background-image: url('#{$network}.png');
  }
}

// @while 循环
$columns: 12;
$i: 1;
@while $i <= $columns {
  .grid-#{$i} {
    width: percentage($i / $columns);
  }
  $i: $i + 1;
}</code></pre>
              </div>
              <div class="code-column less">
                <h5>Less</h5>
                <pre class="code-block"><code>// 条件混合器（Guards）
.theme(@name) when (@name = dark) {
  background: #333;
  color: #fff;
}

.theme(@name) when (@name = light) {
  background: #fff;
  color: #333;
}

.theme(@name) when (default()) {
  background: #f5f5f5;
  color: #666;
}

// 递归循环（模拟 @for）
.generate-columns(@n, @i: 1) when (@i =< @n) {
  .col-@{i} {
    width: percentage(@i / @n);
  }
  .generate-columns(@n, (@i + 1));
}

.generate-columns(4);

// 条件表达式
@mobile: true;
@desktop: false;

.responsive {
  width: if(@mobile, 100%, 300px);
}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 生态系统对比 -->
    <section class="demo-section">
      <h3 class="section-title">生态系统与工具链</h3>
      
      <div class="ecosystem-comparison">
        <div class="ecosystem-grid">
          <div class="ecosystem-item sass">
            <h4>Sass 生态系统</h4>
            <div class="ecosystem-category">
              <h5>🛠️ 构建工具</h5>
              <ul>
                <li>node-sass / dart-sass</li>
                <li>sass-loader (Webpack)</li>
                <li>gulp-sass</li>
                <li>parcel-plugin-sass</li>
              </ul>
            </div>
            <div class="ecosystem-category">
              <h5>📚 框架集成</h5>
              <ul>
                <li>Bootstrap (SCSS)</li>
                <li>Foundation</li>
                <li>Bulma</li>
                <li>Material-UI</li>
              </ul>
            </div>
            <div class="ecosystem-category">
              <h5>🎨 设计系统</h5>
              <ul>
                <li>Compass</li>
                <li>Bourbon</li>
                <li>Susy</li>
                <li>Breakpoint</li>
              </ul>
            </div>
          </div>

          <div class="ecosystem-item less">
            <h4>Less 生态系统</h4>
            <div class="ecosystem-category">
              <h5>🛠️ 构建工具</h5>
              <ul>
                <li>less.js</li>
                <li>less-loader (Webpack)</li>
                <li>gulp-less</li>
                <li>rollup-plugin-less</li>
              </ul>
            </div>
            <div class="ecosystem-category">
              <h5>📚 框架集成</h5>
              <ul>
                <li>Ant Design</li>
                <li>Bootstrap (Less 版本)</li>
                <li>Semantic UI</li>
                <li>UIKit</li>
              </ul>
            </div>
            <div class="ecosystem-category">
              <h5>🎨 工具库</h5>
              <ul>
                <li>LESS Elements</li>
                <li>Preboot</li>
                <li>LESS Hat</li>
                <li>3L</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 性能对比 -->
    <section class="demo-section">
      <h3 class="section-title">性能与构建速度</h3>
      
      <div class="performance-comparison">
        <div class="performance-metrics">
          <div class="metric-card">
            <h4>编译速度</h4>
            <div class="speed-chart">
              <div class="speed-bar sass">
                <span class="bar-label">Dart Sass</span>
                <div class="bar" style="width: 85%"></div>
                <span class="bar-value">较快</span>
              </div>
              <div class="speed-bar less">
                <span class="bar-label">Less.js</span>
                <div class="bar" style="width: 95%"></div>
                <span class="bar-value">快</span>
              </div>
            </div>
          </div>

          <div class="metric-card">
            <h4>内存占用</h4>
            <div class="memory-chart">
              <div class="memory-item sass">
                <span>Sass</span>
                <div class="memory-usage">
                  <div class="usage-bar" style="width: 70%"></div>
                </div>
                <span>中等</span>
              </div>
              <div class="memory-item less">
                <span>Less</span>
                <div class="memory-usage">
                  <div class="usage-bar" style="width: 45%"></div>
                </div>
                <span>较低</span>
              </div>
            </div>
          </div>

          <div class="metric-card">
            <h4>功能丰富度</h4>
            <div class="feature-score">
              <div class="score-item">
                <span>Sass</span>
                <div class="score-stars">
                  <span v-for="i in 5" :key="i" class="star filled">★</span>
                </div>
              </div>
              <div class="score-item">
                <span>Less</span>
                <div class="score-stars">
                  <span v-for="i in 4" :key="i" class="star filled">★</span>
                  <span class="star">★</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="performance-details">
          <h4>详细对比</h4>
          <table class="performance-table">
            <thead>
              <tr>
                <th>指标</th>
                <th>Sass</th>
                <th>Less</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>编译器</td>
                <td>Dart Sass / LibSass</td>
                <td>Less.js</td>
                <td>实现语言和架构</td>
              </tr>
              <tr>
                <td>编译速度</td>
                <td>中等</td>
                <td>快</td>
                <td>小型项目差异不大</td>
              </tr>
              <tr>
                <td>文件大小</td>
                <td>较大</td>
                <td>较小</td>
                <td>编译器本身的大小</td>
              </tr>
              <tr>
                <td>运行环境</td>
                <td>Node.js</td>
                <td>浏览器 + Node.js</td>
                <td>Less 可在浏览器运行</td>
              </tr>
              <tr>
                <td>错误提示</td>
                <td>详细</td>
                <td>一般</td>
                <td>调试友好度</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 使用场景推荐 -->
    <section class="demo-section">
      <h3 class="section-title">使用场景推荐</h3>
      
      <div class="scenarios">
        <div class="scenario-grid">
          <div class="scenario-card sass-card">
            <h4>选择 Sass 的场景</h4>
            <div class="scenarios-list">
              <div class="scenario-item">
                <h5>🏢 大型企业项目</h5>
                <p>需要复杂的样式逻辑和编程功能</p>
              </div>
              <div class="scenario-item">
                <h5>🎨 设计系统开发</h5>
                <p>构建可复用的组件库和主题系统</p>
              </div>
              <div class="scenario-item">
                <h5>🔧 高度定制化</h5>
                <p>需要复杂的函数、条件和循环逻辑</p>
              </div>
              <div class="scenario-item">
                <h5>📚 开源框架</h5>
                <p>Bootstrap、Foundation 等主流框架</p>
              </div>
              <div class="scenario-item">
                <h5>👥 团队协作</h5>
                <p>团队已有 Sass 经验和工具链</p>
              </div>
            </div>
          </div>

          <div class="scenario-card less-card">
            <h4>选择 Less 的场景</h4>
            <div class="scenarios-list">
              <div class="scenario-item">
                <h5>🚀 快速原型</h5>
                <p>需要快速开发和简单的样式处理</p>
              </div>
              <div class="scenario-item">
                <h5>📱 中小型项目</h5>
                <p>项目规模不大，需求相对简单</p>
              </div>
              <div class="scenario-item">
                <h5>🌐 浏览器端编译</h5>
                <p>需要在浏览器中实时编译样式</p>
              </div>
              <div class="scenario-item">
                <h5>🔧 Ant Design 生态</h5>
                <p>使用 Ant Design 等基于 Less 的框架</p>
              </div>
              <div class="scenario-item">
                <h5>📈 学习成本优先</h5>
                <p>团队希望快速上手预处理器</p>
              </div>
            </div>
          </div>
        </div>

        <div class="decision-matrix">
          <h4>决策矩阵</h4>
          <div class="matrix-table">
            <table class="decision-table">
              <thead>
                <tr>
                  <th>考虑因素</th>
                  <th>权重</th>
                  <th>Sass</th>
                  <th>Less</th>
                  <th>推荐</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>学习曲线</td>
                  <td>🔥🔥🔥</td>
                  <td>较陡峭</td>
                  <td>平缓</td>
                  <td class="recommend-less">Less</td>
                </tr>
                <tr>
                  <td>功能丰富度</td>
                  <td>🔥🔥🔥🔥</td>
                  <td>非常丰富</td>
                  <td>中等</td>
                  <td class="recommend-sass">Sass</td>
                </tr>
                <tr>
                  <td>社区活跃度</td>
                  <td>🔥🔥🔥</td>
                  <td>很活跃</td>
                  <td>活跃</td>
                  <td class="recommend-sass">Sass</td>
                </tr>
                <tr>
                  <td>编译速度</td>
                  <td>🔥🔥</td>
                  <td>中等</td>
                  <td>快</td>
                  <td class="recommend-less">Less</td>
                </tr>
                <tr>
                  <td>生态系统</td>
                  <td>🔥🔥🔥🔥</td>
                  <td>丰富</td>
                  <td>中等</td>
                  <td class="recommend-sass">Sass</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- 迁移指南 -->
    <section class="demo-section">
      <h3 class="section-title">迁移指南</h3>
      
      <div class="migration-guide">
        <div class="migration-tabs">
          <button 
            v-for="tab in migrationTabs" 
            :key="tab.id"
            @click="activeMigrationTab = tab.id"
            class="tab-button"
            :class="{ active: activeMigrationTab === tab.id }"
          >
            {{ tab.name }}
          </button>
        </div>
        
        <div class="tab-content">
          <div v-if="activeMigrationTab === 'css-to-sass'" class="migration-panel">
            <h4>CSS → Sass 迁移</h4>
            <div class="migration-steps">
              <div class="step">
                <h5>步骤 1: 文件重命名</h5>
                <code>.css → .scss</code>
                <p>SCSS 完全兼容 CSS 语法</p>
              </div>
              <div class="step">
                <h5>步骤 2: 变量替换</h5>
                <pre class="migration-code"><code>/* CSS */
:root {
  --primary-color: #3498db;
}

/* SCSS */
$primary-color: #3498db;</code></pre>
              </div>
              <div class="step">
                <h5>步骤 3: 嵌套优化</h5>
                <pre class="migration-code"><code>/* CSS */
.nav { }
.nav ul { }
.nav ul li { }

/* SCSS */
.nav {
  ul {
    li { }
  }
}</code></pre>
              </div>
            </div>
          </div>

          <div v-if="activeMigrationTab === 'less-to-sass'" class="migration-panel">
            <h4>Less → Sass 迁移</h4>
            <div class="migration-mapping">
              <table class="mapping-table">
                <thead>
                  <tr>
                    <th>特性</th>
                    <th>Less</th>
                    <th>Sass</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>变量</td>
                    <td><code>@variable</code></td>
                    <td><code>$variable</code></td>
                  </tr>
                  <tr>
                    <td>插值</td>
                    <td><code>@{variable}</code></td>
                    <td><code>#{$variable}</code></td>
                  </tr>
                  <tr>
                    <td>混合器</td>
                    <td><code>.mixin()</code></td>
                    <td><code>@include mixin()</code></td>
                  </tr>
                  <tr>
                    <td>混合器定义</td>
                    <td><code>.mixin() { }</code></td>
                    <td><code>@mixin mixin() { }</code></td>
                  </tr>
                  <tr>
                    <td>条件</td>
                    <td><code>when (@condition)</code></td>
                    <td><code>@if $condition</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-if="activeMigrationTab === 'sass-to-less'" class="migration-panel">
            <h4>Sass → Less 迁移</h4>
            <div class="migration-challenges">
              <div class="challenge">
                <h5>⚠️ 功能限制</h5>
                <ul>
                  <li>Less 不支持 @for、@while 循环</li>
                  <li>函数系统相对简单</li>
                  <li>条件逻辑表达能力有限</li>
                </ul>
              </div>
              <div class="challenge">
                <h5>🔄 替代方案</h5>
                <ul>
                  <li>使用递归混合器模拟循环</li>
                  <li>简化复杂的逻辑判断</li>
                  <li>利用 JavaScript 预处理</li>
                </ul>
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
  name: 'ComparisonDemo',
  data() {
    return {
      activeSyntaxTab: 'variables',
      activeMigrationTab: 'css-to-sass',
      
      syntaxTabs: [
        { id: 'variables', name: '变量' },
        { id: 'mixins', name: '混合器' },
        { id: 'functions', name: '函数' },
        { id: 'control', name: '控制指令' }
      ],
      
      migrationTabs: [
        { id: 'css-to-sass', name: 'CSS → Sass' },
        { id: 'less-to-sass', name: 'Less → Sass' },
        { id: 'sass-to-less', name: 'Sass → Less' }
      ],
      
      comparisonFeatures: [
        {
          name: '变量',
          sass: 'full',
          less: 'full',
          description: '定义和使用可重用的值'
        },
        {
          name: '嵌套',
          sass: 'full',
          less: 'full',
          description: '选择器和属性的嵌套'
        },
        {
          name: '混合器',
          sass: 'full',
          less: 'full',
          description: '可重用的样式片段'
        },
        {
          name: '函数',
          sass: 'full',
          less: 'partial',
          description: '内置和自定义函数'
        },
        {
          name: '条件语句',
          sass: 'full',
          less: 'partial',
          description: '@if/@else 和 guards'
        },
        {
          name: '循环',
          sass: 'full',
          less: 'none',
          description: '@for/@each/@while'
        },
        {
          name: '数学运算',
          sass: 'full',
          less: 'full',
          description: '基础数学计算'
        },
        {
          name: '颜色函数',
          sass: 'full',
          less: 'full',
          description: '颜色操作和转换'
        },
        {
          name: '字符串操作',
          sass: 'full',
          less: 'partial',
          description: '字符串处理函数'
        },
        {
          name: '列表/数组',
          sass: 'full',
          less: 'none',
          description: '数据结构操作'
        },
        {
          name: '映射/对象',
          sass: 'full',
          less: 'none',
          description: '键值对数据结构'
        },
        {
          name: '模块系统',
          sass: 'full',
          less: 'partial',
          description: '@use/@forward 和 @import'
        },
        {
          name: '浏览器支持',
          sass: 'none',
          less: 'full',
          description: '客户端编译能力'
        },
        {
          name: '编译速度',
          sass: 'partial',
          less: 'full',
          description: '构建性能表现'
        }
      ]
    }
  },
  methods: {
    getSupportClass(level) {
      return {
        'support-full': level === 'full',
        'support-partial': level === 'partial',
        'support-none': level === 'none'
      }
    },
    
    getSupportIcon(level) {
      const icons = {
        'full': '✅',
        'partial': '⚠️',
        'none': '❌'
      }
      return icons[level] || '❓'
    },
    
    getSupportText(level) {
      const texts = {
        'full': '完全支持',
        'partial': '部分支持',
        'none': '不支持'
      }
      return texts[level] || '未知'
    }
  }
}
</script>

<style scoped>
.comparison-demo {
  @apply space-y-8;
}

.demo-header {
  @apply bg-white rounded-lg shadow-md p-6 border border-gray-200;
}

.demo-section {
  @apply bg-white rounded-lg shadow-md overflow-hidden border border-gray-200;
}

.section-title {
  @apply text-xl font-semibold text-gray-900 p-6 pb-4 border-b border-gray-200;
}

/* 对比表格 */
.comparison-table-container {
  @apply overflow-x-auto p-6;
}

.comparison-table {
  @apply w-full border-collapse;
}

.comparison-table th {
  @apply bg-gray-50 text-left p-3 font-semibold border-b border-gray-200;
}

.comparison-table td {
  @apply p-3 border-b border-gray-100;
}

.sass-column {
  @apply text-pink-600;
}

.less-column {
  @apply text-blue-600;
}

.feature-name {
  @apply font-medium;
}

.support-icon {
  @apply text-lg mr-2;
}

.support-full {
  @apply text-green-600;
}

.support-partial {
  @apply text-yellow-600;
}

.support-none {
  @apply text-red-600;
}

.feature-description {
  @apply text-sm text-gray-600;
}

/* 语法对比 */
.syntax-comparison {
  @apply p-6;
}

.comparison-tabs, .migration-tabs {
  @apply flex space-x-2 mb-6;
}

.tab-button {
  @apply px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm;
}

.tab-button.active {
  @apply bg-purple-500 text-white;
}

.syntax-panel {
  @apply space-y-6;
}

.comparison-title {
  @apply text-lg font-semibold text-gray-900;
}

.code-comparison {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-6;
}

.code-column {
  @apply space-y-3;
}

.code-column h5 {
  @apply font-semibold;
}

.code-column.sass h5 {
  @apply text-pink-600;
}

.code-column.less h5 {
  @apply text-blue-600;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

.comparison-notes {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6;
}

.note {
  @apply p-4 rounded-lg border;
}

.sass-note {
  @apply bg-pink-50 border-pink-200;
}

.sass-note h6 {
  @apply font-semibold text-pink-800 mb-2;
}

.sass-note ul {
  @apply text-sm text-pink-700 space-y-1;
}

.less-note {
  @apply bg-blue-50 border-blue-200;
}

.less-note h6 {
  @apply font-semibold text-blue-800 mb-2;
}

.less-note ul {
  @apply text-sm text-blue-700 space-y-1;
}

.note li {
  @apply flex items-start space-x-2;
}

.note li::before {
  content: "•";
  @apply font-bold;
}

/* 生态系统对比 */
.ecosystem-comparison {
  @apply p-6;
}

.ecosystem-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8;
}

.ecosystem-item {
  @apply space-y-6;
}

.ecosystem-item h4 {
  @apply text-lg font-semibold text-center p-3 rounded-lg;
}

.ecosystem-item.sass h4 {
  @apply bg-pink-100 text-pink-800;
}

.ecosystem-item.less h4 {
  @apply bg-blue-100 text-blue-800;
}

.ecosystem-category {
  @apply space-y-2;
}

.ecosystem-category h5 {
  @apply font-semibold text-gray-900;
}

.ecosystem-category ul {
  @apply space-y-1 text-sm text-gray-600;
}

.ecosystem-category li {
  @apply flex items-start space-x-2;
}

.ecosystem-category li::before {
  content: "▸";
  @apply text-purple-500 font-bold;
}

/* 性能对比 */
.performance-comparison {
  @apply p-6 space-y-8;
}

.performance-metrics {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6;
}

.metric-card {
  @apply bg-gray-50 rounded-lg p-4 border border-gray-200;
}

.metric-card h4 {
  @apply font-semibold text-gray-900 mb-4;
}

.speed-chart {
  @apply space-y-3;
}

.speed-bar {
  @apply flex items-center space-x-3;
}

.bar-label {
  @apply w-20 text-sm font-medium;
}

.bar {
  @apply h-4 bg-gradient-to-r rounded flex-1;
}

.speed-bar.sass .bar {
  @apply from-pink-400 to-pink-600;
}

.speed-bar.less .bar {
  @apply from-blue-400 to-blue-600;
}

.bar-value {
  @apply text-sm text-gray-600;
}

.memory-chart {
  @apply space-y-3;
}

.memory-item {
  @apply flex items-center space-x-3;
}

.memory-usage {
  @apply flex-1 bg-gray-200 rounded-full h-4;
}

.usage-bar {
  @apply h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full;
}

.feature-score {
  @apply space-y-3;
}

.score-item {
  @apply flex items-center justify-between;
}

.score-stars {
  @apply flex space-x-1;
}

.star {
  @apply text-lg;
}

.star.filled {
  @apply text-yellow-400;
}

.performance-table {
  @apply w-full border-collapse;
}

.performance-table th {
  @apply bg-gray-50 text-left p-3 font-semibold border-b border-gray-200;
}

.performance-table td {
  @apply p-3 border-b border-gray-100 text-sm;
}

/* 使用场景 */
.scenarios {
  @apply p-6 space-y-8;
}

.scenario-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8;
}

.scenario-card {
  @apply rounded-lg p-6 border-2;
}

.sass-card {
  @apply border-pink-200 bg-pink-50;
}

.sass-card h4 {
  @apply text-pink-800 font-semibold mb-4;
}

.less-card {
  @apply border-blue-200 bg-blue-50;
}

.less-card h4 {
  @apply text-blue-800 font-semibold mb-4;
}

.scenarios-list {
  @apply space-y-4;
}

.scenario-item {
  @apply space-y-1;
}

.scenario-item h5 {
  @apply font-semibold;
}

.sass-card .scenario-item h5 {
  @apply text-pink-700;
}

.less-card .scenario-item h5 {
  @apply text-blue-700;
}

.scenario-item p {
  @apply text-sm text-gray-600;
}

.decision-matrix {
  @apply space-y-4;
}

.decision-matrix h4 {
  @apply font-semibold text-gray-900;
}

.decision-table {
  @apply w-full border-collapse;
}

.decision-table th {
  @apply bg-gray-50 text-left p-3 font-semibold border-b border-gray-200;
}

.decision-table td {
  @apply p-3 border-b border-gray-100 text-sm;
}

.recommend-sass {
  @apply text-pink-600 font-semibold;
}

.recommend-less {
  @apply text-blue-600 font-semibold;
}

/* 迁移指南 */
.migration-guide {
  @apply p-6;
}

.migration-panel {
  @apply space-y-6;
}

.migration-panel h4 {
  @apply text-lg font-semibold text-gray-900;
}

.migration-steps {
  @apply space-y-6;
}

.step {
  @apply space-y-3;
}

.step h5 {
  @apply font-semibold text-gray-900;
}

.step code {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono;
}

.step p {
  @apply text-sm text-gray-600;
}

.migration-code {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

.migration-mapping {
  @apply overflow-x-auto;
}

.mapping-table {
  @apply w-full border-collapse;
}

.mapping-table th {
  @apply bg-gray-50 text-left p-3 font-semibold border-b border-gray-200;
}

.mapping-table td {
  @apply p-3 border-b border-gray-100;
}

.mapping-table code {
  @apply bg-gray-100 px-2 py-1 rounded text-sm font-mono;
}

.migration-challenges {
  @apply space-y-6;
}

.challenge {
  @apply space-y-3;
}

.challenge h5 {
  @apply font-semibold text-gray-900;
}

.challenge ul {
  @apply space-y-1 text-sm text-gray-600;
}

.challenge li {
  @apply flex items-start space-x-2;
}

.challenge li::before {
  content: "•";
  @apply text-purple-500 font-bold;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .code-comparison {
    @apply grid-cols-1;
  }
  
  .ecosystem-grid {
    @apply grid-cols-1;
  }
  
  .scenario-grid {
    @apply grid-cols-1;
  }
}
</style>
