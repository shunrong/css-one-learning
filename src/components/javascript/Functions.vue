<template>
  <div class="functions">
    <h2>JavaScript 函数</h2>
    
    <!-- 函数声明方式 -->
    <section class="function-section">
      <h3>函数声明方式</h3>
      <p class="section-desc">JavaScript 中有多种定义函数的方式，每种方式都有其特点和使用场景。</p>
      
      <div class="declaration-grid">
        <div v-for="declaration in functionDeclarations" :key="declaration.name" class="declaration-card">
          <h4>{{ declaration.name }}</h4>
          <p>{{ declaration.description }}</p>
          <div class="code-block">
            <pre><code>{{ declaration.example }}</code></pre>
          </div>
          <div class="features">
            <div class="feature-item">
              <strong>提升：</strong>{{ declaration.hoisting }}
            </div>
            <div class="feature-item">
              <strong>this 绑定：</strong>{{ declaration.thisBinding }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 作用域 -->
    <section class="function-section">
      <h3>作用域与作用域链</h3>
      <p class="section-desc">作用域决定了变量的可访问性，JavaScript 使用词法作用域（静态作用域）。</p>
      
      <div class="scope-tabs">
        <button 
          v-for="tab in scopeTabs" 
          :key="tab.id"
          :class="['tab-button', { active: activeScopeTab === tab.id }]"
          @click="activeScopeTab = tab.id"
        >
          {{ tab.title }}
        </button>
      </div>

      <div class="scope-content">
        <div v-if="activeScopeTab === 'types'" class="scope-types">
          <div v-for="scope in scopeTypes" :key="scope.name" class="scope-card">
            <h4>{{ scope.name }}</h4>
            <p>{{ scope.description }}</p>
            <div class="code-block">
              <pre><code>{{ scope.example }}</code></pre>
            </div>
          </div>
        </div>

        <div v-if="activeScopeTab === 'chain'" class="scope-chain">
          <h4>作用域链的工作原理</h4>
          <p>当访问一个变量时，JavaScript 引擎会按照作用域链进行查找：</p>
          <ol class="chain-steps">
            <li>首先在当前作用域查找</li>
            <li>如果没找到，向上一级作用域查找</li>
            <li>继续向上查找，直到全局作用域</li>
            <li>如果全局作用域也没有，抛出 ReferenceError</li>
          </ol>
          <div class="code-block">
            <pre><code>{{ scopeChainExample }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 闭包 -->
    <section class="function-section">
      <h3>闭包（Closure）</h3>
      <p class="section-desc">闭包是 JavaScript 的核心概念，指函数可以访问其外部作用域的变量，即使外部函数已经执行完毕。</p>
      
      <div class="closure-explanation">
        <div class="closure-definition">
          <h4>什么是闭包？</h4>
          <p>闭包 = 函数 + 函数能够访问的自由变量</p>
          <div class="closure-benefits">
            <h5>闭包的作用：</h5>
            <ul>
              <li>数据私有化和封装</li>
              <li>模块化编程</li>
              <li>回调函数中保持状态</li>
              <li>函数柯里化</li>
            </ul>
          </div>
        </div>

        <div class="closure-examples">
          <div v-for="example in closureExamples" :key="example.title" class="closure-example">
            <h4>{{ example.title }}</h4>
            <p>{{ example.description }}</p>
            <div class="code-block">
              <pre><code>{{ example.code }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- this 指向 -->
    <section class="function-section">
      <h3>this 指向</h3>
      <p class="section-desc">this 的值在函数被调用时确定，取决于函数的调用方式。</p>
      
      <div class="this-scenarios">
        <div v-for="scenario in thisScenarios" :key="scenario.name" class="this-card">
          <h4>{{ scenario.name }}</h4>
          <p>{{ scenario.description }}</p>
          <div class="code-block">
            <pre><code>{{ scenario.example }}</code></pre>
          </div>
          <div class="this-result">
            <strong>this 指向：</strong>{{ scenario.result }}
          </div>
        </div>
      </div>

      <div class="this-binding-methods">
        <h4>改变 this 指向的方法</h4>
        <div class="binding-methods">
          <div v-for="method in bindingMethods" :key="method.name" class="binding-method">
            <h5>{{ method.name }}</h5>
            <p>{{ method.description }}</p>
            <div class="code-block">
              <pre><code>{{ method.example }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 高阶函数 -->
    <section class="function-section">
      <h3>高阶函数</h3>
      <p class="section-desc">高阶函数是接受函数作为参数或返回函数的函数，是函数式编程的基础。</p>
      
      <div class="higher-order-examples">
        <div v-for="example in higherOrderExamples" :key="example.name" class="hof-example">
          <h4>{{ example.name }}</h4>
          <p>{{ example.description }}</p>
          <div class="code-block">
            <pre><code>{{ example.code }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 实践练习 -->
    <section class="function-section">
      <h3>实践练习</h3>
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
          <div v-if="activeDemoTab === 'closure'" class="closure-demo">
            <h4>闭包计数器</h4>
            <div class="counter-demo">
              <button @click="increment">计数 +1</button>
              <button @click="decrement">计数 -1</button>
              <button @click="reset">重置</button>
              <div class="counter-display">当前计数：{{ counter }}</div>
            </div>
            <div class="demo-explanation">
              <p>这个计数器使用闭包来保持私有状态，外部无法直接访问计数变量。</p>
            </div>
          </div>

          <div v-if="activeDemoTab === 'this'" class="this-demo">
            <h4>this 指向测试</h4>
            <div class="this-test">
              <button @click="testThis">测试 this 指向</button>
              <div v-if="thisTestResult" class="test-result">
                <pre>{{ thisTestResult }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Functions',
  setup() {
    const activeScopeTab = ref('types')
    const activeDemoTab = ref('closure')
    const counter = ref(0)
    const thisTestResult = ref('')

    // 创建闭包计数器
    const createCounter = () => {
      let count = 0
      return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => { count = 0; return count },
        getCount: () => count
      }
    }

    const counterInstance = createCounter()

    const increment = () => {
      counterInstance.increment()
      counter.value = counterInstance.getCount()
    }

    const decrement = () => {
      counterInstance.decrement()
      counter.value = counterInstance.getCount()
    }

    const reset = () => {
      counterInstance.reset()
      counter.value = counterInstance.getCount()
    }

    const testThis = () => {
      const obj = {
        name: '对象方法',
        regular: function() {
          return `regular function this: ${this.name}`
        },
        arrow: () => {
          return `arrow function this: ${this.name}`
        }
      }

      thisTestResult.value = `${obj.regular()}\n${obj.arrow()}`
    }

    const functionDeclarations = [
      {
        name: '函数声明',
        description: '使用 function 关键字声明的函数，会被提升到作用域顶部',
        hoisting: '完全提升',
        thisBinding: '动态绑定',
        example: `// 函数声明
function sayHello(name) {
  return "Hello, " + name;
}

// 可以在声明前调用
console.log(sayHello("张三")); // 正常执行`
      },
      {
        name: '函数表达式',
        description: '将函数赋值给变量，函数不会被提升',
        hoisting: '变量提升，函数不提升',
        thisBinding: '动态绑定',
        example: `// 函数表达式
var sayHi = function(name) {
  return "Hi, " + name;
};

// 命名函数表达式
var sayBye = function goodbye(name) {
  return "Bye, " + name;
};`
      },
      {
        name: '箭头函数',
        description: 'ES6 新增的简洁函数语法，没有自己的 this',
        hoisting: '不提升',
        thisBinding: '词法绑定',
        example: `// 箭头函数
const add = (a, b) => a + b;

// 多行箭头函数
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

// 无参数
const greet = () => "Hello World!";`
      },
      {
        name: '立即执行函数',
        description: '定义后立即执行的函数，常用于创建独立作用域',
        hoisting: '不适用',
        thisBinding: '取决于调用方式',
        example: `// IIFE - 立即执行函数表达式
(function() {
  console.log("立即执行");
})();

// 带参数的 IIFE
(function(name) {
  console.log("Hello, " + name);
})("世界");

// 箭头函数 IIFE
(() => {
  console.log("箭头函数 IIFE");
})();`
      }
    ]

    const scopeTabs = [
      { id: 'types', title: '作用域类型' },
      { id: 'chain', title: '作用域链' }
    ]

    const scopeTypes = [
      {
        name: '全局作用域',
        description: '在任何函数外部声明的变量都属于全局作用域',
        example: `var globalVar = "全局变量";
let globalLet = "全局 let";
const globalConst = "全局常量";

function test() {
  console.log(globalVar); // 可以访问
  console.log(globalLet); // 可以访问
  console.log(globalConst); // 可以访问
}`
      },
      {
        name: '函数作用域',
        description: '在函数内部声明的变量只在该函数内可见',
        example: `function outer() {
  var functionVar = "函数变量";
  
  function inner() {
    console.log(functionVar); // 可以访问
  }
  
  inner();
}

outer();
// console.log(functionVar); // 错误：未定义`
      },
      {
        name: '块级作用域',
        description: 'let 和 const 声明的变量具有块级作用域',
        example: `if (true) {
  var varVariable = "var 变量";
  let letVariable = "let 变量";
  const constVariable = "const 变量";
}

console.log(varVariable); // 可以访问
// console.log(letVariable); // 错误：未定义
// console.log(constVariable); // 错误：未定义`
      }
    ]

    const scopeChainExample = `var a = "全局 a";

function outer() {
  var b = "outer b";
  
  function inner() {
    var c = "inner c";
    
    // 访问变量时的查找顺序：
    console.log(c); // 1. 当前作用域找到 c
    console.log(b); // 2. 上级作用域找到 b
    console.log(a); // 3. 全局作用域找到 a
    // console.log(d); // 4. 所有作用域都没有，报错
  }
  
  inner();
}

outer();`

    const closureExamples = [
      {
        title: '基础闭包示例',
        description: '内部函数访问外部函数的变量',
        code: `function outerFunction(x) {
  // 外部函数的变量
  var outerVariable = x;
  
  // 内部函数（闭包）
  function innerFunction(y) {
    console.log(outerVariable + y);
  }
  
  return innerFunction;
}

var closure = outerFunction(10);
closure(5); // 输出：15`
      },
      {
        title: '计数器闭包',
        description: '使用闭包创建私有变量',
        code: `function createCounter() {
  var count = 0; // 私有变量
  
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}

var counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2`
      },
      {
        title: '模块模式',
        description: '使用闭包实现模块化',
        code: `var myModule = (function() {
  var privateVariable = "私有变量";
  var privateMethod = function() {
    console.log("私有方法");
  };
  
  return {
    publicVariable: "公有变量",
    publicMethod: function() {
      console.log("公有方法");
      privateMethod(); // 可以访问私有方法
    },
    getPrivate: function() {
      return privateVariable;
    }
  };
})();

myModule.publicMethod(); // 可以调用
console.log(myModule.getPrivate()); // 可以访问私有变量`
      }
    ]

    const thisScenarios = [
      {
        name: '全局环境',
        description: '在全局环境中，this 指向全局对象',
        result: '浏览器中指向 window，Node.js 中指向 global',
        example: `console.log(this); // 浏览器中是 window

function globalFunction() {
  console.log(this); // 非严格模式下是 window
}

globalFunction();`
      },
      {
        name: '对象方法',
        description: '作为对象方法调用时，this 指向该对象',
        result: '调用该方法的对象',
        example: `var obj = {
  name: "张三",
  sayName: function() {
    console.log(this.name); // this 指向 obj
  }
};

obj.sayName(); // 输出：张三`
      },
      {
        name: '构造函数',
        description: '用 new 调用函数时，this 指向新创建的对象',
        result: '新创建的实例对象',
        example: `function Person(name) {
  this.name = name; // this 指向新实例
  this.sayHello = function() {
    console.log("Hello, " + this.name);
  };
}

var person = new Person("李四");
person.sayHello(); // Hello, 李四`
      },
      {
        name: '箭头函数',
        description: '箭头函数没有自己的 this，继承外层作用域的 this',
        result: '外层作用域的 this',
        example: `var obj = {
  name: "王五",
  regular: function() {
    console.log(this.name); // obj
    
    var arrow = () => {
      console.log(this.name); // 继承外层的 this，还是 obj
    };
    
    arrow();
  }
};

obj.regular();`
      }
    ]

    const bindingMethods = [
      {
        name: 'call()',
        description: '立即调用函数，第一个参数是 this 值，后续参数逐个传递',
        example: `function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

var person = { name: "张三" };

greet.call(person, "你好", "!"); // 你好, 张三!`
      },
      {
        name: 'apply()',
        description: '立即调用函数，第一个参数是 this 值，第二个参数是参数数组',
        example: `function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

var person = { name: "李四" };

greet.apply(person, ["你好", "!"]); // 你好, 李四!`
      },
      {
        name: 'bind()',
        description: '返回一个新函数，this 被永久绑定到指定值',
        example: `function greet() {
  console.log("Hello, " + this.name);
}

var person = { name: "王五" };
var boundGreet = greet.bind(person);

boundGreet(); // Hello, 王五

// 即使通过其他对象调用，this 仍然是 person
var other = { name: "赵六" };
other.greet = boundGreet;
other.greet(); // Hello, 王五 (不是赵六)`
      }
    ]

    const higherOrderExamples = [
      {
        name: '接受函数作为参数',
        description: '将函数作为参数传递给其他函数',
        code: `// 数组的 map、filter、reduce 都是高阶函数
var numbers = [1, 2, 3, 4, 5];

var doubled = numbers.map(function(num) {
  return num * 2;
});

var evens = numbers.filter(function(num) {
  return num % 2 === 0;
});

// 自定义高阶函数
function operate(a, b, operation) {
  return operation(a, b);
}

var result = operate(5, 3, function(x, y) {
  return x + y;
}); // 8`
      },
      {
        name: '返回函数',
        description: '函数返回另一个函数',
        code: `// 函数工厂
function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier;
  };
}

var double = createMultiplier(2);
var triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// 柯里化
function curry(fn) {
  return function(a) {
    return function(b) {
      return fn(a, b);
    };
  };
}

var add = function(a, b) { return a + b; };
var curriedAdd = curry(add);
var add5 = curriedAdd(5);
console.log(add5(3)); // 8`
      }
    ]

    const practiceDemo = [
      { id: 'closure', title: '闭包计数器' },
      { id: 'this', title: 'this 指向' }
    ]

    // 初始化计数器
    counter.value = counterInstance.getCount()

    return {
      functionDeclarations,
      scopeTabs,
      activeScopeTab,
      scopeTypes,
      scopeChainExample,
      closureExamples,
      thisScenarios,
      bindingMethods,
      higherOrderExamples,
      practiceDemo,
      activeDemoTab,
      counter,
      increment,
      decrement,
      reset,
      thisTestResult,
      testThis
    }
  }
}
</script>

<style scoped>
.functions {
  padding: 2rem;
}

.functions h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
}

.function-section {
  margin-bottom: 3rem;
}

.function-section h3 {
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e74c3c;
}

.section-desc {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.declaration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.declaration-card {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.declaration-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.declaration-card h4 {
  color: #e74c3c;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.features {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
}

.feature-item {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
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

.scope-tabs, .demo-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  border: 2px solid #e74c3c;
  background: white;
  color: #e74c3c;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.tab-button:hover,
.tab-button.active {
  background: #e74c3c;
  color: white;
}

.scope-types {
  display: grid;
  gap: 1.5rem;
}

.scope-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.scope-card h4 {
  color: #27ae60;
  margin-bottom: 0.5rem;
}

.chain-steps {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
  margin: 1rem 0;
}

.chain-steps li {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.closure-explanation {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.closure-definition {
  background: #e8f5e8;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
}

.closure-benefits h5 {
  color: #27ae60;
  margin: 1rem 0 0.5rem 0;
}

.closure-benefits ul {
  margin: 0;
  padding-left: 1.2rem;
}

.closure-benefits li {
  margin-bottom: 0.3rem;
  color: #2c3e50;
}

.closure-examples {
  display: grid;
  gap: 1.5rem;
}

.closure-example {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.closure-example h4 {
  color: #8e44ad;
  margin-bottom: 0.5rem;
}

.this-scenarios {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.this-card {
  background: #fff5f5;
  border: 1px solid #fed7d7;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s ease;
}

.this-card:hover {
  transform: translateY(-2px);
}

.this-card h4 {
  color: #e53e3e;
  margin-bottom: 0.5rem;
}

.this-result {
  margin-top: 1rem;
  padding: 0.5rem;
  background: #fed7d7;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #2d3748;
}

.binding-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.binding-method {
  background: #f0f8ff;
  border: 1px solid #bee3f8;
  border-radius: 8px;
  padding: 1.5rem;
}

.binding-method h5 {
  color: #3182ce;
  margin-bottom: 0.5rem;
}

.higher-order-examples {
  display: grid;
  gap: 2rem;
}

.hof-example {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.hof-example h4 {
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.practice-demo {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.counter-demo {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.counter-demo button {
  padding: 0.5rem 1rem;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
}

.counter-demo button:hover {
  background: #c0392b;
}

.counter-display {
  background: white;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-weight: bold;
  color: #2c3e50;
}

.demo-explanation {
  background: white;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.this-test button {
  padding: 0.5rem 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 1rem;
}

.this-test button:hover {
  background: #2980b9;
}

.test-result {
  background: white;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.test-result pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .functions {
    padding: 1rem;
  }
  
  .declaration-grid {
    grid-template-columns: 1fr;
  }
  
  .closure-explanation {
    grid-template-columns: 1fr;
  }
  
  .this-scenarios {
    grid-template-columns: 1fr;
  }
  
  .binding-methods {
    grid-template-columns: 1fr;
  }
  
  .counter-demo {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
