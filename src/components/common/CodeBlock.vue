<template>
  <div class="code-block-wrapper">
    <div v-if="title" class="code-title">
      {{ title }}
    </div>
    <pre 
      :class="[
        'code-block',
        { 'line-numbers': showLineNumbers },
        { 'has-title': title }
      ]"
    ><code 
      ref="codeElement"
      :class="`language-${detectedLanguage}`"
      v-html="highlightedCode"
    ></code></pre>
  </div>
</template>

<script>
import { useCodeHighlight } from '@/utils/codeHighlight'

export default {
  name: 'CodeBlock',
  props: {
    code: {
      type: String,
      required: true
    },
    language: {
      type: String,
      default: 'auto'
    },
    title: {
      type: String,
      default: ''
    },
    showLineNumbers: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      highlightedCode: '',
      detectedLanguage: 'markup'
    }
  },
  mounted() {
    this.highlightCodeContent()
  },
  watch: {
    code: {
      handler() {
        this.highlightCodeContent()
      },
      immediate: true
    },
    language() {
      this.highlightCodeContent()
    }
  },
  methods: {
    highlightCodeContent() {
      const { highlightCode } = useCodeHighlight()
      
      if (!this.code) {
        this.highlightedCode = ''
        return
      }

      // 检测或使用指定的语言
      this.detectedLanguage = this.language === 'auto' 
        ? this.detectLanguage(this.code)
        : this.language

      // 高亮代码
      this.highlightedCode = highlightCode(this.code, this.detectedLanguage)
      
      // 在下一个 tick 中应用 Prism 插件
      this.$nextTick(() => {
        if (this.$refs.codeElement) {
          // 重新应用 Prism 的插件（如行号、工具栏等）
          const { highlightElement } = useCodeHighlight()
          highlightElement(this.$refs.codeElement, this.detectedLanguage)
        }
      })
    },

    detectLanguage(code) {
      const { highlightCode } = useCodeHighlight()
      // 使用工具类的语言检测
      return this.detectCodeLanguage(code)
    },

    detectCodeLanguage(code) {
      if (!code || typeof code !== 'string') return 'markup'

      const trimmedCode = code.trim()

      // CSS 相关检测
      if (this.isCSSLike(trimmedCode)) {
        if (trimmedCode.includes('$') && (trimmedCode.includes('@mixin') || trimmedCode.includes('@include'))) {
          return 'scss'
        }
        if (trimmedCode.includes('@') && trimmedCode.includes('&')) {
          return 'less'
        }
        if (trimmedCode.includes('{') && (trimmedCode.includes(':') || trimmedCode.includes('}'))) {
          return 'css'
        }
      }

      // JavaScript 相关检测
      if (this.isJavaScriptLike(trimmedCode)) {
        if (trimmedCode.includes('interface') || trimmedCode.includes(': string') || trimmedCode.includes(': number')) {
          return 'typescript'
        }
        return 'javascript'
      }

      // HTML 检测
      if (trimmedCode.includes('<') && trimmedCode.includes('>')) {
        return 'markup'
      }

      // JSON 检测
      if ((trimmedCode.startsWith('{') && trimmedCode.endsWith('}')) || 
          (trimmedCode.startsWith('[') && trimmedCode.endsWith(']'))) {
        try {
          JSON.parse(trimmedCode)
          return 'json'
        } catch (e) {
          // 不是有效的 JSON
        }
      }

      // Bash/Shell 检测
      if (trimmedCode.includes('#!/bin/bash') || 
          trimmedCode.includes('npm ') || 
          trimmedCode.includes('yarn ') ||
          trimmedCode.includes('cd ') ||
          trimmedCode.includes('git ')) {
        return 'bash'
      }

      return 'markup'
    },

    isCSSLike(code) {
      const cssPatterns = [
        /[\w-]+\s*:\s*[^;]+;/,
        /[\w-]+\s*\{[^}]*\}/,
        /@[\w-]+/,
        /&[\w-:]+/,
        /\$[\w-]+/
      ]
      return cssPatterns.some(pattern => pattern.test(code))
    },

    isJavaScriptLike(code) {
      const jsPatterns = [
        /function\s+\w+/,
        /const\s+\w+\s*=/,
        /let\s+\w+\s*=/,
        /var\s+\w+\s*=/,
        /=>\s*\{/,
        /console\.(log|error|warn)/,
        /document\.\w+/,
        /window\.\w+/,
        /import\s+.+\s+from/,
        /export\s+(default\s+)?/
      ]
      return jsPatterns.some(pattern => pattern.test(code))
    }
  }
}
</script>

