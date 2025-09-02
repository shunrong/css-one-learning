<template>
  <div class="colors-demo">
    <div class="demo-header">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">CSS 颜色系统</h2>
      <p class="text-gray-600">掌握 CSS 中颜色的表示方法、应用技巧和设计原理</p>
    </div>

    <!-- 颜色表示方法 -->
    <section class="demo-section">
      <h3 class="section-title">颜色表示方法</h3>
      
      <div class="theory-box">
        <h4 class="font-semibold mb-2">💡 核心概念</h4>
        <p class="text-sm text-gray-600 mb-4">
          CSS 提供了多种颜色表示方法，每种方法都有其适用场景和优势。理解这些方法有助于更好地控制色彩效果。
        </p>
      </div>

      <div class="color-methods-grid">
        <div class="color-method-card">
          <h4 class="font-semibold mb-3">关键字 (Keywords)</h4>
          <div class="color-examples">
            <div 
              v-for="color in keywordColors" 
              :key="color.name"
              class="color-example"
              :style="{ backgroundColor: color.value }"
            >
              <span class="color-name">{{ color.name }}</span>
            </div>
          </div>
          <pre class="code-example"><code>color: red;
background: blue;
border-color: transparent;</code></pre>
        </div>

        <div class="color-method-card">
          <h4 class="font-semibold mb-3">十六进制 (Hex)</h4>
          <div class="color-examples">
            <div 
              v-for="color in hexColors" 
              :key="color.name"
              class="color-example"
              :style="{ backgroundColor: color.value }"
            >
              <span class="color-name">{{ color.value }}</span>
            </div>
          </div>
          <pre class="code-example"><code>color: #ff0000;
background: #00ff00;
border-color: #0000ff80;</code></pre>
        </div>

        <div class="color-method-card">
          <h4 class="font-semibold mb-3">RGB / RGBA</h4>
          <div class="color-examples">
            <div 
              v-for="color in rgbColors" 
              :key="color.name"
              class="color-example"
              :style="{ backgroundColor: color.value }"
            >
              <span class="color-name">{{ color.name }}</span>
            </div>
          </div>
          <pre class="code-example"><code>color: rgb(255, 0, 0);
background: rgba(0, 255, 0, 0.5);
border-color: rgb(0 0 255 / 0.8);</code></pre>
        </div>

        <div class="color-method-card">
          <h4 class="font-semibold mb-3">HSL / HSLA</h4>
          <div class="color-examples">
            <div 
              v-for="color in hslColors" 
              :key="color.name"
              class="color-example"
              :style="{ backgroundColor: color.value }"
            >
              <span class="color-name">{{ color.name }}</span>
            </div>
          </div>
          <pre class="code-example"><code>color: hsl(0, 100%, 50%);
