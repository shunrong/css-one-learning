<template>
  <div class="transforms-demo">
    <div class="demo-header">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">CSS 变换效果</h2>
      <p class="text-gray-600">掌握 2D 和 3D 变换，创造动态交互效果</p>
    </div>

    <!-- 2D 变换 -->
    <section class="demo-section">
      <h3 class="section-title">2D 变换 (Transform 2D)</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">变换设置</h4>
          <div class="control-group">
            <label>X轴平移: {{ translateX }}px</label>
            <input v-model="translateX" type="range" min="-100" max="100" class="control-range">
          </div>
          <div class="control-group">
            <label>Y轴平移: {{ translateY }}px</label>
            <input v-model="translateY" type="range" min="-100" max="100" class="control-range">
          </div>
          <div class="control-group">
            <label>旋转角度: {{ rotate }}deg</label>
            <input v-model="rotate" type="range" min="0" max="360" class="control-range">
          </div>
          <div class="control-group">
            <label>X轴缩放: {{ scaleX }}</label>
            <input v-model="scaleX" type="range" min="0.1" max="2" step="0.1" class="control-range">
          </div>
          <div class="control-group">
            <label>Y轴缩放: {{ scaleY }}</label>
            <input v-model="scaleY" type="range" min="0.1" max="2" step="0.1" class="control-range">
          </div>
          <div class="control-group">
            <label>X轴倾斜: {{ skewX }}deg</label>
            <input v-model="skewX" type="range" min="-45" max="45" class="control-range">
          </div>
          <div class="control-group">
            <label>Y轴倾斜: {{ skewY }}deg</label>
            <input v-model="skewY" type="range" min="-45" max="45" class="control-range">
          </div>
        </div>

        <div class="preview-area">
          <div class="transform-container">
            <div class="transform-reference">原始位置</div>
            <div class="transform-element" :style="transform2DStyle">
              变换元素
            </div>
          </div>
          
          <div class="transform-presets">
            <h4 class="font-semibold mb-3">变换预设</h4>
            <div class="presets-grid">
              <button
                v-for="preset in transform2DPresets"
                :key="preset.name"
                @click="applyTransform2DPreset(preset)"
                class="preset-btn"
              >
                {{ preset.name }}
              </button>
            </div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">生成的 CSS 代码</h4>
          <pre class="code-block"><code>{{ transform2DCSS }}</code></pre>
        </div>
      </div>
    </section>

    <!-- 3D 变换 -->
    <section class="demo-section">
      <h3 class="section-title">3D 变换 (Transform 3D)</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">3D 变换设置</h4>
          <div class="control-group">
            <label>透视距离: {{ perspective }}px</label>
            <input v-model="perspective" type="range" min="100" max="2000" class="control-range">
          </div>
          <div class="control-group">
            <label>Z轴平移: {{ translateZ }}px</label>
            <input v-model="translateZ" type="range" min="-200" max="200" class="control-range">
          </div>
          <div class="control-group">
            <label>X轴旋转: {{ rotateX }}deg</label>
            <input v-model="rotateX" type="range" min="-180" max="180" class="control-range">
          </div>
          <div class="control-group">
            <label>Y轴旋转: {{ rotateY }}deg</label>
            <input v-model="rotateY" type="range" min="-180" max="180" class="control-range">
          </div>
          <div class="control-group">
            <label>Z轴旋转: {{ rotateZ }}deg</label>
            <input v-model="rotateZ" type="range" min="-180" max="180" class="control-range">
          </div>
          <div class="control-group">
            <button @click="reset3D" class="btn-secondary">重置</button>
          </div>
        </div>

        <div class="preview-area">
          <div class="transform-3d-container" :style="{ perspective: perspective + 'px' }">
            <div class="transform-3d-element" :style="transform3DStyle">
              <div class="cube-face front">前面</div>
              <div class="cube-face back">后面</div>
              <div class="cube-face left">左面</div>
              <div class="cube-face right">右面</div>
              <div class="cube-face top">上面</div>
              <div class="cube-face bottom">下面</div>
            </div>
          </div>
          
          <div class="transform-3d-presets">
            <h4 class="font-semibold mb-3">3D 效果预设</h4>
            <div class="presets-grid">
              <button
                v-for="preset in transform3DPresets"
                :key="preset.name"
                @click="applyTransform3DPreset(preset)"
                class="preset-btn"
              >
                {{ preset.name }}
              </button>
            </div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">生成的 CSS 代码</h4>
          <pre class="code-block"><code>{{ transform3DCSS }}</code></pre>
        </div>
      </div>
    </section>

    <!-- 变换原点 -->
    <section class="demo-section">
      <h3 class="section-title">变换原点 (transform-origin)</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">原点设置</h4>
          <div class="control-group">
            <label>X轴原点: {{ originX }}%</label>
            <input v-model="originX" type="range" min="0" max="100" class="control-range">
          </div>
          <div class="control-group">
            <label>Y轴原点: {{ originY }}%</label>
            <input v-model="originY" type="range" min="0" max="100" class="control-range">
          </div>
          <div class="control-group">
            <label>测试旋转: {{ testRotate }}deg</label>
            <input v-model="testRotate" type="range" min="0" max="360" class="control-range">
          </div>
        </div>

        <div class="preview-area">
          <div class="origin-demo">
            <div class="origin-element" :style="originStyle">
              <div class="origin-point" :style="originPointStyle"></div>
              变换原点演示
            </div>
          </div>
          
          <div class="origin-presets">
            <h4 class="font-semibold mb-3">常用原点位置</h4>
            <div class="origin-grid">
              <button
                v-for="preset in originPresets"
                :key="preset.name"
                @click="applyOriginPreset(preset)"
                class="preset-btn small"
              >
                {{ preset.name }}
              </button>
            </div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">生成的 CSS 代码</h4>
          <pre class="code-block"><code>{{ originCSS }}</code></pre>
        </div>
      </div>
    </section>

    <!-- 实际应用示例 -->
    <section class="demo-section">
      <h3 class="section-title">实际应用示例</h3>
      
      <div class="applications">
        <div class="app-grid">
          <div class="app-item">
            <h4>卡片翻转效果</h4>
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  正面
                </div>
                <div class="flip-card-back">
                  背面
                </div>
              </div>
            </div>
          </div>

          <div class="app-item">
            <h4>悬停放大效果</h4>
            <div class="scale-hover">
              悬停放大
            </div>
          </div>

          <div class="app-item">
            <h4>旋转加载动画</h4>
            <div class="rotate-loader"></div>
          </div>

          <div class="app-item">
            <h4>3D 按钮效果</h4>
            <button class="button-3d">3D 按钮</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TransformsDemo',
  data() {
    return {
      // 2D 变换参数
      translateX: 0,
      translateY: 0,
      rotate: 0,
      scaleX: 1,
      scaleY: 1,
      skewX: 0,
      skewY: 0,
      
      // 3D 变换参数
      perspective: 1000,
      translateZ: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      
      // 变换原点参数
      originX: 50,
      originY: 50,
      testRotate: 45,
      
      // 预设配置
      transform2DPresets: [
        { name: '重置', translateX: 0, translateY: 0, rotate: 0, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0 },
        { name: '向右移动', translateX: 50, translateY: 0, rotate: 0, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0 },
        { name: '旋转45°', translateX: 0, translateY: 0, rotate: 45, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0 },
        { name: '放大1.5倍', translateX: 0, translateY: 0, rotate: 0, scaleX: 1.5, scaleY: 1.5, skewX: 0, skewY: 0 },
        { name: 'X轴倾斜', translateX: 0, translateY: 0, rotate: 0, scaleX: 1, scaleY: 1, skewX: 30, skewY: 0 },
        { name: '组合效果', translateX: 30, translateY: -20, rotate: 15, scaleX: 1.2, scaleY: 1.2, skewX: 0, skewY: 0 }
      ],
      
      transform3DPresets: [
        { name: '重置', rotateX: 0, rotateY: 0, rotateZ: 0, translateZ: 0 },
        { name: 'X轴翻转', rotateX: 180, rotateY: 0, rotateZ: 0, translateZ: 0 },
        { name: 'Y轴翻转', rotateX: 0, rotateY: 180, rotateZ: 0, translateZ: 0 },
        { name: '立体旋转', rotateX: 45, rotateY: 45, rotateZ: 0, translateZ: 0 },
        { name: '向前移动', rotateX: 0, rotateY: 0, rotateZ: 0, translateZ: 100 },
        { name: '复杂旋转', rotateX: 30, rotateY: 60, rotateZ: 15, translateZ: 50 }
      ],
      
      originPresets: [
        { name: '左上', x: 0, y: 0 },
        { name: '中上', x: 50, y: 0 },
        { name: '右上', x: 100, y: 0 },
        { name: '左中', x: 0, y: 50 },
        { name: '中心', x: 50, y: 50 },
        { name: '右中', x: 100, y: 50 },
        { name: '左下', x: 0, y: 100 },
        { name: '中下', x: 50, y: 100 },
        { name: '右下', x: 100, y: 100 }
      ]
    }
  },
  computed: {
    transform2DStyle() {
      return {
        transform: `translate(${this.translateX}px, ${this.translateY}px) rotate(${this.rotate}deg) scale(${this.scaleX}, ${this.scaleY}) skew(${this.skewX}deg, ${this.skewY}deg)`,
        width: '100px',
        height: '100px',
        backgroundColor: '#3498db',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        fontWeight: '500',
        transition: 'none'
      }
    },
    
    transform3DStyle() {
      return {
        transform: `translateZ(${this.translateZ}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
        transformStyle: 'preserve-3d',
        width: '120px',
        height: '120px',
        position: 'relative'
      }
    },
    
    originStyle() {
      return {
        transformOrigin: `${this.originX}% ${this.originY}%`,
        transform: `rotate(${this.testRotate}deg)`,
        width: '120px',
        height: '80px',
        backgroundColor: '#e74c3c',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        fontWeight: '500',
        position: 'relative'
      }
    },
    
    originPointStyle() {
      return {
        position: 'absolute',
        left: this.originX + '%',
        top: this.originY + '%',
        width: '8px',
        height: '8px',
        backgroundColor: '#f39c12',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        border: '2px solid white'
      }
    },
    
    transform2DCSS() {
      return `.element {
  transform: translate(${this.translateX}px, ${this.translateY}px) 
             rotate(${this.rotate}deg) 
             scale(${this.scaleX}, ${this.scaleY}) 
             skew(${this.skewX}deg, ${this.skewY}deg);
}`
    },
    
    transform3DCSS() {
      return `.container {
  perspective: ${this.perspective}px;
}

.element {
  transform: translateZ(${this.translateZ}px) 
             rotateX(${this.rotateX}deg) 
             rotateY(${this.rotateY}deg) 
             rotateZ(${this.rotateZ}deg);
  transform-style: preserve-3d;
}`
    },
    
    originCSS() {
      return `.element {
  transform-origin: ${this.originX}% ${this.originY}%;
  transform: rotate(${this.testRotate}deg);
}`
    }
  },
  methods: {
    applyTransform2DPreset(preset) {
      Object.keys(preset).forEach(key => {
        if (key !== 'name') {
          this[key] = preset[key]
        }
      })
    },
    
    applyTransform3DPreset(preset) {
      Object.keys(preset).forEach(key => {
        if (key !== 'name') {
          this[key] = preset[key]
        }
      })
    },
    
    applyOriginPreset(preset) {
      this.originX = preset.x
      this.originY = preset.y
    },
    
    reset3D() {
      this.rotateX = this.rotateY = this.rotateZ = this.translateZ = 0
    }
  }
}
</script>

<style scoped>
.transforms-demo {
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

.btn-secondary {
  @apply px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm;
}

.preview-area {
  @apply lg:col-span-2 bg-gray-50 rounded-lg p-6 space-y-6;
}

.transform-container {
  @apply relative h-64 flex items-center justify-center;
}

.transform-reference {
  @apply absolute w-24 h-24 border-2 border-dashed border-gray-400 bg-gray-100 flex items-center justify-center text-xs text-gray-600 rounded;
}

.transform-element {
  @apply absolute;
}

.transform-3d-container {
  @apply h-64 flex items-center justify-center;
}

.transform-3d-element {
  @apply relative;
}

.cube-face {
  @apply absolute w-full h-full flex items-center justify-center text-white font-semibold text-sm;
}

.front { 
  @apply bg-red-500;
  transform: translateZ(60px); 
}
.back { 
  @apply bg-green-500;
  transform: rotateY(180deg) translateZ(60px); 
}
.left { 
  @apply bg-blue-500;
  transform: rotateY(-90deg) translateZ(60px); 
}
.right { 
  @apply bg-yellow-500;
  transform: rotateY(90deg) translateZ(60px); 
}
.top { 
  @apply bg-purple-500;
  transform: rotateX(90deg) translateZ(60px); 
}
.bottom { 
  @apply bg-pink-500;
  transform: rotateX(-90deg) translateZ(60px); 
}

.origin-demo {
  @apply h-32 flex items-center justify-center;
}

.origin-element {
  @apply relative;
}

.origin-point {
  @apply absolute;
}

.presets-grid {
  @apply grid grid-cols-2 md:grid-cols-3 gap-2;
}

.origin-grid {
  @apply grid grid-cols-3 gap-2;
}

.preset-btn {
  @apply px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm;
}

.preset-btn.small {
  @apply px-2 py-1 text-xs;
}

.code-display {
  @apply lg:col-span-3 mt-4;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

.applications {
  @apply p-6;
}

.app-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6;
}

.app-item {
  @apply text-center space-y-3;
}

.app-item h4 {
  @apply font-semibold text-gray-900;
}

/* 应用示例样式 */
.flip-card {
  @apply w-32 h-20 mx-auto;
  perspective: 1000px;
}

.flip-card-inner {
  @apply relative w-full h-full transition-transform duration-500;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  @apply absolute w-full h-full flex items-center justify-center text-white font-semibold rounded;
  backface-visibility: hidden;
}

.flip-card-front {
  @apply bg-blue-500;
}

.flip-card-back {
  @apply bg-red-500;
  transform: rotateY(180deg);
}

.scale-hover {
  @apply w-32 h-20 bg-green-500 text-white flex items-center justify-center rounded font-semibold mx-auto transition-transform duration-300 cursor-pointer;
}

.scale-hover:hover {
  transform: scale(1.1);
}

.rotate-loader {
  @apply w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.button-3d {
  @apply px-6 py-3 bg-purple-500 text-white font-semibold rounded transition-all duration-200;
  transform: translateY(0);
  box-shadow: 0 4px 0 #6b46c1;
}

.button-3d:hover {
  transform: translateY(2px);
  box-shadow: 0 2px 0 #6b46c1;
}

.button-3d:active {
  transform: translateY(4px);
  box-shadow: 0 0 0 #6b46c1;
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
