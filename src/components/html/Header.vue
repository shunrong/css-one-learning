<template>
  <div class="document-head-page">
    <!-- 标题区域 -->
    <div class="header-section p-6 border-b border-gray-200 bg-gradient-to-r from-yellow-50 to-amber-50">
      <h1 class="text-3xl font-bold text-gray-900 mb-3">HTML 文档头部</h1>
      <p class="text-gray-600 text-lg leading-relaxed">
        掌握HTML文档头部的关键标签：meta元数据、资源引入、SEO优化等实用技巧
      </p>
    </div>

    <div class="content-section p-6 space-y-8">
      <!-- 基础文档结构 -->
      <section class="demo-section">
        <h2 class="section-title">HTML文档基础结构</h2>
        <p class="section-desc">
          了解完整的HTML文档结构和头部标签的作用
        </p>
        
        <div class="demo-container">
          <div class="demo-preview">
            <div class="document-structure">
              <div class="code-section">
                <div class="tag-line">
                  <span class="tag">&lt;!DOCTYPE html&gt;</span>
                  <span class="comment">声明HTML5文档类型</span>
                </div>
                <div class="tag-line">
                  <span class="tag">&lt;html lang="zh-CN"&gt;</span>
                  <span class="comment">文档根元素，指定语言</span>
                </div>
                <div class="tag-line indent-1">
                  <span class="tag">&lt;head&gt;</span>
                  <span class="comment">文档头部，包含元数据</span>
                </div>
                <div class="tag-line indent-2">
                  <span class="tag">&lt;meta charset="UTF-8"&gt;</span>
                  <span class="comment">字符编码</span>
                </div>
                <div class="tag-line indent-2">
                  <span class="tag">&lt;meta name="viewport" content="..."&gt;</span>
                  <span class="comment">视口设置</span>
                </div>
                <div class="tag-line indent-2">
                  <span class="tag">&lt;title&gt;页面标题&lt;/title&gt;</span>
                  <span class="comment">页面标题</span>
                </div>
                <div class="tag-line indent-2">
                  <span class="tag">&lt;link rel="stylesheet" href="..."&gt;</span>
                  <span class="comment">样式表</span>
                </div>
                <div class="tag-line indent-2">
                  <span class="tag">&lt;script src="..."&gt;&lt;/script&gt;</span>
                  <span class="comment">脚本</span>
                </div>
                <div class="tag-line indent-1">
                  <span class="tag">&lt;/head&gt;</span>
                </div>
                <div class="tag-line indent-1">
                  <span class="tag">&lt;body&gt;</span>
                  <span class="comment">页面内容</span>
                </div>
                <div class="tag-line indent-2">
                  <span class="comment">...</span>
                </div>
                <div class="tag-line indent-1">
                  <span class="tag">&lt;/body&gt;</span>
                </div>
                <div class="tag-line">
                  <span class="tag">&lt;/html&gt;</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="demo-code">
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
  &lt;!-- 字符编码 --&gt;
  &lt;meta charset="UTF-8"&gt;
  
  &lt;!-- 视口设置 --&gt;
  &lt;meta name="viewport" 
        content="width=device-width, initial-scale=1.0"&gt;
  
  &lt;!-- 页面标题 --&gt;
  &lt;title&gt;页面标题&lt;/title&gt;
  
  &lt;!-- 样式表 --&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
  
  &lt;!-- JavaScript --&gt;
  &lt;script src="script.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- 页面内容 --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- Meta标签详解 -->
      <section class="demo-section">
        <h2 class="section-title">Meta标签详解</h2>
        <p class="section-desc">
          Meta标签提供了页面的元数据信息，对SEO和用户体验至关重要
        </p>
        
        <div class="meta-categories">
          <div class="meta-category">
            <h4>基础设置</h4>
            <div class="meta-examples">
              <div class="meta-example">
                <code>&lt;meta charset="UTF-8"&gt;</code>
                <p>设置字符编码，确保中文等特殊字符正确显示</p>
              </div>
              
              <div class="meta-example">
                <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>
                <p>响应式设计必备，控制页面在移动设备上的显示</p>
              </div>
              
              <div class="meta-example">
                <code>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;</code>
                <p>确保在IE浏览器中使用最新的渲染模式</p>
              </div>
            </div>
          </div>
          
          <div class="meta-category">
            <h4>SEO优化</h4>
            <div class="meta-examples">
              <div class="meta-example">
                <code>&lt;meta name="description" content="页面描述，用于搜索结果展示"&gt;</code>
                <p>页面描述，显示在搜索结果中，影响点击率</p>
              </div>
              
              <div class="meta-example">
                <code>&lt;meta name="keywords" content="关键词1, 关键词2, 关键词3"&gt;</code>
                <p>页面关键词，现在作用有限但仍可使用</p>
              </div>
              
              <div class="meta-example">
                <code>&lt;meta name="author" content="作者姓名"&gt;</code>
                <p>页面作者信息</p>
              </div>
              
              <div class="meta-example">
                <code>&lt;meta name="robots" content="index, follow"&gt;</code>
                <p>控制搜索引擎爬取策略</p>
              </div>
            </div>
          </div>
          
          <div class="meta-category">
            <h4>社交媒体</h4>
            <div class="meta-examples">
              <div class="meta-example">
                <code>&lt;meta property="og:title" content="页面标题"&gt;</code>
                <p>Open Graph协议，用于社交媒体分享</p>
              </div>
              
              <div class="meta-example">
                <code>&lt;meta property="og:description" content="页面描述"&gt;</code>
                <p>分享时显示的描述信息</p>
              </div>
              
              <div class="meta-example">
                <code>&lt;meta property="og:image" content="图片URL"&gt;</code>
                <p>分享时显示的缩略图</p>
              </div>
              
              <div class="meta-example">
                <code>&lt;meta name="twitter:card" content="summary_large_image"&gt;</code>
                <p>Twitter卡片类型设置</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Link标签用法 -->
      <section class="demo-section">
        <h2 class="section-title">Link标签资源引入</h2>
        <p class="section-desc">
          Link标签用于引入外部资源，包括样式表、图标、预加载等
        </p>
        
        <div class="link-examples">
          <div class="link-category">
            <h4>样式表引入</h4>
            <div class="link-demo">
              <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>
              <p>引入CSS样式表</p>
            </div>
            
            <div class="link-demo">
              <code>&lt;link rel="stylesheet" href="print.css" media="print"&gt;</code>
              <p>针对打印媒体的样式表</p>
            </div>
            
            <div class="link-demo">
              <code>&lt;link rel="stylesheet" href="mobile.css" media="(max-width: 768px)"&gt;</code>
              <p>响应式样式表</p>
            </div>
          </div>
          
          <div class="link-category">
            <h4>网站图标</h4>
            <div class="link-demo">
              <code>&lt;link rel="icon" href="favicon.ico"&gt;</code>
              <p>网站图标（favicon）</p>
            </div>
            
            <div class="link-demo">
              <code>&lt;link rel="apple-touch-icon" href="apple-icon.png"&gt;</code>
              <p>iOS设备主屏图标</p>
            </div>
            
            <div class="link-demo">
              <code>&lt;link rel="manifest" href="manifest.json"&gt;</code>
              <p>PWA应用清单文件</p>
            </div>
          </div>
          
          <div class="link-category">
            <h4>性能优化</h4>
            <div class="link-demo">
              <code>&lt;link rel="preload" href="font.woff2" as="font" crossorigin&gt;</code>
              <p>预加载重要资源</p>
            </div>
            
            <div class="link-demo">
              <code>&lt;link rel="prefetch" href="next-page.html"&gt;</code>
              <p>预获取下一页面资源</p>
            </div>
            
            <div class="link-demo">
              <code>&lt;link rel="dns-prefetch" href="//fonts.googleapis.com"&gt;</code>
              <p>DNS预解析</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Script标签详解 -->
      <section class="demo-section">
        <h2 class="section-title">Script标签详解</h2>
        <p class="section-desc">
          Script标签用于引入和执行JavaScript代码，掌握加载策略很重要
        </p>
        
        <div class="script-demos">
          <div class="script-demo">
            <h4>基础用法</h4>
            <div class="script-examples">
              <div class="script-example">
                <code>&lt;script src="script.js"&gt;&lt;/script&gt;</code>
                <p class="script-note">同步加载，会阻塞HTML解析</p>
                <div class="loading-diagram">
                  <div class="timeline">
                    <div class="phase parse">HTML解析</div>
                    <div class="phase script block">脚本下载+执行（阻塞）</div>
                    <div class="phase parse">HTML解析继续</div>
                  </div>
                </div>
              </div>
              
              <div class="script-example">
                <code>&lt;script src="script.js" defer&gt;&lt;/script&gt;</code>
                <p class="script-note">延迟执行，等HTML解析完成后执行</p>
                <div class="loading-diagram">
                  <div class="timeline">
                    <div class="phase parse">HTML解析</div>
                    <div class="phase script defer">脚本下载（不阻塞）</div>
                    <div class="phase script">脚本执行</div>
                  </div>
                </div>
              </div>
              
              <div class="script-example">
                <code>&lt;script src="script.js" async&gt;&lt;/script&gt;</code>
                <p class="script-note">异步加载，下载完立即执行</p>
                <div class="loading-diagram">
                  <div class="timeline">
                    <div class="phase parse">HTML解析</div>
                    <div class="phase script async">脚本下载+执行（可能阻塞）</div>
                    <div class="phase parse">HTML解析继续</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="script-demo">
            <h4>内联脚本</h4>
            <pre class="inline-script"><code>&lt;script&gt;
  // 页面加载完成后执行
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM已加载完成');
  });
  
  // 立即执行函数
  (function() {
    'use strict';
    // 避免全局变量污染
  })();
