<template>
  <div class="canvas-page">
    <!-- 标题区域 -->
    <div class="header-section p-6 border-b border-gray-200 bg-gradient-to-r from-pink-50 to-rose-50">
      <h1 class="text-3xl font-bold text-gray-900 mb-3">Canvas 绘图编程</h1>
      <p class="text-gray-600 text-lg leading-relaxed">
        掌握Canvas API，实现2D图形绘制、动画效果和交互式图形应用
      </p>
    </div>

    <div class="content-section p-6 space-y-8">
      <!-- 基础绘图 -->
      <section class="demo-section">
        <h2 class="section-title">基础图形绘制</h2>
        <p class="section-desc">
          学习Canvas的基本绘图功能，包括形状、路径和样式设置
        </p>
        
        <div class="demo-container">
          <div class="demo-preview">
            <div class="canvas-demos">
              <div class="canvas-demo">
                <h4>基础形状</h4>
                <canvas ref="basicShapes" width="300" height="200" class="demo-canvas"></canvas>
                <p class="demo-note">矩形、圆形、线条等基础图形</p>
              </div>
              
              <div class="canvas-demo">
                <h4>路径绘制</h4>
                <canvas ref="pathDrawing" width="300" height="200" class="demo-canvas"></canvas>
                <p class="demo-note">使用路径API绘制复杂形状</p>
              </div>
              
              <div class="canvas-demo">
                <h4>渐变和样式</h4>
                <canvas ref="gradients" width="300" height="200" class="demo-canvas"></canvas>
                <p class="demo-note">线性渐变、径向渐变和图案填充</p>
              </div>
              
              <div class="canvas-demo">
                <h4>文字渲染</h4>
                <canvas ref="textDrawing" width="300" height="200" class="demo-canvas"></canvas>
                <p class="demo-note">文字绘制和样式设置</p>
              </div>
            </div>
          </div>
          
          <div class="demo-code">
            <CodeBlock 
              :code="canvasBasicCode" 
              language="markup" 
              title="Canvas 基础绘制"
              :show-line-numbers="true"
            />
          </div>
        </div>
      </section>

      <!-- 交互式绘图 -->
      <section class="demo-section">
        <h2 class="section-title">交互式绘图</h2>
        <p class="section-desc">
          实现鼠标交互和响应式绘图功能
        </p>
        
        <div class="interactive-demos">
          <div class="interactive-demo">
            <h4>自由绘画板</h4>
            <div class="drawing-controls">
              <label>
                颜色:
                <input type="color" v-model="drawingColor" class="color-picker">
              </label>
              <label>
                粗细:
                <input type="range" v-model="lineWidth" min="1" max="20" class="line-width-slider">
                <span>{{ lineWidth }}px</span>
              </label>
              <button @click="clearCanvas" class="clear-btn">清空</button>
            </div>
            <canvas 
              ref="drawingCanvas" 
              width="400" 
              height="300" 
              class="interactive-canvas"
              @mousedown="startDrawing"
              @mousemove="draw"
              @mouseup="stopDrawing"
              @mouseleave="stopDrawing"
              @touchstart="handleTouch"
              @touchmove="handleTouch"
              @touchend="stopDrawing"
            ></canvas>
            <p class="demo-note">点击并拖拽进行绘画</p>
          </div>
          
          <div class="interactive-demo">
            <h4>点击创建图形</h4>
            <div class="shape-controls">
              <label>
                形状:
                <select v-model="selectedShape" class="shape-selector">
                  <option value="circle">圆形</option>
                  <option value="rectangle">矩形</option>
                  <option value="triangle">三角形</option>
                </select>
              </label>
              <button @click="clearShapes" class="clear-btn">清空</button>
            </div>
            <canvas 
              ref="shapesCanvas" 
              width="400" 
              height="300" 
              class="interactive-canvas"
              @click="addShape"
            ></canvas>
            <p class="demo-note">点击画布添加图形</p>
          </div>
        </div>
      </section>

      <!-- 动画效果 -->
      <section class="demo-section">
        <h2 class="section-title">Canvas 动画</h2>
        <p class="section-desc">
          使用requestAnimationFrame创建流畅的动画效果
        </p>
        
        <div class="animation-demos">
          <div class="animation-demo">
            <h4>弹跳小球</h4>
            <canvas ref="bouncingBall" width="400" height="300" class="demo-canvas"></canvas>
            <div class="animation-controls">
              <button @click="toggleBallAnimation" class="control-btn">
                {{ ballAnimationRunning ? '暂停' : '开始' }}
              </button>
            </div>
          </div>
          
          <div class="animation-demo">
            <h4>粒子系统</h4>
            <canvas ref="particleSystem" width="400" height="300" class="demo-canvas"></canvas>
            <div class="animation-controls">
              <button @click="toggleParticleAnimation" class="control-btn">
                {{ particleAnimationRunning ? '暂停' : '开始' }}
              </button>
              <label>
                粒子数量:
                <input type="range" v-model="particleCount" min="10" max="100" @input="updateParticles">
                <span>{{ particleCount }}</span>
              </label>
            </div>
          </div>
          
          <div class="animation-demo">
            <h4>时钟动画</h4>
            <canvas ref="animatedClock" width="300" height="300" class="demo-canvas"></canvas>
            <div class="animation-controls">
              <button @click="toggleClockAnimation" class="control-btn">
                {{ clockAnimationRunning ? '暂停' : '开始' }}
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 实用技巧 -->
      <section class="demo-section">
        <h2 class="section-title">Canvas 实用技巧</h2>
        <div class="tips-grid">
          <div class="tip-card">
            <h4>🎯 性能优化</h4>
            <ul class="tip-list">
              <li>避免在动画循环中创建对象</li>
              <li>使用离屏Canvas进行复杂绘制</li>
              <li>合理使用<code>requestAnimationFrame</code></li>
              <li>减少状态切换次数</li>
              <li>使用整数坐标避免抗锯齿</li>
            </ul>
          </div>
          
          <div class="tip-card">
            <h4>📱 响应式设计</h4>
            <ul class="tip-list">
              <li>使用CSS控制Canvas显示尺寸</li>
              <li>根据设备像素比调整分辨率</li>
              <li>处理触摸事件支持移动端</li>
              <li>考虑不同屏幕密度</li>
              <li>提供键盘导航支持</li>
            </ul>
          </div>
          
          <div class="tip-card">
            <h4>🔧 调试技巧</h4>
            <ul class="tip-list">
              <li>使用浏览器开发者工具</li>
              <li>添加坐标显示辅助调试</li>
              <li>使用<code>console.log</code>输出状态</li>
              <li>绘制边界框辅助定位</li>
              <li>保存和恢复Canvas状态</li>
            </ul>
          </div>
          
          <div class="tip-card">
            <h4>♿ 可访问性</h4>
            <ul class="tip-list">
              <li>为Canvas添加有意义的<code>aria-label</code></li>
              <li>提供替代文本描述内容</li>
              <li>支持键盘操作</li>
              <li>考虑色盲用户需求</li>
              <li>提供高对比度选项</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 代码示例 -->
      <section class="demo-section">
        <h2 class="section-title">完整代码示例</h2>
        <div class="code-examples">
          <div class="code-example">
            <h4>响应式Canvas设置</h4>
            <pre><code>function setupCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  
  // 设置Canvas实际尺寸
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  
  // 缩放绘图上下文
  ctx.scale(dpr, dpr);
  
  // 设置CSS尺寸
  canvas.style.width = rect.width + 'px';
  canvas.style.height = rect.height + 'px';
  
  return ctx;
}</code></pre>
          </div>
          
          <div class="code-example">
            <h4>动画循环模板</h4>
            <pre><code>class CanvasAnimation {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.animationId = null;
    this.isRunning = false;
  }
  
  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.animate();
    }
  }
  
  stop() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }
  
  animate() {
    if (!this.isRunning) return;
    
    // 清空画布
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // 绘制逻辑
    this.draw();
    
    // 更新状态
    this.update();
    
    // 继续动画
    this.animationId = requestAnimationFrame(() => this.animate());
  }
  
  draw() {
    // 具体绘制逻辑
  }
  
  update() {
    // 状态更新逻辑
  }
}</code></pre>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import CodeBlock from '@/components/common/CodeBlock.vue'

