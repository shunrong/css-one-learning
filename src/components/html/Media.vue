<template>
  <div class="media-page">
    <!-- 标题区域 -->
    <div class="header-section p-6 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-violet-50">
      <h1 class="text-3xl font-bold text-gray-900 mb-3">多媒体内容处理</h1>
      <p class="text-gray-600 text-lg leading-relaxed">
        掌握音频、视频、图片等多媒体元素的使用技巧和优化方案
      </p>
    </div>

    <div class="content-section p-6 space-y-8">
      <!-- 图片处理 -->
      <section class="demo-section">
        <h2 class="section-title">响应式图片</h2>
        <p class="section-desc">
          使用现代图片标签实现自适应显示和性能优化
        </p>
        
        <div class="demo-container">
          <div class="demo-preview">
            <div class="image-demos">
              <div class="image-demo">
                <h4>基础图片</h4>
                <img 
                  src="https://picsum.photos/300/200?random=1" 
                  alt="示例图片"
                  class="demo-img"
                  loading="lazy"
                >
                <p class="demo-note">使用 <code>loading="lazy"</code> 实现懒加载</p>
              </div>
              
              <div class="image-demo">
                <h4>响应式图片</h4>
                <picture class="demo-picture">
                  <source 
                    media="(max-width: 768px)" 
                    srcset="https://picsum.photos/300/200?random=2"
                  >
                  <source 
                    media="(min-width: 769px)" 
                    srcset="https://picsum.photos/600/400?random=2"
                  >
                  <img 
                    src="https://picsum.photos/600/400?random=2" 
                    alt="响应式图片"
                    class="demo-img"
                  >
                </picture>
                <p class="demo-note">根据屏幕尺寸加载不同图片</p>
              </div>
              
              <div class="image-demo">
                <h4>多倍率图片</h4>
                <img 
                  srcset="https://picsum.photos/300/200?random=3 1x,
                          https://picsum.photos/600/400?random=3 2x"
                  src="https://picsum.photos/300/200?random=3"
                  alt="高分辨率图片"
                  class="demo-img"
                >
                <p class="demo-note">为高分辨率屏幕提供清晰图片</p>
              </div>
              
              <div class="image-demo">
                <h4>现代图片格式</h4>
                <picture class="demo-picture">
                  <source 
                    srcset="https://picsum.photos/300/200?random=4" 
                    type="image/webp"
                  >
                  <source 
                    srcset="https://picsum.photos/300/200?random=4" 
                    type="image/avif"
                  >
                  <img 
                    src="https://picsum.photos/300/200?random=4" 
                    alt="现代格式图片"
                    class="demo-img"
                  >
                </picture>
                <p class="demo-note">优先使用WebP/AVIF，降级到JPEG</p>
              </div>
            </div>
          </div>
          
          <div class="demo-code">
            <pre><code>&lt;!-- 基础图片 --&gt;
&lt;img src="image.jpg" 
     alt="描述文字" 
     loading="lazy"&gt;

&lt;!-- 响应式图片 --&gt;
&lt;picture&gt;
  &lt;source media="(max-width: 768px)" 
          srcset="mobile.jpg"&gt;
  &lt;source media="(min-width: 769px)" 
          srcset="desktop.jpg"&gt;
  &lt;img src="desktop.jpg" alt="响应式图片"&gt;
&lt;/picture&gt;

&lt;!-- 多倍率图片 --&gt;
&lt;img srcset="image.jpg 1x,
             image@2x.jpg 2x"
     src="image.jpg"
     alt="高分辨率图片"&gt;

&lt;!-- 现代图片格式 --&gt;
&lt;picture&gt;
  &lt;source srcset="image.avif" type="image/avif"&gt;
  &lt;source srcset="image.webp" type="image/webp"&gt;
  &lt;img src="image.jpg" alt="现代格式"&gt;
