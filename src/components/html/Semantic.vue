<template>
  <div class="semantic-page">
    <!-- 标题区域 -->
    <div class="header-section p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
      <h1 class="text-3xl font-bold text-gray-900 mb-3">HTML5 语义化标签</h1>
      <p class="text-gray-600 text-lg leading-relaxed">
        使用语义化标签让HTML更具可读性和可访问性，同时提升SEO效果
      </p>
    </div>

    <div class="content-section p-6 space-y-8">
      <!-- 页面结构标签 -->
      <section class="demo-section">
        <h2 class="section-title">页面结构标签</h2>
        <p class="section-desc">
          这些标签帮助定义页面的主要结构，让内容更有层次和意义
        </p>
        
        <div class="demo-container">
          <div class="demo-preview">
            <div class="mock-page">
              <header class="mock-header">
                <h3>&lt;header&gt; 页面头部</h3>
                <nav class="mock-nav">
                  <span>&lt;nav&gt; 导航栏</span>
                </nav>
              </header>
              
              <main class="mock-main">
                <span class="mock-label">&lt;main&gt; 主要内容</span>
                <article class="mock-article">
                  <span>&lt;article&gt; 文章内容</span>
                  <section class="mock-section">
                    <span>&lt;section&gt; 内容章节</span>
                  </section>
                </article>
                
                <aside class="mock-aside">
                  <span>&lt;aside&gt; 侧边栏</span>
                </aside>
              </main>
              
              <footer class="mock-footer">
                <span>&lt;footer&gt; 页面底部</span>
              </footer>
            </div>
          </div>
          
          <div class="demo-code">
            <pre><code>&lt;!-- 完整的页面结构示例 --&gt;
&lt;header&gt;
  &lt;h1&gt;网站标题&lt;/h1&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#home"&gt;首页&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#about"&gt;关于&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;article&gt;
    &lt;h2&gt;文章标题&lt;/h2&gt;
    &lt;section&gt;
      &lt;h3&gt;章节标题&lt;/h3&gt;
      &lt;p&gt;文章内容...&lt;/p&gt;
    &lt;/section&gt;
  &lt;/article&gt;
  
  &lt;aside&gt;
    &lt;h3&gt;相关链接&lt;/h3&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#"&gt;相关文章1&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/aside&gt;
&lt;/main&gt;

&lt;footer&gt;
  &lt;p&gt;&copy; 2024 版权所有&lt;/p&gt;
&lt;/footer&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 内容语义标签 -->
      <section class="demo-section">
        <h2 class="section-title">内容语义标签</h2>
        <p class="section-desc">
          这些标签为文本内容提供明确的语义含义
        </p>
        
        <div class="demo-grid">
          <div class="demo-item">
            <h4 class="demo-title">强调标签</h4>
            <div class="demo-content">
              <p>这段文本包含 <strong>重要内容</strong> 和 <em>强调内容</em></p>
              <p>还有 <mark>高亮文本</mark> 和 <small>小号文本</small></p>
            </div>
            <div class="demo-code-small">
              <code>&lt;strong&gt;重要&lt;/strong&gt; &lt;em&gt;强调&lt;/em&gt;
&lt;mark&gt;高亮&lt;/mark&gt; &lt;small&gt;小号&lt;/small&gt;</code>
            </div>
          </div>
          
          <div class="demo-item">
            <h4 class="demo-title">引用标签</h4>
            <div class="demo-content">
              <blockquote>
                "这是一段重要的引用文字"
                <cite>— 作者名字</cite>
              </blockquote>
              <p>文章中提到 <q>短引用内容</q> 值得注意。</p>
            </div>
            <div class="demo-code-small">
              <code>&lt;blockquote&gt;
  "引用内容"
  &lt;cite&gt;— 作者&lt;/cite&gt;
&lt;/blockquote&gt;
&lt;q&gt;短引用&lt;/q&gt;</code>
            </div>
          </div>
          
          <div class="demo-item">
            <h4 class="demo-title">技术标签</h4>
            <div class="demo-content">
              <p>使用 <code>console.log()</code> 进行调试</p>
              <p>按 <kbd>Ctrl</kbd> + <kbd>C</kbd> 复制</p>
              <p>变量 <var>x</var> 的值为 <samp>42</samp></p>
            </div>
            <div class="demo-code-small">
              <code>&lt;code&gt;代码&lt;/code&gt; &lt;kbd&gt;快捷键&lt;/kbd&gt;
