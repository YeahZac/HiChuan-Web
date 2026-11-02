import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cases } from "@/lib/site";

export const metadata: Metadata = {
  title: "客户案例｜点餐系统、商城小程序、跑腿配送落地样本",
  description:
    "查看海川众核在餐饮点餐、私域商城、同城跑腿等场景的定制开发案例与结果指标。",
  alternates: { canonical: "/cases" },
};

export default function CasesPage() {
  return (
    <div className="section">
      <div className="container-page">
        <h1 className="display text-4xl">客户案例</h1>
        <p className="mt-4 max-w-3xl leading-8 text-muted">
          案例强调业务结果与可复用方法。正式上线后可替换为真实客户授权素材与数据。
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="overflow-hidden rounded-2xl border border-line bg-white">
              <div className="relative h-52">
                <Image src={c.image} alt={c.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs text-accent">{c.industry}</p>
                <h2 className="mt-1 text-xl font-semibold">{c.title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted">{c.result}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full bg-paper px-2.5 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <Link href="/contact" className="btn-primary mt-10">
          咨询类似方案
        </Link>
      </div>
    </div>
  );
}
