<template>
  <div class="animations-demo">
    <div class="demo-header">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">CSS 动画系统</h2>
      <p class="text-gray-600">掌握过渡效果和关键帧动画，创造流畅的用户体验</p>
    </div>

    <!-- CSS 过渡 Transitions -->
    <section class="demo-section">
      <h3 class="section-title">CSS 过渡 (Transitions)</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">过渡设置</h4>
          <div class="control-group">
            <label>过渡属性:</label>
            <select v-model="transitionProperty" class="control-select">
              <option value="all">all</option>
              <option value="background-color">background-color</option>
              <option value="transform">transform</option>
              <option value="opacity">opacity</option>
              <option value="width">width</option>
              <option value="height">height</option>
            </select>
          </div>
          <div class="control-group">
            <label>持续时间: {{ transitionDuration }}s</label>
            <input v-model="transitionDuration" type="range" min="0.1" max="3" step="0.1" class="control-range">
          </div>
          <div class="control-group">
            <label>缓动函数:</label>
            <select v-model="transitionTiming" class="control-select">
              <option value="linear">linear</option>
              <option value="ease">ease</option>
              <option value="ease-in">ease-in</option>
              <option value="ease-out">ease-out</option>
              <option value="ease-in-out">ease-in-out</option>
              <option value="cubic-bezier(0.68, -0.55, 0.265, 1.55)">弹性</option>
            </select>
          </div>
          <div class="control-group">
            <label>延迟时间: {{ transitionDelay }}s</label>
            <input v-model="transitionDelay" type="range" min="0" max="2" step="0.1" class="control-range">
          </div>
        </div>

        <div class="preview-area">
          <div class="transition-demo">
            <div 
              class="transition-element"
              :style="transitionStyle"
              @mouseenter="hoverState = true"
              @mouseleave="hoverState = false"
            >
              悬停查看过渡效果
            </div>
          </div>
          
          <div class="easing-comparison">
            <h4 class="font-semibold mb-3">缓动函数对比</h4>
            <div class="easing-grid">
              <div 
                v-for="easing in easingFunctions" 
                :key="easing.name"
                class="easing-item"
              >
                <div class="easing-label">{{ easing.name }}</div>
                <div class="easing-demo" :style="{ animationTimingFunction: easing.value }"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">生成的 CSS 代码</h4>
          <CodeBlock :code="transitionCSS" language="css" :show-line-numbers="true" />
        </div>
      </div>
    </section>

    <!-- CSS 动画 Animations -->
    <section class="demo-section">
      <h3 class="section-title">CSS 动画 (Animations)</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">动画设置</h4>
          <div class="control-group">
            <label>动画名称:</label>
            <select v-model="animationName" class="control-select">
              <option value="bounce">bounce (弹跳)</option>
              <option value="fade">fade (淡入淡出)</option>
              <option value="slide">slide (滑动)</option>
              <option value="rotate">rotate (旋转)</option>
              <option value="pulse">pulse (脉冲)</option>
              <option value="shake">shake (摇摆)</option>
            </select>
          </div>
          <div class="control-group">
            <label>持续时间: {{ animationDuration }}s</label>
            <input v-model="animationDuration" type="range" min="0.5" max="5" step="0.1" class="control-range">
          </div>
          <div class="control-group">
            <label>重复次数:</label>
            <select v-model="animationIterationCount" class="control-select">
              <option value="1">1次</option>
              <option value="2">2次</option>
              <option value="3">3次</option>
              <option value="infinite">无限</option>
            </select>
          </div>
          <div class="control-group">
            <label>播放方向:</label>
            <select v-model="animationDirection" class="control-select">
              <option value="normal">normal</option>
              <option value="reverse">reverse</option>
              <option value="alternate">alternate</option>
              <option value="alternate-reverse">alternate-reverse</option>
            </select>
          </div>
          <div class="control-group">
            <label>填充模式:</label>
            <select v-model="animationFillMode" class="control-select">
              <option value="none">none</option>
              <option value="forwards">forwards</option>
              <option value="backwards">backwards</option>
              <option value="both">both</option>
            </select>
          </div>
          <div class="control-group">
            <button @click="restartAnimation" class="btn-primary">重新播放</button>
          </div>
        </div>

        <div class="preview-area">
          <div class="animation-demo">
            <div 
              :key="animationKey"
              class="animation-element"
              :style="animationStyle"
            >
              动画演示元素
            </div>
          </div>
          
          <div class="animation-gallery">
            <h4 class="font-semibold mb-3">动画效果库</h4>
            <div class="gallery-grid">
              <div 
                v-for="effect in animationEffects" 
                :key="effect.name"
                class="effect-item"
                :class="effect.class"
              >
                {{ effect.name }}
              </div>
            </div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">生成的 CSS 代码</h4>
          <CodeBlock :code="animationCSS" language="css" :show-line-numbers="true" />
        </div>
      </div>
    </section>

    <!-- 关键帧编辑器 -->
    <section class="demo-section">
      <h3 class="section-title">关键帧编辑器</h3>
      
      <div class="keyframe-editor">
        <div class="keyframe-controls">
          <h4 class="font-semibold mb-3">自定义关键帧</h4>
          <div class="keyframes-list">
            <div 
              v-for="(keyframe, index) in customKeyframes" 
              :key="index"
              class="keyframe-item"
            >
              <div class="keyframe-percent">
                <label>{{ keyframe.percent }}%</label>
                <input 
                  v-model="keyframe.percent" 
                  type="range" 
                  min="0" 
                  max="100" 
                  class="control-range small"
                >
              </div>
              <div class="keyframe-properties">
                <select v-model="keyframe.property" class="control-select small">
                  <option value="transform">transform</option>
                  <option value="opacity">opacity</option>
                  <option value="background-color">background-color</option>
                </select>
                <input 
                  v-model="keyframe.value" 
                  type="text" 
                  placeholder="值"
                  class="control-input small"
                >
              </div>
              <button @click="removeKeyframe(index)" class="btn-danger small">删除</button>
            </div>
          </div>
          <button @click="addKeyframe" class="btn-secondary">添加关键帧</button>
        </div>

        <div class="keyframe-preview">
          <div class="custom-animation-demo">
            <div 
              :key="customAnimationKey"
              class="custom-animation-element"
              :style="customAnimationStyle"
            >
              自定义动画
            </div>
          </div>
          <button @click="playCustomAnimation" class="btn-primary">播放动画</button>
        </div>

        <div class="keyframe-code">
          <h4 class="font-semibold mb-2">生成的关键帧代码</h4>
          <CodeBlock :code="customKeyframeCSS" language="css" :show-line-numbers="true" />
        </div>
      </div>
    </section>

    <!-- 实际应用示例 -->
    <section class="demo-section">
      <h3 class="section-title">实际应用示例</h3>
      
      <div class="applications">
        <div class="app-examples">
          <div class="app-example">
            <h4>加载动画</h4>
            <div class="loading-examples">
              <div class="spinner"></div>
              <div class="dots">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="progress-bar">
                <div class="progress-fill"></div>
              </div>
            </div>
          </div>

          <div class="app-example">
            <h4>按钮交互</h4>
            <div class="button-examples">
              <button class="btn-hover">悬停效果</button>
              <button class="btn-ripple">点击波纹</button>
              <button class="btn-loading">
                <span class="btn-text">加载中</span>
                <span class="btn-spinner"></span>
              </button>
            </div>
          </div>

          <div class="app-example">
            <h4>页面过渡</h4>
            <div class="page-transitions">
              <div class="transition-item slide-in-left">从左滑入</div>
              <div class="transition-item fade-in-up">从下淡入</div>
              <div class="transition-item zoom-in">缩放进入</div>
            </div>
          </div>

          <div class="app-example">
            <h4>微交互动画</h4>
            <div class="micro-interactions">
              <div class="heart-like">❤️</div>
              <div class="notification-badge">
                <span class="badge">3</span>
                通知
              </div>
              <div class="progress-ring">
                <svg class="ring-svg">
                  <circle class="ring-bg" cx="30" cy="30" r="25"></circle>
                  <circle class="ring-progress" cx="30" cy="30" r="25"></circle>
                </svg>
                <span class="ring-text">75%</span>
              </div>
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
  name: 'AnimationsDemo',
  data() {
    return {
      // 过渡参数
      transitionProperty: 'all',
      transitionDuration: 0.3,
      transitionTiming: 'ease',
      transitionDelay: 0,
      hoverState: false,
      
      // 动画参数
      animationName: 'bounce',
      animationDuration: 2,
      animationIterationCount: 'infinite',
      animationDirection: 'normal',
      animationFillMode: 'none',
      animationKey: 0,
      
      // 自定义关键帧
      customKeyframes: [
        { percent: 0, property: 'transform', value: 'translateX(0)' },
        { percent: 50, property: 'transform', value: 'translateX(100px)' },
        { percent: 100, property: 'transform', value: 'translateX(0)' }
      ],
      customAnimationKey: 0,
      
      // 缓动函数
      easingFunctions: [
        { name: 'linear', value: 'linear' },
        { name: 'ease', value: 'ease' },
        { name: 'ease-in', value: 'ease-in' },
        { name: 'ease-out', value: 'ease-out' },
        { name: 'ease-in-out', value: 'ease-in-out' }
      ],
      
      // 动画效果
      animationEffects: [
        { name: '弹跳入场', class: 'bounceIn' },
        { name: '淡入', class: 'fadeIn' },
        { name: '旋转入场', class: 'rotateIn' },
        { name: '缩放入场', class: 'zoomIn' },
        { name: '滑入', class: 'slideInRight' },
        { name: '翻转', class: 'flipInX' }
      ]
    }
  },
  computed: {
    transitionStyle() {
      return {
        transition: `${this.transitionProperty} ${this.transitionDuration}s ${this.transitionTiming} ${this.transitionDelay}s`,
        width: this.hoverState ? '200px' : '150px',
        height: this.hoverState ? '80px' : '60px',
        backgroundColor: this.hoverState ? '#e74c3c' : '#3498db',
        transform: this.hoverState ? 'scale(1.1)' : 'scale(1)',
        opacity: this.hoverState ? 0.8 : 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        borderRadius: '8px',
        fontWeight: '500',
        cursor: 'pointer',
        margin: '20px auto'
      }
    },
    
    animationStyle() {
      return {
        animation: `${this.animationName} ${this.animationDuration}s ${this.animationIterationCount} ${this.animationDirection} ${this.animationFillMode}`,
        width: '120px',
        height: '80px',
        backgroundColor: '#9b59b6',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        fontWeight: '500',
        margin: '20px auto'
      }
    },
    
    customAnimationStyle() {
      return {
        animation: `customAnimation 3s infinite`,
        width: '80px',
        height: '80px',
        backgroundColor: '#f39c12',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        fontWeight: '500'
      }
    },
    
    transitionCSS() {
      return `.element {
  transition: ${this.transitionProperty} ${this.transitionDuration}s ${this.transitionTiming} ${this.transitionDelay}s;
}

.element:hover {
  /* 触发过渡的状态变化 */
  transform: scale(1.1);
  background-color: #e74c3c;
}`
    },
    
    animationCSS() {
      return `.element {
  animation: ${this.animationName} ${this.animationDuration}s ${this.animationIterationCount} ${this.animationDirection} ${this.animationFillMode};
}

@keyframes ${this.animationName} {
  /* 关键帧定义 */
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}`
    },
    
    customKeyframeCSS() {
      let css = '@keyframes customAnimation {\n'
      this.customKeyframes.forEach(frame => {
        css += `  ${frame.percent}% {\n    ${frame.property}: ${frame.value};\n  }\n`
      })
      css += '}\n\n.element {\n  animation: customAnimation 3s infinite;\n}'
      return css
    }
  },
  methods: {
    restartAnimation() {
      this.animationKey++
    },
    
    addKeyframe() {
      this.customKeyframes.push({
        percent: 75,
        property: 'transform',
        value: 'rotate(180deg)'
      })
    },
    
    removeKeyframe(index) {
      this.customKeyframes.splice(index, 1)
    },
    
    playCustomAnimation() {
      this.customAnimationKey++
    }
  }
}
</script>

