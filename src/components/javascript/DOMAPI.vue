<template>
  <div class="dom-api">
    <h2>DOM API</h2>
    
    <!-- DOM 基础概念 -->
    <section class="dom-section">
      <h3>DOM 基础概念</h3>
      <p class="section-desc">DOM（Document Object Model）是 HTML 和 XML 文档的编程接口，它将文档表示为节点树。</p>
      
      <div class="concept-grid">
        <div v-for="concept in domConcepts" :key="concept.name" class="concept-card">
          <h4>{{ concept.name }}</h4>
          <p>{{ concept.description }}</p>
          <div class="code-block">
            <pre><code>{{ concept.example }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 元素选择 -->
    <section class="dom-section">
      <h3>元素选择与查找</h3>
      <p class="section-desc">JavaScript 提供了多种方法来选择和查找 DOM 元素。</p>
      
      <div class="selector-tabs">
        <button 
          v-for="tab in selectorTabs" 
          :key="tab.id"
          :class="['tab-button', { active: activeSelectorTab === tab.id }]"
          @click="activeSelectorTab = tab.id"
        >
          {{ tab.title }}
        </button>
      </div>

      <div class="selector-content">
        <div v-if="activeSelectorTab === 'basic'" class="selector-methods">
          <div v-for="method in basicSelectors" :key="method.name" class="method-card">
            <h4>{{ method.name }}</h4>
            <p>{{ method.description }}</p>
            <div class="method-signature">
              <strong>语法：</strong>{{ method.syntax }}
            </div>
            <div class="method-returns">
              <strong>返回：</strong>{{ method.returns }}
            </div>
            <div class="code-block">
              <pre><code>{{ method.example }}</code></pre>
            </div>
          </div>
        </div>

        <div v-if="activeSelectorTab === 'modern'" class="modern-selectors">
          <div v-for="method in modernSelectors" :key="method.name" class="method-card">
            <h4>{{ method.name }}</h4>
            <p>{{ method.description }}</p>
            <div class="method-signature">
              <strong>语法：</strong>{{ method.syntax }}
            </div>
            <div class="code-block">
              <pre><code>{{ method.example }}</code></pre>
            </div>
          </div>
        </div>

        <div v-if="activeSelectorTab === 'traversal'" class="dom-traversal">
          <h4>DOM 遍历</h4>
          <p>通过节点关系遍历 DOM 树的方法。</p>
          <div class="traversal-grid">
            <div v-for="property in traversalProperties" :key="property.name" class="traversal-item">
              <h5>{{ property.name }}</h5>
              <p>{{ property.description }}</p>
              <div class="code-example">{{ property.example }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 元素操作 -->
    <section class="dom-section">
      <h3>元素操作</h3>
      <p class="section-desc">创建、修改、删除 DOM 元素的方法。</p>
      
      <div class="operation-categories">
        <div v-for="category in operationCategories" :key="category.name" class="category-card">
          <h4>{{ category.name }}</h4>
          <div class="operations-list">
            <div v-for="operation in category.operations" :key="operation.name" class="operation-item">
              <h5>{{ operation.name }}</h5>
              <p>{{ operation.description }}</p>
              <div class="code-block">
                <pre><code>{{ operation.example }}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 事件处理 -->
    <section class="dom-section">
      <h3>事件处理</h3>
      <p class="section-desc">JavaScript 事件系统允许我们响应用户交互和浏览器事件。</p>
      
      <div class="event-tabs">
        <button 
          v-for="tab in eventTabs" 
          :key="tab.id"
          :class="['tab-button', { active: activeEventTab === tab.id }]"
          @click="activeEventTab = tab.id"
        >
          {{ tab.title }}
        </button>
      </div>

      <div class="event-content">
        <div v-if="activeEventTab === 'binding'" class="event-binding">
          <h4>事件绑定方式</h4>
          <div class="binding-methods">
            <div v-for="method in eventBindingMethods" :key="method.name" class="binding-method">
              <h5>{{ method.name }}</h5>
              <p>{{ method.description }}</p>
              <div class="pros-cons">
                <div class="pros">
                  <strong>优点：</strong>
                  <ul>
                    <li v-for="pro in method.pros" :key="pro">{{ pro }}</li>
                  </ul>
                </div>
                <div class="cons">
                  <strong>缺点：</strong>
                  <ul>
                    <li v-for="con in method.cons" :key="con">{{ con }}</li>
                  </ul>
                </div>
              </div>
              <div class="code-block">
                <pre><code>{{ method.example }}</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeEventTab === 'flow'" class="event-flow">
          <h4>事件流机制</h4>
          <div class="flow-explanation">
            <div class="flow-phases">
              <div class="phase capture">
                <h5>1. 捕获阶段（Capture Phase）</h5>
                <p>事件从 Document 对象沿着文档树向下传播到目标元素</p>
              </div>
              <div class="phase target">
                <h5>2. 目标阶段（Target Phase）</h5>
                <p>事件到达目标元素，触发目标元素上的事件处理程序</p>
              </div>
              <div class="phase bubble">
                <h5>3. 冒泡阶段（Bubble Phase）</h5>
                <p>事件从目标元素向上冒泡到 Document 对象</p>
              </div>
            </div>
          </div>
          <div class="code-block">
            <pre><code>{{ eventFlowExample }}</code></pre>
          </div>
        </div>

        <div v-if="activeEventTab === 'types'" class="event-types">
          <h4>常用事件类型</h4>
          <div class="event-categories">
            <div v-for="category in eventCategories" :key="category.name" class="event-category">
              <h5>{{ category.name }}</h5>
              <div class="events-grid">
                <div v-for="event in category.events" :key="event.name" class="event-item">
                  <strong>{{ event.name }}</strong>
                  <p>{{ event.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 样式操作 -->
    <section class="dom-section">
      <h3>样式操作</h3>
      <p class="section-desc">通过 JavaScript 动态修改元素的样式和 CSS 类。</p>
      
      <div class="style-operations">
        <div v-for="operation in styleOperations" :key="operation.name" class="style-operation">
          <h4>{{ operation.name }}</h4>
          <p>{{ operation.description }}</p>
          <div class="code-block">
            <pre><code>{{ operation.example }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 实践示例 -->
    <section class="dom-section">
      <h3>实践示例</h3>
      <div class="practice-demo">
        <div class="demo-tabs">
          <button 
            v-for="demo in practiceDemo" 
            :key="demo.id"
            :class="['tab-button', { active: activeDemoTab === demo.id }]"
            @click="activeDemoTab = demo.id"
          >
            {{ demo.title }}
          </button>
        </div>
        
        <div class="demo-content">
          <div v-if="activeDemoTab === 'selector'" class="selector-demo">
            <h4>元素选择演示</h4>
            <div class="demo-html">
              <div class="sample-html">
                <div id="container" class="container">
                  <h3>标题元素</h3>
                  <p class="text">第一个段落</p>
                  <p class="text highlight">第二个段落</p>
                  <ul>
                    <li data-value="1">列表项 1</li>
                    <li data-value="2">列表项 2</li>
                    <li data-value="3">列表项 3</li>
                  </ul>
                </div>
              </div>
              <div class="demo-controls">
                <button @click="selectById">按 ID 选择</button>
                <button @click="selectByClass">按 Class 选择</button>
                <button @click="selectByTag">按标签选择</button>
                <button @click="selectByQuery">CSS 选择器</button>
                <button @click="clearSelection">清除选择</button>
              </div>
              <div v-if="selectionResult" class="selection-result">
                <strong>选择结果：</strong>{{ selectionResult }}
              </div>
            </div>
          </div>

          <div v-if="activeDemoTab === 'manipulation'" class="manipulation-demo">
            <h4>元素操作演示</h4>
            <div class="demo-area">
              <div id="demo-container" class="demo-container">
                <p>这是一个测试段落</p>
              </div>
              <div class="demo-controls">
                <button @click="createElement">创建元素</button>
                <button @click="modifyText">修改文本</button>
                <button @click="modifyHTML">修改 HTML</button>
                <button @click="addAttribute">添加属性</button>
                <button @click="toggleClass">切换类名</button>
                <button @click="resetDemo">重置</button>
              </div>
            </div>
          </div>

          <div v-if="activeDemoTab === 'events'" class="events-demo">
            <h4>事件处理演示</h4>
            <div class="event-demo-area">
              <div class="event-buttons">
                <button class="demo-btn" @click="addClickEvent">添加点击事件</button>
                <button class="demo-btn" @click="addHoverEvent">添加悬停事件</button>
                <button class="demo-btn" @click="removeEvents">移除事件</button>
              </div>
              <div id="event-target" class="event-target">
                点击或悬停我试试
              </div>
              <div v-if="eventLog.length > 0" class="event-log">
                <h5>事件日志：</h5>
                <ul>
                  <li v-for="(log, index) in eventLog" :key="index">{{ log }}</li>
                </ul>
                <button @click="clearLog">清除日志</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'DOMAPI',
  setup() {
    const activeSelectorTab = ref('basic')
    const activeEventTab = ref('binding')
    const activeDemoTab = ref('selector')
    const selectionResult = ref('')
    const eventLog = ref([])

    const domConcepts = [
      {
        name: 'Document 对象',
        description: '代表整个 HTML 文档，是 DOM 的入口点',
        example: `// 获取文档信息
console.log(document.title);       // 文档标题
console.log(document.URL);         // 文档 URL
console.log(document.domain);      // 文档域名

// 文档状态
console.log(document.readyState);  // loading, interactive, complete

// 获取特殊元素
console.log(document.documentElement); // &lt;html&gt; 元素
console.log(document.head);             // &lt;head&gt; 元素
console.log(document.body);             // &lt;body&gt; 元素`
      },
      {
        name: 'Element 对象',
        description: '表示 HTML 元素，提供了操作元素的属性和方法',
        example: `var element = document.getElementById('myDiv');

// 元素信息
console.log(element.tagName);      // 标签名
console.log(element.id);           // ID 属性
console.log(element.className);    // 类名

// 元素内容
console.log(element.innerHTML);    // HTML 内容
console.log(element.textContent);  // 文本内容
console.log(element.outerHTML);    // 包含元素本身的 HTML`
      },
      {
        name: 'Node 类型',
        description: 'DOM 树中的每个组成部分都是节点，有不同的节点类型',
        example: `// 节点类型常量
Node.ELEMENT_NODE         // 1 - 元素节点
Node.TEXT_NODE           // 3 - 文本节点
Node.COMMENT_NODE        // 8 - 注释节点
Node.DOCUMENT_NODE       // 9 - 文档节点

// 检查节点类型
var node = document.getElementById('myDiv');
if (node.nodeType === Node.ELEMENT_NODE) {
  console.log('这是一个元素节点');
}`
      }
    ]

    const selectorTabs = [
      { id: 'basic', title: '基础选择器' },
      { id: 'modern', title: '现代选择器' },
      { id: 'traversal', title: 'DOM 遍历' }
    ]

    const basicSelectors = [
      {
        name: 'getElementById()',
        description: '通过元素的 ID 获取单个元素',
        syntax: 'document.getElementById(id)',
        returns: 'Element 对象或 null',
        example: `// HTML: &lt;div id="header"&gt;标题&lt;/div&gt;
var header = document.getElementById('header');
console.log(header.textContent); // "标题"

// 如果找不到元素，返回 null
var notFound = document.getElementById('nonexistent');
console.log(notFound); // null`
      },
      {
        name: 'getElementsByClassName()',
        description: '通过类名获取元素集合',
        syntax: 'element.getElementsByClassName(className)',
        returns: 'HTMLCollection（类数组对象）',
        example: `// HTML: &lt;p class="text"&gt;段落1&lt;/p&gt;&lt;p class="text"&gt;段落2&lt;/p&gt;
var textElements = document.getElementsByClassName('text');
console.log(textElements.length); // 2

// HTMLCollection 是动态的
for (var i = 0; i < textElements.length; i++) {
  console.log(textElements[i].textContent);
}

// 转换为真正的数组
var array = Array.from(textElements);`
      },
      {
        name: 'getElementsByTagName()',
        description: '通过标签名获取元素集合',
        syntax: 'element.getElementsByTagName(tagName)',
        returns: 'HTMLCollection',
        example: `// 获取所有 div 元素
var divs = document.getElementsByTagName('div');

// 获取所有元素
var allElements = document.getElementsByTagName('*');

// 在特定元素内查找
var container = document.getElementById('container');
var links = container.getElementsByTagName('a');`
      },
      {
        name: 'getElementsByName()',
        description: '通过 name 属性获取元素集合',
        syntax: 'document.getElementsByName(name)',
        returns: 'NodeList',
        example: `// HTML: &lt;input name="user" type="text"&gt;
//       &lt;input name="user" type="email"&gt;
var userInputs = document.getElementsByName('user');
console.log(userInputs.length); // 2

// 常用于表单元素
var radioButtons = document.getElementsByName('gender');`
      }
    ]

    const modernSelectors = [
      {
        name: 'querySelector()',
        description: '使用 CSS 选择器获取第一个匹配的元素',
        syntax: 'element.querySelector(selector)',
        example: `// 基础选择器
var header = document.querySelector('#header');
var firstText = document.querySelector('.text');
var firstDiv = document.querySelector('div');

// 复杂选择器
var link = document.querySelector('a[href*="github"]');
var firstChild = document.querySelector('ul > li:first-child');
var evenItems = document.querySelector('li:nth-child(even)');

// 伪类选择器
var checked = document.querySelector('input:checked');
var disabled = document.querySelector('button:disabled');`
      },
      {
        name: 'querySelectorAll()',
        description: '使用 CSS 选择器获取所有匹配的元素',
        syntax: 'element.querySelectorAll(selector)',
        example: `// 获取所有匹配元素
var allTexts = document.querySelectorAll('.text');
var allDivs = document.querySelectorAll('div');

// 复杂选择器
var links = document.querySelectorAll('a[href^="http"]');
var items = document.querySelectorAll('ul li:nth-child(odd)');

// NodeList 可以使用 forEach
allTexts.forEach(function(element) {
  console.log(element.textContent);
});

// 转换为数组
var array = [...allTexts];`
      }
    ]

    const traversalProperties = [
      { name: 'parentNode', description: '获取父节点', example: 'element.parentNode' },
      { name: 'parentElement', description: '获取父元素', example: 'element.parentElement' },
      { name: 'childNodes', description: '获取所有子节点（包括文本节点）', example: 'element.childNodes' },
      { name: 'children', description: '获取所有子元素', example: 'element.children' },
      { name: 'firstChild', description: '获取第一个子节点', example: 'element.firstChild' },
      { name: 'firstElementChild', description: '获取第一个子元素', example: 'element.firstElementChild' },
      { name: 'lastChild', description: '获取最后一个子节点', example: 'element.lastChild' },
      { name: 'lastElementChild', description: '获取最后一个子元素', example: 'element.lastElementChild' },
      { name: 'nextSibling', description: '获取下一个兄弟节点', example: 'element.nextSibling' },
      { name: 'nextElementSibling', description: '获取下一个兄弟元素', example: 'element.nextElementSibling' },
      { name: 'previousSibling', description: '获取上一个兄弟节点', example: 'element.previousSibling' },
      { name: 'previousElementSibling', description: '获取上一个兄弟元素', example: 'element.previousElementSibling' }
    ]

    const operationCategories = [
      {
        name: '创建和插入',
        operations: [
          {
            name: 'createElement()',
            description: '创建新的元素节点',
            example: `// 创建元素
var div = document.createElement('div');
div.textContent = '新创建的 div';
div.className = 'new-element';

// 创建并设置属性
var img = document.createElement('img');
img.src = 'image.jpg';
img.alt = '图片描述';

// 添加到文档
document.body.appendChild(div);`
          },
          {
            name: 'appendChild()',
            description: '将节点添加为子节点',
            example: `var container = document.getElementById('container');
var newParagraph = document.createElement('p');
newParagraph.textContent = '新段落';

// 添加到容器末尾
container.appendChild(newParagraph);`
          },
          {
            name: 'insertBefore()',
            description: '在指定节点前插入新节点',
            example: `var container = document.getElementById('container');
var newElement = document.createElement('span');
var referenceElement = container.firstElementChild;

// 在第一个子元素前插入
container.insertBefore(newElement, referenceElement);`
          }
        ]
      },
      {
        name: '修改内容',
        operations: [
          {
            name: 'innerHTML',
            description: '获取或设置元素的 HTML 内容',
            example: `var div = document.getElementById('myDiv');

// 获取内容
console.log(div.innerHTML);

// 设置内容
div.innerHTML = '&lt;p&gt;新的 &lt;strong&gt;HTML&lt;/strong&gt; 内容&lt;/p&gt;';

// 追加内容
div.innerHTML += '&lt;p&gt;追加的内容&lt;/p&gt;';`
          },
          {
            name: 'textContent',
            description: '获取或设置元素的文本内容',
            example: `var div = document.getElementById('myDiv');

// 获取纯文本
console.log(div.textContent);

// 设置文本（HTML 标签会被转义）
div.textContent = '这是&lt;strong&gt;纯文本&lt;/strong&gt;';

// 清空内容
div.textContent = '';`
          },
          {
            name: 'setAttribute()',
            description: '设置元素属性',
            example: `var img = document.querySelector('img');

// 设置属性
img.setAttribute('src', 'new-image.jpg');
img.setAttribute('data-id', '123');

// 获取属性
var src = img.getAttribute('src');

// 检查属性
if (img.hasAttribute('alt')) {
  console.log('图片有 alt 属性');
}

// 删除属性
img.removeAttribute('data-id');`
          }
        ]
      },
      {
        name: '删除元素',
        operations: [
          {
            name: 'removeChild()',
            description: '删除子节点',
            example: `var container = document.getElementById('container');
var childToRemove = container.firstElementChild;

// 删除子节点
container.removeChild(childToRemove);`
          },
          {
            name: 'remove()',
            description: '删除元素自身（现代方法）',
            example: `var element = document.getElementById('toRemove');

// 直接删除元素
element.remove();

// 删除多个元素
var elements = document.querySelectorAll('.to-remove');
elements.forEach(function(el) {
  el.remove();
});`
          }
        ]
      }
    ]

    const eventTabs = [
      { id: 'binding', title: '事件绑定' },
      { id: 'flow', title: '事件流' },
      { id: 'types', title: '事件类型' }
    ]

    const eventBindingMethods = [
      {
        name: 'HTML 属性绑定',
        description: '直接在 HTML 元素上使用 on* 属性',
        pros: ['简单直观', '容易理解'],
        cons: ['HTML 和 JS 代码混合', '只能绑定一个事件处理程序', '难以维护'],
        example: '<!-- HTML 中 -->' + 
'<button onclick="handleClick()">点击我</button>' +
'' +
'<' + 'script>' +
'function handleClick() {' +
'  alert("按钮被点击了！");' +
'}' +
'</' + 'script>'
      },
      {
        name: 'DOM 属性绑定',
        description: '通过 JavaScript 设置元素的 on* 属性',
        pros: ['比 HTML 属性方式更好的分离', '可以动态绑定'],
        cons: ['只能绑定一个事件处理程序', '容易被覆盖'],
        example: `var button = document.getElementById('myButton');

// 绑定事件
button.onclick = function() {
  alert('按钮被点击了！');
};

// 绑定事件（箭头函数）
button.onmouseover = () => {
  console.log('鼠标悬停');
};

// 解除绑定
button.onclick = null;`
      },
      {
        name: 'addEventListener()',
        description: '标准的事件绑定方法，推荐使用',
        pros: ['可以绑定多个处理程序', '支持事件捕获', '更好的控制', '标准方法'],
        cons: ['语法稍微复杂'],
        example: `var button = document.getElementById('myButton');

// 基础用法
button.addEventListener('click', function() {
  console.log('点击事件 1');
});

// 可以添加多个处理程序
button.addEventListener('click', function() {
  console.log('点击事件 2');
});

// 使用事件对象
button.addEventListener('click', function(event) {
  console.log('目标元素:', event.target);
  event.preventDefault(); // 阻止默认行为
});

// 移除事件监听器
function handler() {
  console.log('可移除的处理程序');
}
button.addEventListener('click', handler);
button.removeEventListener('click', handler);`
      }
    ]

    const eventFlowExample = `// HTML 结构
var outer = document.getElementById('outer');
var inner = document.getElementById('inner');
var button = document.getElementById('button');

// 冒泡阶段（默认）
outer.addEventListener('click', function() {
  console.log('outer 冒泡');
});

inner.addEventListener('click', function() {
  console.log('inner 冒泡');
});

button.addEventListener('click', function() {
  console.log('button 冒泡');
});

// 捕获阶段（第三个参数为 true）
outer.addEventListener('click', function() {
  console.log('outer 捕获');
}, true);

inner.addEventListener('click', function() {
  console.log('inner 捕获');
}, true);

// 点击按钮的输出顺序：
// outer 捕获 -> inner 捕获 -> button 冒泡 -> inner 冒泡 -> outer 冒泡

// 阻止事件传播
button.addEventListener('click', function(event) {
  event.stopPropagation(); // 阻止事件继续传播
  console.log('事件传播被阻止');
});`

    const eventCategories = [
      {
        name: '鼠标事件',
        events: [
          { name: 'click', description: '鼠标点击' },
          { name: 'dblclick', description: '鼠标双击' },
          { name: 'mousedown', description: '鼠标按下' },
          { name: 'mouseup', description: '鼠标释放' },
          { name: 'mouseover', description: '鼠标移入' },
          { name: 'mouseout', description: '鼠标移出' },
          { name: 'mouseenter', description: '鼠标进入（不冒泡）' },
          { name: 'mouseleave', description: '鼠标离开（不冒泡）' },
          { name: 'mousemove', description: '鼠标移动' }
        ]
      },
      {
        name: '键盘事件',
        events: [
          { name: 'keydown', description: '键盘按下' },
          { name: 'keyup', description: '键盘释放' },
          { name: 'keypress', description: '键盘按下（已废弃）' }
        ]
      },
      {
        name: '表单事件',
        events: [
          { name: 'submit', description: '表单提交' },
          { name: 'reset', description: '表单重置' },
          { name: 'focus', description: '获得焦点' },
          { name: 'blur', description: '失去焦点' },
          { name: 'change', description: '值改变' },
          { name: 'input', description: '输入事件' },
          { name: 'select', description: '文本选择' }
        ]
      },
      {
        name: '窗口事件',
        events: [
          { name: 'load', description: '页面加载完成' },
          { name: 'unload', description: '页面卸载' },
          { name: 'resize', description: '窗口大小改变' },
          { name: 'scroll', description: '滚动事件' }
        ]
      }
    ]

    const styleOperations = [
      {
        name: '内联样式操作',
        description: '直接修改元素的 style 属性',
        example: `var element = document.getElementById('myDiv');

// 设置单个样式
element.style.color = 'red';
element.style.fontSize = '16px';
element.style.backgroundColor = 'yellow';

// 获取样式值
console.log(element.style.color); // "red"

// 设置复合属性
element.style.cssText = 'color: blue; font-size: 18px; margin: 10px;';

// 清除样式
element.style.color = '';
element.style.cssText = '';`
      },
      {
        name: 'CSS 类操作',
        description: '通过添加或移除 CSS 类来改变样式',
        example: `var element = document.getElementById('myDiv');

// className 属性
element.className = 'active highlight';
element.className += ' new-class';

// classList API（推荐）
element.classList.add('active');           // 添加类
element.classList.remove('inactive');      // 移除类
element.classList.toggle('highlight');     // 切换类
element.classList.contains('active');      // 检查是否包含类

// 一次性操作多个类
element.classList.add('class1', 'class2');
element.classList.remove('class1', 'class2');

// 替换类
element.classList.replace('old-class', 'new-class');`
      },
      {
        name: '计算样式获取',
        description: '获取元素的最终计算样式',
        example: `var element = document.getElementById('myDiv');

// 获取计算样式
var computedStyle = window.getComputedStyle(element);

// 获取特定属性
var color = computedStyle.color;
var fontSize = computedStyle.fontSize;
var display = computedStyle.display;

// 获取伪元素样式
var beforeStyle = window.getComputedStyle(element, '::before');
var beforeContent = beforeStyle.content;

console.log('颜色:', color);
console.log('字体大小:', fontSize);`
      }
    ]

    const practiceDemo = [
      { id: 'selector', title: '元素选择' },
      { id: 'manipulation', title: '元素操作' },
      { id: 'events', title: '事件处理' }
    ]

    // 演示方法
    const selectById = () => {
      const element = document.getElementById('container')
      if (element) {
        element.style.border = '2px solid red'
        selectionResult.value = '选中了 ID 为 "container" 的元素'
      }
    }

    const selectByClass = () => {
      const elements = document.getElementsByClassName('text')
      Array.from(elements).forEach(el => {
        el.style.backgroundColor = 'yellow'
      })
      selectionResult.value = `选中了 ${elements.length} 个 class 为 "text" 的元素`
    }

    const selectByTag = () => {
      const elements = document.getElementsByTagName('li')
      Array.from(elements).forEach(el => {
        el.style.color = 'blue'
      })
      selectionResult.value = `选中了 ${elements.length} 个 li 元素`
    }

    const selectByQuery = () => {
      const elements = document.querySelectorAll('[data-value]')
      elements.forEach(el => {
        el.style.fontWeight = 'bold'
      })
      selectionResult.value = `选中了 ${elements.length} 个带有 data-value 属性的元素`
    }

    const clearSelection = () => {
      const container = document.getElementById('container')
      if (container) {
        // 清除所有样式
        container.style.border = ''
        const allElements = container.querySelectorAll('*')
        allElements.forEach(el => {
          el.style.backgroundColor = ''
          el.style.color = ''
          el.style.fontWeight = ''
        })
      }
      selectionResult.value = ''
    }

    const createElement = () => {
      const container = document.getElementById('demo-container')
      const newElement = document.createElement('div')
      newElement.textContent = '新创建的元素'
      newElement.style.padding = '10px'
      newElement.style.backgroundColor = '#e3f2fd'
      newElement.style.margin = '5px 0'
      newElement.style.borderRadius = '4px'
      container.appendChild(newElement)
    }

    const modifyText = () => {
      const container = document.getElementById('demo-container')
      const firstP = container.querySelector('p')
      if (firstP) {
        firstP.textContent = '文本已被修改 - ' + new Date().toLocaleTimeString()
      }
    }

    const modifyHTML = () => {
      const container = document.getElementById('demo-container')
      const firstP = container.querySelector('p')
      if (firstP) {
        firstP.innerHTML = '这是 &lt;strong&gt;HTML&lt;/strong&gt; 内容 - &lt;em&gt;' + new Date().toLocaleTimeString() + '&lt;/em&gt;'
      }
    }

    const addAttribute = () => {
      const container = document.getElementById('demo-container')
      const firstP = container.querySelector('p')
      if (firstP) {
        firstP.setAttribute('data-timestamp', Date.now().toString())
        firstP.setAttribute('title', '这是一个提示信息')
        firstP.style.border = '1px dashed #666'
      }
    }

    const toggleClass = () => {
      const container = document.getElementById('demo-container')
      const firstP = container.querySelector('p')
      if (firstP) {
        firstP.classList.toggle('highlight')
        if (!document.querySelector('style#demo-styles')) {
          const style = document.createElement('style')
          style.id = 'demo-styles'
          style.textContent = '.highlight { background-color: yellow; padding: 5px; }'
          document.head.appendChild(style)
        }
      }
    }

    const resetDemo = () => {
      const container = document.getElementById('demo-container')
      container.innerHTML = '&lt;p&gt;这是一个测试段落&lt;/p&gt;'
    }

    let clickHandler = null
    let hoverHandler = null

    const addClickEvent = () => {
      const target = document.getElementById('event-target')
      if (target && !clickHandler) {
        clickHandler = function() {
          eventLog.value.push(`点击事件触发 - ${new Date().toLocaleTimeString()}`)
        }
        target.addEventListener('click', clickHandler)
        eventLog.value.push('点击事件已添加')
      }
    }

    const addHoverEvent = () => {
      const target = document.getElementById('event-target')
      if (target && !hoverHandler) {
        hoverHandler = function() {
          eventLog.value.push(`悬停事件触发 - ${new Date().toLocaleTimeString()}`)
        }
        target.addEventListener('mouseenter', hoverHandler)
        eventLog.value.push('悬停事件已添加')
      }
    }

    const removeEvents = () => {
      const target = document.getElementById('event-target')
      if (target) {
        if (clickHandler) {
          target.removeEventListener('click', clickHandler)
          clickHandler = null
          eventLog.value.push('点击事件已移除')
        }
        if (hoverHandler) {
          target.removeEventListener('mouseenter', hoverHandler)
          hoverHandler = null
          eventLog.value.push('悬停事件已移除')
        }
      }
    }

    const clearLog = () => {
      eventLog.value = []
    }

    onMounted(() => {
      // 组件挂载后初始化
      resetDemo()
    })

    return {
      domConcepts,
      selectorTabs,
      activeSelectorTab,
      basicSelectors,
      modernSelectors,
      traversalProperties,
      operationCategories,
      eventTabs,
      activeEventTab,
      eventBindingMethods,
      eventFlowExample,
      eventCategories,
      styleOperations,
      practiceDemo,
      activeDemoTab,
      selectionResult,
      eventLog,
      selectById,
      selectByClass,
      selectByTag,
      selectByQuery,
      clearSelection,
      createElement,
      modifyText,
      modifyHTML,
      addAttribute,
      toggleClass,
      resetDemo,
      addClickEvent,
      addHoverEvent,
      removeEvents,
      clearLog
    }
  }
}
</script>

<style scoped>
.dom-api {
  padding: 2rem;
}

.dom-api h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
}

.dom-section {
  margin-bottom: 3rem;
}

.dom-section h3 {
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f39c12;
}

.section-desc {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.concept-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.concept-card h4 {
  color: #f39c12;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.code-block {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  line-height: 1.4;
}

.selector-tabs, .event-tabs, .demo-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  border: 2px solid #f39c12;
  background: white;
  color: #f39c12;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.tab-button:hover,
.tab-button.active {
  background: #f39c12;
  color: white;
}

.selector-methods {
  display: grid;
  gap: 1.5rem;
}

.method-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.method-card h4 {
  color: #27ae60;
  margin-bottom: 0.5rem;
}

.method-signature, .method-returns {
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.traversal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.traversal-item {
  background: #f0f8ff;
  border: 1px solid #bee3f8;
  border-radius: 6px;
  padding: 1rem;
}

.traversal-item h5 {
  color: #3182ce;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.code-example {
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: #2d3748;
  background: #edf2f7;
  padding: 0.3rem;
  border-radius: 3px;
  margin-top: 0.5rem;
}

.operation-categories {
  display: grid;
  gap: 2rem;
}

.category-card {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.category-card h4 {
  color: #4a5568;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.operations-list {
  display: grid;
  gap: 1rem;
}

.operation-item {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 1rem;
}

.operation-item h5 {
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.binding-methods {
  display: grid;
  gap: 2rem;
}

.binding-method {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.binding-method h5 {
  color: #8e44ad;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1.5rem 0;
}

.pros, .cons {
  padding: 1rem;
  border-radius: 4px;
}

.pros {
  background: #d5f4e6;
  border-left: 4px solid #27ae60;
}

.cons {
  background: #fce4ec;
  border-left: 4px solid #e74c3c;
}

.pros ul, .cons ul {
  margin: 0.5rem 0 0 0;
  padding-left: 1.2rem;
}

.pros li, .cons li {
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
}

.flow-explanation {
  background: #f0f8ff;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.flow-phases {
  display: grid;
  gap: 1rem;
}

.phase {
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid;
}

.phase.capture {
  background: #fef5e7;
  border-left-color: #f6ad55;
}

.phase.target {
  background: #e6fffa;
  border-left-color: #38b2ac;
}

.phase.bubble {
  background: #ffeaa7;
  border-left-color: #fdcb6e;
}

.phase h5 {
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.event-categories {
  display: grid;
  gap: 1.5rem;
}

.event-category {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.event-category h5 {
  color: #4a5568;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.event-item {
  padding: 0.5rem;
  background: #f7fafc;
  border-radius: 4px;
  font-size: 0.9rem;
}

.event-item strong {
  color: #2d3748;
}

.style-operations {
  display: grid;
  gap: 2rem;
}

.style-operation {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.style-operation h4 {
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.practice-demo {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.demo-html {
  margin-bottom: 1.5rem;
}

.sample-html {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.sample-html .container {
  font-family: Arial, sans-serif;
}

.sample-html .highlight {
  background-color: #ffffcc;
}

.demo-controls {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.demo-controls button {
  padding: 0.5rem 1rem;
  background: #f39c12;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}

.demo-controls button:hover {
  background: #e67e22;
}

.selection-result {
  background: white;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #2c3e50;
}

.demo-area {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.demo-container {
  min-height: 100px;
  border: 2px dashed #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}

.event-demo-area {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
}

.event-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.demo-btn {
  padding: 0.5rem 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
}

.demo-btn:hover {
  background: #2980b9;
}

.event-target {
  background: #ecf0f1;
  border: 2px solid #bdc3c7;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  font-size: 1.1rem;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
}

.event-target:hover {
  background: #d5dbdb;
  border-color: #95a5a6;
}

.event-log {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 1rem;
}

.event-log h5 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.event-log ul {
  margin: 0.5rem 0 1rem 0;
  padding-left: 1.2rem;
  max-height: 200px;
  overflow-y: auto;
}

.event-log li {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.3rem;
}

.event-log button {
  padding: 0.3rem 0.8rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
}

.event-log button:hover {
  background: #c0392b;
}

@media (max-width: 768px) {
  .dom-api {
    padding: 1rem;
  }
  
  .concept-grid {
    grid-template-columns: 1fr;
  }
  
  .traversal-grid {
    grid-template-columns: 1fr;
  }
  
  .pros-cons {
    grid-template-columns: 1fr;
  }
  
  .events-grid {
    grid-template-columns: 1fr;
  }
  
  .demo-controls {
    flex-direction: column;
  }
  
  .event-buttons {
    flex-direction: column;
  }
}
</style>