<style scoped>
.code-block-wrapper {
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.code-title {
  background: #2d3748;
  color: #e2e8f0;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-bottom: 1px solid #4a5568;
}

.code-block {
  margin: 0;
  background: #1a202c !important;
  color: #e2e8f0;
  font-family: 'Fira Code', 'SF Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 1rem;
  overflow-x: auto;
  white-space: pre;
  border: none;
  font-weight: 400;
  tab-size: 2;
  -moz-tab-size: 2;
}

.code-block.has-title {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

/* 自定义 Prism 主题样式 */
.code-block :deep(.token.comment),
.code-block :deep(.token.prolog),
.code-block :deep(.token.doctype),
.code-block :deep(.token.cdata) {
  color: #7c8594;
}

.code-block :deep(.token.punctuation) {
  color: #e2e8f0;
}

.code-block :deep(.token.property),
.code-block :deep(.token.tag),
.code-block :deep(.token.boolean),
.code-block :deep(.token.number),
.code-block :deep(.token.constant),
.code-block :deep(.token.symbol),
.code-block :deep(.token.deleted) {
  color: #f56565;
}

.code-block :deep(.token.selector),
.code-block :deep(.token.attr-name),
.code-block :deep(.token.string),
.code-block :deep(.token.char),
.code-block :deep(.token.builtin),
.code-block :deep(.token.inserted) {
  color: #68d391;
}

.code-block :deep(.token.operator),
.code-block :deep(.token.entity),
.code-block :deep(.token.url),
.code-block :deep(.language-css .token.string),
.code-block :deep(.style .token.string) {
  color: #81c8d6;
}

.code-block :deep(.token.atrule),
.code-block :deep(.token.attr-value),
.code-block :deep(.token.keyword) {
  color: #9f7aea;
}

.code-block :deep(.token.function),
.code-block :deep(.token.class-name) {
  color: #fbd38d;
}

.code-block :deep(.token.regex),
.code-block :deep(.token.important),
.code-block :deep(.token.variable) {
  color: #f687b3;
}

/* 行号样式 */
.code-block.line-numbers {
  position: relative;
  counter-reset: linenumber;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 4rem;
}

.code-block.line-numbers :deep(.line-numbers-rows) {
  position: absolute;
  pointer-events: none;
  top: 0;
  bottom: 0;
  left: -4.2rem;
  width: 4rem;
  letter-spacing: -1px;
  border-right: 1px solid #4a5568;
  background: #1a202c;
  padding: 0;
  overflow: hidden;
}

.code-block.line-numbers :deep(.line-numbers-rows > span) {
  display: block;
  counter-increment: linenumber;
  color: #7c8594;
  padding-right: 0.5rem;
  text-align: right;
  /* line-height: 1.5; */
  font-size: 0.875rem;
  height: 21px; /* 21px, 对应代码的行高 */
}

.code-block.line-numbers :deep(.line-numbers-rows > span::before) {
  content: counter(linenumber);
}

/* 工具栏样式 */
:deep(.toolbar) {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 0.25rem;
}

:deep(.toolbar-item) {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  color: #e2e8f0;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

:deep(.toolbar-item:hover) {
  background: rgba(255, 255, 255, 0.2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .code-block {
    font-size: 0.75rem;
    padding: 0.75rem;
  }
  
  .code-title {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
  }
}
</style>
