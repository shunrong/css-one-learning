<template>
  <div class="less-demo">
    <div class="demo-header">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Less 实战指南</h2>
      <p class="text-gray-600">探索 Less 的核心特性，轻松上手 CSS 预处理</p>
    </div>

    <!-- Less 基础语法 -->
    <section class="demo-section">
      <h3 class="section-title">Less 基础语法</h3>
      
      <div class="demo-playground">
        <div class="syntax-examples">
          <div class="syntax-category">
            <h4 class="font-semibold mb-3">变量 (Variables)</h4>
            <div class="code-comparison">
              <div class="code-column">
                <h6>Less 代码</h6>
                <pre class="code-block"><code>// 变量定义
@primary-color: #1890ff;
@text-color: #333;
@border-radius: 4px;
@font-size-base: 14px;
@line-height-base: 1.5;

// 变量运算
@width-base: 100px;
@height: @width-base + 20px;

// 字符串插值
@prefix: "app";
.@{prefix}-button {
  border-radius: @border-radius;
}</code></pre>
              </div>
              <div class="code-column">
                <h6>编译后的 CSS</h6>
                <pre class="code-block"><code>.app-button {
  border-radius: 4px;
}</code></pre>
              </div>
            </div>
          </div>

          <div class="syntax-category">
            <h4 class="font-semibold mb-3">嵌套 (Nesting)</h4>
            <div class="code-comparison">
              <div class="code-column">
                <h6>Less 代码</h6>
                <pre class="code-block"><code>.navbar {
  background: @primary-color;
  
  .nav-item {
    padding: 10px 15px;
    
    a {
      color: white;
      text-decoration: none;
      
      &:hover {
        color: lighten(@primary-color, 20%);
      }
      
      &.active {
        font-weight: bold;
        border-bottom: 2px solid white;
      }
    }
  }
  
  // 媒体查询嵌套
  @media (max-width: 768px) {
    padding: 5px;
    
    .nav-item {
      display: block;
    }
  }
}</code></pre>
              </div>
              <div class="code-column">
                <h6>编译后的 CSS</h6>
                <pre class="code-block"><code>.navbar {
  background: #1890ff;
}

.navbar .nav-item {
  padding: 10px 15px;
}

.navbar .nav-item a {
  color: white;
  text-decoration: none;
}

.navbar .nav-item a:hover {
  color: #4dabff;
}

.navbar .nav-item a.active {
  font-weight: bold;
  border-bottom: 2px solid white;
}

@media (max-width: 768px) {
  .navbar {
    padding: 5px;
  }
  
  .navbar .nav-item {
    display: block;
  }
}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 混合器 -->
    <section class="demo-section">
      <h3 class="section-title">混合器 (Mixins)</h3>
      
      <div class="demo-playground">
        <div class="mixin-examples">
          <div class="mixin-category">
            <h4 class="font-semibold mb-3">基础混合器</h4>
            <pre class="code-block"><code>// 无参数混合器
.border-radius {
  border-radius: 4px;
}

