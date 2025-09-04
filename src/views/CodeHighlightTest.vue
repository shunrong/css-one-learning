<template>
  <div class="test-page">
    <div class="demo-header">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">代码高亮测试</h2>
      <p class="text-gray-600">测试各种编程语言的代码高亮效果</p>
    </div>

    <div class="test-sections">
      <!-- HTML 代码 -->
      <section class="test-section">
        <h3>HTML 代码</h3>
        <CodeBlock 
          :code="htmlCode" 
          language="markup" 
          title="HTML 示例"
          :show-line-numbers="true"
        />
      </section>

      <!-- CSS 代码 -->
      <section class="test-section">
        <h3>CSS 代码</h3>
        <CodeBlock 
          :code="cssCode" 
          language="css" 
          title="CSS 示例"
          :show-line-numbers="true"
        />
      </section>

      <!-- SCSS 代码 -->
      <section class="test-section">
        <h3>SCSS 代码</h3>
        <CodeBlock 
          :code="scssCode" 
          language="scss" 
          title="SCSS 示例"
          :show-line-numbers="true"
        />
      </section>

      <!-- JavaScript 代码 -->
      <section class="test-section">
        <h3>JavaScript 代码</h3>
        <CodeBlock 
          :code="jsCode" 
          language="javascript" 
          title="JavaScript 示例"
          :show-line-numbers="true"
        />
      </section>

      <!-- JSON 代码 -->
      <section class="test-section">
        <h3>JSON 数据</h3>
        <CodeBlock 
          :code="jsonCode" 
          language="json" 
          title="JSON 示例"
          :show-line-numbers="true"
        />
      </section>

      <!-- 自动检测 -->
      <section class="test-section">
        <h3>自动语言检测</h3>
        <CodeBlock 
          :code="autoDetectCode" 
          language="auto" 
          title="自动检测示例"
          :show-line-numbers="true"
        />
      </section>
    </div>
  </div>
</template>

<script>
import CodeBlock from '@/components/common/CodeBlock.vue'

export default {
  name: 'CodeHighlightTest',
  components: {
    CodeBlock
  },
  data() {
    return {
      htmlCode: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>代码高亮测试</title>
</head>
<body>
  <div class="container">
    <h1>欢迎使用代码高亮</h1>
    <p class="description">这是一个测试页面</p>
    <button id="test-btn" onclick="handleClick()">点击测试</button>
  </div>
</body>
</html>`,

      cssCode: `.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.description {
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
}

#test-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

#test-btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}`,

      scssCode: `// 变量定义
$primary-color: #007bff;
$secondary-color: #6c757d;
$border-radius: 8px;
$transition: all 0.3s ease;

// 混合器
@mixin button($bg-color: $primary-color) {
  background: $bg-color;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: $border-radius;
  cursor: pointer;
  transition: $transition;
  
  &:hover {
    background: darken($bg-color, 10%);
    transform: translateY(-2px);
  }
}

// 嵌套样式
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  .description {
    font-size: 1.2rem;
    color: lighten($secondary-color, 20%);
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  
  #test-btn {
    @include button($primary-color);
  }
}`,

      jsCode: `// ES6+ JavaScript 示例
import { createApp } from 'vue'
import App from './App.vue'

// 异步函数
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`)
    const userData = await response.json()
    return userData
  } catch (error) {
    console.error('获取用户数据失败:', error)
    throw new Error('Failed to fetch user data')
  }
}

// 类定义
class UserManager {
  constructor(apiBaseUrl = '/api') {
    this.apiBaseUrl = apiBaseUrl
    this.users = new Map()
  }
  
  async getUser(id) {
    if (this.users.has(id)) {
      return this.users.get(id)
    }
    
    const user = await fetchUserData(id)
    this.users.set(id, user)
    return user
  }
  
  // 箭头函数
  getUserNames = () => {
    return Array.from(this.users.values())
      .map(user => user.name)
      .filter(Boolean)
  }
}

// 创建实例
const userManager = new UserManager()
const app = createApp(App)

// 事件处理
document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('test-btn')
  button?.addEventListener('click', async (event) => {
    event.preventDefault()
    
    try {
      const user = await userManager.getUser(1)
      console.log('用户信息:', user)
    } catch (error) {
      alert('操作失败，请重试')
    }
  })
})

app.mount('#app')`,

      jsonCode: `{
  "name": "css-one-learning",
  "version": "1.0.0",
  "description": "CSS 学习项目",
  "main": "src/main.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.3.0",
    "vue-router": "^4.2.0",
    "prismjs": "^1.29.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.2.0",
    "vite": "^4.3.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  },
  "author": "Developer",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/example/css-one-learning.git"
  },
  "keywords": [
    "css",
    "html",
    "javascript",
    "vue",
    "learning",
    "education"
  ]
}`,

      autoDetectCode: `function calculateTotal(items) {
  return items.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  }, 0)
}

const products = [
  { name: 'iPhone', price: 999, quantity: 1 },
  { name: 'MacBook', price: 1999, quantity: 1 }
]

console.log('总计:', calculateTotal(products))`
    }
  }
}
</script>

<style scoped>
.test-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.demo-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.test-sections {
  display: grid;
  gap: 2rem;
}

.test-section {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.test-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}
</style>
