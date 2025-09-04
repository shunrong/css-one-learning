<template>
  <div class="bom-api">
    <h2>BOM API</h2>
    
    <!-- BOM 基础概念 -->
    <section class="bom-section">
      <h3>BOM 基础概念</h3>
      <p class="section-desc">BOM（Browser Object Model）提供了与浏览器窗口交互的对象和方法，是 JavaScript 在浏览器环境中的核心接口。</p>
      
      <div class="concept-overview">
        <div class="bom-hierarchy">
          <h4>BOM 对象层次结构</h4>
          <div class="hierarchy-diagram">
            <div class="level-1">
              <div class="object-box window">
                window
                <div class="level-2">
                  <div class="object-box document">document</div>
                  <div class="object-box location">location</div>
                  <div class="object-box navigator">navigator</div>
                  <div class="object-box screen">screen</div>
                  <div class="object-box history">history</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bom-description">
          <h4>主要 BOM 对象</h4>
          <ul class="bom-objects-list">
            <li><strong>window:</strong> 浏览器窗口对象，BOM 的核心</li>
            <li><strong>document:</strong> 文档对象，DOM 的入口点</li>
            <li><strong>location:</strong> 当前页面的 URL 信息</li>
            <li><strong>navigator:</strong> 浏览器信息</li>
            <li><strong>screen:</strong> 屏幕信息</li>
            <li><strong>history:</strong> 浏览历史</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Window 对象 -->
    <section class="bom-section">
      <h3>Window 对象</h3>
      <p class="section-desc">window 对象是 BOM 的核心，代表浏览器窗口，所有全局变量和函数都是 window 对象的属性和方法。</p>
      
      <div class="window-tabs">
        <button 
          v-for="tab in windowTabs" 
          :key="tab.id"
          :class="['tab-button', { active: activeWindowTab === tab.id }]"
          @click="activeWindowTab = tab.id"
        >
          {{ tab.title }}
        </button>
      </div>

      <div class="window-content">
        <div v-if="activeWindowTab === 'properties'" class="window-properties">
          <h4>Window 属性</h4>
          <div class="properties-grid">
            <div v-for="property in windowProperties" :key="property.name" class="property-card">
              <h5>{{ property.name }}</h5>
              <p>{{ property.description }}</p>
              <div class="code-block">
                <pre><code>{{ property.example }}</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeWindowTab === 'methods'" class="window-methods">
          <h4>Window 方法</h4>
          <div class="methods-grid">
            <div v-for="method in windowMethods" :key="method.name" class="method-card">
              <h5>{{ method.name }}</h5>
              <p>{{ method.description }}</p>
              <div class="code-block">
                <pre><code>{{ method.example }}</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeWindowTab === 'dialogs'" class="window-dialogs">
          <h4>对话框方法</h4>
          <div class="dialogs-info">
            <p>Window 对象提供了三种基本的对话框方法，虽然现代开发中较少使用，但了解它们仍然很重要。</p>
          </div>
          <div class="dialogs-grid">
            <div v-for="dialog in dialogMethods" :key="dialog.name" class="dialog-card">
              <h5>{{ dialog.name }}</h5>
              <p>{{ dialog.description }}</p>
              <div class="dialog-demo">
                <button @click="dialog.demo" class="demo-button">{{ dialog.buttonText }}</button>
              </div>
              <div class="code-block">
                <pre><code>{{ dialog.example }}</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeWindowTab === 'timers'" class="window-timers">
          <h4>定时器方法</h4>
          <div class="timers-explanation">
            <p>JavaScript 提供了定时执行代码的方法，这些方法是异步的，不会阻塞代码执行。</p>
          </div>
          <div class="timers-grid">
            <div v-for="timer in timerMethods" :key="timer.name" class="timer-card">
              <h5>{{ timer.name }}</h5>
              <p>{{ timer.description }}</p>
              <div class="code-block">
                <pre><code>{{ timer.example }}</code></pre>
              </div>
            </div>
          </div>
          
          <div class="timer-demo">
            <h5>定时器演示</h5>
            <div class="timer-controls">
              <button @click="startTimeout">启动 setTimeout</button>
              <button @click="startInterval">启动 setInterval</button>
              <button @click="stopTimer">停止定时器</button>
              <button @click="clearTimerLog">清除日志</button>
            </div>
            <div v-if="timerLog.length > 0" class="timer-log">
              <ul>
                <li v-for="(log, index) in timerLog" :key="index">{{ log }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location 对象 -->
    <section class="bom-section">
      <h3>Location 对象</h3>
      <p class="section-desc">location 对象包含当前页面的 URL 信息，并提供了导航到新页面的方法。</p>
      
      <div class="location-info">
        <div class="current-location">
          <h4>当前页面 URL 信息</h4>
          <div class="url-breakdown">
            <div class="url-part">
              <strong>完整 URL:</strong> {{ currentLocation.href }}
            </div>
            <div class="url-part">
              <strong>协议:</strong> {{ currentLocation.protocol }}
            </div>
            <div class="url-part">
              <strong>主机:</strong> {{ currentLocation.host }}
            </div>
            <div class="url-part">
              <strong>路径:</strong> {{ currentLocation.pathname }}
            </div>
            <div class="url-part">
              <strong>查询参数:</strong> {{ currentLocation.search }}
            </div>
            <div class="url-part">
              <strong>锚点:</strong> {{ currentLocation.hash }}
            </div>
          </div>
        </div>

        <div class="location-methods">
          <h4>Location 方法</h4>
          <div class="methods-list">
            <div v-for="method in locationMethods" :key="method.name" class="location-method">
              <h5>{{ method.name }}</h5>
              <p>{{ method.description }}</p>
              <div class="code-block">
                <pre><code>{{ method.example }}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigator 对象 -->
    <section class="bom-section">
      <h3>Navigator 对象</h3>
      <p class="section-desc">navigator 对象包含浏览器的信息，用于检测用户的浏览器类型、版本等。</p>
      
      <div class="navigator-info">
        <div class="browser-info">
          <h4>当前浏览器信息</h4>
          <div class="info-grid">
            <div class="info-item">
              <strong>用户代理:</strong>
              <div class="info-value">{{ browserInfo.userAgent }}</div>
            </div>
            <div class="info-item">
              <strong>浏览器名称:</strong>
              <div class="info-value">{{ browserInfo.appName }}</div>
            </div>
            <div class="info-item">
              <strong>浏览器版本:</strong>
              <div class="info-value">{{ browserInfo.appVersion }}</div>
            </div>
            <div class="info-item">
              <strong>平台:</strong>
              <div class="info-value">{{ browserInfo.platform }}</div>
            </div>
            <div class="info-item">
              <strong>语言:</strong>
              <div class="info-value">{{ browserInfo.language }}</div>
            </div>
            <div class="info-item">
              <strong>在线状态:</strong>
              <div class="info-value">{{ browserInfo.onLine ? '在线' : '离线' }}</div>
            </div>
          </div>
        </div>

        <div class="navigator-features">
          <h4>浏览器特性检测</h4>
          <div class="features-grid">
            <div v-for="feature in navigatorFeatures" :key="feature.name" class="feature-card">
              <h5>{{ feature.name }}</h5>
              <p>{{ feature.description }}</p>
              <div class="feature-status">
                <span :class="['status', feature.supported ? 'supported' : 'not-supported']">
                  {{ feature.supported ? '支持' : '不支持' }}
                </span>
              </div>
              <div class="code-block">
                <pre><code>{{ feature.example }}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Screen 对象 -->
    <section class="bom-section">
      <h3>Screen 对象</h3>
      <p class="section-desc">screen 对象包含用户屏幕的信息，如分辨率、颜色深度等。</p>
      
      <div class="screen-info">
        <div class="screen-properties">
          <h4>屏幕信息</h4>
          <div class="screen-grid">
            <div v-for="property in screenProperties" :key="property.name" class="screen-property">
              <h5>{{ property.name }}</h5>
              <p>{{ property.description }}</p>
              <div class="property-value">
                <strong>当前值:</strong> {{ property.value }}
              </div>
            </div>
          </div>
        </div>

        <div class="screen-demo">
          <h4>屏幕信息检测</h4>
          <div class="demo-area">
            <button @click="detectScreenInfo">检测屏幕信息</button>
            <div v-if="screenDetection" class="detection-result">
              <pre>{{ screenDetection }}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- History 对象 -->
    <section class="bom-section">
      <h3>History 对象</h3>
      <p class="section-desc">history 对象包含用户的浏览历史，提供了前进、后退等导航方法。</p>
      
      <div class="history-info">
        <div class="history-methods">
          <h4>History 方法</h4>
          <div class="history-warning">
            <p><strong>注意:</strong> 出于安全考虑，现代浏览器限制了对 history 对象的访问。以下方法在演示环境中可能受限。</p>
          </div>
          <div class="methods-grid">
            <div v-for="method in historyMethods" :key="method.name" class="history-method">
              <h5>{{ method.name }}</h5>
              <p>{{ method.description }}</p>
              <div class="code-block">
                <pre><code>{{ method.example }}</code></pre>
              </div>
            </div>
          </div>
        </div>

        <div class="history-demo">
          <h4>History API 演示</h4>
          <div class="demo-controls">
            <button @click="pushState">添加历史记录</button>
            <button @click="replaceState">替换当前记录</button>
            <button @click="goBack">后退</button>
            <button @click="goForward">前进</button>
          </div>
          <div v-if="historyLog.length > 0" class="history-log">
            <h5>历史操作日志:</h5>
            <ul>
              <li v-for="(log, index) in historyLog" :key="index">{{ log }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 实践示例 -->
    <section class="bom-section">
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
          <div v-if="activeDemoTab === 'window'" class="window-demo">
            <h4>Window 对象实践</h4>
            <div class="demo-section">
              <h5>窗口操作</h5>
              <div class="window-controls">
                <button @click="openNewWindow">打开新窗口</button>
                <button @click="closeNewWindow">关闭新窗口</button>
                <button @click="getWindowInfo">获取窗口信息</button>
              </div>
              <div v-if="windowInfo" class="window-info-result">
                <pre>{{ windowInfo }}</pre>
              </div>
            </div>
          </div>

          <div v-if="activeDemoTab === 'storage'" class="storage-demo">
            <h4>本地存储演示</h4>
            <div class="storage-section">
              <h5>localStorage</h5>
              <div class="storage-controls">
                <input v-model="storageKey" placeholder="键名">
                <input v-model="storageValue" placeholder="值">
                <button @click="setLocalStorage">存储</button>
                <button @click="getLocalStorage">获取</button>
                <button @click="removeLocalStorage">删除</button>
                <button @click="clearLocalStorage">清空</button>
              </div>
              <div v-if="storageResult" class="storage-result">
                <strong>结果:</strong> {{ storageResult }}
              </div>
            </div>

            <div class="storage-section">
              <h5>sessionStorage</h5>
              <div class="storage-controls">
                <input v-model="sessionKey" placeholder="键名">
                <input v-model="sessionValue" placeholder="值">
                <button @click="setSessionStorage">存储</button>
                <button @click="getSessionStorage">获取</button>
                <button @click="removeSessionStorage">删除</button>
                <button @click="clearSessionStorage">清空</button>
              </div>
              <div v-if="sessionResult" class="storage-result">
                <strong>结果:</strong> {{ sessionResult }}
              </div>
            </div>
          </div>

          <div v-if="activeDemoTab === 'detection'" class="detection-demo">
            <h4>浏览器检测演示</h4>
            <div class="detection-controls">
              <button @click="detectBrowser">检测浏览器类型</button>
              <button @click="detectFeatures">检测浏览器特性</button>
              <button @click="detectDevice">检测设备信息</button>
            </div>
            <div v-if="detectionResult" class="detection-result">
              <pre>{{ detectionResult }}</pre>
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
  name: 'BOMAPI',
  setup() {
    const activeWindowTab = ref('properties')
    const activeDemoTab = ref('window')
    
    // 状态数据
    const currentLocation = ref({})
    const browserInfo = ref({})
    const screenProperties = ref([])
    const timerLog = ref([])
    const historyLog = ref([])
    const windowInfo = ref('')
    const storageKey = ref('')
    const storageValue = ref('')
    const storageResult = ref('')
    const sessionKey = ref('')
    const sessionValue = ref('')
    const sessionResult = ref('')
    const screenDetection = ref('')
    const detectionResult = ref('')
    
    let newWindow = null
    let currentTimer = null

    const windowTabs = [
      { id: 'properties', title: '属性' },
      { id: 'methods', title: '方法' },
      { id: 'dialogs', title: '对话框' },
      { id: 'timers', title: '定时器' }
    ]

    const windowProperties = [
      {
        name: 'innerWidth / innerHeight',
        description: '浏览器窗口的内部宽度和高度（不包括工具栏、滚动条等）',
        example: `console.log('窗口内部宽度:', window.innerWidth);
console.log('窗口内部高度:', window.innerHeight);

// 监听窗口大小变化
window.addEventListener('resize', function() {
  console.log('新大小:', window.innerWidth, 'x', window.innerHeight);
});`
      },
      {
        name: 'outerWidth / outerHeight',
        description: '浏览器窗口的外部宽度和高度（包括工具栏、滚动条等）',
        example: `console.log('窗口外部宽度:', window.outerWidth);
console.log('窗口外部高度:', window.outerHeight);

// 计算工具栏等占用的空间
var toolbarHeight = window.outerHeight - window.innerHeight;
var scrollbarWidth = window.outerWidth - window.innerWidth;`
      },
      {
        name: 'screenX / screenY',
        description: '浏览器窗口相对于屏幕的位置',
        example: `console.log('窗口X坐标:', window.screenX);
console.log('窗口Y坐标:', window.screenY);

// 兼容性写法
var x = window.screenX || window.screenLeft;
var y = window.screenY || window.screenTop;`
      },
      {
        name: 'scrollX / scrollY',
        description: '页面滚动的水平和垂直距离',
        example: `console.log('水平滚动距离:', window.scrollX);
console.log('垂直滚动距离:', window.scrollY);

// 兼容性写法
var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;`
      }
    ]

    const windowMethods = [
      {
        name: 'scrollTo() / scroll()',
        description: '滚动到指定位置',
        example: `// 滚动到顶部
window.scrollTo(0, 0);

// 滚动到指定位置
window.scrollTo(100, 200);

// 使用选项对象（平滑滚动）
window.scrollTo({
  top: 300,
  left: 0,
  behavior: 'smooth'
});`
      },
      {
        name: 'scrollBy()',
        description: '相对当前位置滚动指定距离',
        example: `// 向下滚动 100 像素
window.scrollBy(0, 100);

// 向右滚动 50 像素
window.scrollBy(50, 0);

// 平滑滚动
window.scrollBy({
  top: 100,
  left: 0,
  behavior: 'smooth'
});`
      },
      {
        name: 'open() / close()',
        description: '打开和关闭浏览器窗口',
        example: `// 打开新窗口
var newWindow = window.open('https://example.com', '_blank', 'width=600,height=400');

// 打开新窗口并设置特性
var popup = window.open('', 'popup', 'width=300,height=200,scrollbars=yes,resizable=yes');

// 关闭窗口
newWindow.close();

// 检查窗口是否已关闭
if (newWindow.closed) {
  console.log('窗口已关闭');
}`
      },
      {
        name: 'focus() / blur()',
        description: '使窗口获得或失去焦点',
        example: `// 使当前窗口获得焦点
window.focus();

// 使窗口失去焦点
window.blur();

// 检查窗口是否有焦点
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    console.log('窗口获得焦点');
  } else {
    console.log('窗口失去焦点');
  }
});`
      }
    ]

    const dialogMethods = [
      {
        name: 'alert()',
        description: '显示警告对话框',
        buttonText: '显示警告',
        demo: () => alert('这是一个警告对话框！'),
        example: `// 显示简单的警告信息
alert('欢迎访问我们的网站！');

// 显示变量内容
var message = '操作完成';
alert(message);

// 注意：alert 会阻塞代码执行
console.log('alert 之前');
alert('这是一个警告');
console.log('alert 之后');`
      },
      {
        name: 'confirm()',
        description: '显示确认对话框，返回布尔值',
        buttonText: '显示确认',
        demo: () => {
          const result = confirm('你确定要执行这个操作吗？')
          alert(`你的选择是：${result ? '确定' : '取消'}`)
        },
        example: `// 显示确认对话框
var result = confirm('你确定要删除这个文件吗？');

if (result) {
  console.log('用户点击了确定');
  // 执行删除操作
} else {
  console.log('用户点击了取消');
  // 取消删除操作
}

// 简洁写法
if (confirm('确定要提交表单吗？')) {
  // 提交表单
  document.getElementById('form').submit();
}`
      },
      {
        name: 'prompt()',
        description: '显示输入对话框，返回用户输入的字符串',
        buttonText: '显示输入框',
        demo: () => {
          const name = prompt('请输入你的姓名：', '默认姓名')
          if (name !== null) {
            alert(`你好，${name}！`)
          } else {
            alert('你取消了输入')
          }
        },
        example: `// 显示输入对话框
var name = prompt('请输入你的姓名：');

if (name !== null && name !== '') {
  console.log('用户输入了：' + name);
} else {
  console.log('用户取消了输入或输入为空');
}

// 带默认值的输入框
var age = prompt('请输入你的年龄：', '18');

// 验证输入
var email = prompt('请输入你的邮箱：');
if (email && email.includes('@')) {
  console.log('有效的邮箱地址');
} else {
  alert('请输入有效的邮箱地址');
}`
      }
    ]

    const timerMethods = [
      {
        name: 'setTimeout()',
        description: '在指定时间后执行一次函数',
        example: `// 3秒后执行函数
setTimeout(function() {
  console.log('3秒后执行');
}, 3000);

// 使用箭头函数
setTimeout(() => {
  console.log('1秒后执行');
}, 1000);

// 传递参数
function greet(name, age) {
  console.log('Hello ' + name + ', age: ' + age);
}
setTimeout(greet, 2000, 'John', 25);

// 保存定时器ID以便取消
var timerId = setTimeout(function() {
  console.log('这可能不会执行');
}, 5000);

// 取消定时器
clearTimeout(timerId);`
      },
      {
        name: 'setInterval()',
        description: '每隔指定时间重复执行函数',
        example: `// 每秒执行一次
var intervalId = setInterval(function() {
  console.log('每秒执行一次');
}, 1000);

// 5秒后停止
setTimeout(function() {
  clearInterval(intervalId);
  console.log('定时器已停止');
}, 5000);

// 实现一个简单的计时器
var counter = 0;
var timer = setInterval(function() {
  counter++;
  console.log('计数：' + counter);
  
  if (counter >= 10) {
    clearInterval(timer);
    console.log('计时结束');
  }
}, 1000);`
      },
      {
        name: 'requestAnimationFrame()',
        description: '在下一次重绘之前执行函数，用于动画',
        example: `// 基本用法
function animate() {
  // 执行动画逻辑
  console.log('动画帧');
  
  // 继续下一帧
  requestAnimationFrame(animate);
}

// 开始动画
requestAnimationFrame(animate);

// 平滑动画示例
var element = document.getElementById('box');
var start = null;

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  
  element.style.left = Math.min(progress / 10, 200) + 'px';
  
  if (progress < 2000) {
    requestAnimationFrame(step);
  }
}

requestAnimationFrame(step);`
      }
    ]

    const locationMethods = [
      {
        name: 'assign()',
        description: '加载新的文档，会在历史记录中创建新条目',
        example: `// 导航到新页面
location.assign('https://www.example.com');

// 等价于
window.location = 'https://www.example.com';

// 相对路径
location.assign('/new-page.html');`
      },
      {
        name: 'replace()',
        description: '用新文档替换当前文档，不会在历史记录中创建新条目',
        example: `// 替换当前页面
location.replace('https://www.example.com');

// 用于重定向，用户无法回到原页面
if (userNotLoggedIn) {
  location.replace('/login.html');
}`
      },
      {
        name: 'reload()',
        description: '重新加载当前文档',
        example: `// 重新加载页面
location.reload();

// 强制从服务器重新加载（忽略缓存）
location.reload(true);

// 在事件处理程序中使用
document.getElementById('refreshBtn').addEventListener('click', function() {
  location.reload();
});`
      }
    ]

    const navigatorFeatures = ref([])

    const historyMethods = [
      {
        name: 'back()',
        description: '返回历史记录中的上一页',
        example: `// 返回上一页
history.back();

// 等价于
history.go(-1);`
      },
      {
        name: 'forward()',
        description: '前进到历史记录中的下一页',
        example: `// 前进到下一页
history.forward();

// 等价于
history.go(1);`
      },
      {
        name: 'go()',
        description: '前进或后退指定数量的页面',
        example: `// 后退两页
history.go(-2);

// 前进三页
history.go(3);

// 刷新当前页面
history.go(0);`
      },
      {
        name: 'pushState()',
        description: 'HTML5 API，向历史记录添加新状态',
        example: `// 添加新的历史记录条目
history.pushState({page: 1}, 'Title', '/page-1');

// 监听状态变化
window.addEventListener('popstate', function(event) {
  console.log('状态：', event.state);
});`
      },
      {
        name: 'replaceState()',
        description: 'HTML5 API，替换当前历史记录状态',
        example: `// 替换当前历史记录
history.replaceState({page: 2}, 'New Title', '/page-2');

// 更新URL而不刷新页面
history.replaceState(null, null, '?tab=settings');`
      }
    ]

    const practiceDemo = [
      { id: 'window', title: 'Window 对象' },
      { id: 'storage', title: '本地存储' },
      { id: 'detection', title: '浏览器检测' }
    ]

    // 方法实现
    const startTimeout = () => {
      timerLog.value.push(`${new Date().toLocaleTimeString()}: 启动 setTimeout (3秒后执行)`)
      setTimeout(() => {
        timerLog.value.push(`${new Date().toLocaleTimeString()}: setTimeout 执行完成`)
      }, 3000)
    }

    const startInterval = () => {
      if (currentTimer) {
        clearInterval(currentTimer)
      }
      timerLog.value.push(`${new Date().toLocaleTimeString()}: 启动 setInterval (每秒执行)`)
      let count = 0
      currentTimer = setInterval(() => {
        count++
        timerLog.value.push(`${new Date().toLocaleTimeString()}: setInterval 执行第 ${count} 次`)
        if (count >= 5) {
          clearInterval(currentTimer)
          currentTimer = null
          timerLog.value.push(`${new Date().toLocaleTimeString()}: setInterval 自动停止`)
        }
      }, 1000)
    }

    const stopTimer = () => {
      if (currentTimer) {
        clearInterval(currentTimer)
        currentTimer = null
        timerLog.value.push(`${new Date().toLocaleTimeString()}: 手动停止定时器`)
      }
    }

    const clearTimerLog = () => {
      timerLog.value = []
    }

    const openNewWindow = () => {
      newWindow = window.open('', '_blank', 'width=400,height=300,scrollbars=yes,resizable=yes')
      if (newWindow) {
        newWindow.document.write('<h1>这是一个新窗口</h1><p>由 JavaScript 打开</p>')
        windowInfo.value = '新窗口已打开'
      } else {
        windowInfo.value = '新窗口打开失败（可能被浏览器阻止）'
      }
    }

    const closeNewWindow = () => {
      if (newWindow && !newWindow.closed) {
        newWindow.close()
        windowInfo.value = '新窗口已关闭'
      } else {
        windowInfo.value = '没有可关闭的窗口'
      }
    }

    const getWindowInfo = () => {
      windowInfo.value = `窗口信息：
内部尺寸: ${window.innerWidth} x ${window.innerHeight}
外部尺寸: ${window.outerWidth} x ${window.outerHeight}
屏幕位置: (${window.screenX}, ${window.screenY})
滚动位置: (${window.scrollX}, ${window.scrollY})`
    }

    const setLocalStorage = () => {
      if (storageKey.value) {
        localStorage.setItem(storageKey.value, storageValue.value)
        storageResult.value = `已存储：${storageKey.value} = ${storageValue.value}`
      }
    }

    const getLocalStorage = () => {
      if (storageKey.value) {
        const value = localStorage.getItem(storageKey.value)
        storageResult.value = value !== null ? `获取到：${value}` : '未找到该键'
      }
    }

    const removeLocalStorage = () => {
      if (storageKey.value) {
        localStorage.removeItem(storageKey.value)
        storageResult.value = `已删除：${storageKey.value}`
      }
    }

    const clearLocalStorage = () => {
      localStorage.clear()
      storageResult.value = '已清空 localStorage'
    }

    const setSessionStorage = () => {
      if (sessionKey.value) {
        sessionStorage.setItem(sessionKey.value, sessionValue.value)
        sessionResult.value = `已存储：${sessionKey.value} = ${sessionValue.value}`
      }
    }

    const getSessionStorage = () => {
      if (sessionKey.value) {
        const value = sessionStorage.getItem(sessionKey.value)
        sessionResult.value = value !== null ? `获取到：${value}` : '未找到该键'
      }
    }

    const removeSessionStorage = () => {
      if (sessionKey.value) {
        sessionStorage.removeItem(sessionKey.value)
        sessionResult.value = `已删除：${sessionKey.value}`
      }
    }

    const clearSessionStorage = () => {
      sessionStorage.clear()
      sessionResult.value = '已清空 sessionStorage'
    }

    const detectScreenInfo = () => {
      screenDetection.value = `屏幕检测结果：
总分辨率: ${screen.width} x ${screen.height}
可用分辨率: ${screen.availWidth} x ${screen.availHeight}
颜色深度: ${screen.colorDepth} 位
像素深度: ${screen.pixelDepth} 位`
    }

    const pushState = () => {
      const state = { demo: Date.now() }
      const title = 'Demo State'
      const url = `#demo-${Date.now()}`
      history.pushState(state, title, url)
      historyLog.value.push(`添加历史记录：${url}`)
    }

    const replaceState = () => {
      const state = { demo: 'replaced' }
      const title = 'Replaced State'
      const url = `#replaced-${Date.now()}`
      history.replaceState(state, title, url)
      historyLog.value.push(`替换历史记录：${url}`)
    }

    const goBack = () => {
      history.back()
      historyLog.value.push('执行后退操作')
    }

    const goForward = () => {
      history.forward()
      historyLog.value.push('执行前进操作')
    }

    const detectBrowser = () => {
      const ua = navigator.userAgent
      let browser = 'Unknown'
      
      if (ua.includes('Chrome')) browser = 'Chrome'
      else if (ua.includes('Firefox')) browser = 'Firefox'
      else if (ua.includes('Safari')) browser = 'Safari'
      else if (ua.includes('Edge')) browser = 'Edge'
      
      detectionResult.value = `浏览器检测结果：
浏览器类型: ${browser}
用户代理: ${ua}`
    }

    const detectFeatures = () => {
      const features = {
        'localStorage': 'localStorage' in window,
        'sessionStorage': 'sessionStorage' in window,
        'geolocation': 'geolocation' in navigator,
        'webGL': 'webkitGetUserMedia' in navigator,
        'webRTC': 'getUserMedia' in navigator,
        'serviceWorker': 'serviceWorker' in navigator
      }
      
      detectionResult.value = '浏览器特性检测：\n' + 
        Object.entries(features)
          .map(([key, value]) => `${key}: ${value ? '支持' : '不支持'}`)
          .join('\n')
    }

    const detectDevice = () => {
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const isTablet = /iPad|Android(?!.*Mobile)/i.test(navigator.userAgent)
      
      detectionResult.value = `设备检测结果：
设备类型: ${isMobile ? (isTablet ? '平板' : '手机') : '桌面'}
平台: ${navigator.platform}
语言: ${navigator.language}
在线状态: ${navigator.onLine ? '在线' : '离线'}
CPU 核心数: ${navigator.hardwareConcurrency || '未知'}`
    }

    onMounted(() => {
      // 获取当前位置信息
      currentLocation.value = {
        href: window.location.href,
        protocol: window.location.protocol,
        host: window.location.host,
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash
      }

      // 获取浏览器信息
      browserInfo.value = {
        userAgent: navigator.userAgent,
        appName: navigator.appName,
        appVersion: navigator.appVersion,
        platform: navigator.platform,
        language: navigator.language,
        onLine: navigator.onLine
      }

      // 屏幕属性
      screenProperties.value = [
        {
          name: 'width / height',
          description: '屏幕的总宽度和高度',
          value: `${screen.width} x ${screen.height}`
        },
        {
          name: 'availWidth / availHeight',
          description: '屏幕的可用宽度和高度（排除系统任务栏等）',
          value: `${screen.availWidth} x ${screen.availHeight}`
        },
        {
          name: 'colorDepth',
          description: '屏幕的颜色深度',
          value: `${screen.colorDepth} 位`
        },
        {
          name: 'pixelDepth',
          description: '屏幕的像素深度',
          value: `${screen.pixelDepth} 位`
        }
      ]

      // 检测浏览器特性
      navigatorFeatures.value = [
        {
          name: 'localStorage',
          description: '本地存储支持',
          supported: 'localStorage' in window,
          example: 'localStorage.setItem("key", "value");'
        },
        {
          name: 'geolocation',
          description: '地理位置支持',
          supported: 'geolocation' in navigator,
          example: 'navigator.geolocation.getCurrentPosition();'
        },
        {
          name: 'serviceWorker',
          description: 'Service Worker 支持',
          supported: 'serviceWorker' in navigator,
          example: 'navigator.serviceWorker.register();'
        },
        {
          name: 'webRTC',
          description: 'WebRTC 支持',
          supported: 'mediaDevices' in navigator,
          example: 'navigator.mediaDevices.getUserMedia();'
        }
      ]
    })

    return {
      activeWindowTab,
      activeDemoTab,
      windowTabs,
      windowProperties,
      windowMethods,
      dialogMethods,
      timerMethods,
      currentLocation,
      locationMethods,
      browserInfo,
      navigatorFeatures,
      screenProperties,
      historyMethods,
      practiceDemo,
      timerLog,
      historyLog,
      windowInfo,
      storageKey,
      storageValue,
      storageResult,
      sessionKey,
      sessionValue,
      sessionResult,
      screenDetection,
      detectionResult,
      startTimeout,
      startInterval,
      stopTimer,
      clearTimerLog,
      openNewWindow,
      closeNewWindow,
      getWindowInfo,
      setLocalStorage,
      getLocalStorage,
      removeLocalStorage,
      clearLocalStorage,
      setSessionStorage,
      getSessionStorage,
      removeSessionStorage,
      clearSessionStorage,
      detectScreenInfo,
      pushState,
      replaceState,
      goBack,
      goForward,
      detectBrowser,
      detectFeatures,
      detectDevice
    }
  }
}
</script>

<style scoped>
.bom-api {
  padding: 2rem;
}

.bom-api h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
}

