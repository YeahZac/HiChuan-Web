import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { processSteps } from "@/lib/site";

export const metadata: Metadata = {
  title: "交付流程｜需求评估到上线运维全流程图",
  description:
    "海川众核标准化六步交付：免费评估、方案报价、原型设计、研发联调、测试上线、运维迭代，进度可视、责任清晰。",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <div className="section">
      <div className="container-page">
        <h1 className="display text-4xl">交付流程图</h1>
        <p className="mt-4 max-w-3xl leading-8 text-muted">
          参考成熟数字化服务商的交付表达：用清晰步骤降低决策成本，让非技术决策者也能看懂“钱花在哪、何时能上线”。
        </p>

        <div className="relative mt-10 min-h-[280px] overflow-hidden rounded-2xl">
          <Image
            src="/images/process-team-delivery.jpg"
            alt="交付协作现场"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/45" />
          <p className="absolute bottom-5 left-5 text-sm text-white/90">评审 · 对齐 · 再开工</p>
        </div>

        <ol className="mt-10 space-y-4">
          {processSteps.map((p, idx) => (
            <li key={p.step} className="card grid gap-4 md:grid-cols-[120px_1fr_80px] md:items-center">
              <p className="text-3xl font-semibold text-accent">{p.step}</p>
              <div>
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted">{p.desc}</p>
              </div>
              <p className="text-sm text-muted">阶段 {idx + 1}/6</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl bg-ink p-8 text-white">
          <h2 className="text-2xl font-semibold">质量门禁如何嵌入流程</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              ["需求门禁", "范围、验收标准、非功能需求书面确认后进入设计"],
              ["开发门禁", "代码评审 + 联调清单，阻断带病进入测试"],
              ["上线门禁", "用例通过、回滚方案就绪、监控与值班到位"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="font-semibold text-teal-200">{t}</p>
                <p className="mt-2 text-sm leading-7 text-white/70">{d}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-primary mt-8">
            按该流程启动评估
          </Link>
        </div>
      </div>
    </div>
  );
}