&lt;/picture&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 音频播放 -->
      <section class="demo-section">
        <h2 class="section-title">音频播放</h2>
        <p class="section-desc">
          使用HTML5音频标签创建自定义播放器
        </p>
        
        <div class="demo-container">
          <div class="demo-preview">
            <div class="audio-demos">
              <div class="audio-demo">
                <h4>基础音频播放器</h4>
                <audio controls class="audio-player">
                  <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav">
                  <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" type="audio/mpeg">
                  您的浏览器不支持音频播放。
                </audio>
                <p class="demo-note">提供多种格式确保兼容性</p>
              </div>
              
              <div class="audio-demo">
                <h4>自定义音频控件</h4>
                <div class="custom-audio-player">
                  <audio ref="customAudio" @timeupdate="updateProgress" @loadedmetadata="audioLoaded">
                    <source src="https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" type="audio/wav">
                  </audio>
                  
                  <div class="audio-controls">
                    <button @click="togglePlay" class="play-btn">
                      {{ isPlaying ? '⏸️' : '▶️' }}
                    </button>
                    
                    <div class="progress-container">
                      <div class="progress-bar">
                        <div 
                          class="progress-fill" 
                          :style="{ width: progressPercentage + '%' }"
                        ></div>
                        <input 
                          type="range" 
                          class="progress-slider"
                          :value="progressPercentage"
                          @input="seekAudio"
                          min="0" 
                          max="100"
                        >
                      </div>
                      <span class="time-display">
                        {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
                      </span>
                    </div>
                    
                    <div class="volume-control">
                      🔊
                      <input 
                        type="range" 
                        v-model="volume"
                        @input="updateVolume"
                        min="0" 
                        max="100"
                        class="volume-slider"
                      >
                    </div>
                  </div>
                </div>
                <p class="demo-note">使用JavaScript创建自定义控件</p>
              </div>
            </div>
          </div>
          
          <div class="demo-code">
            <pre><code>&lt;!-- 基础音频 --&gt;
&lt;audio controls&gt;
  &lt;source src="audio.mp3" type="audio/mpeg"&gt;
  &lt;source src="audio.ogg" type="audio/ogg"&gt;
  您的浏览器不支持音频播放。
&lt;/audio&gt;

&lt;!-- 自动播放和循环 --&gt;
&lt;audio controls autoplay loop muted&gt;
  &lt;source src="background.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;

&lt;!-- 预加载控制 --&gt;
&lt;audio controls preload="metadata"&gt;
  &lt;source src="podcast.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;

&lt;!-- JavaScript控制 --&gt;
&lt;audio id="myAudio"&gt;
  &lt;source src="song.mp3" type="audio/mpeg"&gt;
&lt;/audio&gt;

&lt;script&gt;
const audio = document.getElementById('myAudio');
audio.volume = 0.5;  // 设置音量
audio.play();        // 播放
audio.pause();       // 暂停
&lt;/script&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 视频播放 -->
      <section class="demo-section">
        <h2 class="section-title">视频播放</h2>
        <p class="section-desc">
          使用HTML5视频标签实现视频播放和自定义控制
        </p>
        
        <div class="demo-container">
          <div class="demo-preview">
            <div class="video-demos">
              <div class="video-demo">
                <h4>基础视频播放器</h4>
                <video 
                  controls 
                  class="demo-video"
                  poster="https://picsum.photos/400/225?random=5"
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.webm" type="video/webm">
                  <track kind="captions" src="captions.vtt" srclang="zh" label="中文字幕">
                  您的浏览器不支持视频播放。
                </video>
                <p class="demo-note">包含海报图和字幕支持</p>
              </div>
              
              <div class="video-demo">
                <h4>响应式视频</h4>
                <div class="responsive-video">
                  <video 
                    controls 
                    class="responsive-video-element"
                    poster="https://picsum.photos/400/225?random=6"
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4">
                    您的浏览器不支持视频播放。
                  </video>
                </div>
                <p class="demo-note">自适应容器尺寸，保持宽高比</p>
              </div>
            </div>
          </div>
          
          <div class="demo-code">
            <pre><code>&lt;!-- 基础视频 --&gt;
&lt;video controls width="400" height="225"&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;source src="video.webm" type="video/webm"&gt;
  您的浏览器不支持视频播放。
&lt;/video&gt;

&lt;!-- 带海报图和字幕 --&gt;
&lt;video controls poster="poster.jpg"&gt;
  &lt;source src="movie.mp4" type="video/mp4"&gt;
  &lt;track kind="captions" 
         src="captions.vtt" 
         srclang="zh" 
         label="中文字幕"&gt;
&lt;/video&gt;

&lt;!-- 响应式视频 --&gt;
.responsive-video {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
}

.responsive-video video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

&lt;!-- 自动播放（需要静音） --&gt;
&lt;video autoplay muted loop playsinline&gt;
  &lt;source src="background.mp4" type="video/mp4"&gt;
&lt;/video&gt;</code></pre>
          </div>
        </div>
      </section>

      <!-- 嵌入内容 -->
      <section class="demo-section">
        <h2 class="section-title">嵌入式内容</h2>
        <p class="section-desc">
          使用iframe和object标签嵌入外部内容
        </p>
        
        <div class="embed-demos">
          <div class="embed-demo">
            <h4>YouTube视频嵌入</h4>
            <div class="responsive-embed">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="YouTube video" 
                frameborder="0" 
                allowfullscreen
                loading="lazy"
              ></iframe>
            </div>
            <p class="demo-note">使用响应式容器包装iframe</p>
          </div>
          
          <div class="embed-demo">
            <h4>地图嵌入</h4>
            <div class="responsive-embed">
              <iframe 
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&amp;layer=mapnik" 
                title="地图"
                loading="lazy"
              ></iframe>
            </div>
            <p class="demo-note">嵌入交互式地图</p>
          </div>
        </div>
        
        <div class="demo-code-section">
          <pre><code>&lt;!-- 响应式iframe --&gt;
&lt;div class="responsive-embed"&gt;
  &lt;iframe src="https://example.com" 
          title="页面标题"
          loading="lazy"
          allowfullscreen&gt;
  &lt;/iframe&gt;
&lt;/div&gt;

&lt;style&gt;
.responsive-embed {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
}

.responsive-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
&lt;/style&gt;

&lt;!-- 安全嵌入 --&gt;
&lt;iframe src="https://trusted-site.com"
        sandbox="allow-scripts allow-same-origin"
        referrerpolicy="no-referrer"&gt;
&lt;/iframe&gt;</code></pre>
        </div>
      </section>

      <!-- 性能优化 -->
      <section class="demo-section">
        <h2 class="section-title">性能优化技巧</h2>
        <div class="optimization-tips">
          <div class="tip-category">
            <h4>🖼️ 图片优化</h4>
            <ul class="tip-list">
              <li>使用现代图片格式（WebP、AVIF）</li>
              <li>实现懒加载（<code>loading="lazy"</code>）</li>
              <li>提供多种分辨率（<code>srcset</code>）</li>
              <li>优化图片尺寸和质量</li>
              <li>使用适当的<code>sizes</code>属性</li>
            </ul>
          </div>
          
          <div class="tip-category">
            <h4>🎵 音频优化</h4>
            <ul class="tip-list">
              <li>选择合适的音频格式（MP3、OGG、AAC）</li>
              <li>控制音频质量和文件大小</li>
              <li>使用<code>preload</code>属性控制预加载</li>
              <li>避免自动播放（影响用户体验）</li>
              <li>提供音频控制选项</li>
            </ul>
          </div>
          
          <div class="tip-category">
            <h4>🎬 视频优化</h4>
            <ul class="tip-list">
              <li>使用多种视频格式（MP4、WebM）</li>
              <li>提供合适的海报图</li>
              <li>控制视频分辨率和码率</li>
              <li>使用<code>playsinline</code>属性</li>
              <li>添加字幕提升可访问性</li>
            </ul>
          </div>
          
          <div class="tip-category">
            <h4>🔗 嵌入优化</h4>
            <ul class="tip-list">
              <li>使用<code>loading="lazy"</code>延迟加载</li>
              <li>设置合适的<code>sandbox</code>属性</li>
              <li>控制<code>referrerpolicy</code></li>
              <li>提供有意义的<code>title</code></li>
              <li>考虑隐私和安全问题</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaHTML',
  data() {
    return {
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      volume: 50
    }
  },
  computed: {
    progressPercentage() {
      return this.duration > 0 ? (this.currentTime / this.duration) * 100 : 0
    }
  },
  methods: {
    togglePlay() {
      const audio = this.$refs.customAudio
      if (audio.paused) {
        audio.play()
        this.isPlaying = true
      } else {
        audio.pause()
        this.isPlaying = false
      }
    },
    
    updateProgress() {
      const audio = this.$refs.customAudio
      this.currentTime = audio.currentTime
    },
    
    audioLoaded() {
      const audio = this.$refs.customAudio
      this.duration = audio.duration
    },
    
    seekAudio(event) {
      const audio = this.$refs.customAudio
      const percentage = event.target.value
      audio.currentTime = (percentage / 100) * this.duration
    },
    
    updateVolume() {
      const audio = this.$refs.customAudio
      audio.volume = this.volume / 100
    },
    
    formatTime(time) {
      if (isNaN(time)) return '0:00'
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }
  }
}
</script>

