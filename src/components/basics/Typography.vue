<template>
  <div class="typography-demo">
    <div class="demo-header">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">CSS 字体排版</h2>
      <p class="text-gray-600">掌握文字的样式控制，打造优秀的阅读体验</p>
    </div>

    <!-- 字体基础属性 -->
    <section class="demo-section">
      <h3 class="section-title">字体基础属性</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">字体设置</h4>
          <div class="control-group">
            <label>字体族 (font-family):</label>
            <select v-model="fontFamily" class="control-select">
              <option value="Arial, sans-serif">Arial (无衬线)</option>
              <option value="Georgia, serif">Georgia (衬线)</option>
              <option value="'Courier New', monospace">Courier New (等宽)</option>
              <option value="'Times New Roman', serif">Times New Roman</option>
              <option value="Helvetica, sans-serif">Helvetica</option>
              <option value="'Comic Sans MS', cursive">Comic Sans MS</option>
            </select>
          </div>
          
          <div class="control-group">
            <label>字体大小 (font-size): {{ fontSize }}px</label>
            <input v-model="fontSize" type="range" min="12" max="48" class="control-range">
          </div>
          
          <div class="control-group">
            <label>字体粗细 (font-weight):</label>
            <select v-model="fontWeight" class="control-select">
              <option value="100">100 - Thin</option>
              <option value="300">300 - Light</option>
              <option value="400">400 - Normal</option>
              <option value="500">500 - Medium</option>
              <option value="600">600 - Semi Bold</option>
              <option value="700">700 - Bold</option>
              <option value="900">900 - Black</option>
            </select>
          </div>
          
          <div class="control-group">
            <label>字体样式 (font-style):</label>
            <select v-model="fontStyle" class="control-select">
              <option value="normal">normal</option>
              <option value="italic">italic</option>
              <option value="oblique">oblique</option>
            </select>
          </div>
          
          <div class="control-group">
            <label>文字装饰 (text-decoration):</label>
            <select v-model="textDecoration" class="control-select">
              <option value="none">none</option>
              <option value="underline">underline</option>
              <option value="overline">overline</option>
              <option value="line-through">line-through</option>
              <option value="underline overline">underline overline</option>
            </select>
          </div>
          
          <div class="control-group">
            <label>文字颜色:</label>
            <input v-model="textColor" type="color" class="control-color">
          </div>
        </div>

        <div class="preview-area">
          <div class="text-preview" :style="textStyle">
            <h1>一级标题示例 Heading 1</h1>
            <h2>二级标题示例 Heading 2</h2>
            <h3>三级标题示例 Heading 3</h3>
            <p>
              这是一段正文示例文字。通过调整左侧的控制面板，你可以实时预览不同字体属性的效果。
              CSS 字体属性是控制文字外观的核心工具。This is a sample paragraph text. 
              You can see how different font properties affect the appearance of text.
            </p>
            <p>
              字体的选择对用户体验有重要影响。好的字体不仅要美观，还要考虑可读性、兼容性和性能。
              现代网页设计中，我们通常使用系统字体或 Web 字体来确保一致的视觉效果。
            </p>
          </div>
        </div>

        <div class="code-display">
          <CodeBlock 
            :code="generatedCSS" 
            language="css" 
            title="生成的 CSS 代码"
            :show-line-numbers="true"
          />
        </div>
      </div>
    </section>

    <!-- 文本布局属性 -->
    <section class="demo-section">
      <h3 class="section-title">文本布局与间距</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">布局设置</h4>
          <div class="control-group">
            <label>行高 (line-height): {{ lineHeight }}</label>
            <input v-model="lineHeight" type="range" min="1" max="3" step="0.1" class="control-range">
          </div>
          
          <div class="control-group">
            <label>字间距 (letter-spacing): {{ letterSpacing }}px</label>
            <input v-model="letterSpacing" type="range" min="-2" max="10" step="0.5" class="control-range">
          </div>
          
          <div class="control-group">
            <label>词间距 (word-spacing): {{ wordSpacing }}px</label>
            <input v-model="wordSpacing" type="range" min="-5" max="20" step="1" class="control-range">
          </div>
          
          <div class="control-group">
            <label>文本对齐 (text-align):</label>
            <select v-model="textAlign" class="control-select">
              <option value="left">left</option>
              <option value="center">center</option>
              <option value="right">right</option>
              <option value="justify">justify</option>
            </select>
          </div>
          
          <div class="control-group">
            <label>文本缩进 (text-indent): {{ textIndent }}px</label>
            <input v-model="textIndent" type="range" min="0" max="50" class="control-range">
          </div>
          
          <div class="control-group">
            <label>文本转换 (text-transform):</label>
            <select v-model="textTransform" class="control-select">
              <option value="none">none</option>
              <option value="uppercase">uppercase</option>
              <option value="lowercase">lowercase</option>
              <option value="capitalize">capitalize</option>
            </select>
          </div>
        </div>

        <div class="preview-area">
          <div class="layout-preview" :style="layoutStyle">
            <h3>文本布局示例</h3>
            <p>
              这是第一段文字。通过调整行高、字间距、词间距等属性，可以显著改善文本的可读性和视觉效果。
              良好的排版不仅让内容更容易阅读，还能传达专业感和品质感。
            </p>
            <p>
              第二段文字展示了不同的对齐方式和缩进效果。在网页设计中，合适的文本间距能够帮助用户更好地
              理解内容结构，提升阅读体验。特别是在长文本场景下，适当的行间距尤为重要。
            </p>
            <p>
              The third paragraph demonstrates text transformation effects. 
              These properties help create visual hierarchy and improve readability.
              Modern typography focuses on creating comfortable reading experiences.
            </p>
          </div>
        </div>

        <div class="code-display">
          <CodeBlock 
            :code="layoutCSS" 
            language="css" 
            title="生成的 CSS 代码"
            :show-line-numbers="true"
          />
        </div>
      </div>
    </section>

    <!-- 高级文本效果 -->
    <section class="demo-section">
      <h3 class="section-title">高级文本效果</h3>
      
      <div class="demo-playground">
        <div class="controls">
          <h4 class="font-semibold mb-3">效果设置</h4>
          <div class="control-group">
            <label>文字阴影 (text-shadow):</label>
            <select v-model="textShadowPreset" class="control-select">
              <option value="none">无阴影</option>
              <option value="simple">简单阴影</option>
              <option value="glow">发光效果</option>
              <option value="emboss">浮雕效果</option>
              <option value="multiple">多重阴影</option>
            </select>
          </div>
          
          <div class="control-group">
            <label>文本溢出处理:</label>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" v-model="enableEllipsis">
                启用省略号 (text-overflow: ellipsis)
              </label>
            </div>
          </div>
          
          <div class="control-group">
            <label>背景裁剪文字:</label>
            <div class="checkbox-group">
              <label class="checkbox-label">
                <input type="checkbox" v-model="enableClipText">
                渐变文字效果 (background-clip: text)
              </label>
            </div>
          </div>
        </div>

        <div class="preview-area">
          <div class="effects-preview">
            <div class="effect-item">
              <h3 :style="shadowStyle">文字阴影效果</h3>
              <p :style="shadowStyle">这段文字展示了不同的阴影效果，包括简单阴影、发光效果、浮雕效果等。</p>
            </div>
            
            <div class="effect-item">
              <h3>文本溢出处理</h3>
              <div class="overflow-container" :style="overflowStyle">
                这是一段很长的文字用来演示文本溢出处理效果。当文本超出容器宽度时，可以选择显示省略号或其他处理方式。
              </div>
            </div>
            
            <div class="effect-item">
              <h3 :style="clipTextStyle">渐变文字效果</h3>
              <p :style="clipTextStyle">
                这段文字使用了背景裁剪技术，创造出渐变文字的视觉效果。
              </p>
            </div>
          </div>
        </div>

        <div class="code-display">
          <CodeBlock 
            :code="effectsCSS" 
            language="css" 
            title="效果 CSS 代码"
            :show-line-numbers="true"
          />
        </div>
      </div>
    </section>

    <!-- 字体最佳实践 -->
    <section class="demo-section">
      <h3 class="section-title">字体选择与最佳实践</h3>
      
      <div class="best-practices">
        <div class="practice-grid">
          <div class="practice-card">
            <h4 class="practice-title">🎯 可读性优先</h4>
            <ul class="practice-list">
              <li>正文使用 14-16px 字号</li>
              <li>行高设置为 1.4-1.6 倍</li>
              <li>确保足够的对比度</li>
              <li>避免使用过多装饰性字体</li>
            </ul>
          </div>
          
          <div class="practice-card">
            <h4 class="practice-title">📱 响应式考虑</h4>
            <ul class="practice-list">
              <li>移动端适当增大字号</li>
              <li>使用相对单位 (em, rem)</li>
              <li>考虑不同屏幕密度</li>
              <li>测试各种设备效果</li>
            </ul>
          </div>
          
          <div class="practice-card">
            <h4 class="practice-title">⚡ 性能优化</h4>
            <ul class="practice-list">
              <li>优先使用系统字体</li>
              <li>限制 Web 字体数量</li>
              <li>使用 font-display 属性</li>
              <li>预加载关键字体文件</li>
            </ul>
          </div>
          
          <div class="practice-card">
            <h4 class="practice-title">🌐 多语言支持</h4>
            <ul class="practice-list">
              <li>考虑字符集覆盖</li>
              <li>设置合适的 fallback</li>
              <li>注意不同语言的排版习惯</li>
              <li>测试特殊字符显示</li>
            </ul>
          </div>
        </div>
        
        <div class="font-stack-examples">
          <h4 class="font-semibold mb-4">推荐字体栈</h4>
          <div class="stack-grid">
            <div class="stack-item">
              <h5>系统字体栈</h5>
              <code>font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;</code>
            </div>
            <div class="stack-item">
              <h5>中文字体栈</h5>
              <code>font-family: 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;</code>
            </div>
            <div class="stack-item">
              <h5>等宽字体栈</h5>
              <code>font-family: 'SF Mono', Monaco, 'Cascadia Code', Consolas, monospace;</code>
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
  name: 'TypographyDemo',
  data() {
    return {
      // 字体基础属性
      fontFamily: 'Arial, sans-serif',
      fontSize: 16,
      fontWeight: '400',
      fontStyle: 'normal',
      textDecoration: 'none',
      textColor: '#333333',
      
      // 文本布局属性
      lineHeight: 1.5,
      letterSpacing: 0,
      wordSpacing: 0,
      textAlign: 'left',
      textIndent: 0,
      textTransform: 'none',
      
      // 高级效果
      textShadowPreset: 'none',
      enableEllipsis: false,
      enableClipText: false
    }
  },
  computed: {
    textStyle() {
      return {
        fontFamily: this.fontFamily,
        fontSize: this.fontSize + 'px',
        fontWeight: this.fontWeight,
        fontStyle: this.fontStyle,
        textDecoration: this.textDecoration,
        color: this.textColor
      }
    },
    
    layoutStyle() {
      return {
        lineHeight: this.lineHeight,
        letterSpacing: this.letterSpacing + 'px',
        wordSpacing: this.wordSpacing + 'px',
        textAlign: this.textAlign,
        textIndent: this.textIndent + 'px',
        textTransform: this.textTransform
      }
    },
    
    shadowStyle() {
      const shadows = {
        none: 'none',
        simple: '2px 2px 4px rgba(0,0,0,0.3)',
        glow: '0 0 10px rgba(59, 130, 246, 0.5)',
        emboss: '1px 1px 0 rgba(255,255,255,0.8), -1px -1px 0 rgba(0,0,0,0.3)',
        multiple: '1px 1px 0 #ccc, 2px 2px 0 #c9c9c9, 3px 3px 0 #bbb, 4px 4px 0 #b9b9b9, 5px 5px 0 #aaa'
      }
      return {
        textShadow: shadows[this.textShadowPreset]
      }
    },
    
    overflowStyle() {
      return {
        width: '200px',
        whiteSpace: this.enableEllipsis ? 'nowrap' : 'normal',
        overflow: this.enableEllipsis ? 'hidden' : 'visible',
        textOverflow: this.enableEllipsis ? 'ellipsis' : 'clip',
        border: '1px solid #ddd',
        padding: '8px',
        borderRadius: '4px'
      }
    },
    
    clipTextStyle() {
      if (this.enableClipText) {
        return {
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          fontSize: '24px',
          fontWeight: 'bold'
        }
      }
      return {}
    },
    
    generatedCSS() {
      return `.text-element {
  font-family: ${this.fontFamily};
  font-size: ${this.fontSize}px;
  font-weight: ${this.fontWeight};
  font-style: ${this.fontStyle};
  text-decoration: ${this.textDecoration};
  color: ${this.textColor};
}`
    },
    
    layoutCSS() {
      return `.text-layout {
  line-height: ${this.lineHeight};
  letter-spacing: ${this.letterSpacing}px;
  word-spacing: ${this.wordSpacing}px;
  text-align: ${this.textAlign};
  text-indent: ${this.textIndent}px;
  text-transform: ${this.textTransform};
}`
    },
    
    effectsCSS() {
      let css = ''
      if (this.textShadowPreset !== 'none') {
        css += `.text-shadow {\n  text-shadow: ${this.shadowStyle.textShadow};\n}\n\n`
      }
      if (this.enableEllipsis) {
        css += `.text-ellipsis {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n`
      }
      if (this.enableClipText) {
        css += `.gradient-text {\n  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}`
      }
      return css || '/* 无特殊效果 */'
    }
  }
}
</script>

