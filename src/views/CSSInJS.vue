<template>
  <div class="css-in-js-page">
    <!-- 页面头部 -->
    <section class="page-header bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
      <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">CSS-in-JS</h1>
        <p class="text-xl opacity-90 max-w-3xl">
          探索组件化时代的样式解决方案，理解 CSS-in-JS 的原理与实践
        </p>
      </div>
    </section>

    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- 侧边导航 -->
        <aside class="lg:col-span-1">
          <div class="sticky top-24">
            <nav class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">CSS-in-JS</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="#overview" class="nav-link">技术概览</a></li>
                <li><a href="#styled-components" class="nav-link">Styled Components</a></li>
                <li><a href="#emotion" class="nav-link">Emotion</a></li>
                <li><a href="#comparison" class="nav-link">方案对比</a></li>
                <li><a href="#best-practices" class="nav-link">最佳实践</a></li>
              </ul>
            </nav>
          </div>
        </aside>

        <!-- 主内容区域 -->
        <main class="lg:col-span-3">
          <!-- 技术概览 -->
          <section id="overview" class="content-section">
            <h2 class="section-title">CSS-in-JS 技术概览</h2>
            <div class="prose">
              <p>
                CSS-in-JS 是一种将 CSS 样式写在 JavaScript 中的技术方案。
                它允许开发者在组件级别管理样式，提供了更好的封装性和动态能力。
              </p>
              
              <div class="advantages-grid">
                <div class="advantage-card">
                  <h3>🎯 组件封装</h3>
                  <p>样式与组件逻辑紧密结合，避免全局污染</p>
                </div>
                <div class="advantage-card">
                  <h3>🔄 动态样式</h3>
                  <p>基于 props 和 state 动态生成样式</p>
                </div>
                <div class="advantage-card">
                  <h3>📦 按需加载</h3>
                  <p>只加载使用到的样式，减少冗余</p>
                </div>
                <div class="advantage-card">
                  <h3>🛠️ 开发体验</h3>
                  <p>更好的 TypeScript 支持和开发工具</p>
                </div>
              </div>

              <div class="comparison-table">
                <h3>传统 CSS vs CSS-in-JS</h3>
                <table>
                  <thead>
                    <tr>
                      <th>特性</th>
                      <th>传统 CSS</th>
                      <th>CSS-in-JS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>作用域</td>
                      <td>全局</td>
                      <td>组件级</td>
                    </tr>
                    <tr>
                      <td>动态性</td>
                      <td>有限</td>
                      <td>强大</td>
                    </tr>
                    <tr>
                      <td>代码分割</td>
                      <td>手动</td>
                      <td>自动</td>
                    </tr>
                    <tr>
                      <td>类型检查</td>
                      <td>无</td>
                      <td>支持</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <!-- Styled Components -->
          <section id="styled-components" class="content-section">
            <h2 class="section-title">Styled Components</h2>
            <div class="styled-components-demo">
              <div class="intro">
                <p>
                  Styled Components 是最流行的 CSS-in-JS 库之一，
                  它使用标签模板字面量语法来创建样式化的 React 组件。
                </p>
              </div>

              <div class="demo-examples">
                <div class="example-item">
                  <h4>基础用法</h4>
                  <pre class="code-block"><code>import styled from 'styled-components';