.bom-section {
  margin-bottom: 3rem;
}

.bom-section h3 {
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #16a085;
}

.section-desc {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.concept-overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.bom-hierarchy {
  background: #f0f8ff;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.hierarchy-diagram {
  margin-top: 1rem;
}

.object-box {
  background: white;
  border: 2px solid #3498db;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  text-align: center;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
}

.object-box.window {
  background: #3498db;
  color: white;
}

.level-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
}

.level-2 .object-box {
  font-size: 0.9rem;
  padding: 0.3rem 0.6rem;
}

.bom-description {
  background: #e8f5e8;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
}

.bom-objects-list {
  margin: 1rem 0 0 0;
  padding-left: 1.2rem;
}

.bom-objects-list li {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.window-tabs, .demo-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  border: 2px solid #16a085;
  background: white;
  color: #16a085;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.tab-button:hover,
.tab-button.active {
  background: #16a085;
  color: white;
}

.properties-grid, .methods-grid, .dialogs-grid, .timers-grid {
  display: grid;
  gap: 1.5rem;
}

.property-card, .method-card, .dialog-card, .timer-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.property-card h5, .method-card h5, .dialog-card h5, .timer-card h5 {
  color: #16a085;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
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

.dialog-demo {
  margin: 1rem 0;
}

.demo-button {
  padding: 0.5rem 1rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
}

.demo-button:hover {
  background: #c0392b;
}

.timer-demo {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  margin-top: 2rem;
}

.timer-controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.timer-controls button {
  padding: 0.5rem 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

.timer-controls button:hover {
  background: #2980b9;
}

.timer-log {
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
  max-height: 200px;
  overflow-y: auto;
}

.timer-log ul {
  margin: 0;
  padding-left: 1.2rem;
}

.timer-log li {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.3rem;
}

.location-info {
  display: grid;
  gap: 2rem;
}

.current-location {
  background: #f0f8ff;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.url-breakdown {
  margin-top: 1rem;
}

.url-part {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.methods-list {
  display: grid;
  gap: 1.5rem;
}

.location-method {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
}

.location-method h5 {
  color: #8e44ad;
  margin-bottom: 0.5rem;
}

.navigator-info {
  display: grid;
  gap: 2rem;
}

.browser-info {
  background: #e8f5e8;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
}

.info-grid {
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
}

.info-item {
  background: white;
  padding: 1rem;
  border-radius: 4px;
}

.info-value {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #555;
  margin-top: 0.5rem;
  word-break: break-all;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
}

.feature-card h5 {
  color: #e67e22;
  margin-bottom: 0.5rem;
}

.feature-status {
  margin: 1rem 0;
}

.status {
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
}

.status.supported {
  background: #d5f4e6;
  color: #27ae60;
}

.status.not-supported {
  background: #fce4ec;
  color: #e74c3c;
}

.screen-info {
  display: grid;
  gap: 2rem;
}

.screen-properties {
  background: #fff5f5;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
}

.screen-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.screen-property {
  background: white;
  padding: 1rem;
  border-radius: 4px;
}

.screen-property h5 {
  color: #e74c3c;
  margin-bottom: 0.5rem;
}

.property-value {
  margin-top: 0.5rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #555;
}

.screen-demo {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
}

.demo-area {
  margin-top: 1rem;
}

.demo-area button {
  padding: 0.5rem 1rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 1rem;
}

.demo-area button:hover {
  background: #c0392b;
}

.detection-result {
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
}

.detection-result pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #2c3e50;
}

.history-info {
  display: grid;
  gap: 2rem;
}

.history-warning {
  background: #fff9c4;
  border: 1px solid #f6d55c;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
  color: #8b6914;
}

.history-method {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
}

.history-method h5 {
  color: #9b59b6;
  margin-bottom: 0.5rem;
}

.history-demo {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
}

.demo-controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.demo-controls button {
  padding: 0.5rem 1rem;
  background: #9b59b6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

.demo-controls button:hover {
  background: #8e44ad;
}

.history-log {
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 1rem;
}

.history-log ul {
  margin: 0.5rem 0 0 0;
  padding-left: 1.2rem;
}

.history-log li {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.3rem;
}

.practice-demo {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.window-controls, .storage-controls, .detection-controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.storage-controls input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.storage-controls button, .window-controls button, .detection-controls button {
  padding: 0.5rem 1rem;
  background: #16a085;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

.storage-controls button:hover, .window-controls button:hover, .detection-controls button:hover {
  background: #138d75;
}

.storage-section {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid #ddd;
}

.storage-section h5 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.storage-result, .window-info-result {
  background: #e8f5e8;
  border: 1px solid #27ae60;
  border-radius: 4px;
  padding: 1rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  color: #155724;
  margin-top: 1rem;
}

.window-info-result pre {
  margin: 0;
  white-space: pre-wrap;
}

@media (max-width: 768px) {
  .bom-api {
    padding: 1rem;
  }
  
  .concept-overview {
    grid-template-columns: 1fr;
  }
  
  .level-2 {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .screen-grid {
    grid-template-columns: 1fr;
  }
  
  .storage-controls, .window-controls, .detection-controls {
    flex-direction: column;
  }
  
  .timer-controls, .demo-controls {
    flex-direction: column;
  }
}
</style>
