<template>
  <div class="sass-demo">
    <div class="demo-header">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Sass/SCSS 深入学习</h2>
      <p class="text-gray-600">探索 Sass 的强大功能，掌握现代 CSS 预处理技术</p>
    </div>

    <!-- 变量系统 -->
    <section class="demo-section">
      <h3 class="section-title">变量系统 (Variables)</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">变量设置</h4>
          <div class="control-group">
            <label>主色调:</label>
            <input v-model="primaryColor" type="color" class="control-color">
          </div>
          <div class="control-group">
            <label>辅助色:</label>
            <input v-model="secondaryColor" type="color" class="control-color">
          </div>
          <div class="control-group">
            <label>基础字号: {{ baseFontSize }}px</label>
            <input v-model="baseFontSize" type="range" min="12" max="20" class="control-range">
          </div>
          <div class="control-group">
            <label>基础间距: {{ baseSpacing }}px</label>
            <input v-model="baseSpacing" type="range" min="4" max="24" class="control-range">
          </div>
          <div class="control-group">
            <label>圆角大小: {{ borderRadius }}px</label>
            <input v-model="borderRadius" type="range" min="0" max="16" class="control-range">
          </div>
        </div>

        <div class="preview-area">
          <div class="sass-preview" :style="cssVariables">
            <div class="component-demo">
              <h4 class="demo-title">组件预览</h4>
              <button class="demo-button primary">主要按钮</button>
              <button class="demo-button secondary">次要按钮</button>
              <div class="demo-card">
                <h5>卡片标题</h5>
                <p>这是一段示例文字，展示变量系统的威力。</p>
                <div class="demo-tags">
                  <span class="demo-tag">标签1</span>
                  <span class="demo-tag">标签2</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="code-display">
          <CodeBlock 
            :code="sassVariablesCode" 
            language="scss" 
            title="Sass 变量代码"
            :show-line-numbers="true"
          />
        </div>
      </div>
    </section>

    <!-- 嵌套规则 -->
    <section class="demo-section">
      <h3 class="section-title">嵌套规则 (Nesting)</h3>
      
      <div class="demo-playground">
        <div class="explanation">
          <h4 class="font-semibold mb-3">嵌套的优势</h4>
          <ul class="advantage-list">
            <li>更清晰的代码结构</li>
            <li>减少选择器重复</li>
            <li>更好的可读性</li>
            <li>父选择器引用 (&)</li>
          </ul>
        </div>

        <div class="nesting-examples">
          <div class="example-tabs">
            <button 
              v-for="tab in nestingTabs" 
              :key="tab.id"
              @click="activeNestingTab = tab.id"
              class="tab-button"
              :class="{ active: activeNestingTab === tab.id }"
            >
              {{ tab.name }}
            </button>
          </div>
          
          <div class="tab-content">
            <div v-if="activeNestingTab === 'basic'" class="tab-panel">
              <h5 class="example-title">基础嵌套</h5>
              <div class="code-comparison">
                <div class="code-column">
                  <h6>Sass 代码</h6>
                  <pre class="code-block"><code>.nav {
  background: #333;
  padding: 1rem;
  
  ul {
    list-style: none;
    margin: 0;
    
    li {
      display: inline-block;
      
      a {
        color: white;
        text-decoration: none;
        padding: 0.5rem 1rem;
        
        &:hover {
          background: rgba(255,255,255,0.1);
        }
      }
    }
  }
}</code></pre>
                </div>
                <div class="code-column">
                  <h6>编译后的 CSS</h6>
                  <pre class="code-block"><code>.nav {
  background: #333;
  padding: 1rem;
}

.nav ul {
  list-style: none;
  margin: 0;
}

.nav ul li {
  display: inline-block;
}