&lt;/script&gt;</code></pre>
          </div>
          
          <div class="script-demo">
            <h4>模块化脚本</h4>
            <div class="script-examples">
              <div class="script-example">
                <code>&lt;script type="module" src="main.js"&gt;&lt;/script&gt;</code>
                <p class="script-note">ES6模块，自动defer，支持import/export</p>
              </div>
              
              <div class="script-example">
                <code>&lt;script nomodule src="legacy.js"&gt;&lt;/script&gt;</code>
                <p class="script-note">不支持模块的浏览器降级方案</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Style标签 -->
      <section class="demo-section">
        <h2 class="section-title">Style标签内联样式</h2>
        <p class="section-desc">
          Style标签用于在HTML中直接写CSS，适合关键样式和小型项目
        </p>
        
        <div class="style-demos">
          <div class="style-demo">
            <h4>基础用法</h4>
            <pre class="style-code"><code>&lt;style&gt;
  /* 页面样式 */
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    line-height: 1.6;
    color: #333;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  /* 响应式样式 */
  @media (max-width: 768px) {
    .container {
      padding: 0 15px;
    }
  }
&lt;/style&gt;</code></pre>
          </div>
          
          <div class="style-demo">
            <h4>关键CSS优化</h4>
            <pre class="style-code"><code>&lt;!-- 关键样式内联，提升首屏加载速度 --&gt;
