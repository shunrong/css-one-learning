<template>
  <div class="modules p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">模块系统</h1>
      
      <div class="prose prose-lg max-w-none">
        <p class="text-gray-600 mb-8">
          JavaScript模块系统让我们能够将代码分割成可重用的模块，提高代码的组织性和可维护性。
        </p>

        <!-- ES6模块 -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">ES6模块 (ESM)</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="code-example">
              <h4 class="text-md font-medium mb-2">导出 (Export)</h4>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>// math.js - 命名导出
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// 批量导出
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

export { subtract, divide };

// 默认导出
export default class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(num) {
    this.result += num;
    return this;
  }
}</code></pre>
            </div>

            <div class="code-example">
              <h4 class="text-md font-medium mb-2">导入 (Import)</h4>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>// main.js - 各种导入方式

// 导入命名导出
import { PI, add, multiply } from './math.js';

// 重命名导入
import { subtract as minus } from './math.js';

// 导入所有命名导出
import * as MathUtils from './math.js';

// 导入默认导出
import Calculator from './math.js';

// 混合导入
import Calculator, { PI, add } from './math.js';

// 使用
console.log(PI); // 3.14159
console.log(add(2, 3)); // 5
console.log(MathUtils.multiply(4, 5)); // 20

const calc = new Calculator();
calc.add(10).add(5);
console.log(calc.result); // 15</code></pre>
            </div>
          </div>
        </section>

        <!-- CommonJS -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">CommonJS (Node.js)</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="code-example">
              <h4 class="text-md font-medium mb-2">module.exports</h4>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>// utils.js
const PI = 3.14159;

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// 导出单个值
module.exports = {
  PI,
  add,
  multiply
};

// 或者逐个导出
// exports.PI = PI;
// exports.add = add;
// exports.multiply = multiply;

// 导出类
class Calculator {
  constructor() {
    this.result = 0;
  }
}

module.exports = Calculator;</code></pre>
            </div>

            <div class="code-example">
              <h4 class="text-md font-medium mb-2">require</h4>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>// app.js

// 导入整个对象
const utils = require('./utils');
console.log(utils.PI); // 3.14159
console.log(utils.add(2, 3)); // 5

// 解构导入
const { PI, add, multiply } = require('./utils');
console.log(PI); // 3.14159

// 导入类
const Calculator = require('./Calculator');
const calc = new Calculator();

// 导入核心模块
const fs = require('fs');
const path = require('path');

// 导入第三方模块
const express = require('express');
const lodash = require('lodash');</code></pre>
            </div>
          </div>
        </section>

        <!-- 动态导入 -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">动态导入</h2>
          
          <div class="code-example">
            <h4 class="text-md font-medium mb-2">import() 函数</h4>
            <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>// 动态导入 - 按需加载
async function loadMathModule() {
  try {
    // 动态导入返回Promise
    const mathModule = await import('./math.js');
    
    console.log(mathModule.PI); // 3.14159
    console.log(mathModule.add(2, 3)); // 5
    
    // 使用默认导出
    const Calculator = mathModule.default;
    const calc = new Calculator();
    
  } catch (error) {
    console.error('模块加载失败:', error);
  }
}

// 条件导入
async function loadUtilsIfNeeded(condition) {
  if (condition) {
    const { formatDate, formatCurrency } = await import('./utils.js');
    return { formatDate, formatCurrency };
  }
  return null;
}

// 路由级别的代码分割
const routes = [
  {
    path: '/dashboard',
    component: () => import('./components/Dashboard.vue')
  },
  {
    path: '/profile',
    component: () => import('./components/Profile.vue')
  }
];</code></pre>
          </div>
        </section>

        <!-- 模块化最佳实践 -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">模块化最佳实践</h2>
          
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 class="text-lg font-medium text-blue-900 mb-3">📁 项目结构示例</h3>
            <pre class="bg-white p-4 rounded border text-sm overflow-x-auto"><code>src/
├── components/          # 可复用组件
│   ├── ui/
│   │   ├── Button.js
│   │   ├── Modal.js
│   │   └── index.js     # 统一导出
│   └── layout/
│       ├── Header.js
│       └── Footer.js
├── utils/               # 工具函数
│   ├── api.js
│   ├── validation.js
│   ├── format.js
│   └── index.js         # 统一导出
├── services/            # 业务服务
│   ├── userService.js
│   ├── dataService.js
│   └── index.js
├── constants/           # 常量定义
│   ├── api.js
│   ├── messages.js
│   └── index.js
└── main.js              # 入口文件</code></pre>
          </div>

          <div class="code-example">
            <h4 class="text-md font-medium mb-2">统一导出模式</h4>
            <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>// utils/index.js - 统一导出入口
export { formatDate, formatTime } from './format.js';
export { validateEmail, validatePhone } from './validation.js';
export { apiRequest, handleError } from './api.js';

// 重新导出并重命名
export { 
  debounce as delay,
  throttle as limit 
} from './performance.js';

// 默认导出汇总
export { default as Logger } from './logger.js';

// 使用方式
import { formatDate, validateEmail, Logger } from './utils';
// 而不是多个单独的导入语句</code></pre>
          </div>
        </section>

        <!-- 模块加载策略 -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">模块加载策略</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class="text-green-800 font-semibold mb-2">🚀 性能优化</h4>
              <ul class="text-green-700 text-sm space-y-1">
                <li>• 使用动态导入实现代码分割</li>
                <li>• 延迟加载非关键模块</li>
                <li>• 预加载可能需要的模块</li>
                <li>• 使用Tree Shaking移除未使用代码</li>
                <li>• 合理组织模块依赖关系</li>
              </ul>
            </div>
            
            <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 class="text-yellow-800 font-semibold mb-2">⚠️ 注意事项</h4>
              <ul class="text-yellow-700 text-sm space-y-1">
                <li>• 避免循环依赖</li>
                <li>• 保持模块单一职责</li>
                <li>• 明确模块的公共接口</li>
                <li>• 注意模块的加载顺序</li>
                <li>• 处理模块加载错误</li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 实际应用示例 -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibent text-gray-800 mb-4">实际应用示例</h2>
          
          <div class="code-example">
            <h4 class="text-md font-medium mb-2">Vue 3 Composition API 模块化</h4>
            <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>// composables/useCounter.js
import { ref, computed } from 'vue';

export function useCounter(initialValue = 0) {
  const count = ref(initialValue);

  const doubleCount = computed(() => count.value * 2);

  const increment = () => count.value++;
  const decrement = () => count.value--;
  const reset = () => count.value = initialValue;

  return {
    count,
    doubleCount,
    increment,
    decrement,
    reset
  };
}

// components/Counter.vue
import { useCounter } from '../composables/useCounter.js';

export default {
  setup() {
    const { count, doubleCount, increment, decrement } = useCounter(10);
    
    return {
      count,
      doubleCount,
      increment,
      decrement
    };
  }
};</code></pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modules',
  mounted() {
    console.log('模块系统页面已加载');
  }
}
</script>

<style scoped>
.code-example {
  margin-bottom: 1.5rem;
}

.code-example h4 {
  color: #374151;
  margin-bottom: 0.5rem;
}

.prose h2 {
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

pre {
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

code {
  font-family: 'Courier New', Courier, monospace;
}
</style>
