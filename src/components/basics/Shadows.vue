<template>
  <div class="shadows-demo">
    <div class="demo-header">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">CSS 阴影效果</h2>
      <p class="text-gray-600">掌握盒阴影和文字阴影，创造立体视觉效果</p>
    </div>

    <!-- 盒阴影 box-shadow -->
    <section class="demo-section">
      <h3 class="section-title">盒阴影 (box-shadow)</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">阴影设置</h4>
          <div class="control-group">
            <label>水平偏移: {{ offsetX }}px</label>
            <input v-model="offsetX" type="range" min="-20" max="20" class="control-range">
          </div>
          <div class="control-group">
            <label>垂直偏移: {{ offsetY }}px</label>
            <input v-model="offsetY" type="range" min="-20" max="20" class="control-range">
          </div>
          <div class="control-group">
            <label>模糊半径: {{ blurRadius }}px</label>
            <input v-model="blurRadius" type="range" min="0" max="30" class="control-range">
          </div>
          <div class="control-group">
            <label>扩展半径: {{ spreadRadius }}px</label>
            <input v-model="spreadRadius" type="range" min="-10" max="10" class="control-range">
          </div>
          <div class="control-group">
            <label>阴影颜色:</label>
            <input v-model="shadowColor" type="color" class="control-color">
          </div>
          <div class="control-group">
            <label>透明度: {{ shadowOpacity }}</label>
            <input v-model="shadowOpacity" type="range" min="0" max="1" step="0.1" class="control-range">
          </div>
          <div class="control-group">
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" v-model="insetShadow">
                内阴影 (inset)
              </label>
            </div>
          </div>
        </div>

        <div class="preview-area">
          <div class="shadow-preview">
            <div class="shadow-box" :style="shadowBoxStyle">
              盒阴影演示<br>
              <small>调整左侧参数查看效果</small>
            </div>
          </div>
          
          <div class="shadow-presets">
            <h4 class="font-semibold mb-3">阴影预设</h4>
            <div class="presets-grid">
              <div 
                v-for="preset in shadowPresets" 
                :key="preset.name"
                class="preset-box"
                :style="{ boxShadow: preset.shadow }"
                @click="applyShadowPreset(preset)"
              >
                {{ preset.name }}
              </div>
            </div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">生成的 CSS 代码</h4>
          <CodeBlock :code="boxShadowCSS" language="css" :show-line-numbers="true" />
        </div>
      </div>
    </section>

    <!-- 文字阴影 text-shadow -->
    <section class="demo-section">
      <h3 class="section-title">文字阴影 (text-shadow)</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">文字阴影设置</h4>
          <div class="control-group">
            <label>水平偏移: {{ textOffsetX }}px</label>
            <input v-model="textOffsetX" type="range" min="-10" max="10" class="control-range">
          </div>
          <div class="control-group">
            <label>垂直偏移: {{ textOffsetY }}px</label>
            <input v-model="textOffsetY" type="range" min="-10" max="10" class="control-range">
          </div>
          <div class="control-group">
            <label>模糊半径: {{ textBlur }}px</label>
            <input v-model="textBlur" type="range" min="0" max="20" class="control-range">
          </div>
          <div class="control-group">
            <label>阴影颜色:</label>
            <input v-model="textShadowColor" type="color" class="control-color">
          </div>
          <div class="control-group">
            <label>文字颜色:</label>
            <input v-model="textColor" type="color" class="control-color">
          </div>
          <div class="control-group">
            <label>字体大小: {{ textSize }}px</label>
            <input v-model="textSize" type="range" min="16" max="48" class="control-range">
          </div>
        </div>

        <div class="preview-area">
          <div class="text-shadow-preview">
            <h2 class="shadow-text" :style="textShadowStyle">
              文字阴影效果
            </h2>
            <p class="shadow-text" :style="textShadowStyle">
              这是一段带有阴影效果的文字，可以通过调整参数来观察不同的视觉效果。
            </p>
          </div>
          
          <div class="text-presets">
            <h4 class="font-semibold mb-3">文字阴影预设</h4>
            <div class="text-presets-grid">
              <div 
                v-for="preset in textShadowPresets" 
                :key="preset.name"
                class="text-preset"
                :style="{ textShadow: preset.shadow, color: preset.color || '#333' }"
                @click="applyTextShadowPreset(preset)"
              >
                {{ preset.name }}
              </div>
            </div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">生成的 CSS 代码</h4>
          <CodeBlock :code="textShadowCSS" language="css" :show-line-numbers="true" />
        </div>
      </div>
    </section>

    <!-- 多重阴影 -->
    <section class="demo-section">
      <h3 class="section-title">多重阴影效果</h3>
      
      <div class="multi-shadow-demos">
        <div class="demo-grid">
          <div class="multi-demo-item">
            <div class="layered-shadow">
              层叠阴影
            </div>
            <pre class="demo-code"><code>box-shadow: 
  0 1px 3px rgba(0,0,0,0.12),
  0 1px 2px rgba(0,0,0,0.24),
  0 3px 6px rgba(0,0,0,0.16);</code></pre>
          </div>

          <div class="multi-demo-item">
            <div class="neon-shadow">
              霓虹灯效果
            </div>
            <pre class="demo-code"><code>box-shadow: 
  0 0 5px #ff6b6b,
  0 0 10px #ff6b6b,
  0 0 15px #ff6b6b,
  0 0 20px #ff6b6b;</code></pre>
          </div>

          <div class="multi-demo-item">
            <div class="neumorphism-shadow">
              新拟态效果
            </div>
            <pre class="demo-code"><code>box-shadow: 
  20px 20px 60px #bebebe,
  -20px -20px 60px #ffffff;</code></pre>
          </div>

          <div class="multi-demo-item">
            <div class="paper-shadow">
              纸张效果
            </div>
            <pre class="demo-code"><code>box-shadow: 
  0 1px 3px rgba(0,0,0,0.12),
  0 1px 2px rgba(0,0,0,0.24);</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 阴影最佳实践 -->
    <section class="demo-section">
      <h3 class="section-title">阴影设计最佳实践</h3>
      
      <div class="best-practices">
        <div class="practice-grid">
          <div class="practice-card">
            <h4 class="practice-title">🎨 视觉层次</h4>
            <div class="depth-examples">
              <div class="depth-item depth-1">深度 1</div>
              <div class="depth-item depth-2">深度 2</div>
              <div class="depth-item depth-3">深度 3</div>
              <div class="depth-item depth-4">深度 4</div>
            </div>
            <p class="practice-description">
              使用不同深度的阴影来创建视觉层次，引导用户注意力。
            </p>
          </div>

          <div class="practice-card">
            <h4 class="practice-title">🌈 颜色考虑</h4>
            <div class="color-examples">
              <div class="color-shadow" style="box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                黑色阴影 (常规)
              </div>
              <div class="color-shadow" style="box-shadow: 0 4px 8px rgba(59,130,246,0.3);">
                蓝色阴影 (品牌色)
              </div>
              <div class="color-shadow" style="box-shadow: 0 4px 8px rgba(16,185,129,0.3);">
                绿色阴影 (成功状态)
              </div>
            </div>
            <p class="practice-description">
              考虑使用品牌色或语义色作为阴影颜色，增强视觉一致性。
            </p>
          </div>

          <div class="practice-card">
            <h4 class="practice-title">📱 性能优化</h4>
            <ul class="optimization-list">
              <li>避免过于复杂的多重阴影</li>
              <li>使用 transform 替代阴影做动画</li>
              <li>考虑在移动端简化阴影效果</li>
              <li>合理使用 GPU 加速</li>
            </ul>
          </div>

          <div class="practice-card">
            <h4 class="practice-title">♿ 无障碍设计</h4>
            <ul class="accessibility-list">
              <li>确保阴影不影响文字可读性</li>
              <li>在高对比度模式下测试效果</li>
              <li>避免仅依赖阴影传达信息</li>
              <li>为阴影效果提供替代方案</li>
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
  name: 'ShadowsDemo',
  data() {
    return {
      // 盒阴影参数
      offsetX: 4,
      offsetY: 4,
      blurRadius: 8,
      spreadRadius: 0,
      shadowColor: '#000000',
      shadowOpacity: 0.3,
      insetShadow: false,
      
      // 文字阴影参数
      textOffsetX: 2,
      textOffsetY: 2,
      textBlur: 4,
      textShadowColor: '#333333',
      textColor: '#2d3748',
      textSize: 24,
      
      // 阴影预设
      shadowPresets: [
        { name: '无阴影', shadow: 'none' },
        { name: '轻微', shadow: '0 1px 3px rgba(0,0,0,0.1)' },
        { name: '普通', shadow: '0 4px 6px rgba(0,0,0,0.1)' },
        { name: '明显', shadow: '0 10px 15px rgba(0,0,0,0.1)' },
        { name: '强烈', shadow: '0 25px 50px rgba(0,0,0,0.25)' },
        { name: '内阴影', shadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' },
        { name: '发光', shadow: '0 0 20px rgba(59,130,246,0.5)' },
        { name: '悬浮', shadow: '0 20px 25px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.04)' }
      ],
      
      // 文字阴影预设
      textShadowPresets: [
        { name: '无阴影', shadow: 'none', color: '#333' },
        { name: '轻微', shadow: '1px 1px 2px rgba(0,0,0,0.1)', color: '#333' },
        { name: '浮雕', shadow: '1px 1px 0 #fff, -1px -1px 0 #000', color: '#999' },
        { name: '发光', shadow: '0 0 10px rgba(59,130,246,0.8)', color: '#1e40af' },
        { name: '多重', shadow: '1px 1px 0 #ccc, 2px 2px 0 #c9c9c9, 3px 3px 0 #bbb', color: '#333' },
        { name: '模糊', shadow: '0 0 8px rgba(0,0,0,0.5)', color: '#fff' }
      ]
    }
  },
  computed: {
    shadowBoxStyle() {
      const rgba = this.hexToRgba(this.shadowColor, this.shadowOpacity)
      const inset = this.insetShadow ? 'inset ' : ''
      return {
        boxShadow: `${inset}${this.offsetX}px ${this.offsetY}px ${this.blurRadius}px ${this.spreadRadius}px ${rgba}`,
        width: '200px',
        height: '120px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #e9ecef',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '500',
        textAlign: 'center'
      }
    },
    
    textShadowStyle() {
      return {
        textShadow: `${this.textOffsetX}px ${this.textOffsetY}px ${this.textBlur}px ${this.textShadowColor}`,
        color: this.textColor,
        fontSize: this.textSize + 'px',
        fontWeight: '600'
      }
    },
    
    boxShadowCSS() {
      const rgba = this.hexToRgba(this.shadowColor, this.shadowOpacity)
      const inset = this.insetShadow ? 'inset ' : ''
      return `.element {
  box-shadow: ${inset}${this.offsetX}px ${this.offsetY}px ${this.blurRadius}px ${this.spreadRadius}px ${rgba};
}`
    },
    
    textShadowCSS() {
      return `.element {
  text-shadow: ${this.textOffsetX}px ${this.textOffsetY}px ${this.textBlur}px ${this.textShadowColor};
  color: ${this.textColor};
  font-size: ${this.textSize}px;
}`
    }
  },
  methods: {
    hexToRgba(hex, alpha) {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `rgba(${r}, ${g}, ${b}, ${alpha})`
    },
    
    applyShadowPreset(preset) {
      // 这里可以解析预设的阴影值并更新控制参数
      // 为了简化，这里只是一个示例
      if (preset.name === '无阴影') {
        this.offsetX = this.offsetY = this.blurRadius = this.spreadRadius = 0
        this.shadowOpacity = 0
      } else if (preset.name === '轻微') {
        this.offsetX = 0
        this.offsetY = 1
        this.blurRadius = 3
        this.spreadRadius = 0
        this.shadowOpacity = 0.1
      }
      // 可以继续添加其他预设的解析逻辑
    },
    
    applyTextShadowPreset(preset) {
      // 类似地处理文字阴影预设
      if (preset.name === '无阴影') {
        this.textOffsetX = this.textOffsetY = this.textBlur = 0
      } else if (preset.name === '轻微') {
        this.textOffsetX = this.textOffsetY = 1
        this.textBlur = 2
      }
    }
  }
}
</script>

