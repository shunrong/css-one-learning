<template>
  <div class="forms-page">
    <!-- 标题区域 -->
    <div class="header-section p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-50">
      <h1 class="text-3xl font-bold text-gray-900 mb-3">HTML 表单开发</h1>
      <p class="text-gray-600 text-lg leading-relaxed">
        掌握现代表单开发技巧，包括各种输入类型、验证机制和用户体验优化
      </p>
    </div>

    <div class="content-section p-6 space-y-8">
      <!-- 基础表单元素 -->
      <section class="demo-section">
        <h2 class="section-title">基础表单元素</h2>
        <p class="section-desc">
          了解各种输入类型及其特性，选择最适合的控件类型
        </p>
        
        <div class="demo-container">
          <div class="demo-preview">
            <form class="sample-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">姓名</label>
                <input type="text" id="name" v-model="formData.name" placeholder="请输入您的姓名" required>
              </div>
              
              <div class="form-group">
                <label for="email">邮箱</label>
                <input type="email" id="email" v-model="formData.email" placeholder="example@email.com" required>
              </div>
              
              <div class="form-group">
                <label for="phone">电话</label>
                <input type="tel" id="phone" v-model="formData.phone" placeholder="138-0000-0000">
              </div>
              
              <div class="form-group">
                <label for="birthday">生日</label>
                <input type="date" id="birthday" v-model="formData.birthday">
              </div>
              
              <div class="form-group">
                <label for="website">个人网站</label>
                <input type="url" id="website" v-model="formData.website" placeholder="https://example.com">
              </div>
              
              <div class="form-group">
                <label for="age">年龄</label>
                <input type="number" id="age" v-model="formData.age" min="1" max="120" placeholder="25">
              </div>
              
              <div class="form-group">
                <label for="password">密码</label>
                <input type="password" id="password" v-model="formData.password" placeholder="请输入密码">
              </div>
              
              <div class="form-group">
                <label for="bio">个人简介</label>
                <textarea id="bio" v-model="formData.bio" rows="3" placeholder="简单介绍一下自己..."></textarea>
              </div>
              
              <div class="form-group">
                <label for="country">国家</label>
                <select id="country" v-model="formData.country">
                  <option value="">请选择国家</option>
                  <option value="cn">中国</option>
                  <option value="us">美国</option>
                  <option value="jp">日本</option>
                  <option value="uk">英国</option>
                </select>
              </div>
              
              <div class="form-group">
                <fieldset>
                  <legend>性别</legend>
                  <label class="radio-label">
                    <input type="radio" name="gender" value="male" v-model="formData.gender">
                    <span>男</span>
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="gender" value="female" v-model="formData.gender">
                    <span>女</span>
                  </label>
                  <label class="radio-label">
                    <input type="radio" name="gender" value="other" v-model="formData.gender">
                    <span>其他</span>
                  </label>
                </fieldset>
              </div>
              
              <div class="form-group">
                <fieldset>
                  <legend>兴趣爱好</legend>
                  <label class="checkbox-label">
                    <input type="checkbox" value="reading" v-model="formData.hobbies">
                    <span>阅读</span>
                  </label>
                  <label class="checkbox-label">
                    <input type="checkbox" value="music" v-model="formData.hobbies">
                    <span>音乐</span>
                  </label>
                  <label class="checkbox-label">
                    <input type="checkbox" value="sports" v-model="formData.hobbies">
                    <span>运动</span>
                  </label>
                  <label class="checkbox-label">
                    <input type="checkbox" value="travel" v-model="formData.hobbies">
                    <span>旅行</span>
                  </label>
                </fieldset>
              </div>
              
              <div class="form-group">
                <label class="checkbox-label">
                  <input type="checkbox" v-model="formData.agree" required>
                  <span>我同意 <a href="#" class="form-link">服务条款</a> 和 <a href="#" class="form-link">隐私政策</a></span>
                </label>
              </div>
              
              <div class="form-actions">
                <button type="submit" class="btn-primary">提交表单</button>
                <button type="reset" class="btn-secondary" @click="resetForm">重置</button>
              </div>
            </form>
          </div>
          
          <div class="demo-code">
            <pre><code>&lt;form&gt;
  &lt;!-- 文本输入 --&gt;
  &lt;input type="text" placeholder="姓名" required&gt;
  &lt;input type="email" placeholder="邮箱" required&gt;
  &lt;input type="tel" placeholder="电话"&gt;
  &lt;input type="url" placeholder="网站"&gt;
  
  &lt;!-- 数字和日期 --&gt;
  &lt;input type="number" min="1" max="120"&gt;
  &lt;input type="date"&gt;
  &lt;input type="password"&gt;
  
  &lt;!-- 多行文本 --&gt;
  &lt;textarea rows="3" placeholder="简介"&gt;&lt;/textarea&gt;
  
  &lt;!-- 选择控件 --&gt;
  &lt;select&gt;
    &lt;option value=""&gt;请选择&lt;/option&gt;
    &lt;option value="cn"&gt;中国&lt;/option&gt;
  &lt;/select&gt;
  
  &lt;!-- 单选和多选 --&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;性别&lt;/legend&gt;
    &lt;input type="radio" name="gender" value="male"&gt;
    &lt;input type="radio" name="gender" value="female"&gt;
  &lt;/fieldset&gt;
  
  &lt;fieldset&gt;
    &lt;legend&gt;爱好&lt;/legend&gt;
    &lt;input type="checkbox" value="reading"&gt;
    &lt;input type="checkbox" value="music"&gt;
  &lt;/fieldset&gt;
  
  &lt;button type="submit"&gt;提交&lt;/button&gt;
