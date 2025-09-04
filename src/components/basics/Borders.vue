<template>
  <div class="borders-demo">
    <div class="demo-header">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">CSS 边框系统</h2>
      <p class="text-gray-600">掌握边框样式、圆角、轮廓等边界效果的设计技巧</p>
    </div>

    <!-- 基础边框属性 -->
    <section class="demo-section">
      <h3 class="section-title">基础边框属性</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">边框设置</h4>
          <div class="control-group">
            <label>边框宽度: {{ borderWidth }}px</label>
            <input v-model="borderWidth" type="range" min="0" max="20" class="control-range">
          </div>
          <div class="control-group">
            <label>边框样式:</label>
            <select v-model="borderStyle" class="control-select">
              <option value="solid">solid (实线)</option>
              <option value="dashed">dashed (虚线)</option>
              <option value="dotted">dotted (点线)</option>
              <option value="double">double (双线)</option>
              <option value="groove">groove (凹槽)</option>
              <option value="ridge">ridge (凸起)</option>
              <option value="inset">inset (内嵌)</option>
              <option value="outset">outset (外凸)</option>
            </select>
          </div>
          <div class="control-group">
            <label>边框颜色:</label>
            <input v-model="borderColor" type="color" class="control-color">
          </div>
          <div class="control-group">
            <label>分别设置:</label>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" v-model="separateBorders">
                独立控制四边
              </label>
            </div>
          </div>
        </div>

        <div class="preview-area">
          <div class="border-preview" :style="borderPreviewStyle">
            <div class="preview-content">
              边框效果预览<br>
              调整左侧控制面板查看不同边框样式
            </div>
          </div>

          <div v-if="separateBorders" class="separate-controls">
            <h4 class="font-semibold mb-3">单独边框控制</h4>
            <div class="border-controls-grid">
              <div class="border-control">
                <label>顶部边框: {{ borderTopWidth }}px</label>
                <input v-model="borderTopWidth" type="range" min="0" max="20" class="control-range">
                <select v-model="borderTopStyle" class="control-select mt-2">
                  <option value="solid">solid</option>
                  <option value="dashed">dashed</option>
                  <option value="dotted">dotted</option>
                </select>
              </div>
              <div class="border-control">
                <label>右侧边框: {{ borderRightWidth }}px</label>
                <input v-model="borderRightWidth" type="range" min="0" max="20" class="control-range">
                <select v-model="borderRightStyle" class="control-select mt-2">
                  <option value="solid">solid</option>
                  <option value="dashed">dashed</option>
                  <option value="dotted">dotted</option>
                </select>
              </div>
              <div class="border-control">
                <label>底部边框: {{ borderBottomWidth }}px</label>
                <input v-model="borderBottomWidth" type="range" min="0" max="20" class="control-range">
                <select v-model="borderBottomStyle" class="control-select mt-2">
                  <option value="solid">solid</option>
                  <option value="dashed">dashed</option>
                  <option value="dotted">dotted</option>
                </select>
              </div>
              <div class="border-control">
                <label>左侧边框: {{ borderLeftWidth }}px</label>
                <input v-model="borderLeftWidth" type="range" min="0" max="20" class="control-range">
                <select v-model="borderLeftStyle" class="control-select mt-2">
                  <option value="solid">solid</option>
                  <option value="dashed">dashed</option>
                  <option value="dotted">dotted</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">生成的 CSS 代码</h4>
          <CodeBlock :code="borderCSS" language="css" :show-line-numbers="true" />
        </div>
      </div>
    </section>

    <!-- 圆角边框 -->
    <section class="demo-section">
      <h3 class="section-title">圆角边框 (border-radius)</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">圆角设置</h4>
          <div class="control-group">
            <label>统一圆角: {{ borderRadius }}px</label>
            <input v-model="borderRadius" type="range" min="0" max="50" class="control-range">
          </div>
          <div class="control-group">
            <label>分别设置:</label>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" v-model="separateRadius">
                独立控制四角
              </label>
            </div>
          </div>
          <div v-if="separateRadius" class="radius-controls">
            <div class="control-group">
              <label>左上角: {{ topLeftRadius }}px</label>
              <input v-model="topLeftRadius" type="range" min="0" max="50" class="control-range">
            </div>
            <div class="control-group">
              <label>右上角: {{ topRightRadius }}px</label>
              <input v-model="topRightRadius" type="range" min="0" max="50" class="control-range">
            </div>
            <div class="control-group">
              <label>右下角: {{ bottomRightRadius }}px</label>
              <input v-model="bottomRightRadius" type="range" min="0" max="50" class="control-range">
            </div>
            <div class="control-group">
              <label>左下角: {{ bottomLeftRadius }}px</label>
              <input v-model="bottomLeftRadius" type="range" min="0" max="50" class="control-range">
            </div>
          </div>
        </div>

        <div class="preview-area">
          <div class="radius-examples">
            <div class="radius-example" :style="radiusPreviewStyle">
              自定义圆角
            </div>
            <div class="radius-presets">
              <h4 class="font-semibold mb-3">常用圆角预设</h4>
              <div class="presets-grid">
                <div 
                  v-for="preset in radiusPresets" 
                  :key="preset.name"
                  class="preset-item"
                  :style="preset.style"
                  @click="applyRadiusPreset(preset)"
                >
                  {{ preset.name }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">生成的 CSS 代码</h4>
          <CodeBlock :code="radiusCSS" language="css" :show-line-numbers="true" />
        </div>
      </div>
    </section>

    <!-- 轮廓样式 -->
    <section class="demo-section">
      <h3 class="section-title">轮廓样式 (outline)</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">轮廓设置</h4>
          <div class="control-group">
            <label>轮廓宽度: {{ outlineWidth }}px</label>
            <input v-model="outlineWidth" type="range" min="0" max="10" class="control-range">
          </div>
          <div class="control-group">
            <label>轮廓样式:</label>
            <select v-model="outlineStyle" class="control-select">
              <option value="solid">solid</option>
              <option value="dashed">dashed</option>
              <option value="dotted">dotted</option>
              <option value="double">double</option>
            </select>
          </div>
          <div class="control-group">
            <label>轮廓颜色:</label>
            <input v-model="outlineColor" type="color" class="control-color">
          </div>
          <div class="control-group">
            <label>轮廓偏移: {{ outlineOffset }}px</label>
            <input v-model="outlineOffset" type="range" min="-10" max="10" class="control-range">
          </div>
        </div>

        <div class="preview-area">
          <div class="outline-demo">
            <div class="outline-box" :style="outlineStyle">
              轮廓效果演示<br>
              <small>轮廓不占用空间，不影响布局</small>
            </div>
            <div class="outline-info">
              <h4 class="font-semibold mb-2">Border vs Outline</h4>
              <div class="comparison-table">
                <div class="comparison-row">
                  <span class="comparison-label">占用空间:</span>
                  <span>Border: 是</span>
                  <span>Outline: 否</span>
                </div>
                <div class="comparison-row">
                  <span class="comparison-label">形状:</span>
                  <span>Border: 可圆角</span>
                  <span>Outline: 矩形</span>
                </div>
                <div class="comparison-row">
                  <span class="comparison-label">用途:</span>
                  <span>Border: 装饰</span>
                  <span>Outline: 焦点指示</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">生成的 CSS 代码</h4>
          <CodeBlock :code="outlineCSS" language="css" :show-line-numbers="true" />
        </div>
      </div>
    </section>

    <!-- 高级边框效果 -->
    <section class="demo-section">
      <h3 class="section-title">高级边框效果</h3>
      
      <div class="advanced-effects">
        <div class="effect-examples">
          <div class="effect-item">
            <div class="gradient-border">渐变边框</div>
            <pre class="effect-code"><code>.gradient-border {
  border: 3px solid;
  border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4) 1;
}</code></pre>
          </div>

          <div class="effect-item">
            <div class="image-border">图像边框</div>
            <pre class="effect-code"><code>.image-border {
  border: 15px solid transparent;
  border-image: url('pattern.png') 15 repeat;
}</code></pre>
          </div>

          <div class="effect-item">
            <div class="animated-border">动画边框</div>
            <pre class="effect-code"><code>.animated-border {
  border: 2px solid #3498db;
  animation: borderPulse 2s infinite;
}

