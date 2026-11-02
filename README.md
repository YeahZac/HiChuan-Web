# 海川众核科技官网（linyio.com）

Next.js 15 + TypeScript + Tailwind。面向 SEO 的企业定制开发官网。

## 本地运行

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000)。

## 生产构建

```bash
npm run build
npm run start
```

## 环境变量

复制 `.env.example` 为 `.env.local`，填入数据库与 COS 密钥。**不要提交真实密码。**

## 文档

见 [ARCHITECTURE.md](./ARCHITECTURE.md)（服务器 + 微信云托管可行性、域名与安全域名说明）。