&lt;/form&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- HTML5 验证 -->
      <section class="demo-section">
        <h2 class="section-title">HTML5 内置验证</h2>
        <p class="section-desc">
          利用HTML5的内置验证属性，无需JavaScript即可实现基础验证
        </p>
        
        <div class="validation-demos">
          <div class="validation-item">
            <h4>必填验证</h4>
            <input type="text" placeholder="必填字段" required>
            <p class="validation-note">添加 <code>required</code> 属性</p>
          </div>
          
          <div class="validation-item">
            <h4>长度限制</h4>
            <input type="text" placeholder="最少3个字符" minlength="3" maxlength="20">
            <p class="validation-note">使用 <code>minlength</code> 和 <code>maxlength</code></p>
          </div>
          
          <div class="validation-item">
            <h4>数值范围</h4>
            <input type="number" placeholder="1-100之间" min="1" max="100">
            <p class="validation-note">使用 <code>min</code> 和 <code>max</code></p>
          </div>
          
          <div class="validation-item">
            <h4>正则表达式</h4>
            <input type="text" placeholder="手机号" pattern="[0-9]{11}" title="请输入11位手机号">
            <p class="validation-note">使用 <code>pattern</code> 属性</p>
          </div>
        </div>
      </section>

      <!-- 现代输入类型 -->
      <section class="demo-section">
        <h2 class="section-title">现代输入类型</h2>
        <p class="section-desc">
          HTML5 引入的新输入类型提供了更好的用户体验和移动端支持
        </p>
        
        <div class="modern-inputs">
          <div class="input-demo">
            <h4>颜色选择器</h4>
            <input type="color" v-model="modernInputs.color" class="color-input">
            <p>选中颜色: {{ modernInputs.color }}</p>
          </div>
          
          <div class="input-demo">
            <h4>范围滑块</h4>
            <input type="range" v-model="modernInputs.range" min="0" max="100" class="range-input">
            <p>当前值: {{ modernInputs.range }}</p>
          </div>
          
          <div class="input-demo">
            <h4>文件上传</h4>
            <input type="file" multiple accept="image/*" class="file-input">
            <p>支持多文件上传，限制图片类型</p>
          </div>
          
          <div class="input-demo">
            <h4>搜索框</h4>
            <input type="search" placeholder="搜索..." class="search-input">
            <p>在移动端会显示搜索按钮</p>
          </div>
          
          <div class="input-demo">
            <h4>时间选择</h4>
            <input type="time" v-model="modernInputs.time" class="time-input">
            <p>选中时间: {{ modernInputs.time || '未选择' }}</p>
          </div>
          
          <div class="input-demo">
            <h4>月份选择</h4>
            <input type="month" v-model="modernInputs.month" class="month-input">
            <p>选中月份: {{ modernInputs.month || '未选择' }}</p>
          </div>
        </div>
      </section>

      <!-- 表单最佳实践 -->
      <section class="demo-section">
        <h2 class="section-title">表单最佳实践</h2>
        <div class="best-practices">
          <div class="practice-item">
            <h4>🏷️ 使用明确的标签</h4>
            <div class="practice-example">
              <div class="good-example">
                <h5>✅ 推荐做法</h5>
                <label for="email-good">邮箱地址</label>
                <input type="email" id="email-good" placeholder="example@email.com">
              </div>
              <div class="bad-example">
                <h5>❌ 不推荐</h5>
                <input type="email" placeholder="Email">
              </div>
            </div>
          </div>
          
          <div class="practice-item">
            <h4>📱 考虑移动端体验</h4>
            <div class="practice-tips">
              <ul>
                <li>使用合适的 <code>inputmode</code> 属性调起相应键盘</li>
                <li>为触摸操作提供足够大的点击区域</li>
                <li>使用 <code>autocomplete</code> 提升填写效率</li>
                <li>合理使用 <code>autocapitalize</code> 控制大小写</li>
              </ul>
            </div>
          </div>
          
          <div class="practice-item">
            <h4>♿ 提升可访问性</h4>
            <div class="practice-tips">
              <ul>
                <li>确保所有输入都有对应的 <code>label</code></li>
                <li>使用 <code>fieldset</code> 和 <code>legend</code> 组织相关控件</li>
                <li>为错误信息提供 <code>aria-describedby</code></li>
                <li>使用合适的 <code>role</code> 和 <code>aria-*</code> 属性</li>
              </ul>
            </div>
          </div>
          
          <div class="practice-item">
            <h4>🔒 安全考虑</h4>
            <div class="practice-tips">
              <ul>
                <li>敏感信息使用 <code>autocomplete="off"</code></li>
                <li>密码字段添加强度提示</li>
                <li>使用 HTTPS 传输表单数据</li>
                <li>在服务端进行数据验证</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 表单提交结果 -->
      <div v-if="submitResult" class="submit-result" :class="submitResult.type">
        <p>{{ submitResult.message }}</p>
        <button @click="submitResult = null" class="close-btn">×</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormsHTML',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        birthday: '',
        website: '',
        age: '',
        password: '',
        bio: '',
        country: '',
        gender: '',
        hobbies: [],
        agree: false
      },
      modernInputs: {
        color: '#3b82f6',
        range: 50,
        time: '',
        month: ''
      },
      submitResult: null
    }
  },
  methods: {
    handleSubmit() {
      // 模拟表单提交
      if (this.validateForm()) {
        this.submitResult = {
          type: 'success',
          message: '表单提交成功！这是一个演示，实际项目中数据会发送到服务器。'
        }
        console.log('Form submitted:', this.formData)
      } else {
        this.submitResult = {
          type: 'error',
          message: '表单验证失败，请检查必填字段。'
        }
      }
    },
    
    validateForm() {
      return this.formData.name && 
             this.formData.email && 
             this.formData.agree
    },
    
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        birthday: '',
        website: '',
        age: '',
        password: '',
        bio: '',
        country: '',
        gender: '',
        hobbies: [],
        agree: false
      }
      this.submitResult = null
    }
  }
}
</script>

