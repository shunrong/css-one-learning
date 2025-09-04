import Prism from 'prismjs'

// 导入基础组件和主题
import 'prismjs/themes/prism-tomorrow.css'

// 导入常用语言支持
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-less'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markup'

// 导入插件
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'

/**
 * 代码高亮工具类
 */
class CodeHighlighter {
  constructor() {
    this.initializePlugins()
  }

  /**
   * 初始化插件配置
   */
  initializePlugins() {
    // 配置 toolbar
    Prism.plugins.toolbar.registerButton('select-code', {
      text: '选择代码',
      onClick: function (env) {
        const range = document.createRange()
        range.selectNodeContents(env.element)
        const selection = window.getSelection()
        selection.removeAllRanges()
        selection.addRange(range)
      }
    })
  }

  /**
   * 高亮指定元素内的代码
   * @param {Element} element - 要高亮的元素
   * @param {string} language - 语言类型
   */
  highlightElement(element, language = 'auto') {
    if (!element) return

    // 如果没有指定语言，尝试自动检测
    if (language === 'auto') {
      language = this.detectLanguage(element.textContent)
    }

    // 设置语言类
    element.className = `language-${language}`
    
    // 应用高亮
    Prism.highlightElement(element)
  }

  /**
   * 高亮指定容器内的所有代码块
   * @param {Element} container - 容器元素
   */
  highlightAllInContainer(container) {
    if (!container) return

    const codeBlocks = container.querySelectorAll('pre code, code')
    codeBlocks.forEach(block => {
      // 获取语言类型
      let language = 'markup'
      
      // 从 class 中提取语言类型
      const classMatch = block.className.match(/language-(\w+)/)
      if (classMatch) {
        language = classMatch[1]
      } else {
        // 尝试从内容自动检测
        language = this.detectLanguage(block.textContent)
        block.className = `language-${language}`
      }

      // 应用高亮
      Prism.highlightElement(block)
    })
  }

  /**
   * 自动检测代码语言类型
   * @param {string} code - 代码内容
   * @returns {string} 检测到的语言类型
   */
  detectLanguage(code) {
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

    // 默认返回 markup
    return 'markup'
  }

  /**
   * 检测是否为 CSS 类代码
   */
  isCSSLike(code) {
    const cssPatterns = [
      /[\w-]+\s*:\s*[^;]+;/,  // 属性:值;
      /[\w-]+\s*\{[^}]*\}/,   // 选择器 { }
      /@[\w-]+/,              // @ 规则
      /&[\w-:]+/,             // & 选择器（Less/Sass）
      /\$[\w-]+/              // $ 变量（Sass）
    ]
    return cssPatterns.some(pattern => pattern.test(code))
  }

  /**
   * 检测是否为 JavaScript 类代码
   */
  isJavaScriptLike(code) {
    const jsPatterns = [
      /function\s+\w+/,           // function 声明
      /const\s+\w+\s*=/,          // const 声明
      /let\s+\w+\s*=/,            // let 声明
      /var\s+\w+\s*=/,            // var 声明
      /=>\s*\{/,                  // 箭头函数
      /console\.(log|error|warn)/, // console 方法
      /document\.\w+/,            // DOM 操作
      /window\.\w+/,              // window 对象
      /import\s+.+\s+from/,       // ES6 import
      /export\s+(default\s+)?/    // ES6 export
    ]
    return jsPatterns.some(pattern => pattern.test(code))
  }

  /**
   * 手动高亮代码字符串
   * @param {string} code - 代码内容
   * @param {string} language - 语言类型
   * @returns {string} 高亮后的 HTML
   */
  highlightCode(code, language = 'auto') {
    if (language === 'auto') {
      language = this.detectLanguage(code)
    }

    // 确保语言是支持的
    if (!Prism.languages[language]) {
      language = 'markup'
    }

    return Prism.highlight(code, Prism.languages[language], language)
  }
}

// 创建单例实例
const codeHighlighter = new CodeHighlighter()

// Vue 3 组合式函数
export function useCodeHighlight() {
  const highlightElement = (element, language) => {
    codeHighlighter.highlightElement(element, language)
  }

  const highlightContainer = (container) => {
    codeHighlighter.highlightAllInContainer(container)
  }

  const highlightCode = (code, language) => {
    return codeHighlighter.highlightCode(code, language)
  }

  return {
    highlightElement,
    highlightContainer,
    highlightCode
  }
}

// Vue 2 mixin
export const CodeHighlightMixin = {
  mounted() {
    this.$nextTick(() => {
      this.highlightCode()
    })
  },
  updated() {
    this.$nextTick(() => {
      this.highlightCode()
    })
  },
  methods: {
    highlightCode() {
      codeHighlighter.highlightAllInContainer(this.$el)
    },
    highlightElement(element, language) {
      codeHighlighter.highlightElement(element, language)
    }
  }
}

// 默认导出
export default codeHighlighter