export default {
  components: {
    CodeBlock
  },
  name: 'CanvasHTML',
  data() {
    return {
      // 绘图板相关
      isDrawing: false,
      drawingColor: '#3b82f6',
      lineWidth: 3,
      
      // 形状绘制相关
      selectedShape: 'circle',
      shapes: [],
      
      // 动画相关
      ballAnimationRunning: false,
      ballAnimationId: null,
      ball: { x: 50, y: 50, vx: 3, vy: 2, radius: 20 },
      
      particleAnimationRunning: false,
      particleAnimationId: null,
      particles: [],
      particleCount: 50,
      
      clockAnimationRunning: false,
      clockAnimationId: null
    }
  },
  computed: {
    canvasBasicCode() {
      return `<canvas id="myCanvas" width="400" height="300"></canvas>

<script type="text/javascript">
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 绘制矩形
ctx.fillStyle = '#3b82f6';
ctx.fillRect(10, 10, 100, 80);

// 绘制圆形
ctx.beginPath();
ctx.arc(200, 50, 30, 0, 2 * Math.PI);
ctx.fillStyle = '#ef4444';
ctx.fill();

// 绘制线条
ctx.beginPath();
ctx.moveTo(10, 120);
ctx.lineTo(100, 180);
ctx.strokeStyle = '#10b981';
ctx.lineWidth = 3;
ctx.stroke();

// 绘制路径
ctx.beginPath();
ctx.moveTo(150, 120);
ctx.lineTo(200, 120);
ctx.lineTo(175, 180);
ctx.closePath();
ctx.fillStyle = '#f59e0b';
ctx.fill();

// 渐变填充
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, '#8b5cf6');
gradient.addColorStop(1, '#ec4899');
ctx.fillStyle = gradient;
ctx.fillRect(220, 120, 100, 60);

// 文字绘制
ctx.font = '20px Arial';
ctx.fillStyle = '#1f2937';
ctx.fillText('Canvas文字', 10, 250);
<` + `/script>`
    }
  },
  mounted() {
    this.initializeCanvases()
  },
  beforeUnmount() {
    this.stopAllAnimations()
  },
  methods: {
    initializeCanvases() {
      this.$nextTick(() => {
        this.drawBasicShapes()
        this.drawPaths()
        this.drawGradients()
        this.drawText()
        this.initializeParticles()
      })
    },
    
    // 基础绘图示例
    drawBasicShapes() {
      const canvas = this.$refs.basicShapes
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      
      // 矩形
      ctx.fillStyle = '#3b82f6'
      ctx.fillRect(20, 20, 80, 60)
      
      // 圆形
      ctx.beginPath()
      ctx.arc(180, 50, 30, 0, 2 * Math.PI)
      ctx.fillStyle = '#ef4444'
      ctx.fill()
      
      // 线条
      ctx.beginPath()
      ctx.moveTo(50, 120)
      ctx.lineTo(150, 120)
      ctx.strokeStyle = '#10b981'
      ctx.lineWidth = 5
      ctx.stroke()
      
      // 三角形
      ctx.beginPath()
      ctx.moveTo(200, 120)
      ctx.lineTo(250, 120)
      ctx.lineTo(225, 170)
      ctx.closePath()
      ctx.fillStyle = '#f59e0b'
      ctx.fill()
    },
    
    drawPaths() {
      const canvas = this.$refs.pathDrawing
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      
      // 复杂路径
      ctx.beginPath()
      ctx.moveTo(50, 50)
      ctx.bezierCurveTo(50, 50, 150, 20, 200, 100)
      ctx.bezierCurveTo(200, 100, 180, 150, 100, 120)
      ctx.closePath()
      ctx.fillStyle = '#8b5cf6'
      ctx.fill()
      ctx.strokeStyle = '#7c3aed'
      ctx.lineWidth = 2
      ctx.stroke()
    },
    
    drawGradients() {
      const canvas = this.$refs.gradients
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      
      // 线性渐变
      const linearGradient = ctx.createLinearGradient(0, 0, 150, 0)
      linearGradient.addColorStop(0, '#3b82f6')
      linearGradient.addColorStop(1, '#8b5cf6')
      ctx.fillStyle = linearGradient
      ctx.fillRect(20, 20, 120, 60)
      
      // 径向渐变
      const radialGradient = ctx.createRadialGradient(200, 50, 0, 200, 50, 40)
      radialGradient.addColorStop(0, '#fbbf24')
      radialGradient.addColorStop(1, '#f59e0b')
      ctx.fillStyle = radialGradient
      ctx.beginPath()
      ctx.arc(200, 50, 40, 0, 2 * Math.PI)
      ctx.fill()
      
      // 图案填充
      const patternCanvas = document.createElement('canvas')
      patternCanvas.width = 20
      patternCanvas.height = 20
      const patternCtx = patternCanvas.getContext('2d')
      patternCtx.fillStyle = '#ec4899'
      patternCtx.fillRect(0, 0, 10, 10)
      patternCtx.fillRect(10, 10, 10, 10)
      
      const pattern = ctx.createPattern(patternCanvas, 'repeat')
      ctx.fillStyle = pattern
      ctx.fillRect(50, 120, 100, 60)
    },
    
    drawText() {
      const canvas = this.$refs.textDrawing
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      
      // 基础文字
      ctx.font = '24px Arial'
      ctx.fillStyle = '#1f2937'
      ctx.fillText('Canvas文字', 20, 40)
      
      // 描边文字
      ctx.font = 'bold 20px serif'
      ctx.strokeStyle = '#ef4444'
      ctx.lineWidth = 2
      ctx.strokeText('描边文字', 20, 80)
      
      // 阴影文字
      ctx.shadowColor = '#6b7280'
      ctx.shadowBlur = 5
      ctx.shadowOffsetX = 2
      ctx.shadowOffsetY = 2
      ctx.fillStyle = '#3b82f6'
      ctx.fillText('阴影文字', 20, 120)
      
      // 重置阴影
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0
      ctx.shadowOffsetX = 0
      ctx.shadowOffsetY = 0
      
      // 旋转文字
      ctx.save()
      ctx.translate(200, 150)
      ctx.rotate(-Math.PI / 6)
      ctx.fillStyle = '#10b981'
      ctx.fillText('旋转文字', 0, 0)
      ctx.restore()
    },
    
    // 交互式绘图
    startDrawing(event) {
      this.isDrawing = true
      const canvas = this.$refs.drawingCanvas
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      
      const ctx = canvas.getContext('2d')
      ctx.beginPath()
      ctx.moveTo(x, y)
    },
    
    draw(event) {
      if (!this.isDrawing) return
      
      const canvas = this.$refs.drawingCanvas
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      
      const ctx = canvas.getContext('2d')
      ctx.lineTo(x, y)
      ctx.strokeStyle = this.drawingColor
      ctx.lineWidth = this.lineWidth
      ctx.lineCap = 'round'
      ctx.stroke()
    },
    
    stopDrawing() {
      this.isDrawing = false
    },
    
    handleTouch(event) {
      event.preventDefault()
      const touch = event.touches[0]
      if (touch) {
        const mouseEvent = new MouseEvent(event.type === 'touchstart' ? 'mousedown' : 'mousemove', {
          clientX: touch.clientX,
          clientY: touch.clientY
        })
        event.target.dispatchEvent(mouseEvent)
      }
    },
    
    clearCanvas() {
      const canvas = this.$refs.drawingCanvas
      const ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    },
    
    addShape(event) {
      const canvas = this.$refs.shapesCanvas
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      
      const shape = {
        type: this.selectedShape,
        x: x,
        y: y,
        color: `hsl(${Math.random() * 360}, 70%, 60%)`
      }
      
      this.shapes.push(shape)
      this.drawShapes()
    },
    
    drawShapes() {
      const canvas = this.$refs.shapesCanvas
      const ctx = canvas.getContext('2d')
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      this.shapes.forEach(shape => {
        ctx.fillStyle = shape.color
        ctx.beginPath()
        
        switch (shape.type) {
          case 'circle':
            ctx.arc(shape.x, shape.y, 20, 0, 2 * Math.PI)
            break
          case 'rectangle':
            ctx.rect(shape.x - 20, shape.y - 20, 40, 40)
            break
          case 'triangle':
            ctx.moveTo(shape.x, shape.y - 20)
            ctx.lineTo(shape.x - 20, shape.y + 20)
            ctx.lineTo(shape.x + 20, shape.y + 20)
            ctx.closePath()
            break
        }
        
        ctx.fill()
      })
    },
    
    clearShapes() {
      this.shapes = []
      this.drawShapes()
    },
    
    // 动画相关
    toggleBallAnimation() {
      if (this.ballAnimationRunning) {
        this.stopBallAnimation()
      } else {
        this.startBallAnimation()
      }
    },
    
    startBallAnimation() {
      this.ballAnimationRunning = true
      const canvas = this.$refs.bouncingBall
      const ctx = canvas.getContext('2d')
      
      const animate = () => {
        if (!this.ballAnimationRunning) return
        
        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        // 更新球的位置
        this.ball.x += this.ball.vx
        this.ball.y += this.ball.vy
        
        // 边界碰撞检测
        if (this.ball.x + this.ball.radius > canvas.width || this.ball.x - this.ball.radius < 0) {
          this.ball.vx = -this.ball.vx
        }
        if (this.ball.y + this.ball.radius > canvas.height || this.ball.y - this.ball.radius < 0) {
          this.ball.vy = -this.ball.vy
        }
        
        // 绘制球
        ctx.beginPath()
        ctx.arc(this.ball.x, this.ball.y, this.ball.radius, 0, 2 * Math.PI)
        ctx.fillStyle = '#ef4444'
        ctx.fill()
        
        this.ballAnimationId = requestAnimationFrame(animate)
      }
      
      animate()
    },
    
    stopBallAnimation() {
      this.ballAnimationRunning = false
      if (this.ballAnimationId) {
        cancelAnimationFrame(this.ballAnimationId)
      }
    },
    
    toggleParticleAnimation() {
      if (this.particleAnimationRunning) {
        this.stopParticleAnimation()
      } else {
        this.startParticleAnimation()
      }
    },
    
    initializeParticles() {
      this.particles = []
      const canvas = this.$refs.particleSystem
      if (!canvas) return
      
      for (let i = 0; i < this.particleCount; i++) {
        this.particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: Math.random(),
          decay: Math.random() * 0.02 + 0.005
        })
      }
    },
    
    updateParticles() {
      this.initializeParticles()
    },
    
    startParticleAnimation() {
      this.particleAnimationRunning = true
      const canvas = this.$refs.particleSystem
      const ctx = canvas.getContext('2d')
      
      const animate = () => {
        if (!this.particleAnimationRunning) return
        
        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        // 更新和绘制粒子
        this.particles.forEach(particle => {
          // 更新位置
          particle.x += particle.vx
          particle.y += particle.vy
          particle.life -= particle.decay
          
          // 重置粒子
          if (particle.life <= 0) {
            particle.x = Math.random() * canvas.width
            particle.y = Math.random() * canvas.height
            particle.life = 1
          }
          
          // 边界处理
          if (particle.x < 0 || particle.x > canvas.width) particle.vx = -particle.vx
          if (particle.y < 0 || particle.y > canvas.height) particle.vy = -particle.vy
          
          // 绘制粒子
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.life * 3, 0, 2 * Math.PI)
          ctx.fillStyle = `hsla(${particle.life * 360}, 70%, 60%, ${particle.life})`
          ctx.fill()
        })
        
        this.particleAnimationId = requestAnimationFrame(animate)
      }
      
      animate()
    },
    
    stopParticleAnimation() {
      this.particleAnimationRunning = false
      if (this.particleAnimationId) {
        cancelAnimationFrame(this.particleAnimationId)
      }
    },
    
    toggleClockAnimation() {
      if (this.clockAnimationRunning) {
        this.stopClockAnimation()
      } else {
        this.startClockAnimation()
      }
    },
    
    startClockAnimation() {
      this.clockAnimationRunning = true
      const canvas = this.$refs.animatedClock
      const ctx = canvas.getContext('2d')
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = 100
      
      const animate = () => {
        if (!this.clockAnimationRunning) return
        
        // 清空画布
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        const now = new Date()
        const hours = now.getHours() % 12
        const minutes = now.getMinutes()
        const seconds = now.getSeconds()
        
        // 绘制表盘
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
        ctx.strokeStyle = '#374151'
        ctx.lineWidth = 3
        ctx.stroke()
        
        // 绘制小时刻度
        for (let i = 0; i < 12; i++) {
          const angle = (i * Math.PI) / 6
          const x1 = centerX + Math.cos(angle - Math.PI / 2) * (radius - 20)
          const y1 = centerY + Math.sin(angle - Math.PI / 2) * (radius - 20)
          const x2 = centerX + Math.cos(angle - Math.PI / 2) * (radius - 10)
          const y2 = centerY + Math.sin(angle - Math.PI / 2) * (radius - 10)
          
          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.strokeStyle = '#374151'
          ctx.lineWidth = 2
          ctx.stroke()
        }
        
        // 绘制时针
        const hourAngle = (hours * Math.PI) / 6 + (minutes * Math.PI) / 360
        const hourX = centerX + Math.cos(hourAngle - Math.PI / 2) * 50
        const hourY = centerY + Math.sin(hourAngle - Math.PI / 2) * 50
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(hourX, hourY)
        ctx.strokeStyle = '#1f2937'
        ctx.lineWidth = 4
        ctx.stroke()
        
        // 绘制分针
        const minuteAngle = (minutes * Math.PI) / 30
        const minuteX = centerX + Math.cos(minuteAngle - Math.PI / 2) * 70
        const minuteY = centerY + Math.sin(minuteAngle - Math.PI / 2) * 70
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(minuteX, minuteY)
        ctx.strokeStyle = '#3b82f6'
        ctx.lineWidth = 3
        ctx.stroke()
        
        // 绘制秒针
        const secondAngle = (seconds * Math.PI) / 30
        const secondX = centerX + Math.cos(secondAngle - Math.PI / 2) * 80
        const secondY = centerY + Math.sin(secondAngle - Math.PI / 2) * 80
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(secondX, secondY)
        ctx.strokeStyle = '#ef4444'
        ctx.lineWidth = 1
        ctx.stroke()
        
        // 绘制中心点
        ctx.beginPath()
        ctx.arc(centerX, centerY, 5, 0, 2 * Math.PI)
        ctx.fillStyle = '#374151'
        ctx.fill()
        
        this.clockAnimationId = requestAnimationFrame(animate)
      }
      
      animate()
    },
    
    stopClockAnimation() {
      this.clockAnimationRunning = false
      if (this.clockAnimationId) {
        cancelAnimationFrame(this.clockAnimationId)
      }
    },
    
    stopAllAnimations() {
      this.stopBallAnimation()
      this.stopParticleAnimation()
      this.stopClockAnimation()
    }
  }
}
</script>