.nav ul li a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.nav ul li a:hover {
  background: rgba(255,255,255,0.1);
}</code></pre>
                </div>
              </div>
            </div>

            <div v-if="activeNestingTab === 'parent'" class="tab-panel">
              <h5 class="example-title">父选择器引用 (&)</h5>
              <div class="code-comparison">
                <div class="code-column">
                  <h6>Sass 代码</h6>
                  <pre class="code-block"><code>.button {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  
  &--primary {
    background: #007bff;
    color: white;
  }
  
  &--secondary {
    background: #6c757d;
    color: white;
  }
  
  &:hover {
    opacity: 0.8;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .icon & {
    padding-left: 2rem;
  }
}</code></pre>
                </div>
                <div class="code-column">
                  <h6>编译后的 CSS</h6>
                  <pre class="code-block"><code>.button {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}

.button--primary {
  background: #007bff;
  color: white;
}

.button--secondary {
  background: #6c757d;
  color: white;
}

.button:hover {
  opacity: 0.8;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.icon .button {
  padding-left: 2rem;
}</code></pre>
                </div>
              </div>
            </div>

            <div v-if="activeNestingTab === 'properties'" class="tab-panel">
              <h5 class="example-title">属性嵌套</h5>
              <div class="code-comparison">
                <div class="code-column">
                  <h6>Sass 代码</h6>
                  <pre class="code-block"><code>.box {
  font: {
    family: Arial, sans-serif;
    size: 16px;
    weight: bold;
  }
  
  border: {
    width: 2px;
    style: solid;
    color: #333;
    radius: 4px;
  }
  
  margin: {
    top: 10px;
    bottom: 20px;
    left: auto;
    right: auto;
  }
}</code></pre>
                </div>
                <div class="code-column">
                  <h6>编译后的 CSS</h6>
                  <pre class="code-block"><code>.box {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  border-width: 2px;
  border-style: solid;
  border-color: #333;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
}</code></pre>
                </div>
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
        <div class="controls">
          <h4 class="font-semibold mb-3">混合器参数</h4>
          <div class="control-group">
            <label>按钮大小:</label>
            <select v-model="mixinButtonSize" class="control-select">
              <option value="small">small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select>
          </div>
          <div class="control-group">
            <label>阴影深度:</label>
            <select v-model="mixinShadowDepth" class="control-select">
              <option value="1">1 (轻微)</option>
              <option value="2">2 (普通)</option>
              <option value="3">3 (明显)</option>
              <option value="4">4 (强烈)</option>
            </select>
          </div>
          <div class="control-group">
            <label>响应式断点:</label>
            <select v-model="mixinBreakpoint" class="control-select">
              <option value="sm">sm (640px)</option>
              <option value="md">md (768px)</option>
              <option value="lg">lg (1024px)</option>
              <option value="xl">xl (1280px)</option>
            </select>
          </div>
        </div>

        <div class="preview-area">
          <div class="mixin-demo">
            <h4 class="font-semibold mb-3">混合器效果预览</h4>
            <div class="mixin-examples">
              <button 
                class="mixin-button" 
                :class="[mixinButtonSize, 'shadow-' + mixinShadowDepth]"
              >
                混合器按钮
              </button>
              
              <div class="responsive-card">
                <h5>响应式卡片</h5>
                <p>这个卡片使用了响应式混合器</p>
              </div>
            </div>
          </div>
        </div>

        <div class="code-display">
          <CodeBlock 
            :code="mixinCode" 
            language="scss" 
            title="混合器定义与使用"
            :show-line-numbers="true"
          />
        </div>
      </div>
    </section>

    <!-- 函数与运算 -->
    <section class="demo-section">
      <h3 class="section-title">函数与运算 (Functions & Operations)</h3>
      
      <div class="demo-playground">
        <div class="function-examples">
          <div class="function-category">
            <h4 class="font-semibold mb-3">颜色函数</h4>
            <div class="color-functions">
              <div class="color-demo" :style="{ backgroundColor: baseColor }">
                <span>基础色</span>
              </div>
              <div class="color-demo" :style="{ backgroundColor: lightenColor }">
                <span>lighten(20%)</span>
              </div>
              <div class="color-demo" :style="{ backgroundColor: darkenColor }">
                <span>darken(20%)</span>
              </div>
              <div class="color-demo" :style="{ backgroundColor: saturateColor }">
                <span>saturate(30%)</span>
              </div>
              <div class="color-demo" :style="{ backgroundColor: complementColor }">
                <span>complement()</span>
              </div>
            </div>
          </div>

          <div class="function-category">
            <h4 class="font-semibold mb-3">数学运算</h4>
            <div class="math-examples">
              <div class="math-demo">
                <div class="box" style="width: 100px;">100px</div>
                <div class="operator">+</div>
                <div class="box" style="width: 50px;">50px</div>
                <div class="operator">=</div>
                <div class="box" style="width: 150px;">150px</div>
              </div>
            </div>
          </div>

          <div class="function-category">
            <h4 class="font-semibold mb-3">字符串函数</h4>
            <div class="string-examples">
              <div class="string-demo">
                <code>quote("hello")</code> → <span>"hello"</span>
              </div>
              <div class="string-demo">
                <code>unquote("hello")</code> → <span>hello</span>
              </div>
              <div class="string-demo">
                <code>str-length("hello")</code> → <span>5</span>
              </div>
            </div>
          </div>
        </div>

        <div class="code-display">
          <CodeBlock 
            :code="functionCode" 
            language="scss" 
            title="Sass 函数示例"
            :show-line-numbers="true"
          />
        </div>
      </div>
    </section>

    <!-- 控制指令 -->
    <section class="demo-section">
      <h3 class="section-title">控制指令 (@if, @for, @each, @while)</h3>
      
      <div class="control-directives">
        <div class="directive-tabs">
          <button 
            v-for="tab in directiveTabs" 
            :key="tab.id"
            @click="activeDirectiveTab = tab.id"
            class="tab-button"
            :class="{ active: activeDirectiveTab === tab.id }"
          >
            {{ tab.name }}
          </button>
        </div>
        
        <div class="tab-content">
          <div v-if="activeDirectiveTab === 'if'" class="tab-panel">
            <h5 class="example-title">@if 条件判断</h5>
            <div class="code-example">
              <pre class="code-block"><code>@mixin button-style($type) {
  @if $type == primary {
    background: #007bff;
    color: white;
  } @else if $type == secondary {
    background: #6c757d;
    color: white;
  } @else if $type == danger {
    background: #dc3545;
    color: white;
  } @else {
    background: #f8f9fa;
    color: #6c757d;
  }
}

.btn-primary { @include button-style(primary); }
.btn-secondary { @include button-style(secondary); }</code></pre>
            </div>
          </div>

          <div v-if="activeDirectiveTab === 'for'" class="tab-panel">
            <h5 class="example-title">@for 循环</h5>
            <div class="code-example">
              <pre class="code-block"><code>// 生成网格类
@for $i from 1 through 12 {
  .col-#{$i} {
    width: percentage($i / 12);
  }
}

// 生成延迟动画类
@for $i from 1 through 5 {
  .delay-#{$i} {
    animation-delay: #{$i * 0.1}s;
  }
}