.box-shadow {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

// 使用混合器
.button {
  .border-radius();
  .box-shadow();
  padding: 10px 20px;
}</code></pre>
          </div>

          <div class="mixin-category">
            <h4 class="font-semibold mb-3">参数化混合器</h4>
            <pre class="code-block"><code>// 带参数的混合器
.border-radius(@radius: 4px) {
  border-radius: @radius;
  -webkit-border-radius: @radius;
  -moz-border-radius: @radius;
}

.transition(@property: all, @duration: 0.3s, @easing: ease) {
  transition: @property @duration @easing;
  -webkit-transition: @property @duration @easing;
  -moz-transition: @property @duration @easing;
}

// 多个参数
.gradient(@start-color, @end-color, @direction: to bottom) {
  background: linear-gradient(@direction, @start-color, @end-color);
}

// 使用
.card {
  .border-radius(8px);
  .transition(all, 0.3s, ease-in-out);
  .gradient(#fff, #f5f5f5);
}</code></pre>
          </div>

          <div class="mixin-category">
            <h4 class="font-semibold mb-3">高级混合器</h4>
            <pre class="code-block"><code>// 模式匹配
.triangle(up, @size, @color) {
  width: 0;
  height: 0;
  border-left: @size solid transparent;
  border-right: @size solid transparent;
  border-bottom: @size solid @color;
}

.triangle(down, @size, @color) {
  width: 0;
  height: 0;
  border-left: @size solid transparent;
  border-right: @size solid transparent;
  border-top: @size solid @color;
}

// 条件混合器
.button-style(@type) when (@type = primary) {
  background: @primary-color;
  color: white;
}

.button-style(@type) when (@type = secondary) {
  background: transparent;
  color: @primary-color;
  border: 1px solid @primary-color;
}

// 使用
.arrow-up {
  .triangle(up, 10px, #333);
}

.btn-primary {
  .button-style(primary);
}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 内置函数 -->
    <section class="demo-section">
      <h3 class="section-title">内置函数</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">函数演示</h4>
          <div class="control-group">
            <label>基础颜色:</label>
            <input v-model="demoColor" type="color" class="control-color">
          </div>
          <div class="control-group">
            <label>调整程度: {{ adjustment }}%</label>
            <input v-model="adjustment" type="range" min="0" max="50" class="control-range">
          </div>
        </div>

        <div class="preview-area">
          <div class="function-demo">
            <h4 class="font-semibold mb-3">颜色函数效果</h4>
            <div class="color-functions-grid">
              <div class="color-item">
                <div class="color-box" :style="{ backgroundColor: demoColor }"></div>
                <span>原色</span>
              </div>
              <div class="color-item">
                <div class="color-box" :style="{ backgroundColor: lightenColor }"></div>
                <span>lighten({{ adjustment }}%)</span>
              </div>
              <div class="color-item">
                <div class="color-box" :style="{ backgroundColor: darkenColor }"></div>
                <span>darken({{ adjustment }}%)</span>
              </div>
              <div class="color-item">
                <div class="color-box" :style="{ backgroundColor: saturateColor }"></div>
                <span>saturate({{ adjustment }}%)</span>
              </div>
              <div class="color-item">
                <div class="color-box" :style="{ backgroundColor: desaturateColor }"></div>
                <span>desaturate({{ adjustment }}%)</span>
              </div>
              <div class="color-item">
                <div class="color-box" :style="{ backgroundColor: mixedColor }"></div>
                <span>mix(white, 50%)</span>
              </div>
            </div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">Less 函数示例</h4>
          <CodeBlock :code="functionCode" language="css" :show-line-numbers="true" />
        </div>
      </div>
    </section>

    <!-- 导入与模块化 -->
    <section class="demo-section">
      <h3 class="section-title">导入与模块化</h3>
      
      <div class="import-examples">
        <div class="import-category">
          <h4 class="font-semibold mb-3">文件导入</h4>
          <pre class="code-block"><code>// 导入 Less 文件
@import "variables.less";
@import "mixins.less";
@import "components/button.less";

// 导入 CSS 文件
@import "normalize.css";

// 条件导入
@import "mobile.less" (max-width: 768px);

// 内联导入
@import (inline) "font-awesome.css";

// 引用导入（仅引用变量和混合器）
@import (reference) "bootstrap/variables.less";</code></pre>
        </div>

        <div class="import-category">
          <h4 class="font-semibold mb-3">命名空间</h4>
          <pre class="code-block"><code>// 定义命名空间
#bundle() {
  .button {
    display: inline-block;
    border: 1px solid black;
    background-color: grey;
    
    &:hover {
      background-color: white;
    }
  }
  
  .tab { ... }
  .citation { ... }
}

// 使用命名空间
.my-button {
  #bundle > .button();
}</code></pre>
        </div>

        <div class="import-category">
          <h4 class="font-semibold mb-3">模块化架构</h4>
          <div class="file-tree">
            <div class="tree-item folder">📁 styles/</div>
            <div class="tree-item file">│  📄 main.less</div>
            <div class="tree-item file">│  📄 variables.less</div>
            <div class="tree-item file">│  📄 mixins.less</div>
            <div class="tree-item folder">│  📁 base/</div>
            <div class="tree-item file">│  │  📄 reset.less</div>
            <div class="tree-item file">│  │  📄 typography.less</div>
            <div class="tree-item folder">│  📁 components/</div>
            <div class="tree-item file">│  │  📄 buttons.less</div>
            <div class="tree-item file">│  │  📄 forms.less</div>
            <div class="tree-item folder">│  📁 layout/</div>
            <div class="tree-item file">│     📄 header.less</div>
          </div>
        </div>
      </div>
    </section>

    <!-- JavaScript API -->
    <section class="demo-section">
      <h3 class="section-title">JavaScript API</h3>
      
      <div class="js-api-examples">
        <div class="api-category">
          <h4 class="font-semibold mb-3">浏览器端使用</h4>
          <pre class="code-block"><code>// HTML 中引入
&lt;link rel="stylesheet/less" type="text/css" href="styles.less" /&gt;
&lt;script src="less.js">&lt;/script&gt;

// 或者动态编译
&lt;script&gt;
less.render('@color: #333; .class { color: @color }')
  .then(function(result) {
    console.log(result.css);
  });
&lt;/script&gt;</code></pre>
        </div>

        <div class="api-category">
          <h4 class="font-semibold mb-3">Node.js 中使用</h4>
          <pre class="code-block"><code>const less = require('less');

// 编译字符串
less.render('@color: #333; .class { color: @color }')
  .then(function(output) {
    console.log(output.css);
  })
  .catch(function(error) {
    console.log(error);
  });

// 编译文件
const fs = require('fs');

fs.readFile('input.less', 'utf8', (err, data) => {
  if (err) throw err;
  
  less.render(data, {
    paths: ['./styles/'], // 搜索路径
    compress: true,       // 压缩输出
    sourceMap: {}         // 生成 source map
  }).then(output => {
    fs.writeFile('output.css', output.css, err => {
      if (err) throw err;
      console.log('编译完成!');
    });
  });
});</code></pre>
        </div>

        <div class="api-category">
          <h4 class="font-semibold mb-3">构建工具集成</h4>
          <pre class="code-block"><code>// Webpack 配置
module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: {
                  'primary-color': '#1DA57A',
                  'link-color': '#1DA57A',
                  'border-radius-base': '2px',
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
};

// Gulp 配置
const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', function () {
  return gulp.src('./src/*.less')
    .pipe(less({
      paths: ['./src/includes']
    }))
    .pipe(gulp.dest('./dist/css'));
});</code></pre>
        </div>
      </div>
    </section>

    <!-- 实际项目案例 -->
    <section class="demo-section">
      <h3 class="section-title">实际项目案例</h3>
      
      <div class="project-cases">
        <div class="case-category">
          <h4 class="font-semibold mb-3">主题系统</h4>
          <pre class="code-block"><code>// variables.less