&lt;var&gt;变量&lt;/var&gt; &lt;samp&gt;输出&lt;/samp&gt;</code>
            </div>
          </div>
          
          <div class="demo-item">
            <h4 class="demo-title">时间和数据</h4>
            <div class="demo-content">
              <p>发布时间: <time datetime="2024-01-15">2024年1月15日</time></p>
              <p>联系方式: <address>123 Main St, City</address></p>
              <details>
                <summary>查看详情</summary>
                <p>这里是详细内容...</p>
              </details>
            </div>
            <div class="demo-code-small">
              <code>&lt;time datetime="2024-01-15"&gt;日期&lt;/time&gt;
&lt;address&gt;地址&lt;/address&gt;
&lt;details&gt;&lt;summary&gt;标题&lt;/summary&gt;&lt;/details&gt;</code>
            </div>
          </div>
        </div>
      </section>

      <!-- SEO优势 -->
      <section class="demo-section">
        <h2 class="section-title">语义化的优势</h2>
        <div class="advantages-grid">
          <div class="advantage-item">
            <div class="advantage-icon">🔍</div>
            <h4>SEO优化</h4>
            <p>搜索引擎能更好地理解页面结构和内容重要性，提升排名</p>
          </div>
          
          <div class="advantage-item">
            <div class="advantage-icon">♿</div>
            <h4>可访问性</h4>
            <p>屏幕阅读器等辅助技术能更好地解析页面内容</p>
          </div>
          
          <div class="advantage-item">
            <div class="advantage-icon">👥</div>
            <h4>团队协作</h4>
            <p>代码可读性更强，团队成员更容易理解和维护</p>
          </div>
          
          <div class="advantage-item">
            <div class="advantage-icon">⚡</div>
            <h4>维护效率</h4>
            <p>语义清晰的代码结构便于后期修改和扩展</p>
          </div>
        </div>
      </section>

      <!-- 最佳实践 -->
      <section class="demo-section">
        <h2 class="section-title">最佳实践建议</h2>
        <div class="tips-container">
          <div class="tip-item">
            <span class="tip-icon">✅</span>
            <div>
              <strong>使用恰当的标签</strong>
              <p>根据内容的实际含义选择标签，而不是样式需求</p>
            </div>
          </div>
          
          <div class="tip-item">
            <span class="tip-icon">✅</span>
            <div>
              <strong>保持层级结构</strong>
              <p>标题标签(h1-h6)要按逻辑顺序使用，不要跳级</p>
            </div>
          </div>
          
          <div class="tip-item">
            <span class="tip-icon">✅</span>
            <div>
              <strong>合理使用ARIA</strong>
              <p>在语义化标签不够用时，补充ARIA属性提升可访问性</p>
            </div>
          </div>
          
          <div class="tip-item">
            <span class="tip-icon">❌</span>
            <div>
              <strong>避免纯样式考虑</strong>
              <p>不要为了样式效果而选择错误的语义标签</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SemanticHTML',
  mounted() {
    // 高亮代码
    this.highlightCode()
  },
  methods: {
    highlightCode() {
      // 简单的代码高亮（可以后续集成专业的代码高亮库）
      const codeBlocks = this.$el.querySelectorAll('code')
      codeBlocks.forEach(block => {
        let html = block.innerHTML
        // 高亮HTML标签
        html = html.replace(/&lt;(\/?[a-zA-Z][^&gt;]*)&gt;/g, '<span class="tag">&lt;$1&gt;</span>')
        // 高亮属性
        html = html.replace(/(\w+)="/g, '<span class="attr">$1</span>="')
        block.innerHTML = html
      })
    }
  }
}
</script>

<style scoped>
.semantic-page {
  min-height: 100%;
  background: white;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
}

.section-title::before {
  content: '';
  width: 4px;
  height: 1.5rem;
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 2px;
  margin-right: 0.75rem;
}

