# 部署指南 - 将网站部署到 Vercel 和 GitHub

## 📋 准备工作

在开始之前，请确保：
1. ✅ 已安装 Git
2. ✅ 已注册 GitHub 账号
3. ✅ 已注册 Vercel 账号（可以使用 GitHub 账号登录）

## 🚀 部署步骤

### 第一步：提交代码到 Git

1. **检查当前状态**
   ```bash
   cd /Users/313bro/Desktop/programming/Deveportfolio/resume-website
   git status
   ```

2. **添加所有文件到 Git**
   ```bash
   git add .
   ```

3. **提交更改**
   ```bash
   git commit -m "准备部署：添加完整的中英文双语支持"
   ```

### 第二步：创建 GitHub 仓库

1. **在 GitHub 上创建新仓库**
   - 访问 [github.com](https://github.com)
   - 点击右上角的 "+" → "New repository"
   - 仓库名称：例如 `resume-website` 或 `zedli-portfolio`
   - 选择 Public（公开）或 Private（私有）
   - **不要**勾选 "Initialize this repository with a README"（因为本地已有代码）
   - 点击 "Create repository"

2. **连接本地仓库到 GitHub**
   
   在终端运行（将 `YOUR_USERNAME` 和 `YOUR_REPO_NAME` 替换为你的实际值）：
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

   例如：
   ```bash
   git remote add origin https://github.com/zedli-data/resume-website.git
   git branch -M main
   git push -u origin main
   ```

### 第三步：部署到 Vercel

#### 方法 A：通过 GitHub 集成（推荐）

1. **登录 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New..." → "Project"
   - 在 "Import Git Repository" 中找到你刚创建的 GitHub 仓库
   - 点击 "Import"

3. **配置项目**
   - **Framework Preset**: Vercel 会自动检测为 Next.js
   - **Root Directory**: 保持默认（`./`）
   - **Build Command**: `npm run build`（自动填充）
   - **Output Directory**: `.next`（自动填充）
   - **Install Command**: `npm install`（自动填充）

4. **环境变量（可选）**
   - 如果你使用了联系表单服务（如 Formspree），可以在这里添加：
     - `NEXT_PUBLIC_FORM_ENDPOINT`: 你的表单端点 URL

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成（通常 1-2 分钟）

6. **获取网站链接**
   - 部署完成后，你会得到一个类似 `your-site.vercel.app` 的链接
   - 这个链接就是你的网站地址！

#### 方法 B：使用 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署**
   ```bash
   cd /Users/313bro/Desktop/programming/Deveportfolio/resume-website
   vercel
   ```

4. **生产环境部署**
   ```bash
   vercel --prod
   ```

### 第四步：自定义域名（可选）

1. **在 Vercel 项目中**
   - 进入项目设置 → "Domains"
   - 添加你的自定义域名（如 `zedli.com`）
   - 按照提示配置 DNS 记录

## 🔄 更新网站

以后每次更新网站内容：

1. **修改代码**
   ```bash
   # 编辑 src/content/profile.ts 或其他文件
   ```

2. **提交并推送**
   ```bash
   git add .
   git commit -m "更新个人资料内容"
   git push
   ```

3. **自动部署**
   - Vercel 会自动检测 GitHub 的更改
   - 自动触发新的构建和部署
   - 通常 1-2 分钟后新版本就会上线

## ✅ 验证部署

部署完成后，检查：

- [ ] 网站可以正常访问
- [ ] 所有页面都能正常加载
- [ ] 中英文切换功能正常
- [ ] 深色/浅色模式切换正常
- [ ] 项目详情模态框可以打开
- [ ] 联系表单可以提交（如果配置了）
- [ ] 简历 PDF 可以下载

## 🐛 常见问题

### 问题 1：构建失败

**解决方案**：
- 检查 `package.json` 中的依赖是否正确
- 确保 `next.config.ts` 配置正确
- 查看 Vercel 构建日志中的错误信息

### 问题 2：图片不显示

**解决方案**：
- 确保图片在 `public/` 目录下
- 检查图片路径是否正确
- 确保图片文件名没有特殊字符

### 问题 3：样式丢失

**解决方案**：
- 确保 `globals.css` 正确导入 Tailwind
- 检查 `tailwind.config.ts` 配置
- 清除浏览器缓存

### 问题 4：路由不工作

**解决方案**：
- 对于静态导出，确保使用相对路径
- 检查 `next.config.ts` 中的 `trailingSlash` 设置

## 📝 下一步

部署成功后，你可以：

1. **分享链接**：将 Vercel 提供的链接添加到你的简历和 LinkedIn
2. **SEO 优化**：确保搜索引擎可以索引你的网站
3. **性能监控**：使用 Vercel Analytics 监控网站性能
4. **自定义域名**：使用你自己的域名（如 `zedli.com`）

## 🎉 完成！

恭喜！你的个人网站现在已经在线了！

如果需要帮助，可以：
- 查看 Vercel 文档：https://vercel.com/docs
- 查看 Next.js 文档：https://nextjs.org/docs
- 检查项目 README.md 获取更多信息

