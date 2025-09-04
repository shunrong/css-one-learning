<template>
  <div class="spacing-demo">
    <div class="demo-header">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">CSS 间距系统</h2>
      <p class="text-gray-600">理解和掌握内边距、外边距以及盒模型的工作原理</p>
    </div>

    <!-- 盒模型基础 -->
    <section class="demo-section">
      <h3 class="section-title">CSS 盒模型</h3>
      
      <div class="theory-box">
        <h4 class="font-semibold mb-2">💡 盒模型组成</h4>
        <p class="text-sm text-gray-600 mb-4">
          每个 HTML 元素都可以看作一个矩形盒子，由内容区域、内边距、边框和外边距组成。
        </p>
      </div>

      <div class="box-model-demo">
        <div class="box-model-visual">
          <div class="margin-area">
            <div class="margin-label">margin (外边距)</div>
            <div class="border-area">
              <div class="border-label">border (边框)</div>
              <div class="padding-area">
                <div class="padding-label">padding (内边距)</div>
                <div class="content-area">
                  <div class="content-label">content (内容)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="box-model-info">
          <h4 class="font-semibold mb-3">盒模型尺寸计算</h4>
          <div class="calculation-box">
            <div class="calc-item">
              <strong>标准盒模型 (content-box):</strong><br>
              总宽度 = width + padding + border + margin
            </div>
            <div class="calc-item">
              <strong>IE盒模型 (border-box):</strong><br>
              总宽度 = width + margin<br>
              <small>width 包含了 content + padding + border</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 内边距控制 -->
    <section class="demo-section">
      <h3 class="section-title">内边距 (Padding)</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">Padding 设置</h4>
          <div class="control-group">
            <label>上边距: {{ paddingTop }}px</label>
            <input v-model="paddingTop" type="range" min="0" max="50" class="control-range">
          </div>
          <div class="control-group">
            <label>右边距: {{ paddingRight }}px</label>
            <input v-model="paddingRight" type="range" min="0" max="50" class="control-range">
          </div>
          <div class="control-group">
            <label>下边距: {{ paddingBottom }}px</label>
            <input v-model="paddingBottom" type="range" min="0" max="50" class="control-range">
          </div>
          <div class="control-group">
            <label>左边距: {{ paddingLeft }}px</label>
            <input v-model="paddingLeft" type="range" min="0" max="50" class="control-range">
          </div>
          <div class="control-group">
            <button @click="setPaddingUniform" class="btn-secondary">统一设置</button>
          </div>
        </div>

        <div class="preview-area">
          <div class="padding-demo-container">
            <div class="padding-demo-element" :style="paddingStyle">
              <div class="inner-content">
                内容区域<br>
                调整左侧滑块查看padding效果
              </div>
            </div>
          </div>
        </div>

        <div class="code-display">
          <CodeBlock 
            :code="paddingCSS" 
            language="css" 
            title="生成的 CSS 代码"
            :show-line-numbers="true"
          />
        </div>
      </div>
    </section>

    <!-- 外边距控制 -->
    <section class="demo-section">
      <h3 class="section-title">外边距 (Margin)</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">Margin 设置</h4>
          <div class="control-group">
            <label>上边距: {{ marginTop }}px</label>
            <input v-model="marginTop" type="range" min="0" max="50" class="control-range">
          </div>
          <div class="control-group">
            <label>右边距: {{ marginRight }}px</label>
            <input v-model="marginRight" type="range" min="0" max="50" class="control-range">
          </div>
          <div class="control-group">
            <label>下边距: {{ marginBottom }}px</label>
            <input v-model="marginBottom" type="range" min="0" max="50" class="control-range">
          </div>
          <div class="control-group">
            <label>左边距: {{ marginLeft }}px</label>
            <input v-model="marginLeft" type="range" min="0" max="50" class="control-range">
          </div>
          <div class="control-group">
            <button @click="setMarginAuto" class="btn-secondary">水平居中 (auto)</button>
          </div>
        </div>

        <div class="preview-area">
          <div class="margin-demo-container">
            <div class="margin-reference">参考元素</div>
            <div class="margin-demo-element" :style="marginStyle">
              带外边距的元素
            </div>
            <div class="margin-reference">参考元素</div>
          </div>
        </div>

        <div class="code-display">
          <CodeBlock 
            :code="marginCSS" 
            language="css" 
            title="生成的 CSS 代码"
            :show-line-numbers="true"
          />
        </div>
      </div>
    </section>

    <!-- 盒模型类型 -->
    <section class="demo-section">
      <h3 class="section-title">box-sizing 属性</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">盒模型设置</h4>
          <div class="control-group">
            <label>box-sizing:</label>
            <select v-model="boxSizing" class="control-select">
              <option value="content-box">content-box (标准)</option>
              <option value="border-box">border-box (IE)</option>
            </select>
          </div>
          <div class="control-group">
            <label>宽度: {{ boxWidth }}px</label>
            <input v-model="boxWidth" type="range" min="200" max="400" class="control-range">
          </div>
          <div class="control-group">
            <label>内边距: {{ boxPadding }}px</label>
            <input v-model="boxPadding" type="range" min="0" max="50" class="control-range">
          </div>
          <div class="control-group">
            <label>边框: {{ boxBorder }}px</label>
            <input v-model="boxBorder" type="range" min="0" max="20" class="control-range">
          </div>
        </div>

        <div class="preview-area">
          <div class="box-sizing-comparison">
            <div class="box-demo">
              <h5>box-sizing: {{ boxSizing }}</h5>
              <div class="sizing-box" :style="boxSizingStyle">
                设置宽度: {{ boxWidth }}px<br>
                实际占用: {{ actualWidth }}px
              </div>
              <div class="size-info">
                <strong>计算说明:</strong><br>
                {{ sizeCalculation }}
              </div>
            </div>
          </div>
        </div>

        <div class="code-display">
          <CodeBlock 
            :code="boxSizingCSS" 
            language="css" 
            title="生成的 CSS 代码"
            :show-line-numbers="true"
          />
        </div>
      </div>
    </section>

    <!-- 间距最佳实践 -->
    <section class="demo-section">
      <h3 class="section-title">间距设计最佳实践</h3>
      
      <div class="best-practices">
        <div class="practice-grid">
          <div class="practice-card">
            <h4 class="practice-title">📏 间距系统</h4>
            <div class="spacing-scale">
              <div v-for="(space, index) in spacingScale" :key="index" class="scale-item">
                <div class="scale-visual" :style="{ width: space.value + 'px', height: '20px' }"></div>
                <span class="scale-label">{{ space.name }}: {{ space.value }}px</span>
              </div>
            </div>
          </div>
          
          <div class="practice-card">
            <h4 class="practice-title">🎯 设计原则</h4>
            <ul class="principle-list">
              <li>使用一致的间距比例</li>
              <li>优先使用 border-box 模型</li>
              <li>合理利用 margin 合并</li>
              <li>移动端增加触摸区域</li>
              <li>保持视觉层次清晰</li>
            </ul>
          </div>
          
          <div class="practice-card">
            <h4 class="practice-title">🔧 常用技巧</h4>
            <div class="technique-examples">
              <div class="technique-item">
                <strong>水平居中:</strong>
                <code>margin: 0 auto;</code>
              </div>
              <div class="technique-item">
                <strong>垂直间距:</strong>
                <code>margin-bottom: 1rem;</code>
              </div>
              <div class="technique-item">
                <strong>负边距:</strong>
                <code>margin-left: -10px;</code>
              </div>
            </div>
          </div>
          
          <div class="practice-card">
            <h4 class="practice-title">📱 响应式间距</h4>
            <div class="responsive-example">
              <CodeBlock 
                code="/* 移动端 */