<style scoped>
.media-page {
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
  background: linear-gradient(to bottom, #8b5cf6, #7c3aed);
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

/* 演示容器 */
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

.demo-code-section {
  margin-top: 1.5rem;
  background: #1f2937;
  border-radius: 12px;
  padding: 1.5rem;
  overflow-x: auto;
}

.demo-code-section pre {
  margin: 0;
  color: #e5e7eb;
  font-family: 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.6;
}

/* 图片演示 */
.image-demos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.image-demo {
  text-align: center;
}

.image-demo h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
}

.demo-img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
}

.demo-picture {
  display: block;
}

.demo-note {
  font-size: 0.75rem;
  color: #6b7280;
  margin: 0.5rem 0 0 0;
}

.demo-note code {
  background: #f3f4f6;
  padding: 0.125rem 0.25rem;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}

/* 音频演示 */
.audio-demos {
  space-y: 2rem;
}

.audio-demo {
  margin-bottom: 2rem;
}

.audio-demo h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
}

.audio-player {
  width: 100%;
  margin-bottom: 0.5rem;
}

/* 自定义音频播放器 */
.custom-audio-player {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 1.5rem;
}

.audio-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.play-btn {
  background: #8b5cf6;
  color: white;
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.play-btn:hover {
  background: #7c3aed;
  transform: scale(1.05);
}

.progress-container {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.progress-bar {
  position: relative;
  flex: 1;
  height: 6px;
  background: #e5e7eb;
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #8b5cf6;
  border-radius: 3px;
  transition: width 0.1s ease;
}

.progress-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.time-display {
  font-size: 0.875rem;
  color: #6b7280;
  font-family: 'Courier New', monospace;
  min-width: 80px;
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
}

.volume-slider {
  width: 80px;
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}

/* 视频演示 */
.video-demos {
  space-y: 2rem;
}

.video-demo {
  margin-bottom: 2rem;
}

.video-demo h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
}

.demo-video {
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.responsive-video {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.responsive-video-element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

/* 嵌入演示 */
.embed-demos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.embed-demo h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
}

.responsive-embed {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
}

.responsive-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
}

/* 优化技巧 */
.optimization-tips {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.tip-category {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
}

.tip-category h4 {
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

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-container {
    grid-template-columns: 1fr;
  }
  
  .image-demos {
    grid-template-columns: 1fr;
  }
  
  .embed-demos {
    grid-template-columns: 1fr;
  }
  
  .optimization-tips {
    grid-template-columns: 1fr;
  }
  
  .audio-controls {
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  
  .progress-container {
    order: 3;
    width: 100%;
  }
  
  .volume-control {
    order: 2;
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
