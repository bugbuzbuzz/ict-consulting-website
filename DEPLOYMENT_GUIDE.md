# ICT Consulting Website - 部署指南

本文档提供了将 ICT Consulting 网站部署到自有云服务器的完整指南。该网站基于 Node.js 全栈架构，使用 React 前端、Express 后端和 MySQL 数据库。

---

## 一、系统要求

在开始部署之前，请确保您的服务器满足以下最低配置要求：

| 组件 | 最低要求 | 推荐配置 |
|------|----------|----------|
| **操作系统** | Ubuntu 20.04 LTS | Ubuntu 22.04 LTS |
| **CPU** | 1 核 | 2 核+ |
| **内存** | 1 GB | 2 GB+ |
| **存储** | 10 GB | 20 GB+ SSD |
| **Node.js** | 18.x | 22.x LTS |
| **数据库** | MySQL 8.0 | MySQL 8.0 或 TiDB |

---

## 二、推荐云服务商

根据您的目标用户群体和预算，以下是推荐的云服务商：

| 服务商 | 适用场景 | 月费参考 | 优势 |
|--------|----------|----------|------|
| **阿里云 ECS** | 中国/亚太用户 | ¥50-200 | 国内访问速度快，中文支持好 |
| **腾讯云 CVM** | 中国/亚太用户 | ¥50-200 | 与微信生态集成好 |
| **AWS Lightsail** | 全球用户 | $5-20 | 简单易用，新加坡节点 |
| **DigitalOcean** | 全球用户 | $6-24 | 性价比高，开发者友好 |
| **Vultr** | 全球用户 | $6-24 | 新加坡节点，按小时计费 |

> **建议**：如果您的主要客户在新加坡和东南亚，推荐选择 AWS 新加坡区域或阿里云新加坡节点。

---

## 三、服务器初始化

### 3.1 创建服务器实例

以 Ubuntu 22.04 LTS 为例，在您选择的云服务商控制台创建一台新的虚拟机实例。创建完成后，通过 SSH 连接到服务器：

```bash
ssh root@your-server-ip
```

### 3.2 创建部署用户

出于安全考虑，不建议使用 root 用户运行应用。创建一个专用的部署用户：

```bash
# 创建用户
adduser deploy

# 赋予 sudo 权限
usermod -aG sudo deploy

# 切换到新用户
su - deploy
```

### 3.3 安装系统依赖

更新系统并安装必要的软件包：

```bash
# 更新系统
sudo apt update && sudo apt upgrade -y

# 安装基础工具
sudo apt install -y curl wget git build-essential nginx certbot python3-certbot-nginx
```

---

## 四、安装 Node.js

推荐使用 NodeSource 仓库安装 Node.js 22.x LTS 版本：

```bash
# 添加 NodeSource 仓库
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -

# 安装 Node.js
sudo apt install -y nodejs

# 验证安装
node --version  # 应显示 v22.x.x
npm --version   # 应显示 10.x.x

# 安装 pnpm 包管理器
sudo npm install -g pnpm
```

---

## 五、安装 MySQL 数据库

### 5.1 安装 MySQL Server

```bash
# 安装 MySQL 8.0
sudo apt install -y mysql-server

# 启动并设置开机自启
sudo systemctl start mysql
sudo systemctl enable mysql

# 运行安全配置向导
sudo mysql_secure_installation
```

在安全配置向导中，建议选择：
- 设置 root 密码（选择强密码）
- 移除匿名用户
- 禁止 root 远程登录
- 移除测试数据库
- 重新加载权限表

### 5.2 创建应用数据库和用户

```bash
# 登录 MySQL
sudo mysql -u root -p

# 在 MySQL 命令行中执行以下命令：
```

```sql
-- 创建数据库
CREATE DATABASE ict_consulting CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 创建专用用户
CREATE USER 'ict_app'@'localhost' IDENTIFIED BY 'your_secure_password_here';

-- 授予权限
GRANT ALL PRIVILEGES ON ict_consulting.* TO 'ict_app'@'localhost';

-- 刷新权限
FLUSH PRIVILEGES;

-- 退出
EXIT;
```

> **重要**：请将 `your_secure_password_here` 替换为一个强密码，并妥善保管。

---

## 六、部署应用代码

### 6.1 上传代码到服务器

您可以通过以下方式将代码上传到服务器：

**方式一：使用 Git（推荐）**

如果您已将代码推送到 GitHub/GitLab：

```bash
# 切换到部署用户
su - deploy

# 创建应用目录
mkdir -p /home/deploy/apps
cd /home/deploy/apps

# 克隆代码仓库
git clone https://github.com/your-username/ict-consulting-website.git
cd ict-consulting-website
```

**方式二：使用 SCP 上传**

从本地电脑上传代码包：

```bash
# 在本地电脑执行
scp -r ./ict-consulting-website deploy@your-server-ip:/home/deploy/apps/
```

### 6.2 安装项目依赖

```bash
cd /home/deploy/apps/ict-consulting-website

# 安装依赖
pnpm install

# 构建生产版本
pnpm build
```

### 6.3 配置环境变量

创建生产环境配置文件：

```bash
# 创建 .env 文件
nano .env
```

添加以下环境变量（根据实际情况修改）：

```env
# 数据库配置
DATABASE_URL="mysql://ict_app:your_secure_password_here@localhost:3306/ict_consulting"

# JWT 密钥（请生成一个随机字符串）
JWT_SECRET="your_random_jwt_secret_at_least_32_characters_long"

# 应用配置
NODE_ENV=production
PORT=3000

# 网站信息
VITE_APP_TITLE="ICT Consulting SG"
```