<style scoped>
.forms-page {
  min-height: 100%;
  background: white;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
}

.section-title::before {
  content: '';
  width: 4px;
  height: 1.5rem;
  background: linear-gradient(to bottom, #10b981, #059669);
  border-radius: 2px;
  margin-right: 0.75rem;
}

.section-desc {
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.demo-section {
  border-bottom: 1px solid #f3f4f6;
  padding-bottom: 2rem;
}

.demo-section:last-child {
  border-bottom: none;
}

/* 表单容器 */
.demo-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

.demo-preview {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  max-height: 600px;
  overflow-y: auto;
}

.demo-code {
  background: #1f2937;
  border-radius: 12px;
  padding: 1.5rem;
  overflow-x: auto;
  max-height: 600px;
  overflow-y: auto;
}

.demo-code pre {
  margin: 0;
  color: #e5e7eb;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

/* 表单样式 */
.sample-form {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  background: white;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.form-group input:invalid,
.form-group textarea:invalid,
.form-group select:invalid {
  border-color: #ef4444;
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

.form-group fieldset {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1rem;
}

.form-group legend {
  padding: 0 0.5rem;
  font-weight: 600;
  color: #374151;
  font-size: 0.875rem;
}

.radio-label,
.checkbox-label {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-weight: normal !important;
  cursor: pointer;
}

.radio-label input,
.checkbox-label input {
  width: auto;
  margin-right: 0.5rem;
  margin-bottom: 0;
}

.form-link {
  color: #10b981;
  text-decoration: underline;
}

.form-link:hover {
  color: #059669;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.btn-primary {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #059669, #047857);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.btn-secondary {
  background: #f3f4f6;
  color: #374151;
  padding: 0.75rem 1.5rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #e5e7eb;
}

/* 验证演示 */
.validation-demos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.validation-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
}

.validation-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
}

.validation-item input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.validation-note {
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0;
}

.validation-note code {
  background: #f3f4f6;
  padding: 0.125rem 0.25rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}

/* 现代输入类型 */
.modern-inputs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.input-demo {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.input-demo h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
}

.input-demo input {
  margin-bottom: 0.5rem;
}

.input-demo p {
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0.5rem 0 0 0;
}

.color-input {
  width: 60px;
  height: 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.range-input {
  width: 100%;
}

.file-input,
.search-input,
.time-input,
.month-input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}

/* 最佳实践 */
.best-practices {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.practice-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
}

.practice-item h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1.5rem;
}

.practice-example {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.good-example,
.bad-example {
  padding: 1rem;
  border-radius: 8px;
}

.good-example {
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
}

.bad-example {
  background: #fef2f2;
  border: 1px solid #fecaca;
}

.good-example h5,
.bad-example h5 {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.good-example h5 {
  color: #065f46;
}

.bad-example h5 {
  color: #991b1b;
}

.good-example input,
.bad-example input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  margin-top: 0.25rem;
}

.practice-tips ul {
  margin: 0;
  padding-left: 1.5rem;
  color: #4b5563;
  line-height: 1.6;
}

.practice-tips li {
  margin-bottom: 0.5rem;
}

.practice-tips code {
  background: #f3f4f6;
  padding: 0.125rem 0.25rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
}

/* 提交结果 */
.submit-result {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 400px;
}

.submit-result.success {
  background: #ecfdf5;
  border: 1px solid #a7f3d0;
  color: #065f46;
}

.submit-result.error {
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #991b1b;
}

.submit-result p {
  margin: 0;
  flex: 1;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.close-btn:hover {
  opacity: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-container {
    grid-template-columns: 1fr;
  }
  
  .practice-example {
    grid-template-columns: 1fr;
  }
  
  .modern-inputs {
    grid-template-columns: 1fr;
  }
  
  .validation-demos {
    grid-template-columns: 1fr;
  }
  
  .form-actions {
    flex-direction: column;
  }
  
  .submit-result {
    left: 20px;
    right: 20px;
    max-width: none;
  }
}

/* 自定义滚动条 */
.demo-preview::-webkit-scrollbar,
.demo-code::-webkit-scrollbar {
  width: 6px;
}

.demo-preview::-webkit-scrollbar-track,
.demo-code::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

.demo-preview::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.demo-code::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 3px;
}

.demo-preview::-webkit-scrollbar-thumb:hover,
.demo-code::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