@primary-color: #1890ff;
@success-color: #52c41a;
@warning-color: #faad14;
@error-color: #f5222d;

@font-size-base: 14px;
@font-size-lg: @font-size-base + 2px;
@font-size-sm: @font-size-base - 2px;

@border-radius-base: 6px;
@border-color-base: #d9d9d9;

// 主题混合器
.theme-colors(@type) when (@type = light) {
  @background: #ffffff;
  @text-color: #333333;
  @border-color: #e8e8e8;
}

.theme-colors(@type) when (@type = dark) {
  @background: #1f1f1f;
  @text-color: #ffffff;
  @border-color: #404040;
}

// 组件样式
.button {
  padding: 4px 15px;
  font-size: @font-size-base;
  border-radius: @border-radius-base;
  border: 1px solid @border-color-base;
  cursor: pointer;
  
  &.btn-primary {
    background: @primary-color;
    border-color: @primary-color;
    color: white;
    
    &:hover {
      background: lighten(@primary-color, 5%);
      border-color: lighten(@primary-color, 5%);
    }
  }
}</code></pre>
        </div>

        <div class="case-category">
          <h4 class="font-semibold mb-3">响应式网格系统</h4>
          <pre class="code-block"><code>// 断点定义
@screen-xs: 480px;
@screen-sm: 768px;
@screen-md: 992px;
@screen-lg: 1200px;

// 容器宽度
@container-sm: 750px;
@container-md: 970px;
@container-lg: 1170px;

// 网格混合器
.make-grid-columns(@class-prefix, @grid-columns: 12) {
  .loop-grid-columns(@index) when (@index > 0) {
    .@{class-prefix}-@{index} {
      width: percentage(@index / @grid-columns);
    }
    .loop-grid-columns(@index - 1);
  }
  .loop-grid-columns(@grid-columns);
}

// 响应式混合器
.respond-to(@breakpoint) when (@breakpoint = xs) {
  @media (min-width: @screen-xs) { @content(); }
}
.respond-to(@breakpoint) when (@breakpoint = sm) {
  @media (min-width: @screen-sm) { @content(); }
}

// 生成网格类
.make-grid-columns(col-xs);

@media (min-width: @screen-sm) {
  .make-grid-columns(col-sm);
}

@media (min-width: @screen-md) {
  .make-grid-columns(col-md);
}</code></pre>
        </div>
      </div>
    </section>

    <!-- 最佳实践 -->
    <section class="demo-section">
      <h3 class="section-title">最佳实践与技巧</h3>
      
      <div class="best-practices">
        <div class="practice-grid">
          <div class="practice-item">
            <h5>🎯 变量命名</h5>
            <ul>
              <li>使用连字符分隔</li>
              <li>按用途分类组织</li>
              <li>提供语义化名称</li>
              <li>建立命名约定</li>
            </ul>
            <pre class="practice-code"><code>// 好的命名