<style scoped>
.canvas-page {
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
  background: linear-gradient(to bottom, #ec4899, #be185d);
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

/* Canvas演示 */
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
}

.demo-code {
  background: #1f2937;
  border-radius: 12px;
  padding: 1.5rem;
  overflow-x: auto;
}

.demo-code pre {
  margin: 0;
  color: #e5e7eb;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

.canvas-demos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.canvas-demo {
  text-align: center;
}

.canvas-demo h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
}

.demo-canvas {
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: white;
  margin-bottom: 0.5rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.demo-note {
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0.5rem 0 0 0;
}

/* 交互式演示 */
.interactive-demos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.interactive-demo {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
}

.interactive-demo h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
}

.drawing-controls,
.shape-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.drawing-controls label,
.shape-controls label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
}

.color-picker {
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.line-width-slider {
  width: 80px;
}

.shape-selector {
  padding: 0.25rem 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background: white;
}

.clear-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.clear-btn:hover {
  background: #dc2626;
}

.interactive-canvas {
  border: 2px solid #d1d5db;
  border-radius: 8px;
  background: white;
  cursor: crosshair;
  display: block;
  margin: 0 auto;
}

.interactive-canvas:hover {
  border-color: #6b7280;
}

/* 动画演示 */
.animation-demos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.animation-demo {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.animation-demo h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
}

.animation-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.animation-controls label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
}