// 输出结果：
// .col-1 { width: 8.33333%; }
// .col-2 { width: 16.66667%; }
// ...
// .delay-1 { animation-delay: 0.1s; }</code></pre>
            </div>
            <div class="grid-demo">
              <div v-for="i in 6" :key="i" class="grid-item" :style="{ width: (i / 6) * 100 + '%' }">
                col-{{ i }}
              </div>
            </div>
          </div>

          <div v-if="activeDirectiveTab === 'each'" class="tab-panel">
            <h5 class="example-title">@each 遍历</h5>
            <div class="code-example">
              <pre class="code-block"><code>// 遍历列表
$sizes: small, medium, large, xl;

@each $size in $sizes {
  .btn-#{$size} {
    @if $size == small {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
    } @else if $size == medium {
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
    } @else if $size == large {
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
    } @else if $size == xl {
      padding: 0.75rem 1.5rem;
      font-size: 1.5rem;
    }
  }
}

// 遍历映射
$social-colors: (
  facebook: #3b5998,
  twitter: #1da1f2,
  linkedin: #0077b5,
  github: #333
);

@each $network, $color in $social-colors {
  .btn-#{$network} {
    background-color: $color;
    color: white;
  }
}</code></pre>
            </div>
            <div class="social-demo">
              <button class="social-btn facebook">Facebook</button>
              <button class="social-btn twitter">Twitter</button>
              <button class="social-btn linkedin">LinkedIn</button>
              <button class="social-btn github">GitHub</button>
            </div>
          </div>

          <div v-if="activeDirectiveTab === 'while'" class="tab-panel">
            <h5 class="example-title">@while 循环</h5>
            <div class="code-example">
              <pre class="code-block"><code>// 生成字体大小
$base-font-size: 16px;
$i: 1;

@while $i <= 6 {
  .text-#{$i} {
    font-size: $base-font-size * pow(1.2, $i - 1);
  }
  $i: $i + 1;
}