@primary-color: #1890ff;
@text-color-base: #333;
@border-radius-small: 2px;

// 避免的命名
@blue: #1890ff;
@color1: #333;
@radius: 2px;</code></pre>
          </div>

          <div class="practice-item">
            <h5>🔧 混合器设计</h5>
            <ul>
              <li>单一职责原则</li>
              <li>提供合理默认值</li>
              <li>避免过度复杂化</li>
              <li>考虑浏览器兼容性</li>
            </ul>
            <pre class="practice-code"><code>// 良好的混合器
.button-variant(@color, @background, @border) {
  color: @color;
  background-color: @background;
  border-color: @border;
  
  &:hover {
    color: darken(@color, 10%);
    background-color: darken(@background, 10%);
    border-color: darken(@border, 10%);
  }
}</code></pre>
          </div>

          <div class="practice-item">
            <h5>📁 文件组织</h5>
            <ul>
              <li>按功能模块分离</li>
              <li>建立清晰的依赖关系</li>
              <li>合理使用 @import</li>
              <li>避免循环依赖</li>
            </ul>
          </div>

          <div class="practice-item">
            <h5>⚡ 性能优化</h5>
            <ul>
              <li>避免深层嵌套</li>
              <li>合理使用混合器</li>
              <li>启用压缩输出</li>
              <li>考虑编译时间</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CodeBlock from '@/components/common/CodeBlock.vue'