@keyframes borderPulse {
  0%, 100% { border-color: #3498db; }
  50% { border-color: #e74c3c; }
}</code></pre>
          </div>

          <div class="effect-item">
            <div class="neumorphism-border">新拟态边框</div>
            <pre class="effect-code"><code>.neumorphism-border {
  border: none;
  border-radius: 20px;
  box-shadow: 
    8px 8px 16px #d9d9d9,
    -8px -8px 16px #ffffff;
}</code></pre>
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
  name: 'BordersDemo',
  data() {
    return {
      // 基础边框
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: '#3498db',
      separateBorders: false,
      
      // 分别设置的边框
      borderTopWidth: 5,
      borderRightWidth: 3,
      borderBottomWidth: 1,
      borderLeftWidth: 8,
      borderTopStyle: 'solid',
      borderRightStyle: 'dashed',
      borderBottomStyle: 'dotted',
      borderLeftStyle: 'solid',
      
      // 圆角
      borderRadius: 10,
      separateRadius: false,
      topLeftRadius: 0,
      topRightRadius: 20,
      bottomRightRadius: 0,
      bottomLeftRadius: 20,
      
      // 轮廓
      outlineWidth: 2,
      outlineStyle: 'solid',
      outlineColor: '#e74c3c',
      outlineOffset: 0,
      
      // 圆角预设
      radiusPresets: [
        { name: '无圆角', style: { borderRadius: '0' }, radius: [0, 0, 0, 0] },
        { name: '小圆角', style: { borderRadius: '4px' }, radius: [4, 4, 4, 4] },
        { name: '中圆角', style: { borderRadius: '8px' }, radius: [8, 8, 8, 8] },
        { name: '大圆角', style: { borderRadius: '16px' }, radius: [16, 16, 16, 16] },
        { name: '圆形', style: { borderRadius: '50%' }, radius: [25, 25, 25, 25] },
        { name: '胶囊', style: { borderRadius: '25px' }, radius: [25, 25, 25, 25] },
        { name: '不对称', style: { borderRadius: '20px 0 20px 0' }, radius: [20, 0, 20, 0] }
      ]
    }
  },
  computed: {
    borderPreviewStyle() {
      if (this.separateBorders) {
        return {
          borderTop: `${this.borderTopWidth}px ${this.borderTopStyle} ${this.borderColor}`,
          borderRight: `${this.borderRightWidth}px ${this.borderRightStyle} ${this.borderColor}`,
          borderBottom: `${this.borderBottomWidth}px ${this.borderBottomStyle} ${this.borderColor}`,
          borderLeft: `${this.borderLeftWidth}px ${this.borderLeftStyle} ${this.borderColor}`,
          padding: '30px',
          backgroundColor: '#f8f9fa'
        }
      } else {
        return {
          border: `${this.borderWidth}px ${this.borderStyle} ${this.borderColor}`,
          padding: '30px',
          backgroundColor: '#f8f9fa'
        }
      }
    },
    
    radiusPreviewStyle() {
      if (this.separateRadius) {
        return {
          borderTopLeftRadius: this.topLeftRadius + 'px',
          borderTopRightRadius: this.topRightRadius + 'px',
          borderBottomRightRadius: this.bottomRightRadius + 'px',
          borderBottomLeftRadius: this.bottomLeftRadius + 'px',
          width: '150px',
          height: '100px',
          backgroundColor: '#3498db',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '500'
        }
      } else {
        return {
          borderRadius: this.borderRadius + 'px',
          width: '150px',
          height: '100px',
          backgroundColor: '#3498db',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '500'
        }
      }
    },
    
    outlineStyle() {
      return {
        outline: `${this.outlineWidth}px ${this.outlineStyle} ${this.outlineColor}`,
        outlineOffset: this.outlineOffset + 'px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        border: '2px solid #ddd',
        borderRadius: '8px'
      }
    },
    
    borderCSS() {
      if (this.separateBorders) {
        return `.element {
  border-top: ${this.borderTopWidth}px ${this.borderTopStyle} ${this.borderColor};
  border-right: ${this.borderRightWidth}px ${this.borderRightStyle} ${this.borderColor};
  border-bottom: ${this.borderBottomWidth}px ${this.borderBottomStyle} ${this.borderColor};
  border-left: ${this.borderLeftWidth}px ${this.borderLeftStyle} ${this.borderColor};
}`
      } else {
        return `.element {
  border: ${this.borderWidth}px ${this.borderStyle} ${this.borderColor};
}`
      }
    },
    
    radiusCSS() {
      if (this.separateRadius) {
        return `.element {
  border-top-left-radius: ${this.topLeftRadius}px;
  border-top-right-radius: ${this.topRightRadius}px;
  border-bottom-right-radius: ${this.bottomRightRadius}px;
  border-bottom-left-radius: ${this.bottomLeftRadius}px;
}`
      } else {
        return `.element {
  border-radius: ${this.borderRadius}px;
}`
      }
    },
    
    outlineCSS() {
      return `.element {
  outline: ${this.outlineWidth}px ${this.outlineStyle} ${this.outlineColor};
  outline-offset: ${this.outlineOffset}px;
}`
    }
  },
  methods: {
    applyRadiusPreset(preset) {
      if (preset.radius) {
        this.topLeftRadius = preset.radius[0]
        this.topRightRadius = preset.radius[1]
        this.bottomRightRadius = preset.radius[2]
        this.bottomLeftRadius = preset.radius[3]
        this.separateRadius = true
      }
    }
  }
}
</script>

<style scoped>
.borders-demo {
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

.control-color {
  @apply w-full h-10 border border-gray-300 rounded-md cursor-pointer;
}

.checkbox-group {
  @apply space-y-2;
}

.checkbox-label {
  @apply flex items-center space-x-2 text-sm cursor-pointer;
}

.preview-area {
  @apply lg:col-span-2 bg-gray-50 rounded-lg p-6 space-y-6;
}

.border-preview {
  @apply text-center rounded-lg;
}

.preview-content {
  @apply font-medium text-gray-700;
}

.separate-controls {
  @apply mt-6;
}

.border-controls-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4;
}

.border-control {
  @apply space-y-2;
}

.border-control label {
  @apply text-sm font-medium text-gray-700;
}

.radius-examples {
  @apply space-y-6;
}

.radius-example {
  @apply text-center rounded-lg;
}

.radius-presets {
  @apply space-y-3;
}

.presets-grid {
  @apply grid grid-cols-2 md:grid-cols-3 gap-3;
}

.preset-item {
  @apply p-3 bg-blue-500 text-white text-center rounded cursor-pointer hover:bg-blue-600 transition-colors text-sm;
}

.outline-demo {
  @apply space-y-6;
}

.outline-box {
  @apply text-center;
}

.outline-info {
  @apply bg-white rounded-lg p-4 border border-gray-200;
}

.comparison-table {
  @apply space-y-2;
}

.comparison-row {
  @apply grid grid-cols-3 gap-2 text-sm;
}

.comparison-label {
  @apply font-medium text-gray-700;
}

.code-display {
  @apply lg:col-span-3 mt-4;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

.advanced-effects {
  @apply p-6;
}

.effect-examples {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.effect-item {
  @apply space-y-3;
}

.gradient-border {
  @apply p-4 text-center bg-white;
  border: 3px solid;
  border-image: linear-gradient(45deg, #ff6b6b, #4ecdc4) 1;
}

.image-border {
  @apply p-4 text-center bg-white border-8;
  border-image: repeating-linear-gradient(45deg, #ff6b6b, #ff6b6b 10px, #4ecdc4 10px, #4ecdc4 20px) 8;
}

.animated-border {
  @apply p-4 text-center bg-white border-2;
  animation: borderPulse 2s infinite;
}

@keyframes borderPulse {
  0%, 100% { border-color: #3498db; }
  50% { border-color: #e74c3c; }
}

.neumorphism-border {
  @apply p-4 text-center bg-gray-100 border-0 rounded-xl;
  box-shadow: 8px 8px 16px #d9d9d9, -8px -8px 16px #ffffff;
}

.effect-code {
  @apply bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto;
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
}
</style>
