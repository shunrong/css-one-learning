<template>
  <div class="js-basics">
    <header class="module-header">
      <h1>JavaScript 基础</h1>
      <p class="description">
        JavaScript 是 Web 开发的核心语言之一。本模块将带你深入了解 JavaScript 的基础概念，
        包括数据类型、函数、原型继承、DOM 操作等核心知识点。
      </p>
    </header>

    <nav class="topic-nav">
      <button 
        v-for="topic in topics" 
        :key="topic.id"
        :class="['nav-button', { active: activeTopic === topic.id }]"
        @click="activeTopic = topic.id"
      >
        {{ topic.title }}
      </button>
    </nav>

    <main class="content">
      <component :is="currentComponent" />
    </main>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import DataTypes from '@/components/javascript/DataTypes.vue'
import Functions from '@/components/javascript/Functions.vue'
import Prototype from '@/components/javascript/Prototype.vue'
import DOMAPI from '@/components/javascript/DOMAPI.vue'
import BOMAPI from '@/components/javascript/BOMAPI.vue'

export default {
  name: 'JSBasics',
  components: {
    DataTypes,
    Functions,
    Prototype,
    DOMAPI,
    BOMAPI
  },
  setup() {
    const activeTopic = ref('datatypes')
    
    const topics = [
      { id: 'datatypes', title: '数据类型', component: 'DataTypes' },
      { id: 'functions', title: '函数', component: 'Functions' },
      { id: 'prototype', title: '原型与继承', component: 'Prototype' },
      { id: 'dom', title: 'DOM API', component: 'DOMAPI' },
      { id: 'bom', title: 'BOM API', component: 'BOMAPI' }
    ]
    
    const currentComponent = computed(() => {
      const topic = topics.find(t => t.id === activeTopic.value)
      return topic ? topic.component : 'DataTypes'
    })
    
    return {
      activeTopic,
      topics,
      currentComponent
    }
  }
}
</script>

<style scoped>
.js-basics {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.module-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  border-bottom: 2px solid #e9ecef;
}

.module-header h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description {
  font-size: 1.125rem;
  color: #6c757d;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.topic-nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.nav-button {
  padding: 0.75rem 1.5rem;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.nav-button:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.nav-button.active {
  background: #667eea;
  color: white;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.content {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

@media (max-width: 768px) {
  .js-basics {
    padding: 1rem;
  }
  
  .module-header h1 {
    font-size: 2rem;
  }
  
  .topic-nav {
    gap: 0.5rem;
  }
  
  .nav-button {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}
</style>