// 斐波那契数列示例
@function fibonacci($n) {
  $a: 0;
  $b: 1;
  $i: 1;
  
  @while $i < $n {
    $temp: $a + $b;
    $a: $b;
    $b: $temp;
    $i: $i + 1;
  }
  
  @return $b;
}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实际项目应用 -->
    <section class="demo-section">
      <h3 class="section-title">实际项目应用</h3>
      
      <div class="project-examples">
        <div class="project-structure">
          <h4 class="font-semibold mb-3">推荐的项目结构</h4>
          <div class="file-tree">
            <div class="tree-item folder">📁 scss/</div>
            <div class="tree-item file">│  📄 main.scss</div>
            <div class="tree-item folder">│  📁 abstracts/</div>
            <div class="tree-item file">│  │  📄 _variables.scss</div>
            <div class="tree-item file">│  │  📄 _mixins.scss</div>
            <div class="tree-item file">│  │  📄 _functions.scss</div>
            <div class="tree-item folder">│  📁 base/</div>
            <div class="tree-item file">│  │  📄 _reset.scss</div>
            <div class="tree-item file">│  │  📄 _typography.scss</div>
            <div class="tree-item folder">│  📁 components/</div>
            <div class="tree-item file">│  │  📄 _buttons.scss</div>
            <div class="tree-item file">│  │  📄 _cards.scss</div>
            <div class="tree-item folder">│  📁 layout/</div>
            <div class="tree-item file">│  │  📄 _header.scss</div>
            <div class="tree-item file">│  │  📄 _footer.scss</div>
            <div class="tree-item folder">│  📁 pages/</div>
            <div class="tree-item file">│     📄 _home.scss</div>
          </div>
        </div>

        <div class="best-practices">
          <h4 class="font-semibold mb-3">最佳实践</h4>
          <div class="practice-grid">
            <div class="practice-item">
              <h5>变量命名</h5>
              <ul>
                <li>使用语义化命名</li>
                <li>采用一致的命名约定</li>
                <li>区分全局和局部变量</li>
              </ul>
            </div>
            <div class="practice-item">
              <h5>混合器设计</h5>
              <ul>
                <li>单一职责原则</li>
                <li>提供合理的默认值</li>
                <li>避免过度嵌套</li>
              </ul>
            </div>
            <div class="practice-item">
              <h5>文件组织</h5>
              <ul>
                <li>按功能分类组织</li>
                <li>使用下划线前缀</li>
                <li>合理的导入顺序</li>
              </ul>
            </div>
            <div class="practice-item">
              <h5>性能考虑</h5>
              <ul>
                <li>避免深层嵌套</li>
                <li>合理使用扩展</li>
                <li>压缩输出CSS</li>
              </ul>
            </div>
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
  name: 'SassDemo',
  data() {
    return {
      // 变量控制
      primaryColor: '#3498db',
      secondaryColor: '#95a5a6',
      baseFontSize: 16,
      baseSpacing: 8,
      borderRadius: 4,
      
      // 混合器控制
      mixinButtonSize: 'medium',
      mixinShadowDepth: '2',
      mixinBreakpoint: 'md',
      
      // 标签页控制
      activeNestingTab: 'basic',
      activeDirectiveTab: 'if',
      
      // 标签页数据
      nestingTabs: [
        { id: 'basic', name: '基础嵌套' },
        { id: 'parent', name: '父选择器' },
        { id: 'properties', name: '属性嵌套' }
      ],
      
      directiveTabs: [
        { id: 'if', name: '@if' },
        { id: 'for', name: '@for' },
        { id: 'each', name: '@each' },
        { id: 'while', name: '@while' }
      ],
      
      // 颜色函数基础色
      baseColor: '#3498db'
    }
  },
  computed: {
    cssVariables() {
      return {
        '--primary-color': this.primaryColor,
        '--secondary-color': this.secondaryColor,
        '--base-font-size': this.baseFontSize + 'px',
        '--base-spacing': this.baseSpacing + 'px',
        '--border-radius': this.borderRadius + 'px'
      }
    },
    
    sassVariablesCode() {
      return `// Sass 变量定义
$primary-color: ${this.primaryColor};
$secondary-color: ${this.secondaryColor};
$base-font-size: ${this.baseFontSize}px;
$base-spacing: ${this.baseSpacing}px;
$border-radius: ${this.borderRadius}px;

// 使用变量
.button {
  background: $primary-color;
  font-size: $base-font-size;
  padding: $base-spacing * 1.5;
  border-radius: $border-radius;
  
  &.secondary {
    background: $secondary-color;
  }
}`
    },
    
    mixinCode() {
      return `// 按钮大小混合器
@mixin button-size($size: medium) {
  @if $size == small {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  } @else if $size == large {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
  } @else {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
}

// 阴影混合器
@mixin elevation($level: 1) {
  @if $level == 1 {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  } @else if $level == 2 {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  } @else if $level == 3 {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19);
  } @else if $level == 4 {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25);
  }
}

// 响应式混合器
@mixin respond-to($breakpoint) {
  @if $breakpoint == sm {
    @media (min-width: 640px) { @content; }
  } @else if $breakpoint == md {
    @media (min-width: 768px) { @content; }
  } @else if $breakpoint == lg {
    @media (min-width: 1024px) { @content; }
  }
}

// 使用混合器
.button {
  @include button-size(${this.mixinButtonSize});
  @include elevation(${this.mixinShadowDepth});
  
  @include respond-to(${this.mixinBreakpoint}) {
    font-size: 1.125rem;
  }
}`
    },
    
    functionCode() {
      return `// 颜色函数
$base-color: ${this.baseColor};

.color-variations {
  background: $base-color;
  
  &.light {
    background: lighten($base-color, 20%);
  }
  
  &.dark {
    background: darken($base-color, 20%);
  }
  
  &.saturated {
    background: saturate($base-color, 30%);
  }
  
  &.complement {
    background: complement($base-color);
  }
}

// 自定义函数
@function rem($px, $base: 16px) {
  @return ($px / $base) * 1rem;
}

@function z-index($layer) {
  $z-indexes: (
    'modal': 1000,
    'dropdown': 100,
    'header': 10,
    'default': 1
  );
  @return map-get($z-indexes, $layer);
}

// 数学运算
$container-width: 1200px;
$gutter: 30px;
$columns: 12;

.container {
  width: $container-width;
  max-width: 100%;
}

.column {
  width: (100% - ($gutter * ($columns - 1))) / $columns;
  margin-right: $gutter;
}`
    },
    
    lightenColor() {
      return this.lightenHexColor(this.baseColor, 20)
    },
    
    darkenColor() {
      return this.darkenHexColor(this.baseColor, 20)
    },
    
    saturateColor() {
      return this.adjustSaturation(this.baseColor, 30)
    },
    
    complementColor() {
      return this.getComplementColor(this.baseColor)
    }
  },
  methods: {
    // 简化的颜色函数实现
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
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`
    },
    
    lightenHexColor(hex, amount) {
      const [h, s, l] = this.hexToHsl(hex)
      return this.hslToHex(h, s, Math.min(100, l + amount))
    },
    
    darkenHexColor(hex, amount) {
      const [h, s, l] = this.hexToHsl(hex)
      return this.hslToHex(h, s, Math.max(0, l - amount))
    },
    
    adjustSaturation(hex, amount) {
      const [h, s, l] = this.hexToHsl(hex)
      return this.hslToHex(h, Math.min(100, s + amount), l)
    },
    
    getComplementColor(hex) {
      const [h, s, l] = this.hexToHsl(hex)
      return this.hslToHex((h + 180) % 360, s, l)
    }
  }
}
</script>

<style lang="scss" scoped>
// 使用 Sass 语法演示
$demo-primary-color: #e91e63;
$demo-secondary-color: #9c27b0;

.sass-demo {
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
    @apply appearance-none w-4 h-4 bg-pink-500 rounded-full cursor-pointer;
  }
}

.control-select {
  @apply px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm;
}

.preview-area {
  @apply lg:col-span-2 bg-gray-50 rounded-lg p-6;
}

// Sass 预览样式
.sass-preview {
  .component-demo {
    @apply space-y-4;
  }
  
  .demo-title {
    @apply text-lg font-semibold;
    color: var(--primary-color);
  }
  
  .demo-button {
    @apply px-4 py-2 rounded border-0 cursor-pointer mr-2 transition-all duration-300;
    font-size: var(--base-font-size);
    border-radius: var(--border-radius);
    
    &.primary {
      background: var(--primary-color);
      color: white;
      
      &:hover {
        opacity: 0.8;
      }
    }
    
    &.secondary {
      background: var(--secondary-color);
      color: white;
      
      &:hover {
        opacity: 0.8;
      }
    }
  }
  
  .demo-card {
    @apply p-4 bg-white rounded border border-gray-200;
    border-radius: var(--border-radius);
    
    h5 {
      @apply font-semibold mb-2;
      color: var(--primary-color);
    }
    
    p {
      @apply text-gray-600 mb-3;
      font-size: var(--base-font-size);
    }
  }
  
  .demo-tags {
    @apply flex space-x-2;
  }
  
  .demo-tag {
    @apply px-2 py-1 text-xs rounded;
    background: var(--secondary-color);
    color: white;
    border-radius: var(--border-radius);
  }
}

.code-display {
  @apply lg:col-span-3 mt-4;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

// 嵌套示例样式
.explanation {
  @apply bg-blue-50 rounded-lg p-4 border border-blue-200;
}

.advantage-list {
  @apply space-y-1 text-sm text-blue-800;
  
  li {
    @apply flex items-start space-x-2;
    
    &::before {
      content: "•";
      @apply text-blue-500 font-bold;
    }
  }
}

.nesting-examples {
  @apply lg:col-span-2;
}

.example-tabs, .directive-tabs {
  @apply flex space-x-2 mb-4;
}

.tab-button {
  @apply px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm;
  
  &.active {
    @apply bg-pink-500 text-white;
  }
}

.tab-content {
  @apply space-y-4;
}

.tab-panel {
  @apply space-y-4;
}

.example-title {
  @apply text-lg font-semibold text-gray-900;
}

.code-comparison {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-4;
}

.code-column {
  h6 {
    @apply text-sm font-semibold text-gray-700 mb-2;
  }
}

// 混合器示例
.mixin-demo {
  @apply space-y-4;
}

.mixin-examples {
  @apply space-y-4;
}

.mixin-button {
  @apply bg-pink-500 text-white border-0 rounded cursor-pointer transition-all duration-300;
  
  &.small {
    @apply px-2 py-1 text-sm;
  }
  
  &.medium {
    @apply px-4 py-2 text-base;
  }
  
  &.large {
    @apply px-6 py-3 text-lg;
  }
  
  &.shadow-1 {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12);
  }
  
  &.shadow-2 {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16);
  }
  
  &.shadow-3 {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19);
  }
  
  &.shadow-4 {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25);
  }
}

.responsive-card {
  @apply p-4 bg-white rounded border border-gray-200;
  
  h5 {
    @apply font-semibold mb-2;
  }
}

// 函数示例
.function-examples {
  @apply space-y-6 p-6;
}

.function-category {
  @apply space-y-3;
}

.color-functions {
  @apply grid grid-cols-2 md:grid-cols-5 gap-3;
}

.color-demo {
  @apply h-16 rounded flex items-center justify-center text-white font-medium text-sm;
}

.math-examples {
  @apply space-y-3;
}

.math-demo {
  @apply flex items-center space-x-2;
}

.box {
  @apply h-8 bg-blue-500 text-white flex items-center justify-center text-xs font-medium;
}

.operator {
  @apply text-lg font-bold;
}

.string-examples {
  @apply space-y-2;
}

.string-demo {
  @apply flex items-center space-x-2 text-sm;
  
  code {
    @apply bg-gray-100 px-2 py-1 rounded font-mono;
  }
}

// 控制指令示例
.control-directives {
  @apply p-6;
}

.grid-demo {
  @apply flex space-x-2 mt-4;
}

.grid-item {
  @apply bg-blue-500 text-white p-2 text-xs text-center;
}

.social-demo {
  @apply flex space-x-2 mt-4;
}

.social-btn {
  @apply px-4 py-2 text-white rounded border-0 cursor-pointer;
  
  &.facebook { background: #3b5998; }
  &.twitter { background: #1da1f2; }
  &.linkedin { background: #0077b5; }
  &.github { background: #333; }
}

// 项目示例
.project-examples {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 p-6;
}

.project-structure {
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

.best-practices {
  @apply space-y-4;
}

.practice-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4;
}

.practice-item {
  @apply bg-gray-50 p-4 rounded border border-gray-200;
  
  h5 {
    @apply font-semibold mb-2 text-gray-900;
  }
  
  ul {
    @apply text-sm text-gray-600 space-y-1;
    
    li {
      @apply flex items-start space-x-2;
      
      &::before {
        content: "•";
        @apply text-pink-500 font-bold;
      }
    }
  }
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
  
  .nesting-examples {
    @apply col-span-1;
  }
  
  .code-comparison {
    @apply grid-cols-1;
  }
}
</style>
