import Image from "next/image";
import Link from "next/link";
import { cases, guarantees, processSteps, services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-enterprise-office.jpg"
            alt="海川众核科技办公与交付现场"
            fill
            priority
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        </div>
        <div className="container-page relative grid min-h-[78vh] items-center gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm tracking-[0.2em] text-teal-200/90">LINYIO.COM · 深圳</p>
            <h1 className="display mt-4 text-4xl leading-tight sm:text-5xl lg:text-[3.4rem]">
              企业数字化定制开发
              <br />
              <span className="text-teal-200">从评估到上线，有人负责到底</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
              {site.shortName}提供 AI 整体方案、智能体、APP / 小程序、商城与点餐系统、快递跑腿及软硬件一体化交付。
              面向搜索可见、面向业务可落地。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                免费评估需求
              </Link>
              <Link href="/services" className="btn-ghost">
                查看全部服务
              </Link>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-center">
              {[
                ["9+", "核心交付能力"],
                ["6步", "标准化流程"],
                ["源码", "可移交交付"],
              ].map(([n, t]) => (
                <div key={t} className="rounded-xl border border-white/15 bg-white/5 px-3 py-4">
                  <p className="text-2xl font-semibold text-teal-200">{n}</p>
                  <p className="mt-1 text-xs text-white/65">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur">
            <p className="text-sm text-teal-100">热门搜索场景直达</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                ["小程序开发", "miniprogram"],
                ["APP开发", "app"],
                ["AI解决方案", "ai-solution"],
                ["智能体开发", "agent"],
                ["商城小程序", "mall"],
                ["点餐系统", "ordering"],
                ["快递小程序", "express-errand"],
                ["跑腿小程序", "express-errand"],
                ["信息化建设", "informatization"],
                ["软硬件开发", "hardware-software"],
              ].map(([k, slug]) => (
                <Link
                  key={k}
                  href={`/services/${slug}`}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/85 hover:bg-white/15"
                >
                  {k}
                </Link>
              ))}
            </div>
            <p className="mt-6 text-xs leading-6 text-white/55">
              每个关键词对应独立落地页，便于搜索引擎收录与用户精准到达。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-accent">产品矩阵</p>
            <h2 className="display mt-2 text-3xl text-ink">覆盖从获客到交易到履约的开发需求</h2>
            <p className="mt-3 text-muted">
              对标成熟服务商的信息架构：首页矩阵导流 + 独立服务页深挖 SEO，内容充实、路径清晰。
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card group transition hover:-translate-y-0.5 hover:shadow-md">
                <h3 className="text-lg font-semibold text-ink group-hover:text-accent">{s.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{s.description}</p>
                <p className="mt-4 text-xs text-accent">了解方案 →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-accent">交付流程</p>
              <h2 className="display mt-2 text-3xl">六步标准化，进度看得见</h2>
            </div>
            <Link href="/process" className="text-sm font-medium text-accent">
              查看完整流程图 →
            </Link>
          </div>
          <div className="flow-grid mt-10">
            {processSteps.map((p, i) => (
              <div key={p.step} className="relative rounded-2xl border border-line bg-paper p-4">
                <p className="text-xs font-semibold tracking-widest text-accent">{p.step}</p>
                <h3 className="mt-2 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{p.desc}</p>
                {i < processSteps.length - 1 && (
                  <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-accent lg:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl">
            <Image
              src="/images/process-team-delivery.jpg"
              alt="项目交付与方案评审现场"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-accent">质量与服务保障</p>
            <h2 className="display mt-2 text-3xl">专业感不只靠口号，靠机制</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {guarantees.map((g) => (
                <div key={g.title} className="card">
                  <h3 className="font-semibold">{g.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{g.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/guarantee" className="btn-primary mt-6">
              查看质量保障方案
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-accent">客户案例</p>
              <h2 className="display mt-2 text-3xl">结果导向的落地样本</h2>
            </div>
            <Link href="/cases" className="text-sm font-medium text-accent">
              更多案例 →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {cases.map((c) => (
              <article key={c.title} className="overflow-hidden rounded-2xl border border-line bg-paper">
                <div className="relative h-48">
                  <Image src={c.image} alt={c.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs text-accent">{c.industry}</p>
                  <h3 className="mt-1 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted">{c.result}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white px-2.5 py-1 text-xs text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page overflow-hidden rounded-3xl bg-ink px-6 py-12 text-white sm:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="display text-3xl sm:text-4xl">先评估，再开工，不花冤枉钱</h2>
              <p className="mt-4 max-w-xl text-white/70">
                告诉我们业务目标与现状，我们会给出范围建议、工期与预算区间。也可直接加微信 {site.wechat} 或拨打 {site.phone}。
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  预约免费评估
                </Link>
                <a href={`tel:${site.phone}`} className="btn-ghost">
                  电话咨询
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-sm leading-7 text-white/75">
              <p>公司地址：{site.address}</p>
              <p>邮箱：{site.email}</p>
              <p>公众号：{site.mpName}</p>
              <p className="mt-3 text-xs text-white/50">工作日通常 2 小时内响应</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