.section-desc {
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-section {
  border-bottom: 1px solid #f3f4f6;
  padding-bottom: 2rem;
}

.demo-section:last-child {
  border-bottom: none;
}

/* 页面结构演示 */
.demo-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

.demo-preview {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
}

.mock-page {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.mock-header {
  background: #dbeafe;
  padding: 1rem;
  border-bottom: 2px solid #bfdbfe;
}

.mock-nav {
  background: #bfdbfe;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.mock-main {
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: 200px;
}

.mock-article {
  background: #f0f9ff;
  padding: 1rem;
  border-right: 2px solid #e0f2fe;
}

.mock-section {
  background: #e0f2fe;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
}

.mock-aside {
  background: #fef3c7;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
}

.mock-footer {
  background: #f3f4f6;
  padding: 1rem;
  border-top: 2px solid #e5e7eb;
  text-align: center;
}

.mock-label {
  font-size: 0.75rem;
  color: #374151;
  font-weight: 600;
}

/* 代码样式 */
.demo-code {
  background: #1f2937;
  border-radius: 12px;
  padding: 1.5rem;
  overflow-x: auto;
}

.demo-code pre {
  margin: 0;
  color: #e5e7eb;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

.demo-code-small {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 0.75rem;
  margin-top: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  line-height: 1.5;
}

/* 内容演示网格 */
.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.demo-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.demo-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #cbd5e1;
}

.demo-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
}

.demo-content {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.demo-content strong {
  color: #dc2626;
  font-weight: 700;
}

.demo-content em {
  color: #7c3aed;
  font-style: italic;
}

.demo-content mark {
  background: #fef3c7;
  padding: 0.125rem 0.25rem;
  border-radius: 3px;
}

.demo-content small {
  font-size: 0.875rem;
  color: #6b7280;
}

.demo-content blockquote {
  border-left: 4px solid #6366f1;
  padding-left: 1rem;
  margin: 1rem 0;
  font-style: italic;
  color: #4b5563;
}

.demo-content cite {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  font-style: normal;
}

.demo-content code {
  background: #fef2f2;
  color: #dc2626;
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
}

.demo-content kbd {
  background: #374151;
  color: white;
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.demo-content var {
  background: #ecfdf5;
  color: #059669;
  font-style: italic;
  padding: 0.125rem 0.25rem;
  border-radius: 3px;
}

.demo-content samp {
  background: #f3f4f6;
  color: #374151;
  font-family: 'Courier New', monospace;
  padding: 0.125rem 0.25rem;
  border-radius: 3px;
}

.demo-content time {
  color: #7c3aed;
  font-weight: 500;
}

.demo-content address {
  color: #059669;
  font-style: normal;
  background: #ecfdf5;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  display: inline-block;
}

.demo-content details {
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 0.5rem;
  margin-top: 0.5rem;
}

.demo-content summary {
  cursor: pointer;
  font-weight: 500;
  color: #374151;
}

.demo-content summary:hover {
  color: #1f2937;
}

/* 优势网格 */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.advantage-item {
  text-align: center;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.advantage-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.advantage-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.advantage-item h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

.advantage-item p {
  color: #6b7280;
  line-height: 1.6;
}

/* 最佳实践 */
.tips-container {
  space-y: 1rem;
}

.tip-item {
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 12px;
  border-left: 4px solid #10b981;
  margin-bottom: 1rem;
}

.tip-item:last-child {
  border-left-color: #ef4444;
}

.tip-icon {
  font-size: 1.25rem;
  margin-right: 1rem;
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.tip-item strong {
  color: #1f2937;
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
}

.tip-item p {
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

/* 代码高亮 */
:deep(.tag) {
  color: #dc2626;
  font-weight: 600;
}

:deep(.attr) {
  color: #7c3aed;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-container {
    grid-template-columns: 1fr;
  }
  
  .mock-main {
    grid-template-columns: 1fr;
  }
  
  .demo-grid {
    grid-template-columns: 1fr;
  }
  
  .advantages-grid {
    grid-template-columns: 1fr;
  }
}
</style>