<style scoped>
.typography-demo {
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
  @apply lg:col-span-2 bg-gray-50 rounded-lg p-6;
}

.text-preview {
  @apply space-y-4;
}

.text-preview h1 {
  @apply text-2xl font-bold;
}

.text-preview h2 {
  @apply text-xl font-semibold;
}

.text-preview h3 {
  @apply text-lg font-medium;
}

.layout-preview {
  @apply space-y-4;
}

.effects-preview {
  @apply space-y-6;
}

.effect-item {
  @apply space-y-2;
}

.overflow-container {
  @apply bg-white;
}

.code-display {
  @apply lg:col-span-3 mt-4;
}

.code-block {
  @apply bg-gray-900 text-gray-100 p-4 rounded-lg text-sm overflow-x-auto;
}

.best-practices {
  @apply p-6 space-y-6;
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

.practice-list {
  @apply space-y-2 text-sm text-gray-600;
}

.practice-list li {
  @apply flex items-start space-x-2;
}

.practice-list li::before {
  content: "•";
  @apply text-blue-500 font-bold;
}

.font-stack-examples {
  @apply bg-blue-50 rounded-lg p-6 border border-blue-200;
}

.stack-grid {
  @apply space-y-4;
}

.stack-item {
  @apply bg-white rounded-lg p-4 border border-blue-200;
}

.stack-item h5 {
  @apply font-semibold text-gray-900 mb-2;
}

.stack-item code {
  @apply bg-gray-100 px-2 py-1 rounded text-sm break-all;
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