> **生成随机密钥**：可以使用以下命令生成安全的随机字符串：
> ```bash
> openssl rand -base64 32
> ```

### 6.4 初始化数据库

运行数据库迁移，创建所需的表结构：

```bash
pnpm db:push
```

---

## 七、配置进程管理器

使用 PM2 管理 Node.js 应用进程，确保应用在后台持续运行并在崩溃时自动重启。

### 7.1 安装 PM2

```bash
sudo npm install -g pm2
```

### 7.2 创建 PM2 配置文件

```bash
nano ecosystem.config.cjs
```

添加以下内容：

```javascript
module.exports = {
  apps: [{
    name: 'ict-consulting',
    script: 'dist/index.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: './logs/error.log',
    out_file: './logs/output.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
    max_memory_restart: '500M'
  }]
};
```

### 7.3 启动应用

```bash
# 创建日志目录
mkdir -p logs

# 启动应用
pm2 start ecosystem.config.cjs

# 保存 PM2 配置（开机自启）
pm2 save
pm2 startup
```

### 7.4 常用 PM2 命令

| 命令 | 说明 |
|------|------|
| `pm2 list` | 查看所有运行中的应用 |
| `pm2 logs` | 查看实时日志 |
| `pm2 restart ict-consulting` | 重启应用 |
| `pm2 stop ict-consulting` | 停止应用 |
| `pm2 monit` | 监控资源使用 |

---

## 八、配置 Nginx 反向代理

Nginx 将作为反向代理，处理 HTTPS 和静态资源缓存。

### 8.1 创建 Nginx 配置

```bash
sudo nano /etc/nginx/sites-available/ict-consulting
```

添加以下配置：

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # 重定向到 HTTPS（配置 SSL 后启用）
    # return 301 https://$server_name$request_uri;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        proxy_pass http://127.0.0.1:3000;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

### 8.2 启用站点配置

```bash
# 创建符号链接
sudo ln -s /etc/nginx/sites-available/ict-consulting /etc/nginx/sites-enabled/

# 测试配置语法
sudo nginx -t

# 重新加载 Nginx
sudo systemctl reload nginx
```

---

## 九、配置 SSL 证书（HTTPS）

使用 Let's Encrypt 免费 SSL 证书：

```bash
# 申请证书（将 your-domain.com 替换为您的域名）
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# 按提示完成验证
# 选择自动重定向 HTTP 到 HTTPS
```

证书会自动续期。可以通过以下命令测试续期：

```bash
sudo certbot renew --dry-run
```

---

## 十、配置防火墙

```bash
# 启用 UFW 防火墙
sudo ufw enable

# 允许 SSH
sudo ufw allow OpenSSH

# 允许 HTTP 和 HTTPS
sudo ufw allow 'Nginx Full'

# 查看状态
sudo ufw status
```

---

## 十一、日常维护

### 11.1 更新应用

当需要更新代码时：

```bash
cd /home/deploy/apps/ict-consulting-website

# 拉取最新代码
git pull origin main

# 安装新依赖
pnpm install

# 重新构建
pnpm build

# 运行数据库迁移（如有）
pnpm db:push

# 重启应用
pm2 restart ict-consulting
```

### 11.2 备份数据库

建议设置定时备份：

```bash
# 创建备份脚本
nano /home/deploy/backup.sh
```

```bash
#!/bin/bash
BACKUP_DIR="/home/deploy/backups"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR
mysqldump -u ict_app -p'your_password' ict_consulting > $BACKUP_DIR/ict_consulting_$DATE.sql
# 保留最近 7 天的备份
find $BACKUP_DIR -name "*.sql" -mtime +7 -delete
```

```bash
# 设置定时任务（每天凌晨 2 点备份）
chmod +x /home/deploy/backup.sh
crontab -e
# 添加：0 2 * * * /home/deploy/backup.sh
```

### 11.3 监控日志

```bash
# 查看应用日志
pm2 logs ict-consulting

# 查看 Nginx 访问日志
sudo tail -f /var/log/nginx/access.log

# 查看 Nginx 错误日志
sudo tail -f /var/log/nginx/error.log
```

---

## 十二、故障排查

| 问题 | 可能原因 | 解决方案 |
|------|----------|----------|
| 网站无法访问 | 防火墙阻止 | 检查 `sudo ufw status` |
| 502 Bad Gateway | 应用未运行 | 运行 `pm2 list` 检查状态 |
| 数据库连接失败 | 配置错误 | 检查 `.env` 中的 DATABASE_URL |
| HTTPS 证书错误 | 证书过期 | 运行 `sudo certbot renew` |

---

## 十三、安全建议

1. **定期更新系统**：每周运行 `sudo apt update && sudo apt upgrade`
2. **使用强密码**：数据库和 JWT 密钥使用至少 32 位随机字符
3. **限制 SSH 访问**：考虑使用密钥认证并禁用密码登录
4. **启用自动安全更新**：`sudo apt install unattended-upgrades`
5. **监控异常**：使用 `fail2ban` 防止暴力破解

---

## 附录：快速部署脚本

将以下脚本保存为 `deploy.sh`，可用于快速更新部署：

```bash
#!/bin/bash
set -e

echo "🚀 开始部署 ICT Consulting 网站..."

cd /home/deploy/apps/ict-consulting-website

echo "📥 拉取最新代码..."
git pull origin main

echo "📦 安装依赖..."
pnpm install

echo "🔨 构建项目..."
pnpm build

echo "🗄️ 更新数据库..."
pnpm db:push

echo "🔄 重启应用..."
pm2 restart ict-consulting

echo "✅ 部署完成！"
```

---

**文档版本**：1.0  
**最后更新**：2026年1月24日  
**作者**：Manus AI