.container {
  padding: 1rem;
}

/* 桌面端 */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}" 
                language="css" 
                :show-line-numbers="true"
              />
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
  name: 'SpacingDemo',
  data() {
    return {
      // Padding 控制
      paddingTop: 10,
      paddingRight: 15,
      paddingBottom: 10,
      paddingLeft: 15,
      
      // Margin 控制
      marginTop: 20,
      marginRight: 10,
      marginBottom: 20,
      marginLeft: 10,
      
      // Box-sizing 控制
      boxSizing: 'content-box',
      boxWidth: 300,
      boxPadding: 20,
      boxBorder: 5,
      
      // 间距比例系统
      spacingScale: [
        { name: 'xs', value: 4 },
        { name: 'sm', value: 8 },
        { name: 'md', value: 16 },
        { name: 'lg', value: 24 },
        { name: 'xl', value: 32 },
        { name: '2xl', value: 48 }
      ]
    }
  },
  computed: {
    paddingStyle() {
      return {
        paddingTop: this.paddingTop + 'px',
        paddingRight: this.paddingRight + 'px',
        paddingBottom: this.paddingBottom + 'px',
        paddingLeft: this.paddingLeft + 'px',
        backgroundColor: '#e3f2fd',
        border: '2px solid #2196f3',
        borderRadius: '8px'
      }
    },
    
    marginStyle() {
      return {
        marginTop: this.marginTop + 'px',
        marginRight: this.marginRight + 'px',
        marginBottom: this.marginBottom + 'px',
        marginLeft: this.marginLeft + 'px',
        backgroundColor: '#fff3e0',
        border: '2px solid #ff9800',
        borderRadius: '8px',
        padding: '15px',
        width: '200px'
      }
    },
    
    boxSizingStyle() {
      return {
        boxSizing: this.boxSizing,
        width: this.boxWidth + 'px',
        padding: this.boxPadding + 'px',
        border: this.boxBorder + 'px solid #4caf50',
        backgroundColor: '#f1f8e9',
        borderRadius: '8px'
      }
    },
    
    actualWidth() {
      if (this.boxSizing === 'content-box') {
        return this.boxWidth + (this.boxPadding * 2) + (this.boxBorder * 2)
      } else {
        return this.boxWidth
      }
    },
    
    sizeCalculation() {
      if (this.boxSizing === 'content-box') {
        return `${this.boxWidth} (width) + ${this.boxPadding * 2} (padding) + ${this.boxBorder * 2} (border) = ${this.actualWidth}px`
      } else {
        return `${this.boxWidth}px (width 包含所有内容)`
      }
    },
    
    paddingCSS() {
      if (this.paddingTop === this.paddingRight && this.paddingRight === this.paddingBottom && this.paddingBottom === this.paddingLeft) {
        return `.element {\n  padding: ${this.paddingTop}px;\n}`
      } else if (this.paddingTop === this.paddingBottom && this.paddingLeft === this.paddingRight) {
        return `.element {\n  padding: ${this.paddingTop}px ${this.paddingRight}px;\n}`
      } else {
        return `.element {\n  padding: ${this.paddingTop}px ${this.paddingRight}px ${this.paddingBottom}px ${this.paddingLeft}px;\n}`
      }
    },
    
    marginCSS() {
      if (this.marginTop === this.marginRight && this.marginRight === this.marginBottom && this.marginBottom === this.marginLeft) {
        return `.element {\n  margin: ${this.marginTop}px;\n}`
      } else if (this.marginTop === this.marginBottom && this.marginLeft === this.marginRight) {
        return `.element {\n  margin: ${this.marginTop}px ${this.marginRight}px;\n}`
      } else {
        return `.element {\n  margin: ${this.marginTop}px ${this.marginRight}px ${this.marginBottom}px ${this.marginLeft}px;\n}`
      }
    },
    
    boxSizingCSS() {
      return `.element {\n  box-sizing: ${this.boxSizing};\n  width: ${this.boxWidth}px;\n  padding: ${this.boxPadding}px;\n  border: ${this.boxBorder}px solid #4caf50;\n}`
    }
  },
  methods: {
    setPaddingUniform() {
      const avg = Math.round((this.paddingTop + this.paddingRight + this.paddingBottom + this.paddingLeft) / 4)
      this.paddingTop = this.paddingRight = this.paddingBottom = this.paddingLeft = avg
    },
    
    setMarginAuto() {
      this.marginLeft = this.marginRight = 'auto'
      // 为了演示，设置一个特殊值
      this.$nextTick(() => {
        this.marginLeft = this.marginRight = 25
      })
    }
  }
}
</script>

