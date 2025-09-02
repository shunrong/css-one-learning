# 🚀 Vercel 部署指南

## 📋 部署前准备

### 1. 项目配置
- ✅ 已配置 `vercel.json` 文件
- ✅ 已优化 `.gitignore` 文件
- ✅ 已创建 `.vercelignore` 文件
- ✅ 构建脚本配置正确

### 2. 环境要求
- Node.js 18+ 
- npm 或 yarn 包管理器
- 项目已推送到 GitHub

## 🔧 Vercel 部署步骤

### 方式一：通过 Vercel Dashboard（推荐）

1. **登录 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用你的 GitHub 账号登录

2. **导入项目**
   - 点击 "New Project"
   - 选择 "Import Git Repository"
   - 找到并选择你的 `css-one-learning` 项目

3. **配置项目**
   - **Framework Preset**: Vite（会自动检测）
   - **Build Command**: `npm run build`（已自动填充）
   - **Output Directory**: `dist`（已自动填充）
   - **Install Command**: `npm install`（已自动填充）

4. **部署**
   - 点击 "Deploy" 按钮
   - 等待部署完成（通常 2-3 分钟）

### 方式二：通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 在项目根目录运行
vercel

# 按照提示配置项目
```

## ⚡ 自动部署配置

部署完成后，Vercel 会自动：

- 🔄 **监听 GitHub 推送** - 每次 push 到 main 分支都会触发重新部署
- 🌿 **预览部署** - Pull Request 会创建预览环境
- 📊 **部署状态** - 在 GitHub commit 中显示部署状态

## 🛠️ 项目特定配置

### SPA 路由支持
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```
此配置确保 Vue Router 的客户端路由正常工作。

### 静态资源缓存
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```
对静态资源设置长期缓存。

## 🔍 部署验证

部署完成后检查：

1. ✅ 主页正常加载
2. ✅ 路由导航工作正常
3. ✅ CSS 样式正确显示
4. ✅ 所有模块功能正常
5. ✅ 移动端响应式正常

## 🐛 常见问题

### 构建失败
- 检查 Node.js 版本（需要 18+）
- 确认 `package.json` 中的依赖版本
- 查看构建日志中的具体错误

### 路由 404 错误
- 确认 `vercel.json` 中的 rewrites 配置
- 检查 Vue Router 的 history 模式配置

### 样式缺失
- 确认 Tailwind CSS 配置正确
- 检查 PostCSS 插件是否正常工作

## 📱 域名配置

部署后可以：
- 使用 Vercel 提供的 `.vercel.app` 域名
- 配置自定义域名（在 Vercel Dashboard 中设置）

## 🎯 性能优化建议

1. **代码分割** - Vite 已自动处理
2. **图片优化** - 考虑使用 WebP 格式
3. **CDN 加速** - Vercel 全球 CDN 自动生效
4. **Gzip 压缩** - Vercel 自动启用

---

现在你的项目已经准备好部署到 Vercel 了！🎉
