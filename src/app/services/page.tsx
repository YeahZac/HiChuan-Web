import type { Metadata } from "next";
import Link from "next/link";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "产品服务｜小程序/APP/AI/商城/点餐系统定制开发",
  description: `浏览${site.shortName}全部定制开发服务：小程序、APP、AI 方案、智能体、商城、点餐、快递跑腿与软硬件一体化。`,
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <div className="section">
      <div className="container-page">
        <h1 className="display text-4xl">产品与服务</h1>
        <p className="mt-4 max-w-3xl text-muted leading-8">
          每个服务均设独立 SEO 落地页，覆盖「小程序开发」「点餐系统」「智能体开发」等高频搜索意图，方便客户按需进入，也方便搜索引擎精准收录。
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card hover:border-accent/40">
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm leading-7 text-muted">{s.description}</p>
              <p className="mt-4 text-xs text-accent">关键词：{s.keywords.join("、")}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
