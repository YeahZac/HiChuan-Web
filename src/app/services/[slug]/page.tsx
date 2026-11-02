import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.description,
    keywords: s.keywords,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: s.seoTitle,
      description: s.description,
      url: `${site.url}/services/${s.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.description,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      telephone: site.phone,
    },
    areaServed: "CN",
  };

  return (
    <div className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-page">
        <p className="text-sm text-accent">
          <Link href="/services">产品服务</Link> / {s.title}
        </p>
        <h1 className="display mt-3 max-w-4xl text-4xl leading-tight">{s.seoTitle}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{s.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {s.keywords.map((k) => (
            <span key={k} className="rounded-full bg-white px-3 py-1 text-xs text-muted border border-line">
              {k}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          <section className="card lg:col-span-1">
            <h2 className="text-lg font-semibold">常见痛点</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {s.painPoints.map((p) => (
                <li key={p}>· {p}</li>
              ))}
            </ul>
          </section>
          <section className="card lg:col-span-1">
            <h2 className="text-lg font-semibold">交付物</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {s.deliverables.map((p) => (
                <li key={p}>· {p}</li>
              ))}
            </ul>
          </section>
          <section className="card lg:col-span-1">
            <h2 className="text-lg font-semibold">本服务流程</h2>
            <ol className="mt-4 space-y-3 text-sm leading-7 text-muted">
              {s.process.map((p, i) => (
                <li key={p}>
                  <span className="font-semibold text-accent">{i + 1}.</span> {p}
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className="mt-10 rounded-2xl border border-line bg-white p-6 sm:p-8">
          <h2 className="text-xl font-semibold">为什么选择 {site.shortName}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
            我们不做“只会演示的概念稿”，而是按业务结果交付：范围书面确认、里程碑验收、源码与文档移交、上线护航。
            无论你在找「{s.keywords[0]}」还是更复杂的一体化方案，都可以先做免费评估。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              免费评估该需求
            </Link>
            <Link href="/guarantee" className="rounded-full border border-line px-5 py-3 text-sm font-semibold">
              查看服务保障
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