// 创建样式化组件
const Button = styled.button\`
  background: ${props => props.primary ? '#007bff' : '#6c757d'};
  color: white;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
\`;

// 使用组件
function App() {
  return (
    &lt;div&gt;
      &lt;Button&gt;普通按钮&lt;/Button&gt;
      &lt;Button primary&gt;主要按钮&lt;/Button&gt;
    &lt;/div&gt;
  );
}</code></pre>
                </div>

                <div class="example-item">
                  <h4>主题系统</h4>
                  <pre class="code-block"><code>import styled, { ThemeProvider } from 'styled-components';

// 定义主题
const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745'
  },
  breakpoints: {
    mobile: '768px',
    desktop: '1024px'
  }
};

// 使用主题的组件
const ThemedButton = styled.button\`
  background: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
\`;

// 应用主题
function App() {
  return (
    &lt;ThemeProvider theme={theme}&gt;
      &lt;ThemedButton&gt;主题按钮&lt;/ThemedButton&gt;
    &lt;/ThemeProvider&gt;
  );
}</code></pre>
                </div>

                <div class="example-item">
                  <h4>组件继承</h4>
                  <pre class="code-block"><code>// 基础按钮
const BaseButton = styled.button\`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;
\`;

// 继承并扩展样式
const PrimaryButton = styled(BaseButton)\`
  background: #007bff;
  color: white;
  
  &:hover {
    background: #0056b3;
  }
\`;

const DangerButton = styled(BaseButton)\`
  background: #dc3545;
  color: white;
  
  &:hover {
    background: #c82333;
  }
\`;

// 改变标签类型
const LinkButton = styled(BaseButton).attrs({
  as: 'a'
})\`
  background: transparent;
  color: #007bff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
\`;</code></pre>
                </div>
              </div>

              <div class="live-demo">
                <h4>实时演示</h4>
                <div class="demo-area">
                  <div class="styled-demo-buttons">
                    <button class="demo-btn primary">主要按钮</button>
                    <button class="demo-btn secondary">次要按钮</button>
                    <button class="demo-btn danger">危险按钮</button>
                    <a href="#" class="demo-btn link">链接按钮</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Emotion -->
          <section id="emotion" class="content-section">
            <h2 class="section-title">Emotion</h2>
            <div class="emotion-demo">
              <div class="intro">
                <p>
                  Emotion 是另一个优秀的 CSS-in-JS 库，提供了多种 API 风格，
                  具有更好的性能和更小的包体积。
                </p>
              </div>

              <div class="demo-examples">
                <div class="example-item">
                  <h4>css 函数用法</h4>
                  <pre class="code-block"><code>/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const buttonStyle = css\`
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  
  &:hover {
    background: #0056b3;
  }
\`;

function Button({ children }) {
  return (
    &lt;button css={buttonStyle}&gt;
      {children}
    &lt;/button&gt;
  );
}</code></pre>
                </div>

                <div class="example-item">
                  <h4>styled 组件</h4>
                  <pre class="code-block"><code>import styled from '@emotion/styled';

const Container = styled.div\`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 10px;
  }
\`;

const Card = styled.div\`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  
  h3 {
    margin-top: 0;
    color: ${props => props.theme?.colors?.primary || '#333'};
  }
\`;</code></pre>
                </div>

                <div class="example-item">
                  <h4>动态样式</h4>
                  <pre class="code-block"><code>import { css } from '@emotion/react';

// 基于 props 的动态样式
const getDynamicStyle = (props) => css\`
  background: ${props.variant === 'primary' ? '#007bff' : '#6c757d'};
  color: white;
  padding: ${props.size === 'large' ? '12px 24px' : '8px 16px'};
  font-size: ${props.size === 'large' ? '18px' : '14px'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${props.disabled ? 0.5 : 1};
  
  &:hover {
    opacity: ${props.disabled ? 0.5 : 0.8};
  }
\`;

function DynamicButton({ children, ...props }) {
  return (
    &lt;button css={getDynamicStyle(props)}&gt;
      {children}
    &lt;/button&gt;
  );
}</code></pre>
                </div>
              </div>

              <div class="emotion-features">
                <h4>Emotion 特性</h4>
                <div class="features-grid">
                  <div class="feature-item">
                    <h5>⚡ 高性能</h5>
                    <p>更快的运行时性能和更小的包体积</p>
                  </div>
                  <div class="feature-item">
                    <h5>🔧 灵活 API</h5>
                    <p>支持多种使用方式，适应不同需求</p>
                  </div>
                  <div class="feature-item">
                    <h5>🎨 Source Maps</h5>
                    <p>完整的调试支持和错误定位</p>
                  </div>
                  <div class="feature-item">
                    <h5>📦 零依赖</h5>
                    <p>核心包没有外部依赖</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 方案对比 -->
          <section id="comparison" class="content-section">
            <h2 class="section-title">主流方案对比</h2>
            <div class="comparison-section">
              <div class="comparison-grid">
                <div class="library-card styled-components">
                  <h3>Styled Components</h3>
                  <div class="stats">
                    <span class="stat">📦 13.1KB</span>
                    <span class="stat">⭐ 37k+ stars</span>
                    <span class="stat">🔧 成熟稳定</span>
                  </div>
                  <div class="pros-cons">
                    <div class="pros">
                      <h4>优点</h4>
                      <ul>
                        <li>生态成熟，社区活跃</li>
                        <li>主题系统完善</li>
                        <li>学习资源丰富</li>
                        <li>TypeScript 支持好</li>
                      </ul>
                    </div>
                    <div class="cons">
                      <h4>缺点</h4>
                      <ul>
                        <li>包体积较大</li>
                        <li>运行时开销</li>
                        <li>调试相对困难</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="library-card emotion">
                  <h3>Emotion</h3>
                  <div class="stats">
                    <span class="stat">📦 7.9KB</span>
                    <span class="stat">⭐ 16k+ stars</span>
                    <span class="stat">🚀 高性能</span>
                  </div>
                  <div class="pros-cons">
                    <div class="pros">
                      <h4>优点</h4>
                      <ul>
                        <li>体积更小</li>
                        <li>性能更好</li>
                        <li>API 更灵活</li>
                        <li>调试工具完善</li>
                      </ul>
                    </div>
                    <div class="cons">
                      <h4>缺点</h4>
                      <ul>
                        <li>生态相对较小</li>
                        <li>学习曲线稍陡</li>
                        <li>文档不够完整</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="library-card jss">
                  <h3>JSS</h3>
                  <div class="stats">
                    <span class="stat">📦 15.2KB</span>
                    <span class="stat">⭐ 7k+ stars</span>
                    <span class="stat">🔧 函数式</span>
                  </div>
                  <div class="pros-cons">
                    <div class="pros">
                      <h4>优点</h4>
                      <ul>
                        <li>函数式编程风格</li>
                        <li>插件系统强大</li>
                        <li>框架无关</li>
                      </ul>
                    </div>
                    <div class="cons">
                      <h4>缺点</h4>
                      <ul>
                        <li>语法相对复杂</li>
                        <li>社区较小</li>
                        <li>性能一般</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="selection-guide">
                <h3>选择指南</h3>
                <div class="guide-matrix">
                  <div class="guide-item">
                    <h4>选择 Styled Components 当：</h4>
                    <ul>
                      <li>团队刚接触 CSS-in-JS</li>
                      <li>需要稳定成熟的解决方案</li>
                      <li>重视生态和社区支持</li>
                      <li>对包体积要求不严格</li>
                    </ul>
                  </div>
                  <div class="guide-item">
                    <h4>选择 Emotion 当：</h4>
                    <ul>
                      <li>追求更好的性能</li>
                      <li>需要更小的包体积</li>
                      <li>喜欢灵活的 API 设计</li>
                      <li>重视调试体验</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- 最佳实践 -->
          <section id="best-practices" class="content-section">
            <h2 class="section-title">最佳实践</h2>
            <div class="best-practices">
              <div class="practice-category">
                <h3>🎯 性能优化</h3>
                <div class="practice-items">
                  <div class="practice-item">
                    <h4>避免在渲染函数中创建样式</h4>
                    <div class="code-comparison">
                      <div class="bad">
                        <h5>❌ 错误做法</h5>
                        <pre class="code-block"><code>function Component() {
  // 每次渲染都会创建新的样式
  const buttonStyle = css\`
    background: blue;
    color: white;
  \`;
  
  return &lt;button css={buttonStyle}&gt;按钮&lt;/button&gt;;
}</code></pre>
                      </div>
                      <div class="good">
                        <h5>✅ 正确做法</h5>
                        <pre class="code-block"><code>// 在组件外部定义样式
const buttonStyle = css\`
  background: blue;
  color: white;
\`;

function Component() {
  return &lt;button css={buttonStyle}&gt;按钮&lt;/button&gt;;
}</code></pre>
                      </div>
                    </div>
                  </div>

                  <div class="practice-item">
                    <h4>使用样式组合而非内联样式</h4>
                    <div class="code-comparison">
                      <div class="bad">
                        <h5>❌ 错误做法</h5>
                        <pre class="code-block"><code>function Button({ variant, size }) {
  return (
    &lt;button
      css={css\`
        background: ${variant === 'primary' ? 'blue' : 'gray'};
        padding: ${size === 'large' ? '12px 24px' : '8px 16px'};
      \`}
    &gt;
      按钮
    &lt;/button&gt;
  );
}</code></pre>
                      </div>
                      <div class="good">
                        <h5>✅ 正确做法</h5>
                        <pre class="code-block"><code>const baseButton = css\`
  border: none;
  border-radius: 4px;
  cursor: pointer;
\`;

const primaryButton = css\`
  background: blue;
  color: white;
\`;

const largeButton = css\`
  padding: 12px 24px;
  font-size: 16px;
\`;

function Button({ variant, size }) {
  const styles = [
    baseButton,
    variant === 'primary' && primaryButton,
    size === 'large' && largeButton
  ];
  
  return &lt;button css={styles}&gt;按钮&lt;/button&gt;;
}</code></pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="practice-category">
                <h3>🏗️ 代码组织</h3>
                <div class="practice-items">
                  <div class="practice-item">
                    <h4>合理的文件结构</h4>
                    <pre class="code-block"><code>src/
  components/
    Button/
      Button.tsx
      Button.styles.ts    # 样式定义
      Button.test.tsx
      index.ts
  styles/
    theme.ts           # 主题配置
    globalStyles.ts    # 全局样式
    mixins.ts         # 样式混合器</code></pre>
                  </div>

                  <div class="practice-item">
                    <h4>主题配置最佳实践</h4>
                    <pre class="code-block"><code>// theme.ts
export const theme = {
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      900: '#1e3a8a'
    },
    gray: {
      50: '#f9fafb',
      500: '#6b7280',
      900: '#111827'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
};</code></pre>
                  </div>
                </div>
              </div>

              <div class="practice-category">
                <h3>🔧 开发工具</h3>
                <div class="practice-items">
                  <div class="practice-item">
                    <h4>TypeScript 类型定义</h4>
                    <pre class="code-block"><code>import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

// 或者对于 Emotion
declare module '@emotion/react' {
  export interface Theme extends MyTheme {}
}</code></pre>
                  </div>

                  <div class="practice-item">
                    <h4>调试配置</h4>
                    <pre class="code-block"><code>// babel.config.js
module.exports = {
  plugins: [
    [
      '@emotion/babel-plugin',
      {
        // 在开发环境启用标签
        labelFormat: '[filename]--[local]',
        sourceMap: true
      }
    ]
  ]
};</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CSSInJS'
}
</script>

<style scoped>
.css-in-js-page {
  @apply min-h-screen bg-gray-50;
}

.page-header {
  background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
  padding: 20px 0;
}

.nav-link {
  @apply text-gray-600 hover:text-yellow-600 transition-colors;
}

.content-section {
  @apply bg-white rounded-lg shadow-md p-8 mb-8;
}

.section-title {
  @apply text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200;
}

.prose p {
  @apply text-gray-600 leading-relaxed mb-4;
}

.advantages-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 mt-6;
}

.advantage-card {
  @apply p-4 bg-yellow-50 rounded-lg border border-yellow-200;
}

.advantage-card h3 {
  @apply font-semibold text-yellow-800 mb-2;
}

.advantage-card p {
  @apply text-yellow-700 text-sm;
}

.comparison-table {
  @apply mt-8;
}

.comparison-table h3 {
  @apply font-semibold text-gray-900 mb-4;
}

.comparison-table table {
  @apply w-full border-collapse;
}

.comparison-table th {
  @apply bg-gray-50 text-left p-3 font-semibold border-b border-gray-200;
}

.comparison-table td {
  @apply p-3 border-b border-gray-100 text-sm;
}

.demo-examples {
  @apply space-y-8;
}

.example-item {
  @apply space-y-3;
}

.example-item h4 {
  @apply font-semibold text-gray-900;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

.live-demo {
  @apply mt-8 p-6 bg-gray-50 rounded-lg;
}

.demo-area {
  @apply mt-4;
}

.styled-demo-buttons {
  @apply flex flex-wrap gap-4;
}

.demo-btn {
  @apply px-4 py-2 border-none rounded cursor-pointer font-medium transition-all duration-200;
}

.demo-btn.primary {
  @apply bg-blue-500 text-white;
}

.demo-btn.primary:hover {
  @apply bg-blue-600;
}

.demo-btn.secondary {
  @apply bg-gray-500 text-white;
}

.demo-btn.secondary:hover {
  @apply bg-gray-600;
}

.demo-btn.danger {
  @apply bg-red-500 text-white;
}

.demo-btn.danger:hover {
  @apply bg-red-600;
}

.demo-btn.link {
  @apply bg-transparent text-blue-500 no-underline;
}

.demo-btn.link:hover {
  @apply underline;
}

.emotion-features {
  @apply mt-8;
}

.features-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4 mt-4;
}

.feature-item {
  @apply p-4 bg-gray-50 rounded-lg;
}

.feature-item h5 {
  @apply font-semibold text-gray-900 mb-2;
}

.feature-item p {
  @apply text-gray-600 text-sm;
}

.comparison-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6 mb-8;
}

.library-card {
  @apply p-6 rounded-lg border-2;
}

.library-card.styled-components {
  @apply border-pink-200 bg-pink-50;
}

.library-card.emotion {
  @apply border-purple-200 bg-purple-50;
}

.library-card.jss {
  @apply border-blue-200 bg-blue-50;
}

.library-card h3 {
  @apply font-bold text-lg mb-3;
}

.stats {
  @apply flex flex-wrap gap-2 mb-4;
}

.stat {
  @apply px-2 py-1 bg-white rounded text-xs font-medium;
}

.pros-cons {
  @apply space-y-4;
}

.pros h4, .cons h4 {
  @apply font-semibold text-gray-900 mb-2;
}

.pros ul, .cons ul {
  @apply text-sm space-y-1;
}

.pros li, .cons li {
  @apply flex items-start space-x-2;
}

.pros li::before {
  content: "✓";
  @apply text-green-500 font-bold;
}

.cons li::before {
  content: "✗";
  @apply text-red-500 font-bold;
}

.selection-guide {
  @apply space-y-6;
}

.selection-guide h3 {
  @apply font-semibold text-gray-900;
}

.guide-matrix {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.guide-item {
  @apply p-4 bg-gray-50 rounded-lg;
}

.guide-item h4 {
  @apply font-semibold text-gray-900 mb-3;
}

.guide-item ul {
  @apply text-sm space-y-2;
}

.guide-item li {
  @apply flex items-start space-x-2;
}

.guide-item li::before {
  content: "•";
  @apply text-orange-500 font-bold;
}

.best-practices {
  @apply space-y-8;
}

.practice-category h3 {
  @apply font-semibold text-gray-900 mb-6;
}

.practice-items {
  @apply space-y-6;
}

.practice-item {
  @apply space-y-4;
}

.practice-item h4 {
  @apply font-semibold text-gray-900;
}

.code-comparison {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-4;
}

.bad h5 {
  @apply text-red-600 font-semibold mb-2;
}

.good h5 {
  @apply text-green-600 font-semibold mb-2;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .advantages-grid {
    @apply grid-cols-1;
  }
  
  .comparison-grid {
    @apply grid-cols-1;
  }
  
  .code-comparison {
    @apply grid-cols-1;
  }
}
</style>
