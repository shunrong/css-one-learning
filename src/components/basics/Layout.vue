<template>
  <div class="layout-demo">
    <div class="demo-header">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">CSS 布局系统</h2>
      <p class="text-gray-600">掌握现代 CSS 的核心布局技术</p>
    </div>

    <!-- Flexbox 布局 -->
    <section class="demo-section">
      <h3 class="section-title">Flexbox 弹性布局</h3>
      <div class="theory-box">
        <h4 class="font-semibold mb-2">💡 核心概念</h4>
        <p class="text-sm text-gray-600 mb-3">
          Flexbox 是一维布局方法，能够高效地排列、分配和对齐容器中的项目。主要用于处理单行或单列的布局需求。
        </p>
        <div class="concept-grid">
          <div class="concept-item">
            <strong>主轴 (main axis)</strong><br>
            <span class="text-xs text-gray-500">flex-direction 定义的方向</span>
          </div>
          <div class="concept-item">
            <strong>交叉轴 (cross axis)</strong><br>
            <span class="text-xs text-gray-500">垂直于主轴的方向</span>
          </div>
          <div class="concept-item">
            <strong>弹性容器</strong><br>
            <span class="text-xs text-gray-500">设置了 display: flex 的元素</span>
          </div>
          <div class="concept-item">
            <strong>弹性项目</strong><br>
            <span class="text-xs text-gray-500">弹性容器的直接子元素</span>
          </div>
        </div>
      </div>

      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">调整属性</h4>
          <div class="control-group">
            <label>flex-direction:</label>
            <select v-model="flexDirection" class="control-select">
              <option value="row">row (默认)</option>
              <option value="row-reverse">row-reverse</option>
              <option value="column">column</option>
              <option value="column-reverse">column-reverse</option>
            </select>
          </div>
          <div class="control-group">
            <label>justify-content:</label>
            <select v-model="justifyContent" class="control-select">
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
              <option value="center">center</option>
              <option value="space-between">space-between</option>
              <option value="space-around">space-around</option>
              <option value="space-evenly">space-evenly</option>
            </select>
          </div>
          <div class="control-group">
            <label>align-items:</label>
            <select v-model="alignItems" class="control-select">
              <option value="stretch">stretch (默认)</option>
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
              <option value="center">center</option>
              <option value="baseline">baseline</option>
            </select>
          </div>
          <div class="control-group">
            <label>flex-wrap:</label>
            <select v-model="flexWrap" class="control-select">
              <option value="nowrap">nowrap (默认)</option>
              <option value="wrap">wrap</option>
              <option value="wrap-reverse">wrap-reverse</option>
            </select>
          </div>
        </div>

        <div class="demo-area">
          <div 
            class="flex-container" 
            :style="flexContainerStyle"
          >
            <div 
              v-for="i in 5" 
              :key="i" 
              class="flex-item"
              :style="{ backgroundColor: itemColors[i-1] }"
            >
              项目 {{ i }}
            </div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">生成的 CSS 代码</h4>
          <pre class="code-block"><code>.flex-container {
  display: flex;
  flex-direction: {{ flexDirection }};
  justify-content: {{ justifyContent }};
  align-items: {{ alignItems }};
  flex-wrap: {{ flexWrap }};
}</code></pre>
        </div>
      </div>
    </section>

    <!-- Grid 布局 -->
    <section class="demo-section">
      <h3 class="section-title">CSS Grid 网格布局</h3>
      <div class="theory-box">
        <h4 class="font-semibold mb-2">💡 核心概念</h4>
        <p class="text-sm text-gray-600 mb-3">
          CSS Grid 是二维布局系统，可以同时处理行和列。适合创建复杂的网格布局，如页面整体布局、卡片网格等。
        </p>
        <div class="concept-grid">
          <div class="concept-item">
            <strong>网格容器</strong><br>
            <span class="text-xs text-gray-500">设置了 display: grid 的元素</span>
          </div>
          <div class="concept-item">
            <strong>网格项目</strong><br>
            <span class="text-xs text-gray-500">网格容器的直接子元素</span>
          </div>
          <div class="concept-item">
            <strong>网格线</strong><br>
            <span class="text-xs text-gray-500">分隔网格的线条</span>
          </div>
          <div class="concept-item">
            <strong>网格轨道</strong><br>
            <span class="text-xs text-gray-500">两条相邻网格线之间的空间</span>
          </div>
        </div>
      </div>

      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">调整属性</h4>
          <div class="control-group">
            <label>grid-template-columns:</label>
            <select v-model="gridColumns" class="control-select">
              <option value="repeat(3, 1fr)">repeat(3, 1fr)</option>
              <option value="repeat(4, 1fr)">repeat(4, 1fr)</option>
              <option value="1fr 2fr 1fr">1fr 2fr 1fr</option>
              <option value="200px 1fr 100px">200px 1fr 100px</option>
              <option value="repeat(auto-fit, minmax(150px, 1fr))">响应式网格</option>
            </select>
          </div>
          <div class="control-group">
            <label>grid-template-rows:</label>
            <select v-model="gridRows" class="control-select">
              <option value="repeat(3, 100px)">repeat(3, 100px)</option>
              <option value="auto auto auto">auto auto auto</option>
              <option value="100px 1fr 50px">100px 1fr 50px</option>
            </select>
          </div>
          <div class="control-group">
            <label>gap:</label>
            <select v-model="gridGap" class="control-select">
              <option value="0">0</option>
              <option value="10px">10px</option>
              <option value="20px">20px</option>
              <option value="10px 20px">10px 20px (行 列)</option>
            </select>
          </div>
          <div class="control-group">
            <label>justify-items:</label>
            <select v-model="justifyItems" class="control-select">
              <option value="stretch">stretch (默认)</option>
              <option value="start">start</option>
              <option value="end">end</option>
              <option value="center">center</option>
            </select>
          </div>
        </div>

        <div class="demo-area">
          <div 
            class="grid-container" 
            :style="gridContainerStyle"
          >
            <div 
              v-for="i in 9" 
              :key="i" 
              class="grid-item"
              :class="{ 'special-item': i === 5 }"
              :style="{ backgroundColor: itemColors[i-1] || itemColors[i-6] }"
            >
              {{ i }}
            </div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">生成的 CSS 代码</h4>
          <pre class="code-block"><code>.grid-container {
  display: grid;
  grid-template-columns: {{ gridColumns }};
  grid-template-rows: {{ gridRows }};
  gap: {{ gridGap }};
  justify-items: {{ justifyItems }};
}</code></pre>
        </div>
      </div>
    </section>

    <!-- 定位布局 -->
    <section class="demo-section">
      <h3 class="section-title">CSS 定位 (Position)</h3>
      <div class="theory-box">
        <h4 class="font-semibold mb-2">💡 定位类型</h4>
        <div class="position-types">
          <div class="position-type">
            <strong>static</strong> - 默认定位，按文档流排列
          </div>
          <div class="position-type">
            <strong>relative</strong> - 相对于自身原位置定位
          </div>
          <div class="position-type">
            <strong>absolute</strong> - 相对于最近的定位祖先元素
          </div>
          <div class="position-type">
            <strong>fixed</strong> - 相对于视口定位
          </div>
          <div class="position-type">
            <strong>sticky</strong> - 粘性定位，滚动时切换状态
          </div>
        </div>
      </div>

      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">调整属性</h4>
          <div class="control-group">
            <label>position:</label>
            <select v-model="position" class="control-select">
              <option value="static">static</option>
              <option value="relative">relative</option>
              <option value="absolute">absolute</option>
              <option value="fixed">fixed</option>
            </select>
          </div>
          <div class="control-group">
            <label>top:</label>
            <input v-model="positionTop" type="range" min="0" max="100" class="control-range">
            <span class="ml-2 text-sm">{{ positionTop }}px</span>
          </div>
          <div class="control-group">
            <label>left:</label>
            <input v-model="positionLeft" type="range" min="0" max="100" class="control-range">
            <span class="ml-2 text-sm">{{ positionLeft }}px</span>
          </div>
        </div>

        <div class="demo-area">
          <div class="position-container">
            <div class="position-context">上下文环境 (relative)</div>
            <div class="normal-box">普通元素</div>
            <div 
              class="positioned-box"
              :style="positionedBoxStyle"
            >
              定位元素
            </div>
            <div class="normal-box">普通元素</div>
          </div>
        </div>

        <div class="code-display">
          <h4 class="font-semibold mb-2">生成的 CSS 代码</h4>
          <pre class="code-block"><code>.positioned-element {
  position: {{ position }};
  top: {{ positionTop }}px;
  left: {{ positionLeft }}px;
}</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LayoutDemo',
  data() {
    return {
      // Flexbox 属性
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      flexWrap: 'nowrap',
      
      // Grid 属性
      gridColumns: 'repeat(3, 1fr)',
      gridRows: 'repeat(3, 100px)',
      gridGap: '10px',
      justifyItems: 'stretch',
      
      // Position 属性
      position: 'static',
      positionTop: 0,
      positionLeft: 0,
      
      // 颜色配置
      itemColors: [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE'
      ]
    }
  },
  computed: {
    flexContainerStyle() {
      return {
        display: 'flex',
        flexDirection: this.flexDirection,
        justifyContent: this.justifyContent,
        alignItems: this.alignItems,
        flexWrap: this.flexWrap,
        minHeight: '200px',
        padding: '20px',
        border: '2px dashed #cbd5e0',
        borderRadius: '8px'
      }
    },
    gridContainerStyle() {
      return {
        display: 'grid',
        gridTemplateColumns: this.gridColumns,
        gridTemplateRows: this.gridRows,
        gap: this.gridGap,
        justifyItems: this.justifyItems,
        padding: '20px',
        border: '2px dashed #cbd5e0',
        borderRadius: '8px'
      }
    },
    positionedBoxStyle() {
      return {
        position: this.position,
        top: this.position !== 'static' ? this.positionTop + 'px' : 'auto',
        left: this.position !== 'static' ? this.positionLeft + 'px' : 'auto',
        backgroundColor: '#FF6B6B',
        color: 'white',
        padding: '10px 15px',
        borderRadius: '6px',
        fontWeight: '500',
        zIndex: this.position === 'absolute' || this.position === 'fixed' ? 10 : 'auto'
      }
    }
  }
}
</script>