<style scoped>
.shadows-demo {
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

.shadow-preview {
  @apply flex justify-center;
}

.shadow-box {
  @apply text-gray-700;
}

.shadow-presets {
  @apply space-y-3;
}

.presets-grid {
  @apply grid grid-cols-2 md:grid-cols-4 gap-3;
}

.preset-box {
  @apply p-3 bg-white text-center rounded cursor-pointer hover:bg-gray-50 transition-colors text-sm border border-gray-200;
}

.text-shadow-preview {
  @apply text-center space-y-4;
}

.shadow-text {
  @apply font-semibold;
}

.text-presets {
  @apply space-y-3;
}

.text-presets-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-3;
}

.text-preset {
  @apply p-3 bg-white text-center rounded cursor-pointer hover:bg-gray-50 transition-colors text-sm border border-gray-200 font-semibold;
}

.code-display {
  @apply lg:col-span-3 mt-4;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

.multi-shadow-demos {
  @apply p-6;
}

.demo-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.multi-demo-item {
  @apply space-y-3;
}

.layered-shadow {
  @apply p-6 bg-white text-center rounded-lg;
  box-shadow: 
    0 1px 3px rgba(0,0,0,0.12),
    0 1px 2px rgba(0,0,0,0.24),
    0 3px 6px rgba(0,0,0,0.16);
}

.neon-shadow {
  @apply p-6 bg-gray-900 text-white text-center rounded-lg;
  box-shadow: 
    0 0 5px #ff6b6b,
    0 0 10px #ff6b6b,
    0 0 15px #ff6b6b,
    0 0 20px #ff6b6b;
}

.neumorphism-shadow {
  @apply p-6 bg-gray-200 text-center rounded-xl;
  box-shadow: 
    20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
}

.paper-shadow {
  @apply p-6 bg-white text-center rounded-lg;
  box-shadow: 
    0 1px 3px rgba(0,0,0,0.12),
    0 1px 2px rgba(0,0,0,0.24);
}

.demo-code {
  @apply bg-gray-900 text-gray-100 p-3 rounded text-xs overflow-x-auto;
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

.practice-description {
  @apply text-sm text-gray-600 mt-2;
}

.depth-examples {
  @apply grid grid-cols-2 gap-3 mb-3;
}

.depth-item {
  @apply p-3 bg-white text-center rounded text-sm font-medium;
}

.depth-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);
}

.depth-2 {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
}

.depth-3 {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19);
}

.depth-4 {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25);
}

.color-examples {
  @apply space-y-3 mb-3;
}

.color-shadow {
  @apply p-3 bg-white text-center rounded text-sm;
}

.optimization-list,
.accessibility-list {
  @apply space-y-2 text-sm text-gray-600;
}

.optimization-list li,
.accessibility-list li {
  @apply flex items-start space-x-2;
}

.optimization-list li::before,
.accessibility-list li::before {
  content: "•";
  @apply text-blue-500 font-bold;
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
