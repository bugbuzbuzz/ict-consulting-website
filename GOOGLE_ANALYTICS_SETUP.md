# Google Analytics 集成指南

本指南将指导您如何为 ICT Consulting 网站集成 Google Analytics，以便跟踪访问数据和用户行为。

---

## 目录

1. [什么是 Google Analytics](#一什么是-google-analytics)
2. [创建 Google Analytics 账号](#二创建-google-analytics-账号)
3. [获取跟踪 ID](#三获取跟踪-id)
4. [添加跟踪代码到网站](#四添加跟踪代码到网站)
5. [验证跟踪是否正常](#五验证跟踪是否正常)
6. [查看数据报告](#六查看数据报告)
7. [常用功能介绍](#七常用功能介绍)
8. [隐私合规](#八隐私合规)

---

## 一、什么是 Google Analytics？

**Google Analytics**（简称 GA）是 Google 提供的免费网站分析工具，可以帮助您了解：

| 数据类型 | 具体内容 |
|----------|----------|
| **访问量** | 每天有多少人访问您的网站 |
| **访客来源** | 用户从哪里来（搜索引擎、社交媒体、直接访问） |
| **用户行为** | 用户在网站上停留多久、浏览了哪些页面 |
| **设备信息** | 用户使用的设备（手机、电脑）和浏览器 |
| **地理位置** | 访客来自哪些国家和城市 |
| **转化率** | 有多少人提交了联系表单 |

### 为什么需要 Google Analytics？

对于您的 ICT 咨询公司，Google Analytics 可以帮助您：

1. **了解客户群体**：哪些地区的潜在客户对您的服务感兴趣
2. **优化营销策略**：哪些推广渠道带来了最多的访问
3. **改进网站内容**：哪些页面最受欢迎，哪些需要改进
4. **衡量投资回报**：网站带来了多少潜在商机

---

## 二、创建 Google Analytics 账号

### 2.1 前提条件

您需要一个 **Google 账号**（Gmail 邮箱）。如果没有，请先访问 https://accounts.google.com/signup 注册。

### 2.2 注册 Google Analytics

**步骤 1**：访问 Google Analytics 官网

打开浏览器，访问：https://analytics.google.com/

**步骤 2**：点击 **开始使用**（Start for free）

**步骤 3**：使用您的 Google 账号登录

**步骤 4**：点击 **开始衡量**（Start measuring）

### 2.3 创建账号

**步骤 1**：填写账号信息

| 字段 | 填写内容 | 示例 |
|------|----------|------|
| **账号名称** | 您的公司名称 | `ICT Consulting SG` |
| **账号数据共享设置** | 根据需要勾选（建议全部勾选） | ✓ 所有选项 |

**步骤 2**：点击 **下一步**

### 2.4 创建媒体资源（Property）

**步骤 1**：填写媒体资源信息

| 字段 | 填写内容 | 示例 |
|------|----------|------|
| **媒体资源名称** | 网站名称 | `ICT Consulting Website` |
| **报告时区** | 选择您的时区 | `(GMT+08:00) Singapore` |
| **货币** | 选择货币 | `Singapore Dollar (SGD)` |

**步骤 2**：点击 **下一步**

### 2.5 填写商家信息

| 字段 | 选择内容 |
|------|----------|
| **行业类别** | `Professional Services` 或 `Technology` |
| **商家规模** | `Small (1-10 employees)` |
| **使用 Google Analytics 的目的** | 勾选相关选项，如 `Examine user behavior` |

**步骤 3**：点击 **创建**

**步骤 4**：接受服务条款

勾选 **我接受《Google Analytics 服务条款》**

勾选 **我接受《数据处理修正条款》**

点击 **我接受**

### 2.6 设置数据流（Data Stream）

**步骤 1**：选择平台

点击 **网站**（Web）

**步骤 2**：填写网站信息

| 字段 | 填写内容 | 示例 |
|------|----------|------|
| **网站网址** | 您的网站域名 | `https://www.ict-consulting.sg` |
| **数据流名称** | 网站名称 | `ICT Consulting Website` |

**步骤 3**：点击 **创建数据流**

---

## 三、获取跟踪 ID

创建数据流后，您会看到 **衡量 ID**（Measurement ID），格式为 `G-XXXXXXXXXX`。

**步骤 1**：复制衡量 ID

在数据流详情页面，找到 **衡量 ID**，点击复制图标。

**示例**：`G-ABC123XYZ`

**步骤 2**：保存此 ID

您将在下一步中使用这个 ID。

---

## 四、添加跟踪代码到网站

### 4.1 方法一：直接修改 HTML 文件（已完成）

我已经在您的网站中添加了 Google Analytics 跟踪代码。您只需要替换 `GA_MEASUREMENT_ID` 为您的实际衡量 ID。

**文件位置**：`client/index.html`

**修改步骤**：

**步骤 1**：在 GitHub 上打开 `client/index.html`

**步骤 2**：找到以下代码（第 11-18 行）：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**步骤 3**：将两处 `GA_MEASUREMENT_ID` 替换为您的实际 ID

例如，如果您的 ID 是 `G-ABC123XYZ`，修改为：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-ABC123XYZ');
</script>
```

**步骤 4**：提交修改

Commit message: `添加 Google Analytics 跟踪代码`

**步骤 5**：部署到服务器

如果配置了自动部署，修改会自动生效。

否则，在服务器上执行：

```bash
cd /home/deploy/apps/ict-consulting-website
git pull origin main
pnpm build
pm2 restart ict-consulting
```

### 4.2 方法二：使用 Google Tag Manager（可选）

如果您需要管理多个跟踪工具（如 Google Analytics、Facebook Pixel 等），可以使用 Google Tag Manager。

这里不详细展开，如有需要请告知。

---

## 五、验证跟踪是否正常

### 5.1 实时报告验证

**步骤 1**：访问您的网站

在浏览器中打开 `https://www.ict-consulting.sg`（替换为您的实际域名）

**步骤 2**：打开 Google Analytics

访问：https://analytics.google.com/

**步骤 3**：查看实时报告

在左侧菜单中，点击 **报告** → **实时**

**步骤 4**：确认数据

您应该能看到：
- **过去 30 分钟的用户数**：至少显示 1（就是您自己）
- **按页面标题或屏幕名称**：显示您正在访问的页面

如果看到数据，说明跟踪正常！

### 5.2 使用浏览器开发者工具验证

**步骤 1**：在网站页面，按 `F12` 打开开发者工具

**步骤 2**：切换到 **Network**（网络）标签

**步骤 3**：刷新页面（`F5`）

**步骤 4**：在搜索框中输入 `google-analytics` 或 `gtag`

**步骤 5**：查看是否有请求发送到 Google Analytics

如果看到请求，说明跟踪代码正常加载。

---

## 六、查看数据报告

Google Analytics 提供了丰富的报告，以下是最常用的几个：

### 6.1 实时报告

**路径**：报告 → 实时

**功能**：查看当前正在访问网站的用户

**适用场景**：
- 验证跟踪是否正常
- 查看营销活动的即时效果

### 6.2 受众群体报告

**路径**：报告 → 受众群体 → 概览

**功能**：了解访客的基本信息

**关键指标**：

| 指标 | 说明 |
|------|------|
| **用户数** | 有多少不同的人访问了网站 |
| **新用户** | 首次访问的用户数量 |
| **会话数** | 总访问次数（一个用户可能访问多次） |
| **跳出率** | 只浏览一个页面就离开的比例 |
| **平均会话时长** | 用户平均在网站上停留多久 |

### 6.3 流量获取报告

**路径**：报告 → 生命周期 → 流量获取

**功能**：了解用户从哪里来

**常见来源**：

| 来源 | 说明 |
|------|------|
| **Direct** | 直接输入网址或书签 |
| **Organic Search** | 搜索引擎（Google、Bing 等） |
| **Social** | 社交媒体（LinkedIn、Facebook 等） |
| **Referral** | 其他网站的链接 |
| **Email** | 邮件营销 |

### 6.4 页面和屏幕报告

**路径**：报告 → 互动 → 页面和屏幕

**功能**：了解哪些页面最受欢迎

**关键指标**：

| 指标 | 说明 |
|------|------|
| **浏览量** | 页面被浏览的总次数 |
| **唯一身份浏览量** | 有多少不同的用户浏览了这个页面 |
| **平均互动时长** | 用户在这个页面上停留多久 |

### 6.5 事件报告

**路径**：报告 → 互动 → 事件

**功能**：跟踪用户的特定行为（如点击按钮、提交表单）

**默认事件**：
- `page_view`：页面浏览
- `click`：点击
- `scroll`：滚动
- `session_start`：会话开始

---

## 七、常用功能介绍

### 7.1 设置转化目标

**什么是转化？**

对于您的网站，转化可能是：
- 用户提交了联系表单
- 用户浏览了案例研究页面
- 用户下载了资料

**设置步骤**：

**步骤 1**：在 Google Analytics 中，点击左下角的 **管理**（齿轮图标）

**步骤 2**：在 **媒体资源** 列中，点击 **事件**

**步骤 3**：点击 **创建事件**

**步骤 4**：填写事件信息

例如，跟踪表单提交：

| 字段 | 值 |
|------|-----|
| **自定义事件名称** | `form_submission` |
| **匹配条件** | `event_name` 等于 `click` |
| **参数** | `element_id` 等于 `contact-form-submit` |

**步骤 5**：点击 **创建**

**步骤 6**：将事件标记为转化

在事件列表中，找到 `form_submission`，切换 **标记为转化** 开关。

### 7.2 设置自定义提醒

**功能**：当特定指标异常时，Google Analytics 会发送邮件提醒。

**示例**：当网站访问量突然下降 50% 时提醒。

**设置步骤**：

**步骤 1**：点击左下角的 **管理**

**步骤 2**：在 **媒体资源** 列中，点击 **自定义提醒**

**步骤 3**：点击 **新建提醒**

**步骤 4**：填写提醒信息

| 字段 | 值 |
|------|-----|
| **提醒名称** | `访问量大幅下降` |
| **应用于** | 所有网站数据 |
| **时间段** | 天 |
| **提醒条件** | `会话数` 减少 `50%` 与 `上一天` 相比 |

**步骤 5**：勾选 **通过电子邮件发送此提醒**

**步骤 6**：点击 **保存**

### 7.3 创建自定义报告

**功能**：根据您的需求，创建个性化的数据报告。

**示例**：查看新加坡地区访客的详细行为。

**设置步骤**：

**步骤 1**：点击左侧的 **探索**

**步骤 2**：选择 **空白**模板

**步骤 3**：添加维度和指标

- **维度**：页面路径、国家/地区、设备类别
- **指标**：用户数、会话数、平均会话时长

**步骤 4**：添加筛选条件

- **国家/地区** = `Singapore`

**步骤 5**：保存报告

---

## 八、隐私合规

### 8.1 为什么需要关注隐私？

根据 **GDPR**（欧盟通用数据保护条例）和 **PDPA**（新加坡个人数据保护法），您需要告知用户网站使用了跟踪工具。

### 8.2 添加隐私政策

**步骤 1**：在网站底部添加"隐私政策"链接

编辑 `client/src/pages/Home.tsx`，在 footer 部分添加：

```typescript
<footer className="...">
  <p className="...">
    © 2026 {companyInfo.name}. All rights reserved.
  </p>
  <p className="text-sm text-muted-foreground mt-2">
    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
  </p>
</footer>
```

**步骤 2**：创建隐私政策页面

创建 `client/src/pages/PrivacyPolicy.tsx`：

```typescript
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
          <p className="text-muted-foreground">
            We use Google Analytics to understand how visitors interact with our website. 
            This service collects information such as your IP address, browser type, 
            pages visited, and time spent on the site.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Data</h2>
          <p className="text-muted-foreground">
            The data collected helps us improve our website and services. 
            We do not sell or share your personal information with third parties.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="text-muted-foreground">
            You can opt out of Google Analytics tracking by installing the 
            <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline"> Google Analytics Opt-out Browser Add-on</a>.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about our privacy policy, please contact us at 
            <a href="mailto:contact@ict-consulting.sg" className="text-primary hover:underline"> contact@ict-consulting.sg</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
```

**步骤 3**：注册路由

在 `client/src/App.tsx` 中添加：

```typescript
import PrivacyPolicy from "./pages/PrivacyPolicy";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}
```

### 8.3 添加 Cookie 同意横幅（可选）

如果您的网站面向欧盟用户，建议添加 Cookie 同意横幅。

可以使用以下工具：
- **Cookiebot**：https://www.cookiebot.com/
- **OneTrust**：https://www.onetrust.com/
- **CookieYes**：https://www.cookieyes.com/

---

## 附录 A：Google Analytics 4 vs Universal Analytics

| 特性 | Universal Analytics (旧版) | Google Analytics 4 (新版) |
|------|---------------------------|---------------------------|
| **状态** | 2023年7月停止服务 | 当前版本 |
| **数据模型** | 基于会话 | 基于事件 |
| **跨平台跟踪** | 有限 | 强大（网站+应用） |
| **隐私保护** | 一般 | 更强 |
| **机器学习** | 有限 | 内置 AI 预测 |

**重要**：本指南使用的是 **Google Analytics 4**（最新版本）。

---

## 附录 B：常见问题

### Q1：为什么看不到数据？

**可能原因**：
1. 跟踪代码未正确添加
2. 浏览器安装了广告拦截插件
3. 数据需要 24-48 小时才能完全显示（实时报告除外）

**解决方法**：
- 检查 `client/index.html` 中的跟踪代码
- 使用无痕模式或其他浏览器测试
- 查看实时报告验证

### Q2：如何排除自己的访问？

**方法一**：使用 IP 地址过滤

**步骤 1**：在 Google Analytics 中，点击 **管理** → **数据流** → **配置标记设置**

**步骤 2**：点击 **显示更多** → **定义内部流量**

**步骤 3**：添加您的 IP 地址

**方法二**：安装浏览器插件

安装 **Google Analytics Opt-out Add-on**：
https://tools.google.com/dlpage/gaoptout

### Q3：数据保留多久？

**默认设置**：14 个月

**修改方法**：

**步骤 1**：点击 **管理** → **数据设置** → **数据保留**

**步骤 2**：选择保留期限（2 个月 / 14 个月 / 26 个月 / 38 个月 / 50 个月）

**步骤 3**：点击 **保存**

---

## 附录 C：推荐学习资源

| 资源 | 链接 |
|------|------|
| **Google Analytics 官方帮助中心** | https://support.google.com/analytics |
| **Google Analytics 学院（免费课程）** | https://analytics.google.com/analytics/academy/ |
| **Google Analytics 4 入门指南** | https://developers.google.com/analytics/devguides/collection/ga4 |

---

## 总结

完成本指南后，您将能够：

✅ 跟踪网站访问量和用户行为  
✅ 了解访客来源和地理位置  
✅ 分析哪些页面最受欢迎  
✅ 衡量营销活动的效果  
✅ 优化网站内容和用户体验

**下一步建议**：
1. 每周查看一次报告，了解网站表现
2. 设置转化目标，跟踪表单提交
3. 根据数据优化网站内容

---

**文档版本**：1.0  
**最后更新**：2026年1月24日  
**作者**：Manus AI

祝您使用愉快！如有任何问题，欢迎随时咨询。
