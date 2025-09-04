<template>
  <div class="data-types">
    <h2>JavaScript 数据类型</h2>
    
    <!-- 基本数据类型 -->
    <section class="type-section">
      <h3>基本数据类型（原始类型）</h3>
      <p class="section-desc">JavaScript 有 7 种基本数据类型，它们是不可变的，存储在栈内存中。</p>
      
      <div class="type-grid">
        <div v-for="type in primitiveTypes" :key="type.name" class="type-card">
          <h4>{{ type.name }}</h4>
          <p>{{ type.description }}</p>
          <div class="code-block">
            <pre><code>{{ type.example }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 引用数据类型 -->
    <section class="type-section">
      <h3>引用数据类型</h3>
      <p class="section-desc">引用类型的值是对象，存储在堆内存中，变量中存储的是对象的引用地址。</p>
      
      <div class="type-grid">
        <div v-for="type in referenceTypes" :key="type.name" class="type-card">
          <h4>{{ type.name }}</h4>
          <p>{{ type.description }}</p>
          <div class="code-block">
            <pre><code>{{ type.example }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 类型检测 -->
    <section class="type-section">
      <h3>类型检测方法</h3>
      <p class="section-desc">JavaScript 提供了多种方式来检测数据类型，每种方法都有其适用场景。</p>
      
      <div class="detection-methods">
        <div v-for="method in detectionMethods" :key="method.name" class="method-card">
          <h4>{{ method.name }}</h4>
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
    </section>

    <!-- 类型转换 -->
    <section class="type-section">
      <h3>类型转换</h3>
      <p class="section-desc">JavaScript 是动态类型语言，会在运行时进行类型转换。</p>
      
      <div class="conversion-tabs">
        <button 
          v-for="tab in conversionTabs" 
          :key="tab.id"
          :class="['tab-button', { active: activeConversionTab === tab.id }]"
          @click="activeConversionTab = tab.id"
        >
          {{ tab.title }}
        </button>
      </div>

      <div class="conversion-content">
        <div v-if="activeConversionTab === 'implicit'" class="conversion-section">
          <h4>隐式类型转换（强制类型转换）</h4>
          <div class="conversion-examples">
            <div v-for="example in implicitConversions" :key="example.operation" class="conversion-example">
              <div class="operation">{{ example.operation }}</div>
              <div class="result">{{ example.result }}</div>
              <div class="explanation">{{ example.explanation }}</div>
            </div>
          </div>
        </div>

        <div v-if="activeConversionTab === 'explicit'" class="conversion-section">
          <h4>显式类型转换</h4>
          <div class="explicit-methods">
            <div v-for="method in explicitConversions" :key="method.type" class="method-block">
              <h5>转换为 {{ method.type }}</h5>
              <div class="code-block">
                <pre><code>{{ method.examples }}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实践示例 -->
    <section class="type-section">
      <h3>实践示例</h3>
      <div class="practice-demo">
        <div class="demo-input">
          <label>输入一个值来检测其类型：</label>
          <input v-model="testValue" placeholder="请输入任意值">
          <button @click="evaluateType">检测类型</button>
        </div>
        <div v-if="typeResult" class="demo-result">
          <div class="result-item">
            <strong>typeof:</strong> {{ typeResult.typeof }}
          </div>
          <div class="result-item">
            <strong>Object.prototype.toString:</strong> {{ typeResult.toString }}
          </div>
          <div class="result-item">
            <strong>实际值:</strong> {{ typeResult.value }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'DataTypes',
  setup() {
    const activeConversionTab = ref('implicit')
    const testValue = ref('')
    const typeResult = ref(null)

    const primitiveTypes = [
      {
        name: 'Number',
        description: '数字类型，包括整数和浮点数',
        example: `let num = 42;
let float = 3.14;
let infinity = Infinity;
let notANumber = NaN;`
      },
      {
        name: 'String',
        description: '字符串类型，用于表示文本数据',
        example: `let str1 = "Hello World";
let str2 = 'JavaScript';
let template = \`Hello \${name}\`;`
      },
      {
        name: 'Boolean',
        description: '布尔类型，只有 true 和 false 两个值',
        example: `let isTrue = true;
let isFalse = false;
let result = 5 > 3; // true`
      },
      {
        name: 'Undefined',
        description: '未定义类型，声明但未赋值的变量',
        example: `let undefinedVar;
console.log(undefinedVar); // undefined`
      },
      {
        name: 'Null',
        description: '空值类型，表示"无"的值',
        example: `let nullVar = null;
// 注意：typeof null === "object"`
      },
      {
        name: 'Symbol',
        description: 'ES6 新增，表示独一无二的值',
        example: `let sym1 = Symbol();
let sym2 = Symbol('description');
let sym3 = Symbol.for('key');`
      },
      {
        name: 'BigInt',
        description: 'ES2020 新增，表示任意精度的整数',
        example: `let bigInt1 = 123n;
let bigInt2 = BigInt(123);
let large = 9007199254740992n;`
      }
    ]

    const referenceTypes = [
      {
        name: 'Object',
        description: '对象类型，键值对的集合',
        example: `let obj = {
  name: "张三",
  age: 25,
  sayHello: function() {
    return "Hello!";
  }
};`
      },
      {
        name: 'Array',
        description: '数组类型，有序的值的集合',
        example: `let arr = [1, 2, 3, 4, 5];
let mixedArr = [1, "hello", true, null];
let nestedArr = [[1, 2], [3, 4]];`
      },
      {
        name: 'Function',
        description: '函数类型，可执行的代码块',
        example: `function regularFunc() {
  return "Hello";
}

let arrowFunc = () => "World";
let method = obj.sayHello;`
      },
      {
        name: 'Date',
        description: '日期类型，表示时间',
        example: `let now = new Date();
let specific = new Date('2023-01-01');
let timestamp = Date.now();`
      },
      {
        name: 'RegExp',
        description: '正则表达式类型，用于模式匹配',
        example: `let regex1 = /pattern/gi;
let regex2 = new RegExp('pattern', 'gi');
let test = /\\d+/.test('123');`
      }
    ]

    const detectionMethods = [
      {
        name: 'typeof 操作符',
        description: '返回一个字符串，表示未经计算的操作数的类型',
        pros: ['语法简单', '对基本类型检测准确'],
        cons: ['null 返回 "object"', '不能区分 Array 和 Object', '所有对象都返回 "object"'],
        example: `typeof 42;          // "number"
typeof "hello";     // "string"
typeof true;        // "boolean"
typeof undefined;   // "undefined"
typeof null;        // "object" (历史遗留问题)
typeof {};          // "object"
typeof [];          // "object"
typeof function(){}; // "function"`
      },
      {
        name: 'instanceof 操作符',
        description: '检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上',
        pros: ['能准确检测对象类型', '支持继承关系检测'],
        cons: ['不能检测基本类型', '跨框架/窗口可能失效'],
        example: `[] instanceof Array;        // true
{} instanceof Object;       // true
new Date() instanceof Date; // true
"hello" instanceof String;  // false`
      },
      {
        name: 'Object.prototype.toString',
        description: '返回对象的字符串表示，是最准确的类型检测方法',
        pros: ['最准确的类型检测', '能区分所有内置类型', '不会被重写影响'],
        cons: ['语法较复杂', '不能检测自定义类型'],
        example: `Object.prototype.toString.call(42);
// "[object Number]"
Object.prototype.toString.call("hello");
// "[object String]"
Object.prototype.toString.call([]);
// "[object Array]"
Object.prototype.toString.call(null);
// "[object Null]"`
      }
    ]

    const conversionTabs = [
      { id: 'implicit', title: '隐式转换' },
      { id: 'explicit', title: '显式转换' }
    ]

    const implicitConversions = [
      { operation: '"5" + 3', result: '"53"', explanation: '字符串连接，数字转为字符串' },
      { operation: '"5" - 3', result: '2', explanation: '算术运算，字符串转为数字' },
      { operation: '"5" * "2"', result: '10', explanation: '乘法运算，两个字符串都转为数字' },
      { operation: 'true + 1', result: '2', explanation: 'true 转为 1' },
      { operation: 'false + 1', result: '1', explanation: 'false 转为 0' },
      { operation: '"" == 0', result: 'true', explanation: '空字符串转为 0' },
      { operation: 'null == undefined', result: 'true', explanation: 'null 和 undefined 相等' },
      { operation: '[] + {}', result: '"[object Object]"', explanation: '数组转为空字符串，对象转为字符串' }
    ]

    const explicitConversions = [
      {
        type: 'Number',
        examples: `Number("123");      // 123
Number("123.45");   // 123.45
Number("hello");    // NaN
Number(true);       // 1
Number(false);      // 0
Number(null);       // 0
Number(undefined);  // NaN

parseInt("123px");  // 123
parseFloat("3.14"); // 3.14`
      },
      {
        type: 'String',
        examples: `String(123);        // "123"
String(true);       // "true"
String(null);       // "null"
String(undefined);  // "undefined"

(123).toString();   // "123"
true.toString();    // "true"`
      },
      {
        type: 'Boolean',
        examples: `Boolean(1);         // true
Boolean(0);         // false
Boolean("hello");   // true
Boolean("");        // false
Boolean(null);      // false
Boolean(undefined); // false

// 双重否定
!!1;                // true
!!"hello";          // true`
      }
    ]

    const evaluateType = () => {
      try {
        let value
        if (testValue.value === '') {
          value = undefined
        } else if (testValue.value === 'null') {
          value = null
        } else if (testValue.value === 'true') {
          value = true
        } else if (testValue.value === 'false') {
          value = false
        } else if (!isNaN(testValue.value) && testValue.value !== '') {
          value = Number(testValue.value)
        } else {
          value = testValue.value
        }

        typeResult.value = {
          typeof: typeof value,
          toString: Object.prototype.toString.call(value),
          value: JSON.stringify(value)
        }
      } catch (error) {
        typeResult.value = {
          typeof: 'error',
          toString: 'error',
          value: 'Invalid input'
        }
      }
    }

    return {
      primitiveTypes,
      referenceTypes,
      detectionMethods,
      conversionTabs,
      activeConversionTab,
      implicitConversions,
      explicitConversions,
      testValue,
      typeResult,
      evaluateType
    }
  }
}
</script>

<style scoped>
.data-types {
  padding: 2rem;
}

.data-types h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
}

.type-section {
  margin-bottom: 3rem;
}

.type-section h3 {
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3498db;
}

.section-desc {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.type-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.type-card {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.type-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.type-card h4 {
  color: #2980b9;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.type-card p {
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.code-block {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.9rem;
  line-height: 1.4;
}

.detection-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
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

.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin: 1rem 0;
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

.conversion-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  border: 2px solid #3498db;
  background: white;
  color: #3498db;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.tab-button:hover,
.tab-button.active {
  background: #3498db;
  color: white;
}

.conversion-examples {
  display: grid;
  gap: 1rem;
}

.conversion-example {
  display: grid;
  grid-template-columns: 200px 100px 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 4px;
}

.operation {
  font-family: 'Courier New', monospace;
  background: #2c3e50;
  color: #ecf0f1;
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;
}

.result {
  font-family: 'Courier New', monospace;
  background: #27ae60;
  color: white;
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
}

.explanation {
  color: #555;
  font-size: 0.9rem;
}

.explicit-methods {
  display: grid;
  gap: 2rem;
}

.method-block h5 {
  color: #8e44ad;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.practice-demo {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.demo-input {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.demo-input label {
  font-weight: 600;
  color: #2c3e50;
}

.demo-input input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-width: 200px;
}

.demo-input button {
  padding: 0.5rem 1rem;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
}

.demo-input button:hover {
  background: #2980b9;
}

.demo-result {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.result-item {
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
  padding: 0.5rem;
  background: #f1f2f6;
  border-radius: 4px;
}

.result-item strong {
  color: #2c3e50;
}

@media (max-width: 768px) {
  .data-types {
    padding: 1rem;
  }
  
  .type-grid {
    grid-template-columns: 1fr;
  }
  
  .detection-methods {
    grid-template-columns: 1fr;
  }
  
  .pros-cons {
    grid-template-columns: 1fr;
  }
  
  .conversion-example {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .demo-input {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
