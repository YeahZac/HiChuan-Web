import type { Metadata } from "next";
import Link from "next/link";
import { guarantees } from "@/lib/site";

export const metadata: Metadata = {
  title: "服务保障与质量保障方案",
  description:
    "需求书面确认、里程碑验收、源码交付、上线护航、质量门禁与专属对接人，海川众核用机制保障交付质量。",
  alternates: { canonical: "/guarantee" },
};

export default function GuaranteePage() {
  return (
    <div className="section">
      <div className="container-page">
        <h1 className="display text-4xl">服务保障与质量方案</h1>
        <p className="mt-4 max-w-3xl leading-8 text-muted">
          参考有赞/凡科等成熟厂商强调的“稳定、售后、认证”表达，我们把保障写成可执行条款，而不是口号墙。
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((g) => (
            <article key={g.title} className="card">
              <h2 className="text-lg font-semibold">{g.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{g.desc}</p>
            </article>
          ))}
        </div>

        <section className="mt-12 overflow-hidden rounded-2xl border border-line bg-white">
          <div className="border-b border-line bg-paper px-6 py-4">
            <h2 className="text-xl font-semibold">质量保障方案（摘要）</h2>
          </div>
          <div className="grid md:grid-cols-2">
            {[
              ["需求质量", ["功能清单与优先级", "验收标准可测试", "边界与排除项明确"]],
              ["研发质量", ["关键路径优先交付", "接口契约与文档", "周迭代可演示"]],
              ["测试质量", ["功能/兼容/回归", "关键链路压测（按需）", "缺陷分级与关闭标准"]],
              ["上线质量", ["发布检查单", "回滚预案", "监控与值班窗口"]],
            ].map(([title, items]) => (
              <div key={title as string} className="border-b border-line p-6 md:border-r">
                <h3 className="font-semibold text-accent">{title as string}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  {(items as string[]).map((i) => (
                    <li key={i}>· {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            获取完整保障说明
          </Link>
          <Link href="/process" className="rounded-full border border-line px-5 py-3 text-sm font-semibold">
            对照交付流程
          </Link>
        </div>
      </div>
    </div>
  );
}