.control-btn {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.control-btn:hover {
  background: #2563eb;
}

/* 技巧网格 */
.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.tip-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
}

.tip-card h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tip-list {
  margin: 0;
  padding-left: 1.5rem;
  color: #4b5563;
  line-height: 1.6;
}

.tip-list li {
  margin-bottom: 0.5rem;
}

.tip-list code {
  background: #f3f4f6;
  padding: 0.125rem 0.25rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
}

/* 代码示例 */
.code-examples {
  display: grid;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.code-example {
  background: #1f2937;
  border-radius: 12px;
  padding: 1.5rem;
  overflow-x: auto;
}

.code-example h4 {
  color: #f9fafb;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.code-example pre {
  margin: 0;
  color: #e5e7eb;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-container {
    grid-template-columns: 1fr;
  }
  
  .interactive-demos {
    grid-template-columns: 1fr;
  }
  
  .animation-demos {
    grid-template-columns: 1fr;
  }
  
  .tips-grid {
    grid-template-columns: 1fr;
  }
  
  .canvas-demos {
    grid-template-columns: 1fr;
  }
  
  .drawing-controls,
  .shape-controls,
  .animation-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .interactive-canvas,
  .demo-canvas {
    max-width: 100%;
    height: auto;
  }
}

/* 自定义滚动条 */
.demo-code::-webkit-scrollbar,
.code-example::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.demo-code::-webkit-scrollbar-track,
.code-example::-webkit-scrollbar-track {
  background: #374151;
  border-radius: 3px;
}

.demo-code::-webkit-scrollbar-thumb,
.code-example::-webkit-scrollbar-thumb {
  background: #6b7280;
  border-radius: 3px;
}

.demo-code::-webkit-scrollbar-thumb:hover,
.code-example::-webkit-scrollbar-thumb:hover {
  background: #9ca3af;
}
</style>
