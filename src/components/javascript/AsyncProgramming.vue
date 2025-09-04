<template>
  <div class="async-programming p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">异步编程</h1>
      
      <div class="prose prose-lg max-w-none">
        <p class="text-gray-600 mb-8">
          异步编程是JavaScript的核心特性之一，让我们能够处理耗时操作而不阻塞主线程。
        </p>

        <!-- Promise基础 -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">Promise基础</h2>
          
          <div class="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 class="text-lg font-medium mb-3">Promise状态</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-white p-4 rounded border">
                <div class="text-blue-600 font-semibold">Pending</div>
                <div class="text-sm text-gray-600">等待中</div>
              </div>
              <div class="bg-white p-4 rounded border">
                <div class="text-green-600 font-semibold">Fulfilled</div>
                <div class="text-sm text-gray-600">已成功</div>
              </div>
              <div class="bg-white p-4 rounded border">
                <div class="text-red-600 font-semibold">Rejected</div>
                <div class="text-sm text-gray-600">已失败</div>
              </div>
            </div>
          </div>

          <div class="code-example">
            <h4 class="text-md font-medium mb-2">创建Promise</h4>
            <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>// 基础Promise创建
const myPromise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  
  setTimeout(() => {
    if (success) {
      resolve('操作成功!');
    } else {
      reject(new Error('操作失败!'));
    }
  }, 1000);
});

// 使用Promise
myPromise
  .then(result => {
    console.log('成功:', result);
  })
  .catch(error => {
    console.log('失败:', error.message);
  })
  .finally(() => {
    console.log('Promise执行完成');
  });</code></pre>
          </div>
        </section>

        <!-- async/await -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">async/await语法</h2>
          
          <div class="code-example">
            <h4 class="text-md font-medium mb-2">async函数</h4>
            <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code>// async函数自动返回Promise
async function fetchUserData(userId) {
  try {
    // 模拟API调用
    const response = await fetch(`/api/users/${userId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const userData = await response.json();
    console.log('用户数据:', userData);
    return userData;
    
  } catch (error) {
    console.error('获取用户数据失败:', error);
    throw error; // 重新抛出错误
  }
}

// 使用async函数
async function main() {
  try {
    const user = await fetchUserData(123);
    console.log('获取到用户:', user.name);
  } catch (error) {
    console.log('处理错误:', error.message);
  }
}</code></pre>
          </div>
        </section>

        <!-- 并发处理 -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">并发处理</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="code-example">
              <h4 class="text-md font-medium mb-2">Promise.all - 全部成功</h4>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>// 并行执行多个异步操作
const promises = [
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
];

try {
  const [users, posts, comments] = 
    await Promise.all(promises);
  
  console.log('所有数据加载完成');
} catch (error) {
  console.log('至少一个请求失败:', error);
}</code></pre>
            </div>

            <div class="code-example">
              <h4 class="text-md font-medium mb-2">Promise.allSettled - 获取所有结果</h4>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>// 等待所有Promise完成，无论成功失败
const results = await Promise.allSettled([
  fetch('/api/users'),
  fetch('/api/posts'),
  Promise.reject('某个操作失败')
]);

results.forEach((result, index) => {
  if (result.status === 'fulfilled') {
    console.log(`请求${index}成功:`, result.value);
  } else {
    console.log(`请求${index}失败:`, result.reason);
  }
});</code></pre>
            </div>
          </div>
        </section>

        <!-- 最佳实践 -->
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">最佳实践</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 class="text-green-800 font-semibold mb-2">✅ 推荐做法</h4>
              <ul class="text-green-700 text-sm space-y-1">
                <li>• 优先使用async/await而非.then()</li>
                <li>• 使用try/catch处理错误</li>
                <li>• 合理使用Promise.all提高并发性</li>
                <li>• 避免在循环中使用await</li>
                <li>• 为异步操作设置超时</li>
              </ul>
            </div>
            
            <div class="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 class="text-red-800 font-semibold mb-2">❌ 避免做法</h4>
              <ul class="text-red-700 text-sm space-y-1">
                <li>• 忘记处理Promise错误</li>
                <li>• 不必要的await串行执行</li>
                <li>• 在非async函数中使用await</li>
                <li>• 混用Promise和callback</li>
                <li>• 忽略Promise的返回值</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsyncProgramming',
  mounted() {
    // 页面加载完成后的初始化
    console.log('异步编程页面已加载');
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
