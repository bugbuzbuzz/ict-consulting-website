# ICT Consulting Website - 代码修改指导手册

本手册将指导您如何修改网站的各个部分，包括公司信息、团队成员、服务内容、界面样式等。无论您是否有编程经验，都可以按照本指南进行修改。

---

## 目录

1. [修改前的准备工作](#一修改前的准备工作)
2. [修改公司基本信息](#二修改公司基本信息)
3. [修改团队成员信息](#三修改团队成员信息)
4. [修改服务内容](#四修改服务内容)
5. [修改案例研究](#五修改案例研究)
6. [修改界面样式和颜色](#六修改界面样式和颜色)
7. [修改图片](#七修改图片)
8. [修改联系方式](#八修改联系方式)
9. [添加新页面](#九添加新页面)
10. [修改后端逻辑](#十修改后端逻辑)
11. [部署更新到服务器](#十一部署更新到服务器)
12. [常见问题排查](#十二常见问题排查)

---

## 一、修改前的准备工作

### 1.1 需要的工具

| 工具 | 用途 | 推荐软件 | 下载地址 |
|------|------|----------|----------|
| **代码编辑器** | 编辑代码文件 | Visual Studio Code | https://code.visualstudio.com/ |
| **SSH 客户端** | 连接服务器 | Windows 自带 / Termius | - |
| **FTP 客户端**（可选） | 上传文件 | FileZilla | https://filezilla-project.org/ |

### 1.2 项目文件结构说明

```
ict-consulting-website/
├── client/                    # 前端代码（用户看到的界面）
│   ├── public/               # 静态文件（图片等）
│   │   └── images/          # 网站图片
│   └── src/
│       ├── pages/           # 页面文件
│       │   ├── Home.tsx     # 首页（★ 最常修改）
│       │   └── CaseStudyDetail.tsx  # 案例详情页
│       ├── content.ts       # 网站内容配置（★ 最常修改）
│       └── index.css        # 全局样式
├── server/                   # 后端代码（处理数据）
│   ├── routers.ts           # API 接口定义
│   └── db.ts                # 数据库操作
├── drizzle/                 # 数据库结构
│   └── schema.ts            # 数据表定义
└── package.json             # 项目配置文件
```

> **重要提示**：标记 ★ 的文件是您最常需要修改的文件。

### 1.3 修改工作流程

```
1. 在本地电脑修改代码
   ↓
2. 测试修改是否正确
   ↓
3. 上传到服务器
   ↓
4. 在服务器上重新构建
   ↓
5. 重启应用
   ↓
6. 在浏览器中查看效果
```

---

## 二、修改公司基本信息

### 2.1 修改公司名称、标语、简介

**文件位置**：`client/src/content.ts`

打开文件后，找到 `companyInfo` 部分：

```typescript
export const companyInfo = {
  name: "ICT Consulting SG",              // 公司名称
  tagline: "Bridging Technology & Business Strategy",  // 标语
  description: "We are a premier Singapore-based...",   // 公司简介
  stats: [
    { value: "4+", label: "Years" },      // 成立年限
    { value: "10", label: "Experts" },    // 团队人数
    { value: "50+", label: "Projects" },  // 项目数量
    { value: "15+", label: "Clients" }    // 客户数量
  ]
};
```

**修改示例**：

```typescript
export const companyInfo = {
  name: "新加坡 ICT 咨询",
  tagline: "专业的 ICT 解决方案提供商",
  description: "我们是一家成立于2020年的专业 ICT 咨询公司...",
  stats: [
    { value: "6+", label: "年经验" },
    { value: "12", label: "专家团队" },
    { value: "80+", label: "完成项目" },
    { value: "20+", label: "合作客户" }
  ]
};
```

### 2.2 修改公司成立年份

在同一个文件中，找到并修改：

```typescript
// 原代码
<div className="...">Established 2020 • Singapore</div>

// 修改为
<div className="...">成立于 2020 年 • 新加坡</div>
```

---

## 三、修改团队成员信息

### 3.1 修改现有团队成员

**文件位置**：`client/src/content.ts`

找到 `team` 部分：

```typescript
export const team = [
  {
    role: "Project Management",           // 团队角色
    members: [
      {
        name: "Michael Chen",             // 姓名
        title: "Senior Project Manager",  // 职位
        bio: "15+ years in telecom..."    // 简介
      },
      // ... 更多成员
    ]
  },
  // ... 更多团队组
];
```

**修改示例**：

```typescript
export const team = [
  {
    role: "项目管理团队",
    members: [
      {
        name: "陈明",
        title: "高级项目经理",
        bio: "拥有15年电信行业经验，曾主导多个大型ICT项目"
      },
      {
        name: "李华",
        title: "项目经理",
        bio: "专注于云计算和数字化转型项目"
      }
    ]
  },
  {
    role: "解决方案专家",
    members: [
      {
        name: "王芳",
        title: "首席解决方案架构师",
        bio: "在网络架构设计方面有丰富经验"
      }
    ]
  }
];
```

### 3.2 添加新的团队成员

在相应的 `members` 数组中添加新对象：

```typescript
{
  role: "技术专家",
  members: [
    // ... 现有成员
    {
      name: "张伟",              // 新成员
      title: "网络安全专家",
      bio: "专注于企业级网络安全解决方案"
    }
  ]
}
```

### 3.3 删除团队成员

直接删除对应的成员对象即可。例如，删除第二个成员：

```typescript
members: [
  { name: "陈明", title: "...", bio: "..." },
  // { name: "李华", title: "...", bio: "..." },  ← 注释掉或删除这一行
  { name: "王芳", title: "...", bio: "..." }
]
```

---

## 四、修改服务内容

### 4.1 修改现有服务

**文件位置**：`client/src/content.ts`

找到 `services` 部分：

```typescript
export const services = [
  {
    icon: "Network",                          // 图标类型
    title: "ICT Solution Design",             // 服务标题
    description: "End-to-end ICT solution..." // 服务描述
  },
  // ... 更多服务
];
```

**修改示例**：

```typescript
export const services = [
  {
    icon: "Network",
    title: "ICT 解决方案设计",
    description: "为企业提供端到端的 ICT 解决方案，包括网络架构、云计算和数字化转型"
  },
  {
    icon: "ClipboardCheck",
    title: "项目管理咨询",
    description: "专业的项目管理服务，确保项目按时按质完成"
  }
];
```

### 4.2 可用的图标类型

| 图标名称 | 适用场景 |
|----------|----------|
| `Network` | 网络、基础设施 |
| `ClipboardCheck` | 项目管理、咨询 |
| `Server` | 云计算、服务器 |
| `Users` | 团队、人员管理 |
| `Shield` | 安全、防护 |
| `Cloud` | 云服务 |
| `Wifi` | 通信、连接 |

### 4.3 添加新服务

在 `services` 数组末尾添加：

```typescript
export const services = [
  // ... 现有服务
  {
    icon: "Shield",
    title: "网络安全咨询",
    description: "提供全面的网络安全评估和防护方案"
  }
];
```

---

## 五、修改案例研究

### 5.1 修改 Tengfit 案例基本信息

**文件位置**：`client/src/content.ts`

找到 `caseStudy` 部分：

```typescript
export const caseStudy = {
  title: "Tengfit ICT Project",              // 项目名称
  subtitle: "Enterprise ICT Infrastructure...", // 副标题
  client: "Tengfit Corporation",             // 客户名称
  location: "Singapore & APAC Region",       // 项目地点
  summary: "Comprehensive ICT infrastructure...", // 项目摘要
  // ...
};
```

**修改示例**：

```typescript
export const caseStudy = {
  title: "某大型互联网公司 ICT 项目",
  subtitle: "企业级 ICT 基础设施现代化改造",
  client: "某互联网科技公司",
  location: "新加坡及亚太地区",
  summary: "为客户提供全面的 ICT 基础设施升级方案，涵盖网络、云计算和安全等多个领域",
  // ...
};
```

### 5.2 修改项目挑战

在同一个对象中找到 `challenges` 数组：

```typescript
challenges: [
  "Legacy infrastructure causing performance bottlenecks",
  "Security vulnerabilities in existing systems",
  // ... 更多挑战
]
```

**修改为**：

```typescript
challenges: [
  "现有基础设施老旧，性能瓶颈明显",
  "安全防护体系存在漏洞",
  "多地数据中心管理复杂",
  "业务快速增长带来的扩展性挑战"
]
```

### 5.3 修改解决方案

找到 `solutions` 数组：

```typescript
solutions: [
  {
    title: "SD-WAN Implementation",          // 方案标题
    detail: "Deployed Cisco SD-WAN..."       // 方案详情
  },
  // ... 更多方案
]
```

**修改示例**：

```typescript
solutions: [
  {
    title: "SD-WAN 网络部署",
    detail: "部署思科 SD-WAN 解决方案，连接新加坡、香港和上海三地数据中心，带宽提升300%"
  },
  {
    title: "云平台迁移",
    detail: "将核心业务系统迁移至混合云架构，采用 AWS 和阿里云双云战略"
  }
]
```

### 5.4 修改项目成果

找到 `results` 数组：

```typescript
results: [
  "Network performance improved by 300%",
  "Zero security incidents post-deployment",
  // ... 更多成果
]
```

**修改为**：

```typescript
results: [
  "网络性能提升 300%",
  "部署后零安全事故",
  "运维成本降低 40%",
  "系统可用性达到 99.99%",
  "支持业务规模扩大 5 倍"
]
```

---

## 六、修改界面样式和颜色

### 6.1 修改主题颜色

**文件位置**：`client/src/index.css`

找到 `:root` 部分（浅色主题）和 `.dark` 部分（深色主题）：

```css
:root {
  --background: 0 0% 100%;           /* 背景色 */
  --foreground: 222.2 84% 4.9%;      /* 文字颜色 */
  --primary: 221.2 83.2% 53.3%;      /* 主色调（按钮等） */
  --primary-foreground: 210 40% 98%; /* 主色调上的文字 */
  /* ... 更多颜色 */
}
```

**颜色格式说明**：使用 OKLCH 格式 `L C H`
- **L**：亮度 (0-100%)
- **C**：色度 (0-0.4)
- **H**：色相 (0-360度)

**常用颜色对照表**：

| 颜色 | OKLCH 值 | 说明 |
|------|----------|------|
| 蓝色 | `221.2 83.2% 53.3%` | 专业、科技感（当前） |
| 绿色 | `142.1 76.2% 36.3%` | 环保、成长 |
| 橙色 | `24.6 95% 53.1%` | 活力、创新 |
| 紫色 | `262.1 83.3% 57.8%` | 高端、创意 |
| 红色 | `0 84.2% 60.2%` | 热情、紧急 |

**修改示例**（改为绿色主题）：

```css
:root {
  --primary: 142.1 76.2% 36.3%;      /* 改为绿色 */
  --primary-foreground: 0 0% 100%;
}
```

### 6.2 修改字体

在 `client/index.html` 中找到 Google Fonts 引用：

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**更换为其他字体**（例如使用 Noto Sans）：

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
```

然后在 `client/src/index.css` 中修改：

```css
body {
  font-family: 'Noto Sans SC', sans-serif;  /* 改为新字体 */
}
```

### 6.3 修改圆角大小

在 `client/src/index.css` 中找到：

```css
:root {
  --radius: 0.5rem;  /* 默认圆角 */
}
```

**修改为**：

```css
:root {
  --radius: 0rem;     /* 完全方角 */
  /* 或 */
  --radius: 1rem;     /* 更圆润 */
}
```

---

## 七、修改图片

### 7.1 图片文件位置

所有图片存放在：`client/public/images/`

当前使用的图片：

| 图片文件名 | 用途 | 尺寸建议 |
|-----------|------|----------|
| `hero-bg.jpg` | 首页大背景 | 1920x1080 |
| `datacenter.jpg` | 数据中心/网络服务 | 800x600 |
| `team-meeting.jpg` | 团队会议/项目管理 | 800x600 |
| `cloud-computing.webp` | 云计算服务 | 800x600 |
| `cybersecurity.jpg` | 网络安全/联系页面 | 800x600 |

### 7.2 替换图片步骤

**步骤 1**：准备新图片
- 确保图片格式为 JPG、PNG 或 WebP
- 建议使用在线工具压缩图片（如 TinyPNG）

**步骤 2**：上传到服务器

使用 SCP 命令：

```bash
# 从本地上传图片到服务器
scp /path/to/your/new-image.jpg deploy@your-server-ip:/home/deploy/apps/ict-consulting-website/client/public/images/
```

或使用 FileZilla 等 FTP 工具上传。

**步骤 3**：修改代码中的引用

如果您想使用新的文件名，需要在 `client/src/pages/Home.tsx` 中修改：

```typescript
// 原代码
<img src="/images/hero-bg.jpg" alt="..." />

// 修改为
<img src="/images/my-new-background.jpg" alt="..." />
```

### 7.3 添加新图片

直接将新图片上传到 `client/public/images/` 目录，然后在代码中引用：

```typescript
<img src="/images/new-photo.jpg" alt="新图片" />
```

---

## 八、修改联系方式

### 8.1 修改联系信息

**文件位置**：`client/src/pages/Home.tsx`

找到联系部分（Contact Section）：

```typescript
<div className="flex items-center space-x-3...">
  <MapPin className="..." />
  <span>10 Anson Road, International Plaza, Singapore</span>
</div>
<div className="flex items-center space-x-3...">
  <Mail className="..." />
  <span>contact@ict-consulting.sg</span>
</div>
<div className="flex items-center space-x-3...">
  <Globe className="..." />
  <span>www.ict-consulting.sg</span>
</div>
```

**修改为您的信息**：

```typescript
<span>您的公司地址</span>
<span>您的邮箱@example.com</span>
<span>您的网站域名</span>
```

### 8.2 修改版权信息

在同一个文件的底部找到 footer 部分：

```typescript
<footer className="...">
  <p className="...">
    © 2026 {companyInfo.name}. All rights reserved.
  </p>
</footer>
```

**修改为**：

```typescript
<p className="...">
  © 2026 您的公司名称. 保留所有权利.
</p>
```

---

## 九、添加新页面

### 9.1 创建新页面文件

**步骤 1**：在 `client/src/pages/` 目录下创建新文件，例如 `About.tsx`：

```typescript
export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-16">
        <h1 className="text-4xl font-bold mb-8">关于我们</h1>
        <p className="text-lg text-muted-foreground">
          这里是关于我们的详细介绍...
        </p>
      </div>
    </div>
  );
}
```

**步骤 2**：在 `client/src/App.tsx` 中注册路由：

```typescript
import About from "./pages/About";  // 添加导入

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />  {/* 添加新路由 */}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}
```

**步骤 3**：在导航菜单中添加链接

在 `Home.tsx` 的导航部分添加：

```typescript
<nav className="flex items-center space-x-8...">
  <button onClick={() => scrollToSection('services')}>Services</button>
  <a href="/about">关于我们</a>  {/* 新增链接 */}
  <button onClick={() => scrollToSection('contact')}>Contact</button>
</nav>
```

---

## 十、修改后端逻辑

### 10.1 修改联系表单字段

**场景**：您想在联系表单中添加"公司名称"字段。

**步骤 1**：修改数据库结构

编辑 `drizzle/schema.ts`：

```typescript
export const contactMessages = mysqlTable("contact_messages", {
  id: int("id").autoincrement().primaryKey(),
  name: text("name").notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  company: text("company"),  // 新增字段
  message: text("message").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});
```

**步骤 2**：推送数据库更改

```bash
cd /home/deploy/apps/ict-consulting-website
pnpm db:push
```

**步骤 3**：修改后端 API

编辑 `server/routers.ts`，找到 `contact.submit`：

```typescript
submit: publicProcedure
  .input(z.object({
    name: z.string(),
    email: z.string().email(),
    company: z.string().optional(),  // 新增字段验证
    message: z.string(),
  }))
  .mutation(async ({ input }) => {
    await saveContactMessage({
      name: input.name,
      email: input.email,
      company: input.company,  // 新增
      message: input.message,
    });
    // ...
  }),
```

**步骤 4**：修改前端表单

编辑 `client/src/pages/Home.tsx`，在表单中添加新字段：

```typescript
const [formData, setFormData] = useState({ 
  name: "", 
  email: "", 
  company: "",  // 新增
  message: "" 
});

// 在表单中添加输入框
<div className="grid gap-2">
  <label htmlFor="company" className="text-sm font-medium">公司名称</label>
  <input 
    id="company" 
    className="..." 
    placeholder="您的公司" 
    value={formData.company}
    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
  />
</div>
```

### 10.2 查看数据库中的留言

**方式一**：使用命令行

```bash
# 登录 MySQL
mysql -u ict_app -p ict_consulting

# 查询所有留言
SELECT * FROM contact_messages ORDER BY createdAt DESC LIMIT 10;

# 退出
EXIT;
```

**方式二**：使用图形化工具

推荐使用 **MySQL Workbench** 或 **DBeaver**，使用以下信息连接：

| 参数 | 值 |
|------|-----|
| 主机 | 您的服务器 IP |
| 端口 | 3306 |
| 用户名 | ict_app |
| 密码 | 您设置的密码 |
| 数据库 | ict_consulting |

---

## 十一、部署更新到服务器

### 11.1 完整部署流程

**步骤 1**：连接到服务器

```bash
ssh deploy@your-server-ip
```

**步骤 2**：进入项目目录

```bash
cd /home/deploy/apps/ict-consulting-website
```

**步骤 3**：备份当前版本（可选但推荐）

```bash
cp -r ../ict-consulting-website ../ict-consulting-website-backup-$(date +%Y%m%d)
```

**步骤 4**：上传修改后的文件

从本地电脑上传：

```bash
# 上传单个文件
scp /local/path/content.ts deploy@your-server-ip:/home/deploy/apps/ict-consulting-website/client/src/

# 上传整个目录
scp -r /local/path/client/src/pages/ deploy@your-server-ip:/home/deploy/apps/ict-consulting-website/client/src/
```

**步骤 5**：重新构建项目

```bash
cd /home/deploy/apps/ict-consulting-website

# 安装依赖（如果修改了 package.json）
pnpm install

# 构建生产版本
pnpm build
```

**步骤 6**：重启应用

```bash
pm2 restart ict-consulting
```

**步骤 7**：查看日志确认启动成功

```bash
pm2 logs ict-consulting --lines 50
```

### 11.2 快速更新脚本

创建一个自动化脚本 `update.sh`：

```bash
#!/bin/bash
cd /home/deploy/apps/ict-consulting-website
echo "📥 拉取最新代码..."
# 如果使用 Git
# git pull origin main
echo "📦 安装依赖..."
pnpm install
echo "🔨 构建项目..."
pnpm build
echo "🔄 重启应用..."
pm2 restart ict-consulting
echo "✅ 更新完成！"
pm2 logs ict-consulting --lines 20
```

使用方法：

```bash
chmod +x update.sh
./update.sh
```

---

## 十二、常见问题排查

### 12.1 修改后网站没有变化

**可能原因**：浏览器缓存

**解决方法**：
1. 按 `Ctrl + Shift + R`（Windows）或 `Cmd + Shift + R`（Mac）强制刷新
2. 或清除浏览器缓存后重新访问

### 12.2 修改后网站显示错误

**可能原因**：代码语法错误

**解决方法**：

```bash
# 查看应用日志
pm2 logs ict-consulting

# 查看构建错误
cd /home/deploy/apps/ict-consulting-website
pnpm build
```

常见错误：
- 缺少逗号或括号
- 引号不匹配
- 中文标点符号（应使用英文标点）

### 12.3 图片无法显示

**检查清单**：

1. 图片文件是否已上传到 `client/public/images/`
2. 图片路径是否正确（以 `/images/` 开头）
3. 图片文件名是否包含空格或特殊字符（应避免）
4. 图片文件大小是否过大（建议压缩到 500KB 以下）

### 12.4 数据库连接失败

**检查步骤**：

```bash
# 1. 检查 MySQL 是否运行
sudo systemctl status mysql

# 2. 测试数据库连接
mysql -u ict_app -p ict_consulting

# 3. 检查环境变量
cat /home/deploy/apps/ict-consulting-website/.env
```

### 12.5 PM2 应用无法启动

```bash
# 查看详细错误信息
pm2 logs ict-consulting --err

# 删除并重新启动
pm2 delete ict-consulting
pm2 start ecosystem.config.cjs

# 保存配置
pm2 save
```

---

## 附录 A：常用命令速查表

### 服务器管理

| 命令 | 说明 |
|------|------|
| `ssh deploy@ip` | 连接服务器 |
| `cd /home/deploy/apps/ict-consulting-website` | 进入项目目录 |
| `ls -la` | 查看文件列表 |
| `nano filename` | 编辑文件 |
| `exit` | 退出 SSH |

### PM2 管理

| 命令 | 说明 |
|------|------|
| `pm2 list` | 查看所有应用 |
| `pm2 restart ict-consulting` | 重启应用 |
| `pm2 stop ict-consulting` | 停止应用 |
| `pm2 logs ict-consulting` | 查看日志 |
| `pm2 monit` | 监控资源 |

### 项目构建

| 命令 | 说明 |
|------|------|
| `pnpm install` | 安装依赖 |
| `pnpm build` | 构建项目 |
| `pnpm db:push` | 更新数据库 |
| `pnpm test` | 运行测试 |

---

## 附录 B：文件修改优先级

根据修改频率和重要性，文件修改的优先级如下：

| 优先级 | 文件 | 修改内容 |
|--------|------|----------|
| ⭐⭐⭐ | `client/src/content.ts` | 公司信息、团队、服务、案例 |
| ⭐⭐⭐ | `client/public/images/` | 图片替换 |
| ⭐⭐ | `client/src/pages/Home.tsx` | 联系方式、页面结构 |
| ⭐⭐ | `client/src/index.css` | 颜色、字体样式 |
| ⭐ | `server/routers.ts` | API 接口 |
| ⭐ | `drizzle/schema.ts` | 数据库结构 |

---

## 附录 C：推荐学习资源

如果您想深入学习网站开发，推荐以下资源：

| 主题 | 资源 | 链接 |
|------|------|------|
| **TypeScript 基础** | 官方文档（中文） | https://www.typescriptlang.org/zh/ |
| **React 入门** | React 官方教程 | https://react.dev/learn |
| **Tailwind CSS** | 官方文档 | https://tailwindcss.com/docs |
| **MySQL 数据库** | 菜鸟教程 | https://www.runoob.com/mysql/ |
| **Linux 命令** | Linux 命令大全 | https://www.linuxcool.com/ |

---

**文档版本**：1.0  
**最后更新**：2026年1月24日  
**作者**：Manus AI

如有任何问题，欢迎随时咨询。祝您使用愉快！