background: hsla(120, 100%, 50%, 0.7);
border-color: hsl(240 100% 50% / 0.6);</code></pre>
        </div>
      </div>
    </section>

    <!-- 交互式颜色调节器 -->
    <section class="demo-section">
      <h3 class="section-title">交互式颜色调节器</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">HSL 调节</h4>
          <div class="control-group">
            <label>色相 (Hue): {{ hue }}°</label>
            <input v-model="hue" type="range" min="0" max="360" class="control-range hue-range">
          </div>
          <div class="control-group">
            <label>饱和度 (Saturation): {{ saturation }}%</label>
            <input v-model="saturation" type="range" min="0" max="100" class="control-range">
          </div>
          <div class="control-group">
            <label>亮度 (Lightness): {{ lightness }}%</label>
            <input v-model="lightness" type="range" min="0" max="100" class="control-range">
          </div>
          <div class="control-group">
            <label>透明度 (Alpha): {{ alpha }}</label>
            <input v-model="alpha" type="range" min="0" max="1" step="0.1" class="control-range">
          </div>
        </div>

        <div class="color-display">
          <div class="color-preview" :style="{ backgroundColor: currentHSL }">
            <div class="color-info">
              <h4 class="text-lg font-semibold text-white mix-blend-difference mb-2">预览颜色</h4>
              <div class="color-values">
                <div class="color-value">HSL: {{ currentHSL }}</div>
                <div class="color-value">RGB: {{ currentRGB }}</div>
                <div class="color-value">HEX: {{ currentHEX }}</div>
              </div>
            </div>
          </div>

          <div class="color-variations">
            <h4 class="font-semibold mb-3">颜色变化</h4>
            <div class="variations-grid">
              <div 
                v-for="variation in colorVariations" 
                :key="variation.name"
                class="variation-item"
                :style="{ backgroundColor: variation.color }"
              >
                <span class="variation-name">{{ variation.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CSS 渐变 -->
    <section class="demo-section">
      <h3 class="section-title">CSS 渐变</h3>
      
      <div class="theory-box">
        <h4 class="font-semibold mb-2">💡 渐变类型</h4>
        <div class="gradient-types">
          <div class="gradient-type">
            <strong>线性渐变 (linear-gradient)</strong> - 沿着一条直线的颜色过渡
          </div>
          <div class="gradient-type">
            <strong>径向渐变 (radial-gradient)</strong> - 从中心点向外辐射的颜色过渡
          </div>
          <div class="gradient-type">
            <strong>锥形渐变 (conic-gradient)</strong> - 围绕中心点旋转的颜色过渡
          </div>
        </div>
      </div>

      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">渐变设置</h4>
          <div class="control-group">
            <label>渐变类型:</label>
            <select v-model="gradientType" class="control-select">
              <option value="linear">线性渐变</option>
              <option value="radial">径向渐变</option>
              <option value="conic">锥形渐变</option>
            </select>
          </div>
          <div v-if="gradientType === 'linear'" class="control-group">
            <label>方向: {{ linearDirection }}°</label>
            <input v-model="linearDirection" type="range" min="0" max="360" class="control-range">
          </div>
          <div class="control-group">
            <label>起始颜色:</label>
            <input v-model="gradientStart" type="color" class="control-color">
          </div>
          <div class="control-group">
            <label>结束颜色:</label>
            <input v-model="gradientEnd" type="color" class="control-color">
          </div>
        </div>

        <div class="gradient-display">
          <div class="gradient-preview" :style="{ background: currentGradient }">
            <div class="gradient-info">
              <h4 class="text-lg font-semibold text-white mix-blend-difference mb-2">渐变预览</h4>
            </div>
          </div>
          
          <div class="gradient-examples">
            <h4 class="font-semibold mb-3">常用渐变效果</h4>
            <div class="examples-grid">
              <div 
                v-for="example in gradientExamples" 
                :key="example.name"
                class="gradient-example"
                :style="{ background: example.gradient }"
              >
                <span class="example-name">{{ example.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">生成的 CSS 代码</h4>
          <pre class="code-block"><code>background: {{ currentGradient }};</code></pre>
        </div>
      </div>
    </section>

    <!-- 颜色理论与配色 -->
    <section class="demo-section">
      <h3 class="section-title">颜色理论与配色方案</h3>
      
      <div class="theory-box">
        <h4 class="font-semibold mb-2">💡 配色理论</h4>
        <p class="text-sm text-gray-600 mb-4">
          理解色彩理论有助于创建和谐、吸引人的配色方案。以下是一些基础的配色原则：
        </p>
      </div>

      <div class="color-schemes">
        <div 
          v-for="scheme in colorSchemes" 
          :key="scheme.name"
          class="color-scheme-card"
        >
          <h4 class="font-semibold mb-3">{{ scheme.name }}</h4>
          <div class="scheme-colors">
            <div 
              v-for="(color, index) in scheme.colors" 
              :key="index"
              class="scheme-color"
              :style="{ backgroundColor: color }"
              :title="color"
            ></div>
          </div>
          <p class="scheme-description">{{ scheme.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ColorsDemo',
  data() {
    return {
      // HSL 调节器
      hue: 220,
      saturation: 80,
      lightness: 60,
      alpha: 1,
      
      // 渐变设置
      gradientType: 'linear',
      linearDirection: 45,
      gradientStart: '#ff6b6b',
      gradientEnd: '#4ecdc4',
      
      // 颜色示例数据
      keywordColors: [
        { name: 'red', value: 'red' },
        { name: 'blue', value: 'blue' },
        { name: 'green', value: 'green' },
        { name: 'orange', value: 'orange' },
        { name: 'purple', value: 'purple' },
        { name: 'cyan', value: 'cyan' }
      ],
      
      hexColors: [
        { name: '红色', value: '#FF0000' },
        { name: '绿色', value: '#00FF00' },
        { name: '蓝色', value: '#0000FF' },
        { name: '半透明', value: '#FF000080' },
        { name: '深灰', value: '#333333' },
        { name: '浅灰', value: '#CCCCCC' }
      ],
      
      rgbColors: [
        { name: 'rgb(255,99,71)', value: 'rgb(255,99,71)' },
        { name: 'rgba(0,128,0,0.5)', value: 'rgba(0,128,0,0.5)' },
        { name: 'rgb(70,130,180)', value: 'rgb(70,130,180)' },
        { name: 'rgba(255,215,0,0.8)', value: 'rgba(255,215,0,0.8)' }
      ],
      
      hslColors: [
        { name: 'hsl(0,100%,50%)', value: 'hsl(0,100%,50%)' },
        { name: 'hsla(120,100%,25%,0.7)', value: 'hsla(120,100%,25%,0.7)' },
        { name: 'hsl(240,100%,50%)', value: 'hsl(240,100%,50%)' },
        { name: 'hsla(300,76%,72%,0.6)', value: 'hsla(300,76%,72%,0.6)' }
      ],
      
      gradientExamples: [
        { name: '日落', gradient: 'linear-gradient(45deg, #ff9a9e, #fecfef)' },
        { name: '海洋', gradient: 'linear-gradient(120deg, #a8edea, #fed6e3)' },
        { name: '森林', gradient: 'linear-gradient(135deg, #667eea, #764ba2)' },
        { name: '彩虹', gradient: 'linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)' },
        { name: '径向', gradient: 'radial-gradient(circle, #ff6b6b, #4ecdc4)' },
        { name: '锥形', gradient: 'conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #ff6b6b)' }
      ],
      
      colorSchemes: [
        {
          name: '单色配色',
          colors: ['#1a365d', '#2d5a8a', '#4a90b8', '#68c5e6', '#86faf1'],
          description: '使用同一色相的不同明暗度，创造统一和谐的感觉'
        },
        {
          name: '互补配色',
          colors: ['#ff6b6b', '#4ecdc4', '#ff9999', '#7dd3c7', '#ffcccc'],
          description: '使用色环上相对的颜色，产生强烈的对比效果'
        },
        {
          name: '三角配色',
          colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffa07a', '#98d8c8'],
          description: '使用色环上等距的三种颜色，平衡且生动'
        },
        {
          name: '分离补色',
          colors: ['#ff6b6b', '#4ecdc4', '#96ceb4', '#ffeaa7', '#74b9ff'],
          description: '主色与其补色相邻的两种颜色组合'
        }
      ]
    }
  },
  computed: {
    currentHSL() {
      return `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha})`
    },
    
    currentRGB() {
      const h = this.hue / 360
      const s = this.saturation / 100
      const l = this.lightness / 100
      
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
      
      return `rgba(${r}, ${g}, ${b}, ${this.alpha})`
    },
    
    currentHEX() {
      // 简化版本，不包含透明度
      const h = this.hue / 360
      const s = this.saturation / 100
      const l = this.lightness / 100
      
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
    
    colorVariations() {
      const baseH = this.hue
      const baseS = this.saturation
      const baseL = this.lightness
      
      return [
        { name: '更亮', color: `hsl(${baseH}, ${baseS}%, ${Math.min(baseL + 20, 100)}%)` },
        { name: '更暗', color: `hsl(${baseH}, ${baseS}%, ${Math.max(baseL - 20, 0)}%)` },
        { name: '更饱和', color: `hsl(${baseH}, ${Math.min(baseS + 30, 100)}%, ${baseL}%)` },
        { name: '不饱和', color: `hsl(${baseH}, ${Math.max(baseS - 30, 0)}%, ${baseL}%)` },
        { name: '补色', color: `hsl(${(baseH + 180) % 360}, ${baseS}%, ${baseL}%)` },
        { name: '类似色', color: `hsl(${(baseH + 30) % 360}, ${baseS}%, ${baseL}%)` }
      ]
    },
    
    currentGradient() {
      if (this.gradientType === 'linear') {
        return `linear-gradient(${this.linearDirection}deg, ${this.gradientStart}, ${this.gradientEnd})`
      } else if (this.gradientType === 'radial') {
        return `radial-gradient(circle, ${this.gradientStart}, ${this.gradientEnd})`
      } else if (this.gradientType === 'conic') {
        return `conic-gradient(from 0deg, ${this.gradientStart}, ${this.gradientEnd}, ${this.gradientStart})`
      }
      return ''
    }
  }
}
</script>

<style scoped>
.colors-demo {
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

.color-methods-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 p-6;
}

.color-method-card {
  @apply bg-gray-50 rounded-lg p-4 border border-gray-200;
}

.color-examples {
  @apply grid grid-cols-2 gap-2 mb-4;
}

.color-example {
  @apply h-12 rounded-md flex items-center justify-center text-white font-medium text-sm;
}

.color-name {
  @apply mix-blend-difference;
}

.code-example {
  @apply bg-gray-800 text-gray-100 p-3 rounded text-xs;
}

.demo-playground {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-6 p-6;
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

.hue-range {
  background: linear-gradient(to right, 
    hsl(0, 80%, 60%), hsl(60, 80%, 60%), hsl(120, 80%, 60%), 
    hsl(180, 80%, 60%), hsl(240, 80%, 60%), hsl(300, 80%, 60%), hsl(360, 80%, 60%));
}

.control-select {
  @apply px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm;
}

.control-color {
  @apply w-full h-10 border border-gray-300 rounded-md cursor-pointer;
}

.color-display {
  @apply space-y-4;
}

.color-preview {
  @apply h-48 rounded-lg flex items-center justify-center relative overflow-hidden;
}

.color-info {
  @apply text-center;
}

.color-values {
  @apply space-y-1;
}

.color-value {
  @apply text-sm font-mono bg-black bg-opacity-20 px-2 py-1 rounded;
}

.color-variations {
  @apply mt-4;
}

.variations-grid {
  @apply grid grid-cols-2 md:grid-cols-3 gap-2;
}

.variation-item {
  @apply h-16 rounded-md flex items-center justify-center text-white font-medium text-sm;
}

.variation-name {
  @apply mix-blend-difference;
}

.gradient-display {
  @apply space-y-4;
}

.gradient-preview {
  @apply h-48 rounded-lg flex items-center justify-center;
}

.gradient-info {
  @apply text-center;
}

.gradient-examples {
  @apply mt-4;
}

.examples-grid {
  @apply grid grid-cols-2 md:grid-cols-3 gap-2;
}

.gradient-example {
  @apply h-16 rounded-md flex items-center justify-center text-white font-medium text-sm;
}

.example-name {
  @apply mix-blend-difference;
}

.code-display {
  @apply lg:col-span-2 mt-4;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

.gradient-types {
  @apply space-y-2;
}

.gradient-type {
  @apply text-sm p-2 bg-white rounded border border-blue-200;
}

.color-schemes {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 p-6;
}

.color-scheme-card {
  @apply bg-gray-50 rounded-lg p-4 border border-gray-200;
}

.scheme-colors {
  @apply flex space-x-1 mb-3;
}

.scheme-color {
  @apply w-8 h-8 rounded-md flex-shrink-0;
}

.scheme-description {
  @apply text-sm text-gray-600;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .demo-playground {
    @apply grid-cols-1;
  }
  
  .code-display {
    @apply col-span-1;
  }
}
</style>