<style scoped>
.animations-demo {
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

.control-select {
  @apply px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm;
}

.control-range {
  @apply w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer;
}

.control-range::-webkit-slider-thumb {
  @apply appearance-none w-4 h-4 bg-blue-500 rounded-full cursor-pointer;
}

.control-range.small {
  @apply h-1;
}

.control-range.small::-webkit-slider-thumb {
  @apply w-3 h-3;
}

.control-select.small {
  @apply py-1 text-xs;
}

.control-input {
  @apply px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm;
}

.control-input.small {
  @apply py-1 text-xs;
}

.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors text-sm;
}

.btn-secondary {
  @apply px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm;
}

.btn-danger {
  @apply px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors text-xs;
}

.btn-danger.small {
  @apply px-2 py-1;
}

.preview-area {
  @apply lg:col-span-2 bg-gray-50 rounded-lg p-6 space-y-6;
}

.transition-demo {
  @apply h-32 flex items-center justify-center;
}

.animation-demo {
  @apply h-32 flex items-center justify-center;
}

.easing-comparison {
  @apply space-y-3;
}

.easing-grid {
  @apply space-y-2;
}

.easing-item {
  @apply flex items-center space-x-3;
}

.easing-label {
  @apply text-sm font-medium w-20;
}

.easing-demo {
  @apply w-8 h-8 bg-blue-500 rounded;
  animation: easingDemo 2s infinite;
}