&lt;style&gt;
  /* Above-the-fold 关键样式 */
  .header { background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
  .hero { height: 100vh; background: linear-gradient(...); }
  .hero h1 { font-size: 3rem; text-align: center; }
&lt;/style&gt;

&lt;!-- 非关键样式延迟加载 --&gt;
&lt;link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'"&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 性能优化建议 -->
      <section class="demo-section">
        <h2 class="section-title">头部优化最佳实践</h2>
        <div class="optimization-grid">
          <div class="optimization-card">
            <h4>🚀 加载性能</h4>
            <ul class="optimization-list">
              <li>将关键CSS内联到<code>&lt;style&gt;</code>标签</li>
              <li>使用<code>preload</code>预加载重要资源</li>
              <li>JavaScript使用<code>defer</code>或<code>async</code></li>
              <li>压缩和合并CSS/JS文件</li>
              <li>使用CDN加速资源加载</li>
            </ul>
          </div>
          
          <div class="optimization-card">
            <h4>📱 移动端优化</h4>
            <ul class="optimization-list">
              <li>设置正确的<code>viewport</code>元标签</li>
              <li>添加<code>apple-touch-icon</code>图标</li>
              <li>使用<code>theme-color</code>设置主题色</li>
              <li>配置PWA清单文件</li>
              <li>优化触摸交互体验</li>
            </ul>
          </div>
          
          <div class="optimization-card">
            <h4>🔍 SEO优化</h4>
            <ul class="optimization-list">
              <li>编写吸引人的<code>title</code>和<code>description</code></li>
              <li>使用结构化数据标记</li>
              <li>设置正确的<code>lang</code>属性</li>
              <li>添加Open Graph标签</li>
              <li>配置robots.txt和sitemap</li>
            </ul>
          </div>
          
          <div class="optimization-card">
            <h4>🛡️ 安全性</h4>
            <ul class="optimization-list">
              <li>使用HTTPS传输</li>
              <li>设置CSP内容安全策略</li>
              <li>避免内联事件处理器</li>
              <li>验证外部资源完整性</li>
              <li>定期更新依赖库</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 实用模板 -->
      <section class="demo-section">
        <h2 class="section-title">完整头部模板</h2>
        <div class="template-container">
          <pre class="template-code"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
  &lt;!-- 基础设置 --&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
  
  &lt;!-- 页面信息 --&gt;
  &lt;title&gt;页面标题 | 网站名称&lt;/title&gt;
  &lt;meta name="description" content="页面描述，用于SEO和搜索结果展示"&gt;
  &lt;meta name="keywords" content="关键词1, 关键词2, 关键词3"&gt;
  &lt;meta name="author" content="作者姓名"&gt;
  
  &lt;!-- SEO设置 --&gt;
  &lt;meta name="robots" content="index, follow"&gt;
  &lt;link rel="canonical" href="https://example.com/current-page"&gt;
  
  &lt;!-- 社交媒体 --&gt;
  &lt;meta property="og:title" content="页面标题"&gt;
  &lt;meta property="og:description" content="页面描述"&gt;
  &lt;meta property="og:image" content="https://example.com/image.jpg"&gt;
  &lt;meta property="og:url" content="https://example.com/current-page"&gt;
  &lt;meta property="og:type" content="website"&gt;
  
  &lt;meta name="twitter:card" content="summary_large_image"&gt;
  &lt;meta name="twitter:title" content="页面标题"&gt;
  &lt;meta name="twitter:description" content="页面描述"&gt;
  &lt;meta name="twitter:image" content="https://example.com/image.jpg"&gt;
  
  &lt;!-- 网站图标 --&gt;
  &lt;link rel="icon" href="/favicon.ico"&gt;
  &lt;link rel="apple-touch-icon" href="/apple-touch-icon.png"&gt;
  &lt;link rel="manifest" href="/manifest.json"&gt;
  
  &lt;!-- 性能优化 --&gt;
  &lt;link rel="dns-prefetch" href="//fonts.googleapis.com"&gt;
  &lt;link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin&gt;
  
  &lt;!-- 关键CSS内联 --&gt;
  &lt;style&gt;
    /* 关键样式，提升首屏加载速度 */
    body { font-family: system-ui, sans-serif; }
    .header { background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
  &lt;/style&gt;
  
  &lt;!-- 非关键CSS --&gt;
  &lt;link rel="preload" href="/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'"&gt;
  &lt;noscript&gt;&lt;link rel="stylesheet" href="/css/main.css"&gt;&lt;/noscript&gt;
  
  &lt;!-- JavaScript --&gt;
  &lt;script src="/js/critical.js"&gt;&lt;/script&gt;
  &lt;script src="/js/main.js" defer&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;!-- 页面内容 --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentHeadHTML'
}
</script>

<style scoped>
.document-head-page {
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
  background: linear-gradient(to bottom, #f59e0b, #d97706);
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

/* 文档结构演示 */
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

.document-structure {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
}

.tag-line {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  min-height: 1.5rem;
}

.indent-1 { padding-left: 1rem; }
.indent-2 { padding-left: 2rem; }

.tag {
  color: #dc2626;
  font-weight: 600;
  margin-right: 1rem;
  min-width: 200px;
}

.comment {
  color: #6b7280;
  font-style: italic;
  font-size: 0.75rem;
}

/* Meta标签分类 */
.meta-categories {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.meta-category {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
}

.meta-category h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f59e0b;
}

.meta-examples {
  space-y: 1rem;
}

.meta-example {
  margin-bottom: 1.5rem;
}

.meta-example code {
  display: block;
  background: #1f2937;
  color: #e5e7eb;
  padding: 0.75rem;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  word-break: break-all;
}

.meta-example p {
  color: #4b5563;
  font-size: 0.875rem;
  line-height: 1.5;
  margin: 0;
}

/* Link标签示例 */
.link-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.link-category {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
}

.link-category h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f59e0b;
}

.link-demo {
  margin-bottom: 1rem;
}

.link-demo code {
  display: block;
  background: #1f2937;
  color: #e5e7eb;
  padding: 0.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  word-break: break-all;
}

.link-demo p {
  color: #4b5563;
  font-size: 0.8rem;
  margin: 0;
}

/* Script标签演示 */
.script-demos {
  space-y: 2rem;
  margin-top: 1.5rem;
}

.script-demo {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
}

.script-demo h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f59e0b;
}

.script-examples {
  space-y: 1.5rem;
}

.script-example {
  margin-bottom: 1.5rem;
}

.script-example code {
  display: block;
  background: #1f2937;
  color: #e5e7eb;
  padding: 0.75rem;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.script-note {
  color: #4b5563;
  font-size: 0.875rem;
  margin: 0.5rem 0;
}

.inline-script {
  background: #1f2937;
  color: #e5e7eb;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  overflow-x: auto;
  margin-top: 1rem;
}

.inline-script code {
  color: inherit;
  background: none;
  padding: 0;
}

/* 加载时序图 */
.loading-diagram {
  margin-top: 0.5rem;
}

.timeline {
  display: flex;
  height: 30px;
  border-radius: 4px;
  overflow: hidden;
  font-size: 0.75rem;
}

.phase {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  min-width: 80px;
  flex: 1;
}

.parse {
  background: #10b981;
}

.script.block {
  background: #ef4444;
}

.script.defer {
  background: #f59e0b;
}

.script.async {
  background: #8b5cf6;
}

.script:not(.block):not(.defer):not(.async) {
  background: #3b82f6;
}

/* Style标签演示 */
.style-demos {
  space-y: 2rem;
  margin-top: 1.5rem;
}

.style-demo {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
}

.style-demo h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f59e0b;
}

.style-code {
  background: #1f2937;
  color: #e5e7eb;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  overflow-x: auto;
  margin-top: 1rem;
}

.style-code code {
  color: inherit;
  background: none;
  padding: 0;
}

/* 优化建议 */
.optimization-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.optimization-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
}