export default {
  components: {
    CodeBlock
  },
  name: 'LessDemo',
  data() {
    return {
      demoColor: '#1890ff',
      adjustment: 20
    }
  },
  computed: {
    lightenColor() {
      return this.adjustLightness(this.demoColor, this.adjustment)
    },
    darkenColor() {
      return this.adjustLightness(this.demoColor, -this.adjustment)
    },
    saturateColor() {
      return this.adjustSaturation(this.demoColor, this.adjustment)
    },
    desaturateColor() {
      return this.adjustSaturation(this.demoColor, -this.adjustment)
    },
    mixedColor() {
      return this.mixColors(this.demoColor, '#ffffff', 0.5)
    },
    functionCode() {
      return `// Less 颜色函数示例
@base-color: ${this.demoColor};

.color-variations {
  // 基础色
  &.original {
    background: @base-color;
  }
  
  // 变亮
  &.lighter {
    background: lighten(@base-color, ${this.adjustment}%);
  }
  
  // 变暗
  &.darker {
    background: darken(@base-color, ${this.adjustment}%);
  }
  
  // 增加饱和度
  &.saturated {
    background: saturate(@base-color, ${this.adjustment}%);
  }
  
  // 降低饱和度
  &.desaturated {
    background: desaturate(@base-color, ${this.adjustment}%);
  }
  
  // 混合颜色
  &.mixed {
    background: mix(@base-color, white, 50%);
  }
}

// 数学函数
@width: 100px;
@height: @width * 0.6;  // 60px
@margin: (@width - 80px) / 2;  // 10px

// 字符串函数
@prefix: "app";
.@{prefix}-component {
  width: percentage(1/3);  // 33.33333%
}</code>`;
    }
  },
  methods: {
    // 颜色处理方法（简化版）
    hexToHsl(hex) {
      const r = parseInt(hex.slice(1, 3), 16) / 255
      const g = parseInt(hex.slice(3, 5), 16) / 255
      const b = parseInt(hex.slice(5, 7), 16) / 255
      
      const max = Math.max(r, g, b)
      const min = Math.min(r, g, b)
      let h, s, l = (max + min) / 2
      
      if (max === min) {
        h = s = 0
      } else {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break
          case g: h = (b - r) / d + 2; break
          case b: h = (r - g) / d + 4; break
        }
        h /= 6
      }
      
      return [h * 360, s * 100, l * 100]
    },
    
    hslToHex(h, s, l) {
      h /= 360
      s /= 100
      l /= 100
      
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1/6) return p + (q - p) * 6 * t
        if (t < 1/2) return q
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6
        return p
      }
      
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      
      const r = Math.round(hue2rgb(p, q, h + 1/3) * 255)
      const g = Math.round(hue2rgb(p, q, h) * 255)
      const b = Math.round(hue2rgb(p, q, h - 1/3) * 255)
      
      const toHex = (n) => n.toString(16).padStart(2, '0')
      const hexR = toHex(r)
      const hexG = toHex(g)
      const hexB = toHex(b)
      return `${hexR}${hexG}${hexB}`;
    },
    
    adjustLightness(hex, amount) {
      const [h, s, l] = this.hexToHsl(hex);
      return this.hslToHex(h, s, Math.max(0, Math.min(100, l + amount)));
    },
    
    adjustSaturation(hex, amount) {
      const [h, s, l] = this.hexToHsl(hex);
      return this.hslToHex(h, Math.max(0, Math.min(100, s + amount)), l);
    },
    
    mixColors(color1, color2, ratio) {
      const rgb1 = this.hexToRgb(color1)
      const rgb2 = this.hexToRgb(color2)
      
      const r = Math.round(rgb1.r * ratio + rgb2.r * (1 - ratio))
      const g = Math.round(rgb1.g * ratio + rgb2.g * (1 - ratio))
      const b = Math.round(rgb1.b * ratio + rgb2.b * (1 - ratio))
      
      const toHex = (n) => n.toString(16).padStart(2, '0')
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`
    },
    
    hexToRgb(hex) {
      return {
        r: parseInt(hex.slice(1, 3), 16),
        g: parseInt(hex.slice(3, 5), 16),
        b: parseInt(hex.slice(5, 7), 16)
      }
    }
  }
}
</script>

<style lang="less" scoped>
// 使用 Less 语法演示
@primary-color: #1890ff;
@success-color: #52c41a;
@warning-color: #faad14;

</style>

<style scoped>

.less-demo {
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

.demo-playground {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-6 p-6;
}

.controls {
  @apply space-y-4;
}

.control-group {
  @apply flex flex-col space-y-2;
  
  label {
    @apply text-sm font-medium text-gray-700;
  }
}

.control-color {
  @apply w-full h-10 border border-gray-300 rounded-md cursor-pointer;
}

.control-range {
  @apply w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer;
  
  &::-webkit-slider-thumb {
    @apply appearance-none w-4 h-4 bg-blue-500 rounded-full cursor-pointer;
  }
}

.preview-area {
  @apply lg:col-span-2 bg-gray-50 rounded-lg p-6;
}

.code-display {
  @apply lg:col-span-3 mt-4;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

/*语法示例 */
.syntax-examples {
  @apply col-span-full space-y-8;
}

.syntax-category {
  @apply space-y-4;
}

.code-comparison {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-4;
}

.code-column {
  h6 {
    @apply text-sm font-semibold text-gray-700 mb-2;
  }
}

.mixin-examples {
  @apply col-span-full space-y-6;
}

.mixin-category {
  @apply space-y-3;
}

.function-demo {
  @apply space-y-4;
}

.color-functions-grid {
  @apply grid grid-cols-2 md:grid-cols-3 gap-4;
}

.color-item {
  @apply text-center space-y-2;
  
  .color-box {
    @apply w-full h-16 rounded border border-gray-200;
  }
  
  span {
    @apply text-sm text-gray-600;
  }
}

.import-examples {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 p-6;
}

.import-category {
  @apply space-y-4;
}

.file-tree {
  @apply bg-gray-50 p-4 rounded border border-gray-200 font-mono text-sm;
}

.tree-item {
  @apply py-1;
  
  &.folder {
    @apply font-semibold text-blue-600;
  }
  
  &.file {
    @apply text-gray-600;
  }
}

.js-api-examples {
  @apply space-y-8 p-6;
}

.api-category {
  @apply space-y-4;
}

.project-cases {
  @apply space-y-8 p-6;
}

.case-category {
  @apply space-y-4;
}

.best-practices {
  @apply p-6;
}

.practice-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.practice-item {
  @apply bg-gray-50 p-4 rounded border border-gray-200;
  
  h5 {
    @apply font-semibold mb-3 text-gray-900;
  }
  
  ul {
    @apply text-sm text-gray-600 space-y-1 mb-3;
    
    li {
      @apply flex items-start space-x-2;
      
      &::before {
        content: "•";
        @apply text-blue-500 font-bold;
      }
    }
  }
}

.practice-code {
  @apply bg-gray-800 text-gray-100 p-3 rounded text-xs overflow-x-auto mt-3;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .demo-playground {
    @apply grid-cols-1;
  }
  
  .preview-area {
    @apply col-span-1;
  }
  
  .code-display {
    @apply col-span-1;
  }
  
  .syntax-examples {
    @apply col-span-1;
  }
  
  .code-comparison {
    @apply grid-cols-1;
  }
}
</style>
