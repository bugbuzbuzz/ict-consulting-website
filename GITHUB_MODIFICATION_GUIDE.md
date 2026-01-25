# ICT Consulting Website - GitHub 在线修改指导手册

本手册将指导您如何直接在 GitHub 网页上修改网站代码，无需在本地安装任何开发工具。这是最简单、最快捷的修改方式。

---

## 目录

1. [GitHub 基础知识](#一github-基础知识)
2. [首次设置 GitHub 仓库](#二首次设置-github-仓库)
3. [在 GitHub 上修改文件](#三在-github-上修改文件)
4. [修改公司信息和团队](#四修改公司信息和团队)
5. [上传和替换图片](#五上传和替换图片)
6. [修改样式和颜色](#六修改样式和颜色)
7. [自动部署到服务器](#七自动部署到服务器)
8. [查看修改历史和回退](#八查看修改历史和回退)
9. [团队协作](#九团队协作)
10. [常见问题](#十常见问题)

---

## 一、GitHub 基础知识

### 1.1 什么是 GitHub？

**GitHub** 是全球最大的代码托管平台，可以把它理解为"代码的云盘"。它的主要优势包括：

| 功能 | 说明 |
|------|------|
| **在线编辑** | 直接在网页上修改代码，无需安装软件 |
| **版本控制** | 自动保存每次修改的历史记录，可以随时回退 |
| **团队协作** | 多人可以同时编辑，不会互相覆盖 |
| **自动部署** | 修改后自动更新到服务器（需配置） |
| **免费使用** | 私有仓库也完全免费 |

### 1.2 核心概念

| 术语 | 解释 | 类比 |
|------|------|------|
| **Repository（仓库）** | 存放项目所有文件的地方 | 云盘文件夹 |
| **Commit（提交）** | 保存一次修改 | 保存文档 |
| **Branch（分支）** | 独立的开发线 | 文档的副本 |
| **Pull Request** | 请求合并修改 | 提交审核 |
| **Main/Master** | 主分支，生产环境使用的代码 | 正式版本 |

---

## 二、首次设置 GitHub 仓库

### 2.1 创建 GitHub 账号

**步骤 1**：访问 https://github.com

**步骤 2**：点击右上角 **Sign up**（注册）

**步骤 3**：填写信息
- 邮箱地址（建议使用公司邮箱）
- 密码（至少 15 个字符或 8 个字符+数字）
- 用户名（建议使用公司名相关）

**步骤 4**：验证邮箱

### 2.2 上传项目到 GitHub

**方法一：通过网页上传（推荐新手）**

**步骤 1**：登录 GitHub 后，点击右上角 **+** → **New repository**

**步骤 2**：填写仓库信息
- **Repository name**：`ict-consulting-website`
- **Description**：`ICT Consulting Company Website`
- **Private**：选择 Private（私有，只有您能看到）
- 勾选 **Add a README file**

**步骤 3**：点击 **Create repository**

**步骤 4**：上传代码文件

在仓库页面，点击 **Add file** → **Upload files**

将您从服务器下载的所有文件拖拽到上传区域，或点击选择文件。

> **注意**：不要上传 `node_modules` 文件夹（体积太大且不需要）

**步骤 5**：填写提交信息

在底部的 **Commit changes** 区域：
- 标题：`Initial commit - 初始上传`
- 描述：`上传网站初始代码`

点击 **Commit changes**

**方法二：通过命令行上传（适合已有代码）**

如果您的代码已经在服务器上，可以通过 SSH 连接服务器后执行：

```bash
cd /home/deploy/apps/ict-consulting-website

# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 添加远程仓库（替换为您的 GitHub 用户名）
git remote add origin https://github.com/your-username/ict-consulting-website.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

首次推送时会要求输入 GitHub 用户名和密码（或 Personal Access Token）。

---

## 三、在 GitHub 上修改文件

### 3.1 基本修改流程

**步骤 1**：登录 GitHub，进入您的仓库

访问：`https://github.com/your-username/ict-consulting-website`

**步骤 2**：找到要修改的文件

点击文件夹和文件名，逐级进入。例如：
- `client` → `src` → `content.ts`

**步骤 3**：点击文件内容右上角的 **铅笔图标**（Edit this file）

**步骤 4**：在编辑器中修改内容

GitHub 提供了语法高亮和自动缩进功能。

**步骤 5**：保存修改

滚动到页面底部，填写 **Commit changes**：
- **Commit message**（必填）：简短描述修改内容，例如 `更新公司简介`
- **Extended description**（可选）：详细说明

选择：
- **Commit directly to the main branch**（直接提交到主分支）
- 或 **Create a new branch**（创建新分支，适合大改动）

点击 **Commit changes**

### 3.2 修改多个文件

如果需要一次修改多个文件，建议使用 **GitHub 网页版编辑器**：

**步骤 1**：在仓库主页，按键盘上的 **`.`**（句号键）

或将 URL 中的 `github.com` 改为 `github.dev`

**步骤 2**：会打开类似 VS Code 的在线编辑器

**步骤 3**：在左侧文件树中找到文件并修改

**步骤 4**：修改完成后，点击左侧的 **Source Control**（源代码管理）图标

**步骤 5**：填写提交信息，点击 **✓ Commit & Push**

---

## 四、修改公司信息和团队

### 4.1 修改公司基本信息

**文件路径**：`client/src/content.ts`

**步骤 1**：在 GitHub 仓库中，点击 `client` → `src` → `content.ts`

**步骤 2**：点击右上角的铅笔图标开始编辑

**步骤 3**：找到 `companyInfo` 部分并修改

```typescript
export const companyInfo = {
  name: "您的公司名称",              // 修改这里
  tagline: "您的公司标语",           // 修改这里
  description: "您的公司简介...",    // 修改这里
  stats: [
    { value: "6+", label: "年经验" },     // 修改数字
    { value: "12", label: "专家团队" },
    { value: "80+", label: "完成项目" },
    { value: "20+", label: "合作客户" }
  ]
};
```

**步骤 4**：滚动到底部，填写提交信息：
- Commit message: `更新公司基本信息`

**步骤 5**：点击 **Commit changes**

### 4.2 修改团队成员

在同一个文件 `content.ts` 中，找到 `team` 部分：

```typescript
export const team = [
  {
    role: "项目管理团队",
    members: [
      {
        name: "陈明",                    // 修改姓名
        title: "高级项目经理",            // 修改职位
        bio: "15年电信行业经验..."        // 修改简介
      },
      // 添加更多成员
    ]
  },
  // 添加更多团队组
];
```

**添加新成员**：在 `members` 数组中复制一个成员对象，修改信息即可。

**删除成员**：删除整个成员对象（包括大括号和逗号）。

### 4.3 修改服务内容

在同一个文件中，找到 `services` 部分：

```typescript
export const services = [
  {
    icon: "Network",                    // 图标类型
    title: "ICT 解决方案设计",          // 服务标题
    description: "为企业提供..."        // 服务描述
  },
  // 添加更多服务
];
```

**可用图标**：`Network`, `ClipboardCheck`, `Server`, `Users`, `Shield`, `Cloud`, `Wifi`

---

## 五、上传和替换图片

### 5.1 上传新图片到 GitHub

**步骤 1**：在 GitHub 仓库中，进入 `client/public/images/` 目录

**步骤 2**：点击 **Add file** → **Upload files**

**步骤 3**：拖拽图片文件到上传区域

建议的图片规格：

| 用途 | 建议尺寸 | 格式 | 文件大小 |
|------|----------|------|----------|
| 首页背景 | 1920x1080 | JPG | < 500KB |
| 服务图片 | 800x600 | JPG/WebP | < 300KB |
| 团队照片 | 400x400 | JPG | < 200KB |

**步骤 4**：填写提交信息：
- Commit message: `上传新图片：xxx.jpg`

**步骤 5**：点击 **Commit changes**

### 5.2 替换现有图片

**方法一：直接替换（保持文件名不变）**

如果新图片使用相同的文件名（如 `hero-bg.jpg`），直接上传即可自动替换。

**方法二：使用新文件名**

**步骤 1**：上传新图片（如 `new-hero.jpg`）

**步骤 2**：修改代码中的引用

编辑 `client/src/pages/Home.tsx`，找到图片引用：

```typescript
// 原代码
<img src="/images/hero-bg.jpg" alt="..." />

// 修改为
<img src="/images/new-hero.jpg" alt="..." />
```

**步骤 3**：提交修改

**步骤 4**：（可选）删除旧图片

在 GitHub 中找到旧图片文件，点击右上角的 **垃圾桶图标** 删除。

### 5.3 压缩图片

上传前建议先压缩图片，推荐在线工具：

| 工具 | 网址 | 特点 |
|------|------|------|
| **TinyPNG** | https://tinypng.com/ | 无损压缩，支持批量 |
| **Squoosh** | https://squoosh.app/ | Google 出品，功能强大 |
| **Compressor.io** | https://compressor.io/ | 支持多种格式 |

---

## 六、修改样式和颜色

### 6.1 修改主题颜色

**文件路径**：`client/src/index.css`

**步骤 1**：在 GitHub 中打开 `client/src/index.css`

**步骤 2**：找到 `:root` 部分

```css
:root {
  --primary: 221.2 83.2% 53.3%;      /* 主色调 */
  --secondary: 210 40% 96.1%;        /* 次要色 */
  --accent: 210 40% 96.1%;           /* 强调色 */
}
```

**步骤 3**：修改颜色值

常用颜色参考：

| 颜色 | OKLCH 值 | 适用场景 |
|------|----------|----------|
| 蓝色（当前） | `221.2 83.2% 53.3%` | 专业、科技 |
| 绿色 | `142.1 76.2% 36.3%` | 环保、成长 |
| 橙色 | `24.6 95% 53.1%` | 活力、创新 |
| 紫色 | `262.1 83.3% 57.8%` | 高端、创意 |

**步骤 4**：提交修改
- Commit message: `更新主题颜色为绿色`

### 6.2 修改字体

**步骤 1**：打开 `client/index.html`

**步骤 2**：找到 Google Fonts 引用

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**步骤 3**：访问 https://fonts.google.com/ 选择新字体

例如选择 **Noto Sans SC**（适合中文）：

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
```

**步骤 4**：打开 `client/src/index.css`，修改字体引用

```css
body {
  font-family: 'Noto Sans SC', sans-serif;
}
```

**步骤 5**：分别提交这两个文件的修改

---

## 七、自动部署到服务器

### 7.1 什么是自动部署？

**自动部署**（CI/CD）是指：当您在 GitHub 上提交修改后，服务器会自动拉取最新代码、重新构建并重启应用，无需手动操作。

### 7.2 设置 GitHub Actions 自动部署

**步骤 1**：在 GitHub 仓库中，点击 **Actions** 标签

**步骤 2**：点击 **set up a workflow yourself**

**步骤 3**：创建配置文件

在编辑器中粘贴以下内容（需要根据您的服务器信息修改）：

```yaml
name: Deploy to Server

on:
  push:
    branches: [ main ]  # 当 main 分支有新提交时触发

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: 执行服务器部署脚本
      uses: appleboy/ssh-action@master
      with:
        host: ${{ secrets.SERVER_HOST }}        # 服务器 IP
        username: ${{ secrets.SERVER_USER }}    # SSH 用户名
        key: ${{ secrets.SERVER_SSH_KEY }}      # SSH 私钥
        script: |
          cd /home/deploy/apps/ict-consulting-website
          git pull origin main
          pnpm install
          pnpm build
          pm2 restart ict-consulting
```

**步骤 4**：保存文件

文件名：`.github/workflows/deploy.yml`

Commit message: `添加自动部署配置`

**步骤 5**：设置 GitHub Secrets

在仓库页面，点击 **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

添加以下三个 Secret：

| Name | Value | 说明 |
|------|-------|------|
| `SERVER_HOST` | `your-server-ip` | 服务器 IP 地址 |
| `SERVER_USER` | `deploy` | SSH 用户名 |
| `SERVER_SSH_KEY` | `私钥内容` | SSH 私钥（见下方获取方法） |

**获取 SSH 私钥**：

在服务器上执行：

```bash
cat ~/.ssh/id_rsa
```

复制输出的全部内容（包括 `-----BEGIN` 和 `-----END` 行）。

如果没有密钥，先生成：

```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
# 一路回车，不设置密码

# 将公钥添加到授权列表
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
```

### 7.3 测试自动部署

**步骤 1**：在 GitHub 上修改任意文件（如 `content.ts`）

**步骤 2**：提交修改

**步骤 3**：点击仓库顶部的 **Actions** 标签

**步骤 4**：查看部署进度

会看到一个正在运行的工作流，点击进入查看详细日志。

如果显示绿色 ✓，说明部署成功。

如果显示红色 ✗，点击查看错误信息。

---

## 八、查看修改历史和回退

### 8.1 查看修改历史

**步骤 1**：在 GitHub 仓库主页，点击右上角的 **XX commits**

**步骤 2**：会看到所有提交记录，包括：
- 提交时间
- 提交者
- 提交信息
- 修改的文件数量

**步骤 3**：点击任意提交，可以查看具体修改了哪些内容

绿色 `+` 表示新增，红色 `-` 表示删除。

### 8.2 回退到之前的版本

**方法一：通过网页回退单个文件**

**步骤 1**：打开要回退的文件

**步骤 2**：点击右上角的 **History**（历史记录）

**步骤 3**：找到想要恢复的版本，点击 **< >**（浏览代码）

**步骤 4**：点击 **Raw** 查看原始内容，复制全部内容

**步骤 5**：返回当前版本，点击铅笔图标编辑

**步骤 6**：粘贴之前复制的内容，覆盖当前内容

**步骤 7**：提交修改
- Commit message: `回退到之前的版本`

**方法二：通过命令行回退整个项目**

如果需要回退整个项目，需要在服务器上执行：

```bash
cd /home/deploy/apps/ict-consulting-website

# 查看提交历史
git log --oneline

# 回退到指定版本（替换 abc1234 为实际的 commit ID）
git reset --hard abc1234

# 强制推送到 GitHub（谨慎使用）
git push -f origin main
```

> **警告**：`git reset --hard` 会永久删除之后的所有修改，请谨慎使用。

---

## 九、团队协作

### 9.1 添加协作者

**步骤 1**：在 GitHub 仓库页面，点击 **Settings**

**步骤 2**：点击左侧的 **Collaborators**

**步骤 3**：点击 **Add people**

**步骤 4**：输入协作者的 GitHub 用户名或邮箱

**步骤 5**：选择权限级别
- **Write**：可以修改代码（推荐）
- **Admin**：可以修改仓库设置

**步骤 6**：点击 **Add**

协作者会收到邮件邀请，接受后即可访问仓库。

### 9.2 使用分支进行协作

**为什么使用分支？**

多人协作时，直接在 `main` 分支修改可能会互相冲突。使用分支可以让每个人独立工作，完成后再合并。

**创建分支**：

**步骤 1**：在 GitHub 仓库主页，点击左上角的 **main** 下拉菜单

**步骤 2**：输入新分支名称，如 `update-team-info`

**步骤 3**：点击 **Create branch: update-team-info**

**步骤 4**：在新分支上进行修改

**步骤 5**：修改完成后，点击 **Pull requests** → **New pull request**

**步骤 6**：选择：
- **base**: `main`（合并到主分支）
- **compare**: `update-team-info`（您的分支）

**步骤 7**：填写标题和描述，点击 **Create pull request**

**步骤 8**：审核无误后，点击 **Merge pull request**

**步骤 9**：点击 **Confirm merge**

**步骤 10**：（可选）删除已合并的分支

### 9.3 解决冲突

如果两个人同时修改了同一个文件的同一行，会产生冲突。

**解决步骤**：

**步骤 1**：GitHub 会在 Pull Request 中提示冲突

**步骤 2**：点击 **Resolve conflicts**

**步骤 3**：会看到冲突标记：

```
<<<<<<< update-team-info
您的修改
=======
别人的修改
>>>>>>> main
```

**步骤 4**：手动编辑，保留正确的内容，删除标记

**步骤 5**：点击 **Mark as resolved**

**步骤 6**：点击 **Commit merge**

---

## 十、常见问题

### 10.1 修改后网站没有更新

**可能原因 1**：自动部署未配置或失败

**解决方法**：
- 检查 GitHub Actions 是否运行成功
- 或手动在服务器上执行：

```bash
cd /home/deploy/apps/ict-consulting-website
git pull origin main
pnpm build
pm2 restart ict-consulting
```

**可能原因 2**：浏览器缓存

**解决方法**：按 `Ctrl + Shift + R` 强制刷新

### 10.2 GitHub 提示权限错误

**错误信息**：`Permission denied (publickey)`

**解决方法**：

**步骤 1**：在服务器上生成 SSH 密钥

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

**步骤 2**：查看公钥

```bash
cat ~/.ssh/id_ed25519.pub
```

**步骤 3**：复制公钥内容

**步骤 4**：在 GitHub 上添加 SSH 密钥

访问：https://github.com/settings/keys

点击 **New SSH key**，粘贴公钥，点击 **Add SSH key**

**步骤 5**：测试连接

```bash
ssh -T git@github.com
```

看到 `Hi username! You've successfully authenticated` 即成功。

### 10.3 如何撤销刚才的提交？

**场景**：刚提交了错误的修改，想撤销。

**方法一**：通过网页回退（见 [8.2 回退到之前的版本](#82-回退到之前的版本)）

**方法二**：通过命令行撤销最后一次提交

```bash
cd /home/deploy/apps/ict-consulting-website

# 撤销最后一次提交，但保留修改
git reset --soft HEAD~1

# 或撤销最后一次提交，丢弃修改
git reset --hard HEAD~1

# 推送到 GitHub
git push -f origin main
```

### 10.4 GitHub 编辑器无法保存

**可能原因**：文件语法错误

**解决方法**：
- 检查是否缺少逗号、括号
- 检查是否使用了中文标点符号（应使用英文）
- 使用 GitHub 网页编辑器（按 `.` 键）会有语法检查

### 10.5 如何下载整个仓库？

**步骤 1**：在 GitHub 仓库主页，点击绿色的 **Code** 按钮

**步骤 2**：点击 **Download ZIP**

**步骤 3**：解压后即可查看所有文件

---

## 附录 A：GitHub 快捷键

在 GitHub 网页上可以使用以下快捷键：

| 快捷键 | 功能 |
|--------|------|
| `.` | 打开网页版 VS Code 编辑器 |
| `t` | 快速搜索文件 |
| `s` | 聚焦到搜索框 |
| `g` + `c` | 跳转到 Code 页面 |
| `g` + `i` | 跳转到 Issues 页面 |
| `g` + `p` | 跳转到 Pull requests 页面 |
| `?` | 显示所有快捷键 |

---

## 附录 B：推荐的 GitHub 移动应用

如果需要在手机上修改代码，可以使用：

| 应用 | 平台 | 功能 |
|------|------|------|
| **GitHub Mobile** | iOS / Android | 官方应用，可查看、编辑、提交 |
| **Working Copy** | iOS | 功能强大的 Git 客户端 |
| **Pocket Git** | Android | 轻量级 Git 客户端 |

---

## 附录 C：Git 命令速查表

虽然本指南主要介绍网页操作，但了解基本的 Git 命令也很有用：

| 命令 | 说明 |
|------|------|
| `git clone <url>` | 克隆仓库到本地 |
| `git pull` | 拉取最新代码 |
| `git add .` | 添加所有修改到暂存区 |
| `git commit -m "message"` | 提交修改 |
| `git push` | 推送到远程仓库 |
| `git status` | 查看当前状态 |
| `git log` | 查看提交历史 |
| `git branch` | 查看分支列表 |
| `git checkout -b <name>` | 创建并切换到新分支 |

---

## 总结

使用 GitHub 在线修改代码的优势：

| 优势 | 说明 |
|------|------|
| ✅ **零门槛** | 无需安装任何软件，只需浏览器 |
| ✅ **随时随地** | 在任何设备上都可以修改 |
| ✅ **版本控制** | 自动保存历史，随时回退 |
| ✅ **团队协作** | 多人可以同时编辑 |
| ✅ **自动部署** | 配置后修改即生效 |

**下一步建议**：
1. 尝试修改 `content.ts` 中的公司名称
2. 上传一张新图片并替换
3. 配置自动部署，实现"修改即上线"

---

**文档版本**：1.0  
**最后更新**：2026年1月24日  
**作者**：Manus AI

祝您使用愉快！如有任何问题，欢迎随时咨询。