.optimization-card h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.optimization-list {
  margin: 0;
  padding-left: 1.5rem;
  color: #4b5563;
  line-height: 1.6;
}

.optimization-list li {
  margin-bottom: 0.5rem;
}

.optimization-list code {
  background: #f3f4f6;
  padding: 0.125rem 0.25rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
}

/* 模板代码 */
.template-container {
  margin-top: 1.5rem;
}

.template-code {
  background: #1f2937;
  color: #e5e7eb;
  padding: 1.5rem;
  border-radius: 12px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  overflow-x: auto;
  line-height: 1.6;
}

.template-code code {
  color: inherit;
  background: none;
  padding: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-container {
    grid-template-columns: 1fr;
  }
  
  .link-examples {
    grid-template-columns: 1fr;
  }
  
  .optimization-grid {
    grid-template-columns: 1fr;
  }
  
  .meta-categories {
    gap: 1rem;
  }
  
  .timeline {
    flex-direction: column;
    height: auto;
  }
  
  .phase {
    min-height: 25px;
  }
}

/* 自定义滚动条 */
.demo-code::-webkit-scrollbar,
.inline-script::-webkit-scrollbar,
.style-code::-webkit-scrollbar,
.template-code::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.demo-code::-webkit-scrollbar-track,
.inline-script::-webkit-scrollbar-track,
.style-code::-webkit-scrollbar-track,
.template-code::-webkit-scrollbar-track {
  background: #374151;
  border-radius: 3px;
}

.demo-code::-webkit-scrollbar-thumb,
.inline-script::-webkit-scrollbar-thumb,
.style-code::-webkit-scrollbar-thumb,
.template-code::-webkit-scrollbar-thumb {
  background: #6b7280;
  border-radius: 3px;
}

.demo-code::-webkit-scrollbar-thumb:hover,
.inline-script::-webkit-scrollbar-thumb:hover,
.style-code::-webkit-scrollbar-thumb:hover,
.template-code::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
</style>
