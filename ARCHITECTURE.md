# 海川众核官网 · 架构与部署说明（linyio.com）

## 1. 你问的：服务器 + 微信云托管对象存储 / MySQL 是否可行？

**可行。** 推荐采用「混合架构」：

| 组件 | 放哪里 | 说明 |
|---|---|---|
| 官网前端 / Node | `124.223.157.95`（Nginx + Next.js） | SEO、SSL、性能由你掌控 |
| 静态图片 / 案例图 | 微信云托管对象存储（COS）+ 建议绑 CDN | 桶：`7072-prod-...`，地域 `ap-shanghai` |
| 业务库（留资/后台） | 云托管 MySQL（CynosDB） | 外网：`sh-cynosdbmysql-grp-gscxxq7o.sql.tencentcdb.com:24154` |

### 为什么这样拆更好？

1. **官网 SEO** 需要稳定域名、可爬取 HTML、快响应；放在独立云服务器最直接。
2. **COS** 适合图片/PDF/案例素材，带宽与流量成本通常低于把大文件塞在应用服务器。
3. **MySQL** 仅在你需要「留言入库 / 后台 CMS / 订单线索」时启用；纯展示站可不接库。

### 必须注意

- 在 CynosDB **安全组 / 白名单** 放行服务器公网 IP：`124.223.157.95`。
- 账号密码只用环境变量（见 `.env.example`），**禁止写进仓库**。
- 你已在对话中暴露过数据库密码，**请尽快修改密码**。

---

## 2. 更好的方案（按阶段）

### 阶段 A（现在就能上线，本仓库默认）

- Next.js 静态/SSR 部署到 `124.223.157.95`
- DNS：`linyio.com` / `www` → A 记录到该 IP
- 服务器签发 SSL（Let’s Encrypt）
- 图片先放 `public/images`，后续迁 COS
- 联系表单可先 mailto / 企业微信，再接数据库

### 阶段 B（推荐增强）

- COS 绑定自定义域名：`img.linyio.com`（CNAME 到 COS/CDN）
- 开启 CDN 加速与 HTTPS
- 增加 `/api/leads` 写入 MySQL，后台简单管理线索

### 阶段 C（可选）

- 全站也迁到云托管容器：那时才需要在**微信云托管绑定官网自定义域名**
- 若继续用现有 VPS 跑官网，则**不必**把 `linyio.com` 绑到云托管

---

## 3. 要不要在微信云托管添加「自定义域名」和「对象存储安全域名」？

### 自定义域名（云托管）

| 场景 | 要不要加 |
|---|---|
| 官网跑在 `124.223.157.95` | **不用**把 `linyio.com` 加到云托管；在域名服务商解析到服务器即可 |
| 官网改成部署在云托管容器 | **要**，在云托管绑定 `linyio.com` + HTTPS |

### 对象存储 / 安全域名

| 场景 | 要做什么 |
|---|---|
| 仅官网展示图片 | 桶读权限或 CDN 公网可访问；配置 CORS；**建议**自定义域名 `img.linyio.com` |
| 微信小程序也要下载同一桶图片 | **要**在小程序后台配置 downloadFile 合法域名（COS/CDN 域名） |
| 「对象存储安全域名」狭义配置 | 官网本身不强制；小程序场景才是强需求 |

结论：

1. **现在**：官网域名解析到服务器；COS 建议绑 `img.linyio.com`（专业、好缓存）。
2. **云托管自定义域名**：官网不放云托管就先不加。
3. **安全/合法域名**：有小程序共用素材时再配。

---

## 4. SEO 架构（本站已落地）

- 首页矩阵导流 + 独立服务落地页（`/services/[slug]`）覆盖核心关键词
- `sitemap.xml` / `robots.txt`
- Organization + Service JSON-LD
- 每页独立 `title` / `description` / canonical
- 服务保障、流程图、案例页提升 E-E-A-T 与内容厚度

关键词示例：小程序开发、APP开发、AI解决方案、智能体开发、商城小程序、点餐系统、快递小程序、跑腿小程序、信息化、软硬件开发。

---

## 5. 服务器部署速记

```bash
# 构建
npm ci && npm run build

# 生产
npm run start
# 或用 PM2：pm2 start npm --name linyio -- start

# Nginx 反代 3000，并配置 SSL
```

DNS：

```
linyio.com     A      124.223.157.95
www.linyio.com A/CNAME 按你域名商规则
img.linyio.com CNAME  COS/CDN 域名（启用后）
```
