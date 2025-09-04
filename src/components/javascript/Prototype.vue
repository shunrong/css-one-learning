<template>
  <div class="prototype">
    <h2>原型与继承</h2>
    
    <!-- 原型基础概念 -->
    <section class="prototype-section">
      <h3>原型基础概念</h3>
      <p class="section-desc">JavaScript 是基于原型的语言，每个对象都有一个原型对象，从原型对象继承方法和属性。</p>
      
      <div class="concept-grid">
        <div v-for="concept in prototypeConcepts" :key="concept.name" class="concept-card">
          <h4>{{ concept.name }}</h4>
          <p>{{ concept.description }}</p>
          <div class="code-block">
            <pre><code>{{ concept.example }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 原型链 -->
    <section class="prototype-section">
      <h3>原型链</h3>
      <p class="section-desc">原型链是 JavaScript 实现继承的机制，当访问对象的属性时，会沿着原型链向上查找。</p>
      
      <div class="prototype-chain-demo">
        <div class="chain-explanation">
          <h4>原型链的工作原理</h4>
          <ol class="chain-steps">
            <li>首先在对象自身查找属性</li>
            <li>如果没找到，在对象的原型（__proto__）中查找</li>
            <li>继续在原型的原型中查找</li>
            <li>直到找到属性或到达原型链顶端（null）</li>
          </ol>
        </div>
        
        <div class="chain-visualization">
          <h4>原型链可视化</h4>
          <div class="chain-diagram">
            <div class="chain-item object">
              <div class="item-title">实例对象</div>
              <div class="item-content">obj</div>
              <div class="arrow">↑ __proto__</div>
            </div>
            <div class="chain-item prototype">
              <div class="item-title">构造函数原型</div>
              <div class="item-content">Constructor.prototype</div>
              <div class="arrow">↑ __proto__</div>
            </div>
            <div class="chain-item object-prototype">
              <div class="item-title">Object 原型</div>
              <div class="item-content">Object.prototype</div>
              <div class="arrow">↑ __proto__</div>
            </div>
            <div class="chain-item null">
              <div class="item-title">原型链顶端</div>
              <div class="item-content">null</div>
            </div>
          </div>
        </div>
      </div>

      <div class="code-block">
        <pre><code>{{ prototypeChainExample }}</code></pre>
      </div>
    </section>

    <!-- 构造函数 -->
    <section class="prototype-section">
      <h3>构造函数</h3>
      <p class="section-desc">构造函数是用来创建对象的特殊函数，通过 new 关键字调用。</p>
      
      <div class="constructor-tabs">
        <button 
          v-for="tab in constructorTabs" 
          :key="tab.id"
          :class="['tab-button', { active: activeConstructorTab === tab.id }]"
          @click="activeConstructorTab = tab.id"
        >
          {{ tab.title }}
        </button>
      </div>

      <div class="constructor-content">
        <div v-if="activeConstructorTab === 'basic'" class="constructor-basic">
          <h4>构造函数基础</h4>
          <div class="constructor-explanation">
            <div class="explanation-item">
              <h5>构造函数的特点：</h5>
              <ul>
                <li>函数名通常首字母大写</li>
                <li>使用 new 关键字调用</li>
                <li>内部使用 this 指向新创建的对象</li>
                <li>默认返回新创建的对象</li>
              </ul>
            </div>
            <div class="explanation-item">
              <h5>new 操作符的执行过程：</h5>
              <ol>
                <li>创建一个新对象</li>
                <li>将新对象的 __proto__ 指向构造函数的 prototype</li>
                <li>将构造函数的 this 绑定到新对象</li>
                <li>执行构造函数代码</li>
                <li>返回新对象（除非构造函数显式返回其他对象）</li>
              </ol>
            </div>
          </div>
          <div class="code-block">
            <pre><code>{{ constructorBasicExample }}</code></pre>
          </div>
        </div>

        <div v-if="activeConstructorTab === 'prototype'" class="constructor-prototype">
          <h4>原型方法</h4>
          <p>通过构造函数的 prototype 属性添加方法，所有实例都可以共享这些方法。</p>
          <div class="code-block">
            <pre><code>{{ prototypeMethodExample }}</code></pre>
          </div>
        </div>

        <div v-if="activeConstructorTab === 'static'" class="constructor-static">
          <h4>静态方法</h4>
          <p>直接添加到构造函数上的方法，不需要实例化就可以调用。</p>
          <div class="code-block">
            <pre><code>{{ staticMethodExample }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 继承模式 -->
    <section class="prototype-section">
      <h3>继承模式</h3>
      <p class="section-desc">JavaScript 提供了多种实现继承的方式，每种方式都有其优缺点。</p>
      
      <div class="inheritance-patterns">
        <div v-for="pattern in inheritancePatterns" :key="pattern.name" class="pattern-card">
          <h4>{{ pattern.name }}</h4>
          <p>{{ pattern.description }}</p>
          
          <div class="pattern-pros-cons">
            <div class="pros">
              <strong>优点：</strong>
              <ul>
                <li v-for="pro in pattern.pros" :key="pro">{{ pro }}</li>
              </ul>
            </div>
            <div class="cons">
              <strong>缺点：</strong>
              <ul>
                <li v-for="con in pattern.cons" :key="con">{{ con }}</li>
              </ul>
            </div>
          </div>
          
          <div class="code-block">
            <pre><code>{{ pattern.example }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 现代继承 -->
    <section class="prototype-section">
      <h3>现代继承方式</h3>
      <p class="section-desc">ES5 引入了更安全和规范的继承方式。</p>
      
      <div class="modern-inheritance">
        <div class="modern-method">
          <h4>Object.create()</h4>
          <p>创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__。</p>
          <div class="code-block">
            <pre><code>{{ objectCreateExample }}</code></pre>
          </div>
        </div>

        <div class="modern-method">
          <h4>组合继承的改进版</h4>
          <p>使用 Object.create() 实现更安全的继承。</p>
          <div class="code-block">
            <pre><code>{{ improvedInheritanceExample }}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 实践示例 -->
    <section class="prototype-section">
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
          <div v-if="activeDemoTab === 'constructor'" class="constructor-demo">
            <h4>构造函数示例</h4>
            <div class="demo-controls">
              <input v-model="personName" placeholder="输入姓名">
              <input v-model="personAge" type="number" placeholder="输入年龄">
              <button @click="createPerson">创建 Person</button>
            </div>
            <div v-if="createdPerson" class="demo-result">
              <h5>创建的对象：</h5>
              <pre>{{ JSON.stringify(createdPerson, null, 2) }}</pre>
              <button @click="callIntroduce">调用 introduce 方法</button>
              <div v-if="introduceResult" class="method-result">
                {{ introduceResult }}
              </div>
            </div>
          </div>

          <div v-if="activeDemoTab === 'inheritance'" class="inheritance-demo">
            <h4>继承示例</h4>
            <div class="demo-controls">
              <input v-model="studentName" placeholder="学生姓名">
              <input v-model="studentAge" type="number" placeholder="学生年龄">
              <input v-model="studentGrade" placeholder="年级">
              <button @click="createStudent">创建 Student</button>
            </div>
            <div v-if="createdStudent" class="demo-result">
              <h5>创建的学生对象：</h5>
              <pre>{{ JSON.stringify(createdStudent, null, 2) }}</pre>
              <button @click="callStudentMethods">调用方法</button>
              <div v-if="studentMethodsResult" class="method-result">
                <div v-for="result in studentMethodsResult" :key="result">{{ result }}</div>
              </div>
            </div>
          </div>

          <div v-if="activeDemoTab === 'prototype-chain'" class="prototype-chain-demo">
            <h4>原型链查看</h4>
            <button @click="showPrototypeChain">查看原型链</button>
            <div v-if="prototypeChainResult" class="chain-result">
              <h5>原型链结构：</h5>
              <div v-for="(item, index) in prototypeChainResult" :key="index" class="chain-level">
                <strong>Level {{ index }}:</strong> {{ item }}
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
  name: 'Prototype',
  setup() {
    const activeConstructorTab = ref('basic')
    const activeDemoTab = ref('constructor')
    
    // 演示数据
    const personName = ref('')
    const personAge = ref('')
    const createdPerson = ref(null)
    const introduceResult = ref('')
    
    const studentName = ref('')
    const studentAge = ref('')
    const studentGrade = ref('')
    const createdStudent = ref(null)
    const studentMethodsResult = ref(null)
    
    const prototypeChainResult = ref(null)

    const prototypeConcepts = [
      {
        name: 'prototype 属性',
        description: '每个函数都有一个 prototype 属性，指向一个对象，这个对象包含可以由特定类型的所有实例共享的属性和方法',
        example: `function Person(name) {
  this.name = name;
}

// 在原型上添加方法
Person.prototype.sayHello = function() {
  return "Hello, I'm " + this.name;
};

console.log(Person.prototype); // { sayHello: function, constructor: Person }`
      },
      {
        name: '__proto__ 属性',
        description: '每个对象都有一个 __proto__ 属性（非标准，但广泛支持），指向创建该对象的构造函数的 prototype',
        example: `var person = new Person("张三");

console.log(person.__proto__ === Person.prototype); // true
console.log(person.__proto__.constructor === Person); // true

// 标准方式获取原型
console.log(Object.getPrototypeOf(person) === Person.prototype); // true`
      },
      {
        name: 'constructor 属性',
        description: '原型对象包含一个 constructor 属性，指向拥有该原型的构造函数',
        example: `function Animal(name) {
  this.name = name;
}

console.log(Animal.prototype.constructor === Animal); // true

var cat = new Animal("小猫");
console.log(cat.constructor === Animal); // true`
      }
    ]

    const prototypeChainExample = `// 演示原型链
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return this.name + " makes a sound";
};

function Dog(name, breed) {
  Animal.call(this, name); // 调用父构造函数
  this.breed = breed;
}

// 设置原型链
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  return this.name + " barks";
};

var myDog = new Dog("旺财", "金毛");

// 原型链查找过程
console.log(myDog.name);        // "旺财" - 在实例上找到
console.log(myDog.bark());      // "旺财 barks" - 在 Dog.prototype 上找到
console.log(myDog.speak());     // "旺财 makes a sound" - 在 Animal.prototype 上找到
console.log(myDog.toString());  // "[object Object]" - 在 Object.prototype 上找到`

    const constructorTabs = [
      { id: 'basic', title: '基础用法' },
      { id: 'prototype', title: '原型方法' },
      { id: 'static', title: '静态方法' }
    ]

    const constructorBasicExample = `// 构造函数定义
function Person(name, age) {
  this.name = name;
  this.age = age;
  
  // 实例方法（不推荐，每个实例都会创建一份）
  this.getName = function() {
    return this.name;
  };
}

// 使用 new 创建实例
var person1 = new Person("张三", 25);
var person2 = new Person("李四", 30);

console.log(person1.name); // "张三"
console.log(person2.age);  // 30

// 验证实例
console.log(person1 instanceof Person); // true
console.log(person1.constructor === Person); // true`

    const prototypeMethodExample = `function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 在原型上添加方法（推荐，所有实例共享）
Person.prototype.introduce = function() {
  return "我是 " + this.name + "，今年 " + this.age + " 岁";
};

Person.prototype.isAdult = function() {
  return this.age >= 18;
};

// 添加属性到原型
Person.prototype.species = "人类";

var person1 = new Person("王五", 22);
var person2 = new Person("赵六", 16);

console.log(person1.introduce()); // "我是 王五，今年 22 岁"
console.log(person2.isAdult());   // false
console.log(person1.species);     // "人类"

// 验证方法共享
console.log(person1.introduce === person2.introduce); // true`

    const staticMethodExample = `function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 静态方法 - 直接添加到构造函数
Person.createAnonymous = function() {
  return new Person("匿名", 0);
};

Person.isValidAge = function(age) {
  return age >= 0 && age <= 150;
};

// 静态属性
Person.MAX_AGE = 150;

// 使用静态方法
var anonymous = Person.createAnonymous();
console.log(anonymous.name); // "匿名"

console.log(Person.isValidAge(25));  // true
console.log(Person.isValidAge(200)); // false
console.log(Person.MAX_AGE);         // 150

// 实例无法访问静态方法
var person = new Person("张三", 25);
// console.log(person.createAnonymous()); // 错误：不是函数`

    const inheritancePatterns = [
      {
        name: '原型链继承',
        description: '将子类的原型设置为父类的实例',
        pros: ['简单易理解', '可以继承父类原型上的方法'],
        cons: ['包含引用类型的原型属性会被所有实例共享', '创建子类实例时不能向父类构造函数传参'],
        example: `function Animal(name) {
  this.name = name;
  this.colors = ["red", "blue"];
}

Animal.prototype.speak = function() {
  return this.name + " speaks";
};

function Dog() {}

// 原型链继承
Dog.prototype = new Animal();

var dog1 = new Dog();
var dog2 = new Dog();

// 问题：引用类型共享
dog1.colors.push("green");
console.log(dog2.colors); // ["red", "blue", "green"]`
      },
      {
        name: '构造函数继承',
        description: '在子类构造函数中调用父类构造函数',
        pros: ['避免了引用类型的属性被所有实例共享', '可以在子类构造函数中向父类构造函数传参'],
        cons: ['方法都在构造函数中定义，每次创建实例都会创建一遍方法', '不能继承父类原型上的方法'],
        example: `function Animal(name) {
  this.name = name;
  this.colors = ["red", "blue"];
}

Animal.prototype.speak = function() {
  return this.name + " speaks";
};

function Dog(name, breed) {
  // 构造函数继承
  Animal.call(this, name);
  this.breed = breed;
}

var dog1 = new Dog("旺财", "金毛");
var dog2 = new Dog("小黑", "拉布拉多");

// 解决引用类型共享问题
dog1.colors.push("green");
console.log(dog2.colors); // ["red", "blue"]

// 但无法继承原型方法
// console.log(dog1.speak()); // 错误：不是函数`
      },
      {
        name: '组合继承',
        description: '结合原型链继承和构造函数继承',
        pros: ['融合了两种继承方式的优点', '既可以继承实例属性，也可以继承原型方法', '可以向父类构造函数传参'],
        cons: ['会调用两次父类构造函数', '子类原型上会存在不必要的父类实例属性'],
        example: `function Animal(name) {
  this.name = name;
  this.colors = ["red", "blue"];
}

Animal.prototype.speak = function() {
  return this.name + " speaks";
};

function Dog(name, breed) {
  // 第一次调用 Animal()
  Animal.call(this, name);
  this.breed = breed;
}

// 第二次调用 Animal()
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  return this.name + " barks";
};

var dog = new Dog("旺财", "金毛");
console.log(dog.speak()); // "旺财 speaks"
console.log(dog.bark());  // "旺财 barks"`
      }
    ]

    const objectCreateExample = `// Object.create() 用法
var animal = {
  name: "动物",
  speak: function() {
    return this.name + " makes a sound";
  }
};

// 创建继承自 animal 的对象
var dog = Object.create(animal);
dog.name = "狗";
dog.bark = function() {
  return this.name + " barks";
};

console.log(dog.speak()); // "狗 makes a sound"
console.log(dog.bark());  // "狗 barks"

// 验证原型链
console.log(Object.getPrototypeOf(dog) === animal); // true

// 带属性描述符的创建
var cat = Object.create(animal, {
  name: {
    value: "猫",
    writable: true,
    enumerable: true,
    configurable: true
  },
  meow: {
    value: function() {
      return this.name + " meows";
    },
    writable: false,
    enumerable: false,
    configurable: true
  }
});

console.log(cat.meow()); // "猫 meows"`

    const improvedInheritanceExample = `function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return this.name + " speaks";
};

function Dog(name, breed) {
  Animal.call(this, name); // 继承实例属性
  this.breed = breed;
}

// 使用 Object.create 设置原型链
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  return this.name + " barks";
};

// 更安全的继承函数
function inherit(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

// 使用
function Cat(name, color) {
  Animal.call(this, name);
  this.color = color;
}

inherit(Cat, Animal);

Cat.prototype.meow = function() {
  return this.name + " meows";
};

var cat = new Cat("小花", "白色");
console.log(cat.speak()); // "小花 speaks"
console.log(cat.meow());  // "小花 meows"`

    const practiceDemo = [
      { id: 'constructor', title: '构造函数' },
      { id: 'inheritance', title: '继承演示' },
      { id: 'prototype-chain', title: '原型链' }
    ]

    // 构造函数定义
    function Person(name, age) {
      this.name = name
      this.age = age
    }

    Person.prototype.introduce = function() {
      return `我是 ${this.name}，今年 ${this.age} 岁`
    }

    function Student(name, age, grade) {
      Person.call(this, name, age)
      this.grade = grade
    }

    Student.prototype = Object.create(Person.prototype)
    Student.prototype.constructor = Student

    Student.prototype.study = function() {
      return `${this.name} 正在学习`
    }

    Student.prototype.getGrade = function() {
      return `${this.name} 在 ${this.grade} 年级`
    }

    const createPerson = () => {
      if (personName.value && personAge.value) {
        createdPerson.value = new Person(personName.value, parseInt(personAge.value))
        introduceResult.value = ''
      }
    }

    const callIntroduce = () => {
      if (createdPerson.value) {
        introduceResult.value = createdPerson.value.introduce()
      }
    }

    const createStudent = () => {
      if (studentName.value && studentAge.value && studentGrade.value) {
        createdStudent.value = new Student(
          studentName.value, 
          parseInt(studentAge.value), 
          studentGrade.value
        )
        studentMethodsResult.value = null
      }
    }

    const callStudentMethods = () => {
      if (createdStudent.value) {
        studentMethodsResult.value = [
          createdStudent.value.introduce(),
          createdStudent.value.study(),
          createdStudent.value.getGrade()
        ]
      }
    }

    const showPrototypeChain = () => {
      const student = new Student("测试学生", 20, "大三")
      const chain = []
      
      let current = student
      let level = 0
      
      while (current && level < 10) { // 防止无限循环
        if (level === 0) {
          chain.push("Student 实例对象")
        } else if (level === 1) {
          chain.push("Student.prototype")
        } else if (level === 2) {
          chain.push("Person.prototype")
        } else if (level === 3) {
          chain.push("Object.prototype")
        } else if (level === 4) {
          chain.push("null (原型链顶端)")
          break
        }
        
        current = Object.getPrototypeOf(current)
        level++
      }
      
      prototypeChainResult.value = chain
    }

    return {
      prototypeConcepts,
      prototypeChainExample,
      constructorTabs,
      activeConstructorTab,
      constructorBasicExample,
      prototypeMethodExample,
      staticMethodExample,
      inheritancePatterns,
      objectCreateExample,
      improvedInheritanceExample,
      practiceDemo,
      activeDemoTab,
      personName,
      personAge,
      createdPerson,
      introduceResult,
      createPerson,
      callIntroduce,
      studentName,
      studentAge,
      studentGrade,
      createdStudent,
      studentMethodsResult,
      createStudent,
      callStudentMethods,
      prototypeChainResult,
      showPrototypeChain
    }
  }
}
</script>

<style scoped>
.prototype {
  padding: 2rem;
}

.prototype h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
}

.prototype-section {
  margin-bottom: 3rem;
}

.prototype-section h3 {
  font-size: 1.5rem;
  color: #34495e;
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #9b59b6;
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
  color: #9b59b6;
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

.prototype-chain-demo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.chain-explanation {
  background: #e8f5e8;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
}

.chain-steps {
  margin: 1rem 0;
  padding-left: 1.2rem;
}

.chain-steps li {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.chain-visualization {
  background: #f0f8ff;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.chain-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.chain-item {
  background: white;
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  min-width: 180px;
  position: relative;
}

.chain-item.object {
  border-color: #e74c3c;
  background: #fdf2f2;
}

.chain-item.prototype {
  border-color: #f39c12;
  background: #fef9e7;
}

.chain-item.object-prototype {
  border-color: #27ae60;
  background: #eafaf1;
}

.chain-item.null {
  border-color: #95a5a6;
  background: #f8f9fa;
}

.item-title {
  font-size: 0.8rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
}

.item-content {
  font-weight: bold;
  color: #2c3e50;
}

.arrow {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #7f8c8d;
}

.constructor-tabs, .demo-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.tab-button {
  padding: 0.75rem 1.5rem;
  border: 2px solid #9b59b6;
  background: white;
  color: #9b59b6;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.tab-button:hover,
.tab-button.active {
  background: #9b59b6;
  color: white;
}

.constructor-explanation {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.explanation-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.explanation-item h5 {
  color: #8e44ad;
  margin-bottom: 0.5rem;
}

.explanation-item ul,
.explanation-item ol {
  margin: 0.5rem 0 0 0;
  padding-left: 1.2rem;
}

.explanation-item li {
  margin-bottom: 0.3rem;
  color: #2c3e50;
}

.inheritance-patterns {
  display: grid;
  gap: 2rem;
}

.pattern-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pattern-card h4 {
  color: #8e44ad;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.pattern-pros-cons {
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

.modern-inheritance {
  display: grid;
  gap: 2rem;
}

.modern-method {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
}

.modern-method h4 {
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.practice-demo {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.demo-controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.demo-controls input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.demo-controls button {
  padding: 0.5rem 1rem;
  background: #9b59b6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
}

.demo-controls button:hover {
  background: #8e44ad;
}

.demo-result {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
}

.demo-result h5 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.demo-result pre {
  background: #f1f2f6;
  padding: 1rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  overflow-x: auto;
}

.method-result {
  background: #e8f5e8;
  padding: 1rem;
  border-radius: 4px;
  border-left: 4px solid #27ae60;
  margin-top: 1rem;
}

.chain-result {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-top: 1rem;
}

.chain-level {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: #f1f2f6;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
}

@media (max-width: 768px) {
  .prototype {
    padding: 1rem;
  }
  
  .concept-grid {
    grid-template-columns: 1fr;
  }
  
  .prototype-chain-demo {
    grid-template-columns: 1fr;
  }
  
  .constructor-explanation {
    grid-template-columns: 1fr;
  }
  
  .pattern-pros-cons {
    grid-template-columns: 1fr;
  }
  
  .demo-controls {
    flex-direction: column;
  }
}
</style>