<style scoped>
.spacing-demo {
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

.theory-box {
  @apply p-6 bg-blue-50 border-b border-gray-200;
}

.box-model-demo {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 p-6;
}

.box-model-visual {
  @apply flex justify-center;
}

.margin-area {
  @apply relative p-6 bg-orange-100 border-2 border-dashed border-orange-400 rounded-lg;
}

.border-area {
  @apply relative p-4 bg-green-100 border-4 border-solid border-green-500 rounded-lg;
}

.padding-area {
  @apply relative p-4 bg-blue-100 border-2 border-dashed border-blue-400 rounded-lg;
}

.content-area {
  @apply p-4 bg-white border border-gray-300 rounded-lg text-center;
}

.margin-label,
.border-label,
.padding-label,
.content-label {
  @apply absolute text-xs font-medium;
}

.margin-label {
  @apply top-1 left-1 text-orange-700;
}

.border-label {
  @apply top-1 right-1 text-green-700;
}

.padding-label {
  @apply bottom-1 left-1 text-blue-700;
}

.content-label {
  @apply text-gray-700;
}

.box-model-info {
  @apply space-y-4;
}

.calculation-box {
  @apply space-y-3;
}

.calc-item {
  @apply p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm;
}

.demo-playground {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-6 p-6;
}

.controls {
  @apply space-y-4;
}

.control-group {
  @apply flex flex-col space-y-2;
}

.control-group label {
  @apply text-sm font-medium text-gray-700;
}

.control-range {
  @apply w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer;
}

.control-range::-webkit-slider-thumb {
  @apply appearance-none w-4 h-4 bg-blue-500 rounded-full cursor-pointer;
}

.control-select {
  @apply px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm;
}

.btn-secondary {
  @apply px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm;
}

.preview-area {
  @apply lg:col-span-2 bg-gray-50 rounded-lg p-6;
}

.padding-demo-container {
  @apply flex justify-center;
}

.padding-demo-element {
  @apply inline-block;
}

.inner-content {
  @apply text-center text-gray-700 font-medium;
}

.margin-demo-container {
  @apply space-y-4;
}

.margin-reference {
  @apply p-3 bg-gray-200 text-gray-700 text-center rounded border;
}

.margin-demo-element {
  @apply p-3 text-center font-medium text-gray-700;
}

.box-sizing-comparison {
  @apply space-y-4;
}

.box-demo {
  @apply space-y-3;
}

.sizing-box {
  @apply text-center font-medium text-gray-700;
}

.size-info {
  @apply text-sm bg-white p-3 rounded border border-gray-200;
}

.code-display {
  @apply lg:col-span-3 mt-4;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

.best-practices {
  @apply p-6;
}

.practice-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.practice-card {
  @apply bg-gray-50 rounded-lg p-4 border border-gray-200;
}

.practice-title {
  @apply text-lg font-semibold text-gray-900 mb-3;
}

.spacing-scale {
  @apply space-y-2;
}

.scale-item {
  @apply flex items-center space-x-3;
}

.scale-visual {
  @apply bg-blue-500 rounded;
}

.scale-label {
  @apply text-sm font-mono;
}

.principle-list {
  @apply space-y-2 text-sm text-gray-600;
}

.principle-list li {
  @apply flex items-start space-x-2;
}

.principle-list li::before {
  content: "•";
  @apply text-blue-500 font-bold;
}

.technique-examples {
  @apply space-y-3;
}

.technique-item {
  @apply text-sm;
}

.technique-item code {
  @apply bg-gray-200 px-2 py-1 rounded text-xs block mt-1;
}

.responsive-example pre {
  @apply bg-gray-100 p-3 rounded text-xs overflow-x-auto;
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
  
  .box-model-demo {
    @apply grid-cols-1;
  }
}
</style>