@keyframes easingDemo {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(100px); }
}

.animation-gallery {
  @apply space-y-3;
}

.gallery-grid {
  @apply grid grid-cols-2 md:grid-cols-3 gap-3;
}

.effect-item {
  @apply p-3 bg-white text-center rounded border border-gray-200 text-sm font-medium;
}

.code-display {
  @apply lg:col-span-3 mt-4;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

/* 关键帧编辑器 */
.keyframe-editor {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-6 p-6;
}

.keyframe-controls {
  @apply space-y-4;
}

.keyframes-list {
  @apply space-y-3;
}

.keyframe-item {
  @apply p-3 bg-gray-50 rounded border border-gray-200 space-y-2;
}

.keyframe-percent {
  @apply space-y-1;
}

.keyframe-properties {
  @apply grid grid-cols-2 gap-2;
}

.keyframe-preview {
  @apply bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center space-y-4;
}

.custom-animation-demo {
  @apply h-32 flex items-center justify-center;
}

.keyframe-code {
  @apply space-y-2;
}

/* 动画关键帧定义 */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
  40%, 43% { transform: translateY(-30px); }
  70% { transform: translateY(-15px); }
  90% { transform: translateY(-4px); }
}

@keyframes fade {
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes slide {
  0% { transform: translateX(-100px); }
  100% { transform: translateX(0); }
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}

/* 应用示例样式 */
.applications {
  @apply p-6;
}

.app-examples {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8;
}

.app-example {
  @apply space-y-4;
}

.app-example h4 {
  @apply text-lg font-semibold text-gray-900;
}

/* 加载动画 */
.loading-examples {
  @apply flex items-center justify-around;
}

.spinner {
  @apply w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.dots {
  @apply flex space-x-1;
}

.dots div {
  @apply w-2 h-2 bg-blue-500 rounded-full;
  animation: dotPulse 1.5s infinite ease-in-out;
}

.dots div:nth-child(2) { animation-delay: 0.2s; }
.dots div:nth-child(3) { animation-delay: 0.4s; }

@keyframes dotPulse {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

.progress-bar {
  @apply w-24 h-2 bg-gray-200 rounded-full overflow-hidden;
}

.progress-fill {
  @apply h-full bg-blue-500;
  animation: progressFill 2s infinite;
}

@keyframes progressFill {
  0% { width: 0%; }
  100% { width: 100%; }
}

/* 按钮动画 */
.button-examples {
  @apply flex flex-wrap gap-3;
}

.btn-hover {
  @apply px-4 py-2 bg-blue-500 text-white rounded transition-all duration-300;
}

.btn-hover:hover {
  @apply bg-blue-600 transform -translate-y-1 shadow-lg;
}

.btn-ripple {
  @apply px-4 py-2 bg-green-500 text-white rounded relative overflow-hidden;
}

.btn-loading {
  @apply px-4 py-2 bg-purple-500 text-white rounded relative;
}

.btn-spinner {
  @apply absolute right-2 top-1/2 w-4 h-4 border-2 border-white border-t-transparent rounded-full;
  transform: translateY(-50%);
  animation: spin 1s linear infinite;
}

/* 页面过渡 */
.page-transitions {
  @apply space-y-3;
}

.transition-item {
  @apply p-3 bg-white rounded border border-gray-200 text-center;
}

.slide-in-left {
  animation: slideInLeft 1s ease-out;
}

@keyframes slideInLeft {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.fade-in-up {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.zoom-in {
  animation: zoomIn 1s ease-out;
}

@keyframes zoomIn {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* 微交互 */
.micro-interactions {
  @apply flex items-center justify-around;
}

.heart-like {
  @apply text-2xl cursor-pointer;
  transition: transform 0.2s ease;
}

.heart-like:hover {
  @apply transform scale-125;
  animation: heartBeat 0.5s ease;
}

@keyframes heartBeat {
  0%, 50%, 100% { transform: scale(1); }
  25%, 75% { transform: scale(1.2); }
}

.notification-badge {
  @apply relative px-4 py-2 bg-gray-200 rounded;
}

.badge {
  @apply absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center;
  animation: badgePulse 2s infinite;
}

@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.progress-ring {
  @apply relative flex items-center justify-center;
}

.ring-svg {
  @apply w-16 h-16;
}

.ring-bg {
  @apply fill-none stroke-gray-200;
  stroke-width: 4;
}

.ring-progress {
  @apply fill-none stroke-blue-500;
  stroke-width: 4;
  stroke-dasharray: 157;
  stroke-dashoffset: 39;
  transform-origin: center;
  animation: ringProgress 2s ease-in-out infinite;
}

@keyframes ringProgress {
  0% { stroke-dashoffset: 157; }
  100% { stroke-dashoffset: 39; }
}

.ring-text {
  @apply absolute text-sm font-semibold;
}

/* 自定义动画关键帧 */
@keyframes customAnimation {
  0% { transform: translateX(0); }
  50% { transform: translateX(100px); }
  100% { transform: translateX(0); }
}

/* 动画效果库 */
.bounceIn {
  animation: bounceInAnim 1s ease-out;
}

@keyframes bounceInAnim {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
}

.fadeIn {
  animation: fadeInAnim 1s ease-out;
}

@keyframes fadeInAnim {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.rotateIn {
  animation: rotateInAnim 1s ease-out;
}

@keyframes rotateInAnim {
  0% { transform: rotate(-90deg); opacity: 0; }
  100% { transform: rotate(0deg); opacity: 1; }
}

.slideInRight {
  animation: slideInRightAnim 1s ease-out;
}

@keyframes slideInRightAnim {
  0% { transform: translateX(100px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

.flipInX {
  animation: flipInXAnim 1s ease-out;
}

@keyframes flipInXAnim {
  0% { transform: perspective(400px) rotateX(90deg); opacity: 0; }
  40% { transform: perspective(400px) rotateX(-10deg); }
  70% { transform: perspective(400px) rotateX(10deg); }
  100% { transform: perspective(400px) rotateX(0deg); opacity: 1; }
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
  
  .keyframe-editor {
    @apply grid-cols-1;
  }
}
</style>