<style scoped>
.layout-demo {
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

.concept-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-3;
}

.concept-item {
  @apply p-3 bg-white rounded-lg border border-blue-200 text-sm;
}

.demo-playground {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-6 p-6;
}

.controls {
  @apply space-y-4;
}

.control-group {
  @apply flex flex-col space-y-1;
}

.control-group label {
  @apply text-sm font-medium text-gray-700;
}

.control-select {
  @apply px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm;
}

.control-range {
  @apply w-full;
}

.demo-area {
  @apply lg:col-span-2;
}

.flex-item {
  @apply text-white font-medium px-4 py-3 rounded-md text-center min-w-0 flex-shrink-0;
  min-width: 80px;
}

.grid-item {
  @apply text-white font-medium p-4 rounded-md text-center flex items-center justify-center;
}

.special-item {
  grid-column: span 2;
}

.position-container {
  @apply relative bg-gray-100 p-6 rounded-lg min-h-64;
}

.position-context {
  @apply absolute inset-0 bg-blue-100 border-2 border-dashed border-blue-400 rounded-lg flex items-center justify-center text-blue-700 font-medium;
}

.normal-box {
  @apply bg-gray-300 text-gray-700 p-3 rounded-md mb-2 text-center font-medium;
}

.positioned-box {
  @apply inline-block;
}

.code-display {
  @apply mt-6 lg:col-span-3;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

.position-types {
  @apply space-y-2;
}

.position-type {
  @apply text-sm p-2 bg-white rounded border border-blue-200;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .demo-playground {
    @apply grid-cols-1;
  }
  
  .demo-area {
    @apply col-span-1;
  }
  
  .code-display {
    @apply col-span-1;
  }
}
</style>
